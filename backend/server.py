from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact form model
class ContactForm(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    service: Optional[str] = None
    message: str

class ContactResponse(BaseModel):
    success: bool
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(form: ContactForm):
    """Handle contact form submission and send email notification"""
    try:
        # Save to database
        contact_doc = {
            "id": str(uuid.uuid4()),
            "name": form.name,
            "email": form.email,
            "phone": form.phone,
            "service": form.service,
            "message": form.message,
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "status": "new"
        }
        await db.contact_submissions.insert_one(contact_doc)
        
        # Send email notification
        try:
            send_contact_email(form)
        except Exception as email_error:
            logger.error(f"Failed to send email notification: {email_error}")
            # Continue even if email fails - data is saved to DB
        
        return ContactResponse(success=True, message="Poruka je uspešno poslata!")
    except Exception as e:
        logger.error(f"Contact form submission error: {e}")
        return ContactResponse(success=False, message="Došlo je do greške. Molimo pokušajte ponovo.")

def send_contact_email(form: ContactForm):
    """Send email notification for new contact form submission"""
    recipient_email = "office@zikmasolutions.rs"
    
    # Create email content
    subject = f"Nova poruka sa sajta - {form.name}"
    
    html_body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #28A745;">Nova poruka sa kontakt forme</h2>
        <hr style="border: 1px solid #28A745;">
        <p><strong>Ime i prezime:</strong> {form.name}</p>
        <p><strong>Email:</strong> {form.email}</p>
        <p><strong>Telefon:</strong> {form.phone or 'Nije uneto'}</p>
        <p><strong>Usluga:</strong> {form.service or 'Nije izabrana'}</p>
        <hr>
        <h3>Poruka:</h3>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">{form.message}</p>
        <hr style="border: 1px solid #28A745;">
        <p style="color: #666; font-size: 12px;">Ova poruka je automatski generisana sa zikmasolutions.rs</p>
    </body>
    </html>
    """
    
    text_body = f"""
    Nova poruka sa kontakt forme
    
    Ime i prezime: {form.name}
    Email: {form.email}
    Telefon: {form.phone or 'Nije uneto'}
    Usluga: {form.service or 'Nije izabrana'}
    
    Poruka:
    {form.message}
    
    ---
    Ova poruka je automatski generisana sa zikmasolutions.rs
    """
    
    # Create message
    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = os.environ.get('SMTP_FROM', 'noreply@zikmasolutions.rs')
    msg['To'] = recipient_email
    
    part1 = MIMEText(text_body, 'plain')
    part2 = MIMEText(html_body, 'html')
    msg.attach(part1)
    msg.attach(part2)
    
    # Send email via SMTP
    smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
    smtp_port = int(os.environ.get('SMTP_PORT', 465))
    smtp_user = os.environ.get('SMTP_USER', '')
    smtp_pass = os.environ.get('SMTP_PASS', '')
    
    if smtp_user and smtp_pass:
        # Use SMTP_SSL for port 465 (SSL), SMTP with starttls for port 587
        if smtp_port == 465:
            with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
                server.login(smtp_user, smtp_pass)
                server.sendmail(msg['From'], [recipient_email], msg.as_string())
        else:
            with smtplib.SMTP(smtp_host, smtp_port) as server:
                server.starttls()
                server.login(smtp_user, smtp_pass)
                server.sendmail(msg['From'], [recipient_email], msg.as_string())
        logger.info(f"Contact email sent successfully to {recipient_email}")
    else:
        logger.warning("SMTP credentials not configured - email not sent")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()