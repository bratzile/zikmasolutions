import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Layers, Zap, Shield, Smartphone, Target, Users, Award, Headphones, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';

const PrestaShopDevelopment = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Code className="text-white" size={24} />,
      title: 'Custom Moduli',
      desc: 'Razvijamo specifične module po meri za vaše potrebe – od plaćanja i dostave, do integracija sa ERP i CRM sistemima.'
    },
    {
      icon: <Layers className="text-white" size={24} />,
      title: 'Prilagođene Teme',
      desc: 'Kreiramo unikatne teme i dizajn elemenata kako bi vaša prodavnica imala jedinstveni vizuelni identitet i UX.'
    },
    {
      icon: <Target className="text-white" size={24} />,
      title: 'Integracije Trećih Strana',
      desc: 'Povezujemo PrestaShop sa ERP, CRM, marketinškim alatima, platnim gateway-ima i drugim sistemima.'
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'Optimizacija Funkcionalnosti',
      desc: 'Analiziramo i prilagođavamo funkcionalnosti prodavnice za bolje performanse, UX i konverzije.'
    },
    {
      icon: <Smartphone className="text-white" size={24} />,
      title: 'Responzivnost i Kompatibilnost',
      desc: 'Prilagođavamo sve module i teme da rade besprekorno na desktop, tablet i mobilnim uređajima.'
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: 'Skalabilnost i Nadogradnja',
      desc: 'Naša rešenja su modularna i spremna za buduće nadogradnje i dodatke, kako bi vaša prodavnica rasla bez ograničenja.'
    }
  ];

  const benefits = [
    {
      icon: <Award className="text-[#28A745]" size={32} />,
      title: 'Iskustvo u PrestaShop Development-u',
      desc: 'Naš tim razvija prilagođene funkcionalnosti i teme za PrestaShop, sa fokusom na stabilnost, performanse i skalabilnost.'
    },
    {
      icon: <Target className="text-[#28A745]" size={32} />,
      title: 'Fokus na Vaš Biznis',
      desc: 'Mi kreiramo rešenja koja direktno odgovaraju vašim poslovnim procesima i potrebama kupaca.'
    },
    {
      icon: <Headphones className="text-[#28A745]" size={32} />,
      title: 'Pouzdana Podrška',
      desc: 'Pružamo tehničku podršku i održavanje custom rešenja, osiguravajući stabilan rad i besprekornu funkcionalnost.'
    },
    {
      icon: <TrendingUp className="text-[#28A745]" size={32} />,
      title: 'SEO i UX Fokus',
      desc: 'Prilagođavamo funkcionalnosti tako da podržavaju SEO i korisničko iskustvo, povećavajući vidljivost i prodaju.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Analiza Potreba',
      desc: 'Procena ciljeva i funkcionalnosti koje su potrebne za vašu PrestaShop prodavnicu, uključujući analizu konkurencije i definisanje strategije.'
    },
    {
      step: '02',
      title: 'UI/UX i Dizajn Modula',
      desc: 'Kreiranje dizajna modula i prilagođenih funkcionalnosti sa fokusom na intuitivno korisničko iskustvo.'
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Razvoj i implementacija custom modula, tema i funkcionalnosti u skladu sa najboljim PrestaShop praksama.'
    },
    {
      step: '04',
      title: 'Testiranje & QA',
      desc: 'Detaljna provera funkcionalnosti, kompatibilnosti, performansi i bezbednosti rešenja pre lansiranja.'
    },
    {
      step: '05',
      title: 'Lansiranje & Podrška',
      desc: 'Implementacija na live prodavnicu i pružanje post-launch podrške, uključujući održavanje i nadogradnje po potrebi.'
    }
  ];

  const faqs = [
    {
      question: 'Šta je PrestaShop Development po meri?',
      answer: 'To je razvoj custom modula, tema i funkcionalnosti koje nisu dostupne u standardnom PrestaShop paketu, kako bi prodavnica bila jedinstvena i optimizovana za vaše potrebe.'
    },
    {
      question: 'Mogu li dodavati nove funkcionalnosti kasnije?',
      answer: 'Da, naša rešenja su modularna i skalabilna, omogućavajući dodavanje novih modula i funkcionalnosti u bilo kom trenutku.'
    },
    {
      question: 'Da li prilagođavate i postojeće module i teme?',
      answer: 'Da, vršimo prilagođavanja postojećih modula i tema kako bi odgovarali vašim specifičnim zahtevima.'
    },
    {
      question: 'Da li pružate podršku nakon implementacije?',
      answer: 'Da, nudimo tehničku podršku, održavanje i nadogradnju custom rešenja za stabilan rad prodavnice.'
    },
    {
      question: 'Koje integracije trećih strana radite?',
      answer: 'Integracije sa ERP, CRM, platnim gateway-ima, marketinškim alatima i drugim sistemima prema vašim potrebama.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "PrestaShop Development",
    "provider": {
      "@type": "Organization",
      "name": "Zikma Solutions",
      "url": "https://zikmasolutions.rs"
    },
    "serviceType": "PrestaShop Custom Development",
    "areaServed": "RS",
    "description": "Profesionalan PrestaShop development - custom moduli, teme i funkcionalnosti po meri."
  };

  return (
    <>
      <Helmet>
        <title>PrestaShop Development – Custom Moduli, Teme i Funkcionalnosti</title>
        <meta name="description" content="Razvijamo prilagođene module, teme i funkcionalnosti za PrestaShop prodavnice, omogućavajući jedinstvena rešenja i bolju kontrolu nad vašim online biznisom." />
        <meta name="keywords" content="prestashop development, custom prestashop moduli, prestashop teme, prestashop developer, prestashop integracije" />
        
        {/* Open Graph */}
        <meta property="og:title" content="PrestaShop Development – Custom Moduli, Teme i Funkcionalnosti" />
        <meta property="og:description" content="Razvijamo prilagođene module, teme i funkcionalnosti za PrestaShop prodavnice, omogućavajući jedinstvena rešenja i bolju kontrolu nad vašim online biznisom." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zikmasolutions.rs/e-commerce/prestashop-development" />
        
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
                    <span itemProp="name">E-commerce</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                <li className="text-gray-600">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span className="text-[#28A745]" itemProp="name">PrestaShop Development</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-[#28A745]/10 border border-[#28A745]/30 rounded-full px-4 py-2 mb-6" data-aos="fade-down">
                <Sparkles size={16} className="text-[#28A745]" />
                <span className="text-[#28A745] text-sm font-medium">PrestaShop Experts</span>
              </div>

              {/* H1 - Najvažniji SEO element */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-montserrat" data-aos="fade-up">
                PrestaShop Development<br />
                <span className="text-[#28A745]">po Meri</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Razvijamo prilagođene module, teme i funkcionalnosti za PrestaShop prodavnice, 
                omogućavajući jedinstvena rešenja i bolju kontrolu nad vašim online biznisom.
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
                  <div className="text-3xl font-bold text-[#28A745]">150+</div>
                  <div className="text-gray-400 text-sm">Custom Modula</div>
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
                Šta Dobijate PrestaShop Development Uslugama
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Kompletan paket custom rešenja za vašu PrestaShop prodavnicu
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
                Zašto Izabrati Nas za PrestaShop Development
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Profesionalan pristup i dokazana metodologija za PrestaShop projekte
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
                Kako Radimo na PrestaShop Development Projektima
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Strukturiran proces u 5 koraka za uspešan custom PrestaShop projekat
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
                Često Postavljana Pitanja o PrestaShop Development
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Odgovori na najčešća pitanja o custom PrestaShop razvoju
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
                Spremni za Custom PrestaShop Rešenje?
              </h2>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Kontaktirajte nas za besplatnu konsultaciju i procenu vašeg PrestaShop development projekta. 
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

export default PrestaShopDevelopment;
