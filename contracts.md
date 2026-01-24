# Backend Integration Contracts - Zikma Solutions

## 📋 PREGLED

Ovaj dokument definiše API ugovore i plan za integraciju backend-a sa frontend-om.
Frontend je već kreiran sa mock podacima u `mockData.js` fajlu.

---

## 🗂️ TRENUTNO MOCK PODACI (Frontend)

### Lokacija: `/app/frontend/src/mockData.js`

Mock podaci uključuju:
- **services** - Lista svih usluga (8 usluga)
- **portfolioProjects** - Portfolio projekti (4 projekta)
- **blogPosts** - Blog članci (6 članaka)
- **testimonials** - Testimonijali klijenata (3 testimonijala)
- **faqs** - Često postavljana pitanja (5 FAQs)
- **stats** - Statistika kompanije (4 statistike)

---

## 🎯 PLAN BACKEND INTEGRACIJE

### FAZA 1: CORE FUNKCIONALNOSTI

#### 1. KONTAKT FORMA
**Prioritet:** VISOK  
**Status:** Mock  
**Potrebno:**
- Backend endpoint za slanje email-a
- Validacija podataka
- Rate limiting (spam protection)
- Email notifikacije adminu

**API Endpoint:**
```
POST /api/contact
Request Body: {
  name: string (required),
  email: string (required),
  phone: string (optional),
  service: string (optional),
  message: string (required)
}

Response:
Success (200): { success: true, message: "Poruka poslata" }
Error (400): { success: false, error: "Validation error message" }
Error (500): { success: false, error: "Server error" }
```

**Frontend Integracija:**
- Fajl: `/app/frontend/src/pages/Contact.jsx`
- Trenutno: Mock setTimeout koji samo prikazuje toast
- Potrebno: Dodati axios poziv ka `/api/contact`

---

#### 2. BLOG SISTEM
**Prioritet:** SREDNJI  
**Status:** Mock  
**Potrebno:**
- MongoDB Collection: `blog_posts`
- CRUD operacije za blog
- Admin panel za kreiranje članaka (kasnije)
- Image upload za featured slike

**MongoDB Model:**
```javascript
{
  _id: ObjectId,
  title: String,
  slug: String (unique, indexed),
  excerpt: String,
  content: String (HTML),
  category: String,
  author: String,
  date: Date,
  image: String (URL),
  readTime: String,
  featured: Boolean,
  published: Boolean,
  keywords: [String],
  metaTitle: String,
  metaDescription: String,
  createdAt: Date,
  updatedAt: Date
}
```

**API Endpoints:**
```
GET /api/blog - Lista svih objavljenih članaka
  Query params: ?category=SEO&featured=true&limit=10

GET /api/blog/:slug - Pojedinačan članak po slug-u

POST /api/blog - Kreiranje novog članka (Admin)
  Headers: Authorization: Bearer <token>

PUT /api/blog/:slug - Update članka (Admin)

DELETE /api/blog/:slug - Brisanje članka (Admin)
```

**Frontend Integracija:**
- Fajlovi: `/app/frontend/src/pages/Blog.jsx`, `/app/frontend/src/pages/BlogPost.jsx`
- Trenutno: Koristi mock iz `mockData.js`
- Potrebno: Axios pozivi ka `/api/blog`

---

#### 3. PORTFOLIO SISTEM
**Prioritet:** SREDNJI  
**Status:** Mock  
**Potrebno:**
- MongoDB Collection: `portfolio_projects`
- Admin panel za dodavanje projekata (kasnije)

**MongoDB Model:**
```javascript
{
  _id: ObjectId,
  title: String,
  slug: String (unique, indexed),
  client: String,
  category: String,
  description: String,
  image: String (URL),
  technologies: [String],
  results: String,
  year: String,
  featured: Boolean,
  published: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

**API Endpoints:**
```
GET /api/portfolio - Lista svih projekata
  Query params: ?category=E-commerce&featured=true

GET /api/portfolio/:slug - Pojedinačan projekat

POST /api/portfolio - Kreiranje projekta (Admin)

PUT /api/portfolio/:slug - Update projekta (Admin)

DELETE /api/portfolio/:slug - Brisanje projekta (Admin)
```

**Frontend Integracija:**
- Fajlovi: `/app/frontend/src/pages/Portfolio.jsx`, `/app/frontend/src/pages/PortfolioDetail.jsx`
- Trenutno: Koristi mock iz `mockData.js`
- Potrebno: Axios pozivi ka `/api/portfolio`

---

### FAZA 2: DODATNE FUNKCIONALNOSTI (KASNIJE)

#### 4. NEWSLETTER SUBSCRIPTION
**Prioritet:** NIZAK  
**Status:** Nije implementirano  

**MongoDB Model:**
```javascript
{
  _id: ObjectId,
  email: String (unique),
  subscribed: Boolean,
  subscribedAt: Date,
  unsubscribedAt: Date
}
```

**API Endpoints:**
```
POST /api/newsletter/subscribe
Request Body: { email: string }

POST /api/newsletter/unsubscribe
Request Body: { email: string }
```

---

#### 5. GOOGLE ANALYTICS INTEGRACIJA
**Prioritet:** SREDNJI  
**Status:** Pripremljeno u frontend-u  

**Potrebno:**
- Dodati GA tracking ID u `.env`
- Implementirati server-side tracking (opciono)
- Google Tag Manager (GTM) setup

**Environment Variable:**
```
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Frontend:** Već postoji useEffect koji poziva `window.gtag` u `Home.jsx`

---

#### 6. SEO META TAGS DYNAMIC RENDERING
**Prioritet:** VISOK  
**Status:** Treba implementirati  

**Potrebno:**
- React Helmet ili Next.js Head za dynamic meta tags
- Schema.org structured data
- OpenGraph i Twitter Cards

**Primer za Blog post:**
```javascript
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>{post.metaTitle}</title>
  <meta name="description" content={post.metaDescription} />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.excerpt} />
  <meta property="og:image" content={post.image} />
  <meta property="og:type" content="article" />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "author": post.author,
      "datePublished": post.date
    })}
  </script>
</Helmet>
```

---

## 🔐 AUTENTIFIKACIJA (ADMIN PANEL - OPCIONO)

Za admin funkcionalnosti (kreiranje blog, portfolio):

**Opcija 1:** Jednostavna JWT autentifikacija
```
POST /api/auth/login
Request: { email, password }
Response: { token, user }

GET /api/auth/me
Headers: Authorization: Bearer <token>
```

**Opcija 2:** Koristiti gotovo rešenje (Auth0, Firebase Auth)

---

## 📧 EMAIL SERVIS

Za kontakt formu i notifikacije:

**Opcija 1:** SendGrid
```python
# backend/services/email_service.py
import sendgrid
from sendgrid.helpers.mail import Mail

def send_contact_email(data):
    message = Mail(
        from_email='info@zikmasolutions.rs',
        to_emails='admin@zikmasolutions.rs',
        subject=f'Nova poruka: {data["name"]}',
        html_content=f'<p>{data["message"]}</p>'
    )
    sg = sendgrid.SendGridAPIClient(api_key=os.environ.get('SENDGRID_API_KEY'))
    response = sg.send(message)
    return response.status_code
```

**Opcija 2:** SMTP (Gmail, Outlook)

---

## 🗄️ MONGODB KOLEKCIJE

### Trenutno Postojeće:
- `status_checks` (test kolekcija)

### Potrebno Kreirati:
1. `contact_submissions` - Kontakt forme
2. `blog_posts` - Blog članci
3. `portfolio_projects` - Portfolio projekti
4. `newsletter_subscribers` - Newsletter (opciono)
5. `users` - Admin korisnici (ako treba admin panel)

---

## 🔄 INTEGRACIJA - PLAN IMPLEMENTACIJE

### KORAK 1: Email Servis Setup
1. Registrovati SendGrid ili podesiti SMTP
2. Dodati API key u `.env`
3. Testirati slanje email-a

### KORAK 2: Kontakt Forma Backend
1. Kreirati `/api/contact` endpoint
2. Dodati validaciju (pydantic)
3. Implementirati email slanje
4. Dodati MongoDB zapis
5. Frontend integracija

### KORAK 3: Blog Backend (Opciono odmah)
1. Kreirati blog model
2. Seedovati bazu sa mock podacima
3. Implementirati CRUD endpointe
4. Frontend integracija

### KORAK 4: Portfolio Backend (Opciono odmah)
1. Kreirati portfolio model
2. Seedovati bazu sa mock podacima
3. Implementirati CRUD endpointe
4. Frontend integracija

### KORAK 5: SEO Optimizacije
1. Dodati react-helmet-async
2. Implementirati dynamic meta tags
3. Schema.org structured data
4. Sitemap.xml generator

---

## 🧪 TESTIRANJE

### Backend Tests:
- Contact form validation
- Email delivery
- API response times
- Rate limiting

### Frontend Tests:
- Form submission
- Error handling
- Loading states
- Success messages

---

## 📦 DEPLOYMENT PRIPREME

### Environment Variables (.env):
```
# Backend
MONGO_URL=<existing>
DB_NAME=zikma_solutions
SENDGRID_API_KEY=<your_key>
JWT_SECRET=<random_secret>
ADMIN_EMAIL=admin@zikmasolutions.rs

# Frontend
REACT_APP_BACKEND_URL=<existing>
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Production Checklist:
- [ ] SSL certifikat
- [ ] Domain DNS setup
- [ ] MongoDB backup strategy
- [ ] Error logging (Sentry?)
- [ ] Performance monitoring
- [ ] CDN za slike (opciono)

---

## 📊 PRIORITIZACIJA

**MUST HAVE (Odmah):**
1. ✅ Frontend sa mock podacima - **GOTOVO**
2. ⏳ Kontakt forma sa emailom - **SLEDEĆE**
3. ⏳ Google Analytics setup

**NICE TO HAVE (Uskoro):**
1. Blog backend sa CMS
2. Portfolio backend sa CMS
3. Newsletter subscription
4. Admin panel

**KASNIJE:**
1. A/B testing
2. Live chat
3. Multi-jezik (EN)
4. Advanced analytics

---

**Dokument kreiran:** 2025-01-24  
**Verzija:** 1.0  
**Status:** Ready za backend development
