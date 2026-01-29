import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Smartphone, TrendingUp, Zap, Shield, Palette, Users, Headphones, Award, Clock, Target, BarChart, Globe, Sparkles } from 'lucide-react';
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
      desc: 'Jedinstveni vizuelni identitet prilagođen vašem brendu i poslovnim ciljevima. Moderni UI/UX pristup fokusiran na konverzije.'
    },
    {
      icon: <Smartphone className="text-white" size={24} />,
      title: 'Responzivnost',
      desc: 'Savršen prikaz na svim uređajima - desktop, tablet, mobilni telefoni. Mobile-first pristup za maksimalan reach.'
    },
    {
      icon: <TrendingUp className="text-white" size={24} />,
      title: 'SEO Optimizacija',
      desc: 'Ugrađena SEO optimizacija za bolje rangiranje na pretraživačima. Tehnički SEO, structured data, page speed optimization.'
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'Brze Performanse',
      desc: 'Optimizovan kod za maksimalnu brzinu učitavanja. Lazy loading, CDN integracija, image optimization. Sub-2s load time.'
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: 'Sigurnost',
      desc: 'SSL sertifikat, redovni backup-ovi i zaštita od napada. GDPR compliant. Security best practices.'
    },
    {
      icon: <Target className="text-white" size={24} />,
      title: 'Skalabilnost',
      desc: 'Arhitektura spremna za rast i buduće proširenje funkcionalnosti. Modularni pristup za laku maintainability.'
    }
  ];

  const benefits = [
    {
      icon: <Award className="text-[#28A745]" size={32} />,
      title: 'Enterprise Kvalitet',
      desc: 'Iskustvo u razvoju kompleksnih korporativnih rešenja sa 200+ realizovanih projekata'
    },
    {
      icon: <Users className="text-[#28A745]" size={32} />,
      title: 'Full-Stack Tim',
      desc: 'Kompletna podrška od dizajna do deployment-a. UI/UX dizajneri, frontend i backend developeri.'
    },
    {
      icon: <Code className="text-[#28A745]" size={32} />,
      title: 'Moderna Tehnologija',
      desc: 'React, Next.js, Node.js - najnoviji tech stack. JAMstack arhitektura za maksimalne performanse.'
    },
    {
      icon: <Headphones className="text-[#28A745]" size={32} />,
      title: 'Kontinuirana Podrška',
      desc: 'Tehnička podrška i održavanje nakon lansiranja. Hosting, backup, security updates, 24/7 monitoring.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analiza',
      desc: 'Detaljno analiziramo vaše poslovne potrebe, ciljnu grupu i konkurenciju. Workshop sesije sa vašim timom. Kreiramo strategiju, sitemap i wireframe-ove.',
      duration: '1-2 nedelje'
    },
    {
      step: '02',
      title: 'UI/UX Dizajn',
      desc: 'Kreiramo moderan, intuitivan dizajn fokusiran na korisničko iskustvo i konverzije. Mockup-i svih stranica. Interaktivni prototip za odobrenje.',
      duration: '2-3 nedelje'
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Razvijamo sajt koristeći najnovije tehnologije i best practices. Agile pristup sa bi-weekly sprint-ovima. Redovno vam prikazujemo napredak.',
      duration: '3-6 nedelja'
    },
    {
      step: '04',
      title: 'Testiranje & QA',
      desc: 'Detaljno testiramo funkcionalnost, performanse, kompatibilnost. Load testing, security audit, accessibility testing. Bug fixing i optimizacije.',
      duration: '1-2 nedelje'
    },
    {
      step: '05',
      title: 'Lansiranje & Podrška',
      desc: 'Deployment na production server sa zero-downtime. DNS setup, SSL sertifikat, analytics. Obuka vašeg tima. 30 dana besplatne post-launch podrške.',
      duration: 'Kontinuirano'
    }
  ];

  const pricing = [
    {
      name: 'Osnovni',
      price: '500€',
      desc: 'Perfektan za male biznise i startove',
      features: [
        '5-7 stranica',
        'Responzivni dizajn',
        'Osnovna SEO optimizacija',
        'Kontakt forma',
        'Google Analytics',
        '30 dana podrška'
      ],
      highlighted: false
    },
    {
      name: 'Profesionalni',
      price: '1,200€',
      desc: 'Najpopularniji paket za biznis',
      features: [
        '10-15 stranica',
        'Custom dizajn',
        'Napredna SEO optimizacija',
        'CMS sistem',
        'Blog integracija',
        'Multi-jezik (2 jezika)',
        '60 dana podrška'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Od 3,000€',
      desc: 'Za kompleksne korporativne sajtove',
      features: [
        'Neograničen broj stranica',
        'Premium custom dizajn',
        'Full SEO strategija',
        'Napredni CMS',
        'Multi-jezik (3+ jezika)',
        'CRM integracija',
        'API integracije',
        '90 dana podrška'
      ],
      highlighted: false
    }
  ];

  const faqs = [
    {
      question: 'Koliko traje izrada profesionalnog web sajta?',
      answer: 'Za prezentacioni sajt sa 5-10 stranica potrebno je 3-4 nedelje od potpisivanja ugovora do lansiranja. Za kompleksniji korporativni sajt sa custom funkcionalnostima (multi-jezik, integracije, CMS) 6-8 nedelja. Enterprise projekti sa kompleksnim integracijama mogu trajati 2-3 meseca. Koristimo agile pristup pa možete videti napredak svake dve nedelje.'
    },
    {
      question: 'Koja je cena izrade web sajta u Srbiji 2025?',
      answer: 'Prezentacioni sajt (5-10 stranica) od 500€. Korporativni sajt sa CMS-om od 1,200€. Kompleksne B2B platforme sa integracijama 3,000-8,000€. Enterprise rešenja sa custom funkcionalnostima 8,000€+. Cena zavisi od dizajna (template vs custom), broja stranica, funkcionalnosti (multi-jezik, CMS, CRM integracija), i kompleksnosti razvoja. Kontaktirajte nas za detaljnu procenu - besplatna konsultacija.'
    },
    {
      question: 'Da li nudite hosting i održavanje web sajtova?',
      answer: 'Da, nudimo profesionalne hosting pakete sa 99.9% uptime garantijom. Managed hosting na AWS/Google Cloud sa automatskim backup-ovima (daily), sigurnosnim update-ovima, SSL sertifikatom, CDN za brze performanse. Tehnička podrška 24/7 email support, 4h response time. Održavanje uključuje content update-e, security patching, performance monitoring. Paketi od 50€/mesečno.'
    },
    {
      question: 'Koje tehnologije koristite za razvoj web sajtova?',
      answer: 'Za moderne, performance-focused sajtove koristimo React i Next.js sa JAMstack arhitekturom. Za enterprise CMS projekte WordPress sa custom theme development. Backend: Node.js, Python/Django. Database: PostgreSQL, MongoDB. Hosting: AWS, Google Cloud, Vercel. Git za version control, CI/CD pipeline za automated deployment. Sve moderne best practices - responsive design, accessibility, SEO optimization.'
    },
    {
      question: 'Da li je SEO optimizacija uključena u cenu izrade sajta?',
      answer: 'Da, osnovna SEO optimizacija je ugrađena u svaki projekat - tehnički SEO (semantic HTML, meta tags, structured data, sitemap), optimizacija brzine (lazy loading, image optimization, code splitting), mobile-first responsive design. Za napredne SEO usluge (keyword research, content strategy, link building, ongoing optimization) nudimo posebne SEO pakete od 300€/mesečno. Google Analytics i Search Console setup uključen.'
    }
  ];

  const technologies = [
    { name: 'React', logo: '⚛️' },
    { name: 'Next.js', logo: '▲' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'WordPress', logo: '📝' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'AWS', logo: '☁️' }
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
    "description": "Profesionalna izrada web sajtova u Srbiji. Responzivni dizajn, SEO optimizacija, brze performanse.",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "500",
      "highPrice": "8000",
      "priceCurrency": "EUR"
    }
  };

  return (
    <>
      <Helmet>
        <title>Izrada Web Sajtova Srbija | Profesionalni Web Development 2025</title>
        <meta name="description" content="Moderna izrada web sajtova u Srbiji. Responzivni dizajn, SEO optimizacija, brze performanse. Od 500€. Besplatna konsultacija ☎️ Pozovite odmah!" />
        <meta name="keywords" content="izrada web sajtova, web development srbija, izrada web sajtova beograd, moderni web sajt, responzivni web sajt, profesionalna izrada sajta, web dizajn srbija, pravljenje web sajta cena" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Izrada Web Sajtova Srbija | Profesionalni Web Development 2025" />
        <meta property="og:description" content="Moderna izrada web sajtova u Srbiji. Responzivni dizajn, SEO optimizacija, brze performanse. Od 500€." />
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
                Moderna izrada web sajtova u Srbiji. Responzivni dizajn, SEO optimizacija, brze performanse. 
                Razvijamo sajtove koji donose rezultate - od 500€.
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
                Šta Dobijate u Izradi Web Sajta
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Kompletan paket funkcionalnosti za moderan, brz i SEO optimizovan web sajt
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
                Zašto Izabrati Zikma Solutions
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Vaš pouzdani partner za profesionalnu izradu web sajtova u Beogradu i Srbiji
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
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.desc}</p>
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
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Transparentan proces u 5 koraka - od ideje do lansiranja
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
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      <span className="text-[#28A745] text-sm flex items-center gap-1">
                        <Clock size={14} />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 💰 CENOVNIK - Pricing */}
        <section className="py-20 bg-[#0f1419]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
                Cena Izrade Web Sajta
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Transparentni paketi prilagođeni vašim potrebama i budžetu
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <Card
                  key={index}
                  className={`${
                    plan.highlighted
                      ? 'bg-gradient-to-b from-[#28A745]/20 to-[#1a2332]/50 border-[#28A745] scale-105'
                      : 'bg-[#1a2332]/50 border-[#28A745]/20'
                  } hover:border-[#28A745] transition-all duration-300`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {plan.highlighted && (
                    <div className="bg-[#28A745] text-white text-sm font-bold py-2 text-center rounded-t-lg">
                      NAJPOPULARNIJI
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-white text-2xl font-poppins">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-400">{plan.desc}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-[#28A745]">{plan.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle size={18} className="text-[#28A745] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/kontakt">
                      <Button
                        className={`w-full mt-6 ${
                          plan.highlighted
                            ? 'bg-[#28A745] hover:bg-[#1E7E34]'
                            : 'bg-[#1a2332] hover:bg-[#28A745]'
                        } text-white`}
                      >
                        Izaberite Paket
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 🛠️ TEHNOLOGIJE */}
        <section className="py-20 bg-[#0a0c0f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
                Tehnologije Koje Koristimo
              </h2>
              <p className="text-gray-400 text-lg">
                Moderne tehnologije za brze i skalabilne web sajtove
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-delay="100">
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
          </div>
        </section>

        {/* ❓ FAQ - Često Postavljana Pitanja */}
        <section className="py-20 bg-[#0f1419]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
                Često Postavljana Pitanja
              </h2>
              <p className="text-gray-400 text-lg">
                Sve što vas interesuje o izradi web sajtova
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
                    <AccordionContent className="text-gray-400">
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
              <p className="text-white/90 text-xl mb-8">
                Kontaktirajte nas danas za besplatnu konsultaciju i procenu projekta. 
                Odgovaramo u roku od 24h!
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
