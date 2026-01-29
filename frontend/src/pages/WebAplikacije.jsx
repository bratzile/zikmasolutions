import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Zap, Target, Shield, Layers, TrendingUp, Users, Award, Headphones, BarChart, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';

const WebAplikacije = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Code className="text-white" size={24} />,
      title: 'Custom Web Aplikacije',
      desc: 'Razvijamo aplikacije prilagođene vašem biznisu, od upravljanja projektima, radnim nalozima, do kompleksnih internih sistema.'
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'Automatizacija Poslovnih Procesa',
      desc: 'Smanjujemo manualni rad i greške automatizacijom rutinskih zadataka, workflow-a i obrade podataka.'
    },
    {
      icon: <Target className="text-white" size={24} />,
      title: 'Integracije sa Trećim Sistemima',
      desc: 'Povezujemo aplikacije sa ERP, CRM, e-commerce, skladištem i drugim sistemima radi besprekornog rada.'
    },
    {
      icon: <BarChart className="text-white" size={24} />,
      title: 'Real-time Izveštavanje i Dashboardi',
      desc: 'Omogućavamo trenutni uvid u poslovanje kroz prilagođene dashboard-e i izveštaje za brže i bolje odluke.'
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: 'Sigurnost i Stabilnost',
      desc: 'Implementacija SSL, autentikacija, kontrola pristupa i backup-ovi podataka za bezbedan rad vaše aplikacije.'
    },
    {
      icon: <Layers className="text-white" size={24} />,
      title: 'Skalabilna Arhitektura',
      desc: 'Aplikacije su modularne i spremne za rast, lako dodavanje novih funkcionalnosti i integracija.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="text-[#28A745]" size={32} />,
      title: 'Povećanje Produktivnosti',
      desc: 'Automatizacijom procesa i centralizacijom podataka smanjujete vreme provedeno na rutinskim zadacima i greške u poslovanju.'
    },
    {
      icon: <BarChart className="text-[#28A745]" size={32} />,
      title: 'Transparentnost i Kontrola',
      desc: 'Sve informacije su dostupne u realnom vremenu, olakšavajući praćenje procesa, KPI-jeva i donošenje odluka.'
    },
    {
      icon: <Target className="text-[#28A745]" size={32} />,
      title: 'Fokus na Poslovni Rast',
      desc: 'Naša rešenja skaliraju sa vašim biznisom i omogućavaju dodavanje novih modula ili funkcionalnosti bez prekida rada.'
    },
    {
      icon: <Headphones className="text-[#28A745]" size={32} />,
      title: 'Pouzdana Tehnička Podrška',
      desc: 'Održavanje, update-i i tehnička podrška osiguravaju stabilan rad aplikacije i bezbednost podataka.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Analiza Potreba',
      desc: 'Detaljno proučavamo vaše poslovne procese, identifikujemo kritične tačke i kreiramo strategiju razvoja web aplikacije.'
    },
    {
      step: '02',
      title: 'UI/UX Dizajn',
      desc: 'Kreiramo intuitivne interfejse i prototipove, fokusirane na jednostavnost korišćenja i maksimalnu efikasnost korisnika.'
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Razvijamo frontend i backend aplikacije koristeći moderne tehnologije i best practices za performanse i skalabilnost.'
    },
    {
      step: '04',
      title: 'Testiranje & QA',
      desc: 'Detaljno testiranje svih funkcionalnosti, integracija i performansi kako bi aplikacija radila bez grešaka i problema.'
    },
    {
      step: '05',
      title: 'Lansiranje & Podrška',
      desc: 'Deployment aplikacije, monitoring performansi i kontinuirana podrška kako bi poslovanje radilo neprekidno i sigurno.'
    }
  ];

  const faqs = [
    {
      question: 'Zašto mi treba web aplikacija po meri?',
      answer: 'Standardni softver često ne odgovara specifičnim poslovnim procesima. Web aplikacija po meri rešava vaše jedinstvene potrebe, automatizuje zadatke i omogućava bolju kontrolu nad poslovanjem.'
    },
    {
      question: 'Mogu li povezati aplikaciju sa ERP ili CRM sistemom?',
      answer: 'Da, razvijamo integracije sa ERP, CRM, skladištima, e-commerce platformama i drugim sistemima, čime se eliminišu ručni unos podataka i greške.'
    },
    {
      question: 'Da li je aplikacija sigurna?',
      answer: 'Da, primenjujemo SSL, autentikaciju, kontrolu pristupa i redovne backup-ove kako bi vaši podaci bili zaštićeni.'
    },
    {
      question: 'Kako aplikacija pomaže u donošenju odluka?',
      answer: 'Prilagođeni dashboard-i i real-time izveštaji omogućavaju brz uvid u ključne metrike i stanje procesa, što poboljšava kvalitet odluka.'
    },
    {
      question: 'Mogu li kasnije dodavati nove funkcionalnosti?',
      answer: 'Da, arhitektura je modularna i skalabilna, što omogućava dodavanje novih modula, integracija ili funkcionalnosti bez prekida rada aplikacije.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Aplikacije po Meri",
    "provider": {
      "@type": "Organization",
      "name": "Zikma Solutions",
      "url": "https://zikmasolutions.rs"
    },
    "serviceType": "Web Application Development",
    "areaServed": "RS",
    "description": "Profesionalan razvoj web aplikacija po meri - automatizacija, integracije i skalabilnost."
  };

  return (
    <>
      <Helmet>
        <title>Web Aplikacije po Meri – Automatizacija i Skalabilnost</title>
        <meta name="description" content="Razvijamo skalabilne i sigurne web aplikacije koje automatizuju poslovne procese, povezuju sisteme i povećavaju produktivnost." />
        <meta name="keywords" content="web aplikacije po meri, razvoj web aplikacija, custom web app, automatizacija procesa, interni sistemi" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Web Aplikacije po Meri – Automatizacija i Skalabilnost" />
        <meta property="og:description" content="Razvijamo skalabilne i sigurne web aplikacije koje automatizuju poslovne procese, povezuju sisteme i povećavaju produktivnost." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zikmasolutions.rs/razvoj-softvera/web-aplikacije" />
        
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
                    <span itemProp="name">Razvoj Softvera</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                <li className="text-gray-600">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span className="text-[#28A745]" itemProp="name">Web Aplikacije</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-[#28A745]/10 border border-[#28A745]/30 rounded-full px-4 py-2 mb-6" data-aos="fade-down">
                <Sparkles size={16} className="text-[#28A745]" />
                <span className="text-[#28A745] text-sm font-medium">Custom Solutions</span>
              </div>

              {/* H1 - Najvažniji SEO element */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-montserrat" data-aos="fade-up">
                Razvoj Web Aplikacija<br />
                <span className="text-[#28A745]">po Meri</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Razvijamo skalabilne i sigurne web aplikacije koje automatizuju poslovne procese, 
                povezuju sisteme i povećavaju produktivnost. Fokusirajte se na rast!
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
                  <div className="text-3xl font-bold text-[#28A745]">100+</div>
                  <div className="text-gray-400 text-sm">Web Aplikacija</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#28A745]">10+</div>
                  <div className="text-gray-400 text-sm">Godina Iskustva</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#28A745]">99%</div>
                  <div className="text-gray-400 text-sm">Zadovoljnih Klijenata</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#28A745]">24/7</div>
                  <div className="text-gray-400 text-sm">Tehnička Podrška</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 📋 ŠTA NUDIMO - Features */}
        <section className="py-20 bg-[#0a0c0f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
                Šta Dobijate Razvojem Web Aplikacije
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Kompletan paket funkcionalnosti za automatizaciju i optimizaciju poslovanja
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
                    <CardTitle className="text-white text-lg font-montserrat">{feature.title}</CardTitle>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
                Zašto Izabrati Web Aplikacije po Meri
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Povećanje produktivnosti, transparentnost i kontrola nad poslovnim procesima
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
                Kako Radimo na Razvoju Web Aplikacija
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Strukturiran proces u 5 koraka za uspešnu web aplikaciju
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

        {/* ❓ FAQ - Često Postavljana Pitanja */}
        <section className="py-20 bg-[#0f1419]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
                Često Postavljana Pitanja o Web Aplikacijama
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Odgovori na najčešća pitanja o razvoju custom web aplikacija
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
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-montserrat">
                Spremni za Web Aplikaciju po Meri?
              </h2>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Kontaktirajte nas za besplatnu analizu vaših poslovnih procesa i procenu potrebne web aplikacije. 
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

export default WebAplikacije;
