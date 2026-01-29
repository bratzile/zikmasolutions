# 📄 TEMPLATE ZA SEO STRANICE USLUGA

Ovaj dokument definiše strukturu i sadržaj koji je potreban za kreiranje SEO optimizovanih stranica usluga.

---

## 📋 OSNOVNE INFORMACIJE

```yaml
url: /kategorija/naziv-usluge
meta_title: "Glavni Naslov | Podnaslov - Zikma Solutions"
meta_description: "Kratak opis 150-160 karaktera sa ključnim rečima i pozivom na akciju"
keywords: ["ključna reč 1", "ključna reč 2", "ključna reč 3"]
h1: "Glavni Naslov Stranice Sa Ključnom Rečju"
subtitle: "Podnaslov koji dodatno objašnjava uslugu i koristi ključne reči prirodno"
```

---

## 🎯 SEKCIJA 1: HERO (Automatski se generiše)

**Šta automatski dobijate:**
- Breadcrumb navigacija (SEO važno)
- H1 naslov
- Subtitle/Podnaslov
- 2 CTA dugmeta (Besplatna konsultacija + Portfolio)
- Trust indicators (200+ projekata, 10+ godina, itd.)

**Šta treba da dostavite:**
- H1 naslov (fokusna ključna reč)
- Subtitle tekst (150-200 karaktera)

---

## 📦 SEKCIJA 2: ŠTA NUDIMO (Features)

**Broj stavki:** 6 (može biti 3, 6 ili 9)

**Struktura svake stavke:**

```yaml
- title: "Naslov Feature-a"
  icon: "Smartphone" # Opciono - koristimo Lucide ikone
  desc: "Opis 200-300 karaktera. Objašnjava šta je ova funkcionalnost, zašto je važna i koje koristi donosi. Prirodno koristi ključne reči."
```

**Primer:**

```yaml
features:
  - title: "Responzivni Dizajn"
    icon: "Smartphone"
    desc: "Savršen prikaz na svim uređajima - desktop računarima, tabletima i mobilnim telefonima. Mobile-first pristup obezbeđuje da vaš sajt izgleda i funkcioniše besprekorno bez obzira na veličinu ekrana. Preko 60% korisnika dolazi sa mobilnih uređaja, zato je responzivnost ključna za uspeh vašeg web sajta."
    
  - title: "SEO Optimizacija"
    icon: "TrendingUp"
    desc: "Ugrađena SEO optimizacija koja pomaže vašem sajtu da rangira bolje na Google pretraživaču. Implementiramo tehnički SEO, optimizujemo meta tagove, strukturirane podatke i brzinu učitavanja stranica. Svaki sajt pravimo sa fokusom na vidljivost u Google pretrazi kako bi privukli više organskog saobraćaja i potencijalnih klijenata."
```

**Dostupne ikone:**
Palette, Smartphone, TrendingUp, Zap, Shield, Target, Globe, Code, Users, Award, Layers, Search, BarChart, CheckCircle, Sparkles

---

## 💎 SEKCIJA 3: ZAŠTO ZIKMA SOLUTIONS (Benefits)

**Broj stavki:** 4 (mogu biti 3 ili 4)

**Struktura svake stavke:**

```yaml
- title: "Naslov Benefita"
  icon: "Award"
  desc: "Detaljan opis 300-400 karaktera. Objašnjava prednost rada sa nama, naše iskustvo, pristup ili metodologiju. Treba da gradi poverenje i autoritativnost. Koristi prirodno ključne reči i pruža konkretne informacije."
```

**Primer:**

```yaml
benefits:
  - title: "Iskustvo i Stručnost"
    icon: "Award"
    desc: "Više od decenije rada u industriji web developmenta donelo nam je bogato iskustvo u izradi kompleksnih digitalnih rešenja. Realizovali smo preko 200 projekata različite kompleksnosti - od jednostavnih prezentacionih sajtova do složenih enterprise platformi. Naš tim čine sertifikovani stručnjaci koji kontinuirano prate najnovije trendove i tehnologije u svetu web developmenta. Svaki projekat pristupamo sa profesionalizmom i posvećenošću vašem uspehu."
```

**Dostupne ikone:**
Award, Users, Code, Headphones, Target, Shield, TrendingUp

---

## 🔄 SEKCIJA 4: PROCES RADA

**Broj koraka:** 5 (može biti 3-6 koraka)

**VAŽNO:** Bez navođenja trajanja ili vremenskih okvira!

**Struktura svakog koraka:**

```yaml
- step: "01" # Broj se automatski generiše
  title: "Naziv Faze"
  desc: "Detaljan opis faze 400-600 karaktera. Objašnjava šta se dešava u ovoj fazi, koje aktivnosti preduzimamo, kako izgleda komunikacija sa klijentom, koji su deliverables i kako ova faza doprinosi konačnom rezultatu. Prirodno koristiti ključne reči relevantne za uslugu."
```

**Primer:**

```yaml
process:
  - step: "01"
    title: "Discovery & Analiza"
    desc: "U prvoj fazi detaljno analiziramo vaše poslovne potrebe, ciljeve i ciljnu grupu. Organizujemo workshop sesije sa vašim timom kako bismo u potpunosti razumeli vašu viziju i specifične zahteve projekta. Analiziramo vašu konkurenciju, identifikujemo ključne funkcionalnosti koje vaš sajt treba da ima i definišemo strategiju. Kreiramo sitemap koji mapira strukturu sajta, wireframe-ove koji prikazuju osnovu izgled stranica, i definišemo tehnološki stack koji najbolje odgovara vašim poslovnim potrebama i budućim planovima rasta."
```

---

## 🛠️ SEKCIJA 5: TEHNOLOGIJE

**Struktura:**

```yaml
technologies:
  - name: "React"
    logo: "⚛️"
  - name: "Node.js"
    logo: "🟢"
```

**Opcioni dodatni tekst:**
Dostaviti jedan paragraf (300-400 karaktera) koji objašnjava zašto koristimo ove tehnologije.

**Primer:**
```
Svaka tehnologija je pažljivo odabrana na osnovu potreba projekta. React i Next.js koristimo za moderna SPA rešenja sa izuzetnim performansama. WordPress je naš izbor za sajtove koji zahtevaju moćan CMS sistem. Node.js i moderne baze podataka omogućavaju kreiranje skalabilnih aplikacija koje mogu rasti sa vašim biznisom.
```

---

## ❓ SEKCIJA 6: FAQ (Često Postavljana Pitanja)

**Broj pitanja:** 5-7 pitanja

**VAŽNO:** Bez navođenja cena, konkretnih iznosa ili vremenskih okvira!

**Struktura svakog pitanja:**

```yaml
- question: "Pitanje koje klijenti često postavljaju?"
  answer: "Detaljan odgovor 400-600+ karaktera. Odgovor treba biti informativan, koristan i treba prirodno da koristi ključne reči. Ne navoditi konkretne cene ili trajanje. Fokusirati se na faktore koji utiču, pristup, vrednost koju pružamo. Može imati više paragrafa ako je potrebno za potpun odgovor."
```

**Primer:**

```yaml
faqs:
  - question: "Koliko traje izrada profesionalnog web sajta?"
    answer: "Vreme potrebno za izradu web sajta zavisi od njegove kompleksnosti i obima funkcionalnosti. Prezentacioni sajt sa osnovnim informacijama o vašoj kompaniji može biti završen relativno brzo, dok kompleksniji korporativni sajtovi sa custom funkcionalnostima, multi-jezičnom podrškom i integracijom sa drugim sistemima zahtevaju više vremena. Faktori koji utiču na trajanje uključuju broj stranica, dizajnerske zahteve, custom funkcionalnosti, integracije sa eksternim sistemima i broj revizija. Koristimo agile metodologiju što omogućava da vidite napredak tokom čitavog procesa i dajete feedback u redovnim intervalima."
    
  - question: "Koja je cena izrade web sajta?"
    answer: "Cena izrade web sajta zavisi od mnogo faktora i svaki projekat je jedinstven. Osnovni prezentacioni sajtovi sa nekoliko stranica i jednostavnim dizajnom imaju jednu cenu, dok kompleksni korporativni sajtovi sa naprednim funkcionalnostima, custom dizajnom, CMS sistemom i integracijama imaju potpuno drugu. Faktori koji utiču na cenu uključuju dizajn (template vs potpuno custom), broj stranica i kompleksnost strukture, funkcionalnosti (kontakt forme, newsletter, blog, galerije), multi-jezična podrška, CRM i ERP integracije, custom backend razvoj i hosting zahtevi. Kontaktirajte nas za besplatnu procenu - nakon što razumemo vaše potrebe možemo dati preciznu ponudu prilagođenu vašem budžetu."
```

**Tipična FAQ pitanja:**
1. Koliko traje izrada? (bez konkretnih vremenskih okvira)
2. Koja je cena? (bez konkretnih iznosa)
3. Da li nudite hosting/održavanje?
4. Koje tehnologije koristite?
5. Da li je SEO uključen?
6. Šta dobijam nakon završetka?
7. Kako izgleda proces komunikacije?

---

## 📞 SEKCIJA 7: CTA (Call To Action)

**Automatski generiše:**
- Pozivna poruka
- Zeleni gradient background
- 2 CTA dugmeta (Kontakt + Telefon)

**Opciono možete dostaviti:**
```yaml
cta_heading: "Custom Naslov CTA Sekcije"
cta_text: "Custom tekst koji poziva na akciju (200-300 karaktera)"
```

Ako ne dostavite, koristi se default tekst.

---

## 📝 FORMAT ZA DOSTAVLJANJE SADRŽAJA

Kada imate spremne tekstove za novu stranicu, dostavite ih u ovom formatu:

```yaml
# STRANICA: Naziv Usluge

## OSNOVNE INFO
url: /kategorija/naziv
meta_title: "Meta Title"
meta_description: "Meta description"
keywords: ["keyword1", "keyword2", "keyword3"]
h1: "H1 Naslov"
subtitle: "Subtitle tekst"

## ŠTA NUDIMO (6 stavki)
features:
  - title: "Naslov 1"
    icon: "Smartphone"
    desc: "Opis 200-300 karaktera..."
    
  - title: "Naslov 2"
    icon: "TrendingUp"
    desc: "Opis 200-300 karaktera..."
  
  # ... ostale 4 stavke

## ZAŠTO MI (4 stavke)
benefits:
  - title: "Benefit 1"
    icon: "Award"
    desc: "Opis 300-400 karaktera..."
    
  - title: "Benefit 2"
    icon: "Users"
    desc: "Opis 300-400 karaktera..."
  
  # ... ostale 2 stavke

## PROCES RADA (5 koraka)
process:
  - title: "Faza 1"
    desc: "Opis 400-600 karaktera..."
    
  - title: "Faza 2"
    desc: "Opis 400-600 karaktera..."
  
  # ... ostali 3 koraka

## TEHNOLOGIJE
technologies:
  - name: "React"
    logo: "⚛️"
  # ... ostale tehnologije

tech_description: "Opcioni paragraf 300-400 karaktera koji objašnjava tehnologije..."

## FAQ (5-7 pitanja)
faqs:
  - question: "Pitanje 1?"
    answer: "Odgovor 400-600+ karaktera..."
    
  - question: "Pitanje 2?"
    answer: "Odgovor 400-600+ karaktera..."
  
  # ... ostala pitanja
```

---

## ✅ CHECKLIST PRE SLANJA

- [ ] Svi tekstovi su između 300-600+ reči po sekciji
- [ ] Prirodno korišćenje ključnih reči (ne keyword stuffing)
- [ ] Nema konkretnih cena ili iznosa
- [ ] Nema konkretnih vremenskih okvira (npr. "3-4 nedelje")
- [ ] FAQ odgovori su detaljni i korisni
- [ ] Svi opisi su informativni, ne prodajni
- [ ] Tekst je čitljiv i gramatički ispravan
- [ ] H1 sadrži fokusnu ključnu reč
- [ ] Meta description ima poziv na akciju

---

## 🎯 SEO NAPOMENE

**Ključne reči:**
- Fokusna ključna reč u H1 (1x)
- Fokusna ključna reč 2-3x u prvom paragrafu
- Sekundarne ključne reči prirodno raspoređene kroz tekst
- LSI ključne reči (semantički povezane)

**Dužina sadržaja:**
- Feature opisi: 200-300 karaktera
- Benefit opisi: 300-400 karaktera
- Proces koraci: 400-600 karaktera
- FAQ odgovori: 400-600+ karaktera
- Ukupno na stranici: 3,000-5,000+ reči

**Stil pisanja:**
- Informativno, ne prodajno
- Treće lice ("Nudimo", "Koristimo") ili prvo lice množine
- Konkretno i specifično
- Izbegavati superlative i preterivanja
- Fokus na vrednost za klijenta

---

## 📞 KONTAKT ZA PITANJA

Ako imate pitanja o formatu ili strukturi, kontaktirajte development tim.

**Napomena:** Ovaj template je optimizovan za Google SEO standarde 2025 sa fokusom na E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).
