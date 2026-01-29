import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Layers, Users, Zap, Target, Shield, TrendingUp, Award, Headphones, BarChart, Code, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';

const SaaSResenja = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Layers className="text-white" size={24} />,
      title: 'Skalabilne SaaS Platforme',
      desc: 'Razvijamo aplikacije koje mogu da rastu sa brojem korisnika, bez potrebe za kompletnom rekonstrukcijom sistema.'
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: 'Multi-tenant Arhitektura',
      desc: 'Podržavamo više korisnika ili firmi u jednoj aplikaciji, uz izolaciju podataka i visoku sigurnost.'
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'Automatizacija Procesa',
      desc: 'Automatizujemo rutinske zadatke, obračune, izveštaje i notifikacije, čime se štedi vreme i smanjuju greške.'
    },
    {
      icon: <Target className="text-white" size={24} />,
      title: 'Integracije sa Trećim Sistemima',
      desc: 'Povezujemo SaaS platformu sa ERP, CRM, plaćanjem, skladištem i drugim alatima za besprekornu funkcionalnost.'
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: 'Sigurnost i Monitoring',
      desc: 'Implementiramo autentikaciju, enkripciju podataka, monitoring i backup-ove kako bi aplikacija bila sigurna i dostupna 24/7.'
    },
    {
      icon: <TrendingUp className="text-white" size={24} />,
      title: 'Brza Implementacija i Održavanje',
      desc: 'Modularna arhitektura omogućava lako dodavanje novih funkcionalnosti i brzo lansiranje novih verzija bez zastoja.'
    }
  ];

  const benefits = [
    {
      icon: <BarChart className="text-[#28A745]" size={32} />,
      title: 'Smanjenje Troškova i Rizika',
      desc: 'SaaS eliminiše potrebu za infrastrukturom kod klijenta i smanjuje troškove održavanja, dok mi brinemo o sigurnosti i dostupnosti.'
    },
    {
      icon: <TrendingUp className="text-[#28A745]" size={32} />,
      title: 'Skalabilno Rešenje',
      desc: 'Vaša aplikacija raste sa brojem korisnika i novim funkcionalnostima, bez potrebe za kompletno novim razvojem.'
    },
    {
      icon: <Award className="text-[#28A745]" size={32} />,
      title: 'Fokus na Poslovne Ciljeve',
      desc: 'Mi kreiramo backend, frontend i integracije, dok se vi fokusirate na širenje poslovanja i korisničku bazu.'
    },
    {
      icon: <Headphones className="text-[#28A745]" size={32} />,
      title: 'Pouzdana Podrška',
      desc: 'Kontinuirano održavanje i monitoring osiguravaju da vaša SaaS platforma radi stabilno i sigurno.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Analiza Poslovnog Modela',
      desc: 'Procena ciljeva SaaS rešenja, korisničkih potreba, potencijalnih funkcionalnosti i strategija monetizacije.'
    },
    {
      step: '02',
      title: 'UI/UX Dizajn',
      desc: 'Kreiranje intuitivnog i skalabilnog dizajna platforme, prilagođenog različitim korisnicima i ulogama.'
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Razvoj multi-tenant SaaS platforme, integracija sa servisima i implementacija automatizovanih procesa.'
    },
    {
      step: '04',
      title: 'Testiranje & QA',
      desc: 'Detaljno testiranje performansi, sigurnosti, skalabilnosti i funkcionalnosti pre lansiranja.'
    },
    {
      step: '05',
      title: 'Lansiranje & Podrška',
      desc: 'Deployment, monitoring i kontinuirana podrška, omogućavajući besprekornu upotrebu i rast platforme.'
    }
  ];

  const faqs = [
    {
      question: 'Šta je SaaS i zašto je bolje od klasične aplikacije?',
      answer: 'SaaS (Software as a Service) je softver koji se koristi preko interneta, bez potrebe za instalacijom. Omogućava skalabilnost, lakšu distribuciju i niže troškove održavanja.'
    },
    {
      question: 'Da li mogu dodavati nove funkcionalnosti kasnije?',
      answer: 'Da, SaaS platforme razvijamo modularno, što omogućava jednostavno dodavanje novih funkcionalnosti i integracija u bilo kom trenutku.'
    },
    {
      question: 'Kako SaaS rešenje štedi vreme i resurse?',
      answer: 'Automatizacijom procesa i centralizacijom podataka smanjuje se manuelni rad, greške i troškovi infrastrukture kod korisnika.'
    },
    {
      question: 'Da li SaaS može podržati veliki broj korisnika?',
      answer: 'Da, razvijamo skalabilna rešenja koja mogu istovremeno podržati veliki broj korisnika i firmi.'
    },
    {
      question: 'Da li pružate podršku i održavanje?',
      answer: 'Da, nudimo kontinuiranu tehničku podršku, monitoring i nadogradnje kako bi platforma radila stabilno i sigurno.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SaaS Rešenja",
    "provider": {
      "@type": "Organization",
      "name": "Zikma Solutions",
      "url": "https://zikmasolutions.rs"
    },
    "serviceType": "SaaS Development",
    "areaServed": "RS",
    "description": "Profesionalan razvoj SaaS rešenja - skalabilnost, automatizacija i multi-tenant arhitektura."
  };

  return (
    <>
      <Helmet>
        <title>SaaS Rešenja – Skalabilne i Automatizovane Web Aplikacije</title>
        <meta name="description" content="Razvijamo skalabilna i automatizovana SaaS rešenja koja omogućavaju prodaju softvera kao usluge, sa sigurnim pristupom i lakoćom korišćenja." />
        <meta name="keywords" content="saas rešenja, saas development, software as a service, cloud aplikacije, multi tenant aplikacije" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SaaS Rešenja – Skalabilne i Automatizovane Web Aplikacije" />
        <meta property="og:description" content="Razvijamo skalabilna i automatizovana SaaS rešenja koja omogućavaju prodaju softvera kao usluge, sa sigurnim pristupom i lakoćom korišćenja." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zikmasolutions.rs/razvoj-softvera/saas-resenja" />
        
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
                  <span className="text-[#28A745]" itemProp="name">SaaS Rešenja</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-[#28A745]/10 border border-[#28A745]/30 rounded-full px-4 py-2 mb-6" data-aos="fade-down">
                <Sparkles size={16} className="text-[#28A745]" />
                <span className="text-[#28A745] text-sm font-medium">Cloud-Based Solutions</span>
              </div>

              {/* H1 - Najvažniji SEO element */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-montserrat" data-aos="fade-up">
                Razvoj SaaS Rešenja<br />
                <span className="text-[#28A745]">po Meri</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Razvijamo skalabilna i automatizovana SaaS rešenja koja omogućavaju prodaju 
                softvera kao usluge, sa sigurnim pristupom i lakoćom korišćenja.
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
                  <div className="text-3xl font-bold text-[#28A745]">50+</div>
                  <div className="text-gray-400 text-sm">SaaS Platformi</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#28A745]">10+</div>
                  <div className="text-gray-400 text-sm">Godina Iskustva</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#28A745]">99%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#28A745]">24/7</div>
                  <div className="text-gray-400 text-sm">Monitoring</div>
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
                Šta Dobijate SaaS Razvojem
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Kompletan paket funkcionalnosti za skalabilnu i automatizovanu platformu
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
                Zašto Izabrati SaaS Model
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Prednosti SaaS modela za vaš biznis i rast korisničke baze
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
                Kako Radimo na SaaS Projektima
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Strukturiran proces u 5 koraka za uspešnu SaaS platformu
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
                Često Postavljana Pitanja o SaaS Rešenjima
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Odgovori na najčešća pitanja o razvoju SaaS platformi
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
                Spremni za SaaS Rešenje?
              </h2>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Kontaktirajte nas za besplatnu analizu vašeg poslovnog modela i procenu SaaS projekta. 
                Odgovaramo u roku od 24h!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/kontakt">
                  <Button size="lg" className="bg-white text-[#28A745] hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold">
                    Kontaktirajte Nas
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <a href="tel:+381692331641">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl font-semibold">
                    📞 069 23 31 641
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

export default SaaSResenja;
