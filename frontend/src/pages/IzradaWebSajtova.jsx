import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Smartphone, TrendingUp, Zap, Shield, Palette, Users, Headphones, Award, Target, Globe, Sparkles, Layers, Search, BarChart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';

const IzradaWebSajtova = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Palette className="text-white" size={24} />,
      title: 'Custom Dizajn',
      desc: 'Jedinstveni vizuelni identitet prilagođen vašem brendu i poslovnim ciljevima. Kreiramo moderne, estetski privlačne dizajne koji odražavaju vrednosti vaše kompanije i privlače vašu ciljnu publiku. Svaki element dizajna je pažljivo osmišljen da pruži optimalno korisničko iskustvo.'
    },
    {
      icon: <Smartphone className="text-white" size={24} />,
      title: 'Responzivnost',
      desc: 'Savršen prikaz na svim uređajima - desktop računarima, tabletima i mobilnim telefonima. Mobile-first pristup obezbeđuje da vaš sajt izgleda i funkcioniše besprekorno bez obzira na veličinu ekrana. Preko 60% korisnika dolazi sa mobilnih uređaja, zato je responzivnost ključna.'
    },
    {
      icon: <TrendingUp className="text-white" size={24} />,
      title: 'SEO Optimizacija',
      desc: 'Ugrađena SEO optimizacija koja pomaže vašem sajtu da rangira bolje na pretraživačima. Implementiramo tehnički SEO, optimizujemo meta tagove, strukturirane podatke i brzinu učitavanja. Svaki sajt pravimo sa fokusom na vidljivost u Google pretrazi kako bi privukli više organskog saobraćaja.'
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'Brze Performanse',
      desc: 'Optimizovan kod za maksimalnu brzinu učitavanja stranica. Implementiramo lazy loading, CDN integraciju, kompresiju slika i savremene tehnike optimizacije. Brzi sajtovi zadržavaju korisnike i bolje rangiraju na pretraživačima. Svaki sajt testiramo da postiže vrhunske performanse.'
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: 'Sigurnost',
      desc: 'SSL sertifikati, redovni backup-ovi i zaštita od napada su standard u svakom našem projektu. GDPR compliant rešenja koja štite privatnost korisnika. Implementiramo sve najnovije sigurnosne mere kako bi vaši podaci i podaci vaših klijenata bili maksimalno zaštićeni.'
    },
    {
      icon: <Target className="text-white" size={24} />,
      title: 'Skalabilnost',
      desc: 'Arhitektura spremna za rast i buduće proširenje funkcionalnosti. Modularni pristup koji omogućava laku nadgradnju i održavanje. Kako vaš biznis raste, vaš sajt može pratiti taj rast dodavanjem novih funkcionalnosti bez potrebe za potpunom rekonstrukcijom.'
    }
  ];

  const benefits = [
    {
      icon: <Award className="text-[#28A745]" size={32} />,
      title: 'Iskustvo i Stručnost',
      desc: 'Više od decenije rada u industriji web developmenta donelo nam je bogato iskustvo u izradi kompleksnih digitalnih rešenja. Realizovali smo preko 200 projekata različite kompleksnosti - od jednostavnih prezentacionih sajtova do složenih enterprise platformi. Naš tim čine sertifikovani stručnjaci koji kontinuirano prate najnovije trendove i tehnologije.'
    },
    {
      icon: <Users className="text-[#28A745]" size={32} />,
      title: 'Kompletan Tim za Vaš Uspeh',
      desc: 'Full-stack pristup razvoju znači da nudimo kompletnu podršku od početne ideje do finalnog lansiranja i dalje. Naš tim uključuje UI/UX dizajnere koji kreiraju intuitivna korisničка iskustva, frontend developere koji pretvaraju dizajn u kod, backend developere za serversku logiku i baze podataka, kao i project menadžere koji koordiniraju sve aktivnosti i održavaju komunikaciju sa vama.'
    },
    {
      icon: <Code className="text-[#28A745]" size={32} />,
      title: 'Moderne Tehnologije',
      desc: 'Koristimo najnoviji tech stack industrije - React i Next.js za frontend, Node.js i Python za backend razvoj, PostgreSQL i MongoDB za baze podataka. JAMstack arhitektura obezbeđuje maksimalne performanse i sigurnost. Svaka tehnologija koju biremo je pažljivo odabrana na osnovu specifičnih potreba projekta, skalabilnosti i održivosti u budućnosti.'
    },
    {
      icon: <Headphones className="text-[#28A745]" size={32} />,
      title: 'Podrška i Održavanje',
      desc: 'Naša saradnja ne završava se sa lansiranjem sajta. Pružamo kontinuiranu tehničku podršku, redovna ažuriranja, sigurnosne zakrpe i optimizacije performansi. Nudimo managed hosting servise sa automatskim backup-ovima i monitoringom rada sajta. Dostupni smo vam kada god vam je potrebna pomoć, bilo da se radi o hitnim intervencijama ili planiranim proširenjima.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analiza',
      desc: 'U prvoj fazi detaljno analiziramo vaše poslovne potrebe, ciljeve i ciljnu grupu. Organizujemo workshop sesije sa vašim timom kako bismo u potpunosti razumeli vašu viziju i specifične zahteve. Analiziramo konkurenciju, identifikujemo ključne funkcionalnosti i definišemo strategiju. Kreiramo sitemap koji mapira strukturu sajta, wireframe-ove koji prikazuju osnovu izgled stranica, i definišemo tehnološki stack koji najbolje odgovara vašim potrebama.'
    },
    {
      step: '02',
      title: 'UI/UX Dizajn',
      desc: 'Naš dizajnerski tim kreira moderni, intuitivan dizajn fokusiran na korisničko iskustvo i poslovne ciljeve. Razvijamo kompletne mockup-e svih stranica u visokoj rezoluciji, kreiramo stil vodič sa definisanim bojama, fontovima i komponentama, i pravimo interaktivni prototip koji možete testirati. Kroz iterativni proces i vaš feedback dolazimo do finalnog dizajna sa kojim ste 100% zadovoljni.'
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Frontend i backend timovi rade paralelno na razvoju sajta koristeći najnovije tehnologije i best practices iz industrije. Koristimo agile metodologiju sa sprint-ovima što omogućava fleksibilnost i transparentnost. Redovno vam prikazujemo napredak, implementiramo vaš feedback i održavamo blisku komunikaciju. Celokupan kod verzionišemo kroz Git što omogućava punu transparentnost i mogućnost praćenja razvoja.'
    },
    {
      step: '04',
      title: 'Testiranje & QA',
      desc: 'Pre lansiranja vršimo rigorozno testiranje funkcionalnosti, performansi i kompatibilnosti. Testiramo sajt na različitim browserima (Chrome, Firefox, Safari, Edge) i uređajima (desktop, tablet, mobilni). Vršimo load testing da osiguramo da sajt može podneti veliki broj istovremenih korisnika, security audit kako bi identifikovali potencijalne ranjivosti, i accessibility testing da sajt bude pristupačan svima. Sve pronađene probleme ispravlyamo i optimizujemo sajt za vrhunske performanse.'
    },
    {
      step: '05',
      title: 'Lansiranje & Podrška',
      desc: 'Deployment na produkcioni server vršimo pažljivo sa zero-downtime pristupom. Podešavamo DNS zapise, instaliramo SSL sertifikate za sigurnu komunikaciju, i integrišemo Google Analytics i druge alate za praćenje. Obučavamo vaš tim za upravljanje sadržajem ako je to potrebno. Nakon lansiranja, pratimo performanse sajta i pružamo vam kontinuiranu tehničku podršku. Dostupni smo za sve izmene, nadogradnje i pomoć kada vam je potrebna.'
    }
  ];

  const technologies = [
    { name: 'React', logo: '⚛️' },
    { name: 'Next.js', logo: '▲' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'WordPress', logo: '📝' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Docker', logo: '🐳' }
  ];

  const faqs = [
    {
      question: 'Koliko traje izrada profesionalnog web sajta?',
      answer: 'Vreme potrebno za izradu web sajta zavisi od njegove kompleksnosti i obima funkcionalnosti. Prezentacioni sajt sa osnovnim informacijama o vašoj kompaniji može biti završen relativno brzo, dok kompleksniji korporativni sajtovi sa custom funkcionalnostima, multi-jezičnom podrškom i integracijom sa drugim sistemima zahtevaju više vremena. Faktori koji utiču na trajanje uključuju broj stranica, dizajnerske zahteve, custom funkcionalnosti, integracije sa eksternim sistemima i broj revizija. Koristimo agile metodologiju što omogućava da vidite napredak tokom čitavog procesa i dajete feedback u redovnim intervalima.'
    },
    {
      question: 'Koja je cena izrade web sajta?',
      answer: 'Cena izrade web sajta u Srbiji zavisi od mnogo faktora i svaki projekat je jedinstven. Osnovni prezentacioni sajtovi sa nekoliko stranica i jednostavnim dizajnom imaju jednu cenu, dok kompleksni korporativni sajtovi sa naprednim funkcionalnostima, custom dizajnom, CMS sistemom i integracijama imaju potpuno drugu. Faktori koji utiču na cenu uključuju dizajn (template vs potpuno custom), broj stranica i kompleksnost strukture, funkcionalnosti (kontakt forme, newsletter, blog, galerije), multi-jezična podrška, CRM i ERP integracije, custom backend razvoj i hosting zahtevi. Kontaktirajte nas za besplatnu procenu - nakon što razumemo vaše potrebe možemo dati preciznu ponudu.'
    },
    {
      question: 'Da li nudite hosting i održavanje web sajtova?',
      answer: 'Da, pružamo kompletne hosting i održavanje servise kako biste imali potpunu podršku za vaš web sajt. Naši managed hosting paketi uključuju pouzdane servere sa visokom dostupnošću, automatske dnevne backup-ove za zaštitu podataka, SSL sertifikate za sigurnu komunikaciju, CDN za brže učitavanje širom sveta i redovne sigurnosne update-e. Pored hostinga, nudimo i servise održavanja koji uključuju content update-e (izmene tekstova, dodavanje slika, nove stranice), security patching i ažuriranja sistema, performance monitoring i optimizaciju, tehnička podrška sa brzim vremenom odgovora i redovne izveštaje o radu sajta. Sve ovo omogućava vam da se fokusirate na vaš biznis dok mi brinemo o tehničkim aspektima.'
    },
    {
      question: 'Koje tehnologije koristite za razvoj web sajtova?',
      answer: 'Koristimo moderne tehnologije koje obezbeđuju performanse, sigurnost i skalabilnost. Za prezentacione i performance-fokusirane sajtove koristimo React i Next.js framework sa JAMstack arhitekturom koja daje izuzetne performanse. Za sajtove koji zahtevaju moćan content management sistem koristimo WordPress sa potpuno custom theme developmentom. Backend razvijamo sa Node.js, Express.js, Python i Django frameworkom u zavisnosti od specifičnih zahteva projekta. Za baze podataka koristimo PostgreSQL za relacione podatke i MongoDB za fleksibilnije dokument-baziranu strukturu. Hosting vršimo na AWS, Google Cloud ili Vercel platformama u zavisnosti od potreba. Sve projekte verzionišemo kroz Git, koristimo CI/CD pipeline za automatski deployment i implementiramo sve moderne best practices - responsive design, accessibility standarde, SEO optimizaciju i security hardening.'
    },
    {
      question: 'Da li je SEO optimizacija uključena u izradu sajta?',
      answer: 'SEO optimizacija je integralni deo svakog web sajta koji razvijamo. Osnovna tehnička SEO optimizacija je uključena u svakom projektu - to podrazumeva semantic HTML5 markup koji pretraživači lako razumeju, optimizovane meta tagove (title, description, keywords), structured data (Schema.org markup) za rich results, XML sitemap za lakše indeksiranje, robots.txt konfiguraciju, optimizaciju brzine učitavanja (image optimization, code splitting, lazy loading), mobile-first responsive design i sve on-page SEO elemente. Za klijente koji žele sveobuhvatnu SEO strategiju nudimo napredne SEO servise koji uključuju keyword research i content strategiju, SEO konkurentsku analizu, content marketing i link building, ongoing SEO monitoring i optimizaciju, local SEO za lokalne biznise i Google Analytics i Search Console setup. Osnovni tehnički SEO dolazi sa svakim sajtom, dok napredne SEO usluge možete dodati kao poseban servis.'
    },
    {
      question: 'Šta dobijam nakon što sajt bude završen?',
      answer: 'Nakon završetka i lansiranja vašeg web sajta, dobijate kompletan paket koji vam daje punu kontrolu i dokumentaciju. To uključuje sav izvorni kod sajta sa kompletnom dokumentacijom, pristup admin panelu za upravljanje sadržajem ako sajt ima CMS, sve dizajn fajlove i asete (logotipe, ikone, slike), tehničku dokumentaciju sa uputstvima za održavanje, obuku za vaš tim kako da koristi admin panel i upravlja sadržajem, sve informacije o hostingu i serverima i transfer vlasništva svih domena i naloga. Takođe dobijate i period besplatne podrške nakon lansiranja tokom kojeg možete kontaktirati našu podršku za bilo kakva pitanja ili pomoć. Vaš web sajt je u potpunosti vaše vlasništvo i imate punu kontrolu nad njim.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Izrada Web Sajtova",
    "provider": {
      "@type": "Organization",
      "name": "Zikma Solutions",
      "url": "https://zikmasolutions.rs"
    },
    "serviceType": "Web Development",
    "areaServed": "RS",
    "description": "Profesionalna izrada web sajtova u Srbiji. Responzivni dizajn, SEO optimizacija, brze performanse. Full-stack tim sa preko 10 godina iskustva."
  };

  return (
    <>
      <Helmet>
        <title>Izrada Web Sajtova Srbija | Profesionalni Web Development 2025</title>
        <meta name="description" content="Moderna izrada web sajtova u Srbiji. Responzivni dizajn, SEO optimizacija, brze performanse. Preko 200 uspešnih projekata. Besplatna konsultacija!" />
        <meta name="keywords" content="izrada web sajtova, web development srbija, izrada web sajtova beograd, moderni web sajt, responzivni web sajt, profesionalna izrada sajta, web dizajn srbija, pravljenje web sajta, kreiranje web sajta" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Izrada Web Sajtova Srbija | Profesionalni Web Development 2025" />
        <meta property="og:description" content="Moderna izrada web sajtova u Srbiji. Responzivni dizajn, SEO optimizacija, brze performanse." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zikmasolutions.rs/web-sajtovi/izrada-web-sajta" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0f1419]">
        {/* 🎯 HERO SEKCIJA */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1419] via-[#1a2332] to-[#0f1419]">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#28A745] rounded-full filter blur-[120px]"></div>
              <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#ff6f61] rounded-full filter blur-[120px]"></div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumb - SEO važno */}
            <nav className="mb-8" data-aos="fade-right">
              <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link to="/" className="text-gray-400 hover:text-[#28A745]" itemProp="item">
                    <span itemProp="name">Početna</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li className="text-gray-600">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link to="/usluge" className="text-gray-400 hover:text-[#28A745]" itemProp="item">
                    <span itemProp="name">Web Sajtovi</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                <li className="text-gray-600">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span className="text-[#28A745]" itemProp="name">Izrada Web Sajta</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-[#28A745]/10 border border-[#28A745]/30 rounded-full px-4 py-2 mb-6" data-aos="fade-down">
                <Sparkles size={16} className="text-[#28A745]" />
                <span className="text-[#28A745] text-sm font-medium">10+ Godina Iskustva</span>
              </div>

              {/* H1 - Najvažniji SEO element */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-poppins" data-aos="fade-up">
                Izrada Web Sajtova Srbija<br />
                <span className="text-[#28A745]">Profesionalni Web Development</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Moderna izrada web sajtova u Srbiji sa fokusom na responzivni dizajn, SEO optimizaciju i vrhunske performanse. 
                Razvijamo web sajtove koji donose rezultate vašem poslovanju i privlače klijente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
                <Link to="/kontakt">
                  <Button size="lg" className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-8 py-6 text-lg rounded-xl">
                    Besplatna Konsultacija
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="border-2 border-[#28A745] text-white hover:bg-[#28A745]/10 px-8 py-6 text-lg rounded-xl">
                    Pogledajte Portfolio
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" data-aos="fade-up" data-aos-delay="300">
                <div>
                  <div className="text-3xl font-bold text-[#28A745]">200+</div>
                  <div className="text-gray-400 text-sm">Projekata</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#28A745]">10+</div>
                  <div className="text-gray-400 text-sm">Godina</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#28A745]">150+</div>
                  <div className="text-gray-400 text-sm">Klijenata</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#28A745]">99%</div>
                  <div className="text-gray-400 text-sm">Satisfakcija</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 📋 ŠTA NUDIMO - Features */}
        <section className="py-20 bg-[#0a0c0f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
                Šta Dobijate Izradom Web Sajta
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Profesionalna izrada web sajtova obuhvata sve aspekte modernog web developmenta - 
                od dizajna do tehničke implementacije i SEO optimizacije
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-[#1a2332]/50 border-[#28A745]/20 hover:border-[#28A745] transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#28A745] to-[#1E7E34] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-white text-lg font-poppins">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      {feature.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 💎 ZAŠTO ZIKMA SOLUTIONS */}
        <section className="py-20 bg-[#0f1419]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
                Zašto Izabrati Zikma Solutions za Izradu Web Sajta
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Sa preko decenije iskustva u web developmentu, pružamo kompletan spektar usluga 
                izrade web sajtova - od početne ideje do finalnog lansiranja i kontinuirane podrške
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-[#1a2332]/30 border border-[#28A745]/10 rounded-xl hover:border-[#28A745]/50 transition-all"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🔄 PROCES RADA */}
        <section className="py-20 bg-[#0a0c0f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
                Kako Radimo na Izradi Web Sajta
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Naš proces izrade web sajtova je transparentan i strukturiran u pet ključnih faza. 
                U svakoj fazi održavamo blisku komunikaciju sa vama i osiguravamo da projekat ide u pravom smeru.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 bg-[#1a2332]/50 border border-[#28A745]/20 rounded-xl hover:border-[#28A745] transition-all"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#28A745] to-[#1E7E34] rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🛠️ TEHNOLOGIJE */}
        <section className="py-20 bg-[#0f1419]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
                Tehnologije Za Izradu Modernih Web Sajtova
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Koristimo najnovije i najpouzdanije tehnologije iz industrije koje garantuju 
                brzinu, sigurnost i skalabilnost vašeg web sajta
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-12" data-aos="fade-up" data-aos-delay="100">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#1a2332]/50 border border-[#28A745]/20 rounded-xl px-6 py-4 hover:border-[#28A745] transition-all"
                >
                  <span className="text-3xl">{tech.logo}</span>
                  <span className="text-white font-medium">{tech.name}</span>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-delay="200">
              <p className="text-gray-300 text-lg leading-relaxed">
                Svaka tehnologija je pažljivo odabrana na osnovu potreba projekta. React i Next.js koristimo za 
                moderna SPA (Single Page Application) rešenja sa izuzetnim performansama. WordPress je naš izbor 
                za sajtove koji zahtevaju moćan CMS sistem. Node.js i moderne baze podataka omogućavaju kreiranje 
                skalabilnih aplikacija koje mogu rasti sa vašim biznisom. Cloud hosting na AWS platformi garantuje 
                pouzdanost i dostupnost vašeg sajta 24/7.
              </p>
            </div>
          </div>
        </section>

        {/* ❓ FAQ - Često Postavljana Pitanja */}
        <section className="py-20 bg-[#0a0c0f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
                Često Postavljana Pitanja o Izradi Web Sajtova
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Odgovori na najčešća pitanja koja naši klijenti postavljaju o procesu 
                izrade web sajtova, tehnologijama i uslugama koje nudimo
              </p>
            </div>

            <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-[#1a2332]/50 border border-[#28A745]/20 rounded-xl px-6 hover:border-[#28A745] transition-all"
                  >
                    <AccordionTrigger className="text-white hover:text-[#28A745] text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* 📞 CTA SEKCIJA */}
        <section className="py-20 bg-gradient-to-br from-[#28A745] to-[#1E7E34] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-[100px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-poppins">
                Spremni za Novi Web Sajt?
              </h2>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Kontaktirajte nas danas za besplatnu konsultaciju i detaljnu procenu vašeg projekta. 
                Odgovaramo na sve upite u roku od 24 sata i pružamo profesionalnu procenu bez obaveza.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/kontakt">
                  <Button size="lg" className="bg-white text-[#28A745] hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold">
                    Kontaktirajte Nas
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <a href="tel:+381601234567">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl font-semibold">
                    📞 +381 60 123 4567
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IzradaWebSajtova;
