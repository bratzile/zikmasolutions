import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Layers, Target, Zap, Shield, Smartphone, Users, Award, Headphones, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';

const WooCommerceDevelopment = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Code className="text-white" size={24} />,
      title: 'Custom Plugini',
      desc: 'Razvijamo specifične plugine koji rešavaju vaše poslovne zahteve – od naprednih funkcionalnosti za plaćanje i dostavu do ERP/CRM integracija.'
    },
    {
      icon: <Layers className="text-white" size={24} />,
      title: 'Prilagođene Teme',
      desc: 'Kreiramo jedinstvene teme koje optimizuju UX, povećavaju konverzije i rade besprekorno sa svim pluginovima.'
    },
    {
      icon: <Target className="text-white" size={24} />,
      title: 'Integracije Trećih Strana',
      desc: 'Povezujemo WooCommerce sa ERP, CRM, marketinškim alatima i platnim gateway-ima, bez sukoba sa postojećim sistemima.'
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'Optimizacija Funkcionalnosti',
      desc: 'Rešavamo probleme sa konfliktima pluginova, sporo učitavanje, bagove u temama i nekompatibilnosti modula.'
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: 'Sigurnost i Stabilnost',
      desc: 'Implementiramo sigurnosne standarde, redovne backup-ove i monitoring kako bi prodavnica bila zaštićena od napada i padova.'
    },
    {
      icon: <Smartphone className="text-white" size={24} />,
      title: 'Skalabilnost i Nadogradnja',
      desc: 'Modularna arhitektura omogućava jednostavno dodavanje novih funkcionalnosti i plugina bez rizika po stabilnost sajta.'
    }
  ];

  const benefits = [
    {
      icon: <Award className="text-[#28A745]" size={32} />,
      title: 'Iskustvo u WooCommerce Development-u',
      desc: 'Naš tim rešava složene probleme sa pluginovima i temama, kreira custom funkcionalnosti i optimizuje performanse velikih prodavnica.'
    },
    {
      icon: <Headphones className="text-[#28A745]" size={32} />,
      title: 'Pouzdana Podrška',
      desc: 'Pratimo stabilnost i performanse sajta i nudimo hitnu intervenciju u slučaju konflikata pluginova ili problema sa temama.'
    },
    {
      icon: <TrendingUp className="text-[#28A745]" size={32} />,
      title: 'SEO i UX Fokus',
      desc: 'Prilagođavamo funkcionalnosti tako da podržavaju SEO i korisničko iskustvo, smanjujući napuštanje korpe i povećavajući konverzije.'
    },
    {
      icon: <Target className="text-[#28A745]" size={32} />,
      title: 'Fokus na Vaš Biznis',
      desc: 'Rešavamo tehničke izazove i optimizujemo sajt, dok se vi fokusirate na prodaju i razvoj poslovanja.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Analiza Potreba i Problema',
      desc: 'Pregled trenutnog stanja WooCommerce prodavnice, identifikacija konflikata pluginova, problema sa temama i funkcionalnostima.'
    },
    {
      step: '02',
      title: 'UI/UX i Dizajn Funkcionalnosti',
      desc: 'Kreiranje dizajna i interfejsa za nove funkcionalnosti i module, fokusirano na jednostavnu upotrebu i maksimalnu konverziju.'
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Razvoj custom plugina, prilagođenih funkcionalnosti i tema, rešavanje konflikata i optimizacija performansi.'
    },
    {
      step: '04',
      title: 'Testiranje & QA',
      desc: 'Detaljno testiranje kompatibilnosti svih modula, tema i plugina, brzine sajta i stabilnosti funkcionalnosti pre lansiranja.'
    },
    {
      step: '05',
      title: 'Lansiranje & Podrška',
      desc: 'Deployment novih funkcionalnosti, monitoring performansi i redovna tehnička podrška kako bi sajt radio stabilno i sigurno.'
    }
  ];

  const faqs = [
    {
      question: 'Koji su najčešći problemi kod WooCommerce prodavnica?',
      answer: 'Najčešći problemi uključuju konflikte pluginova, nekompatibilne teme, sporo učitavanje, greške u procesima kupovine i sigurnosne propuste.'
    },
    {
      question: 'Da li radite prilagođene plugine?',
      answer: 'Da, razvijamo custom plugine po meri za vaše potrebe, koji rade besprekorno sa postojećim funkcionalnostima.'
    },
    {
      question: 'Kako rešavate konflikte pluginova i tema?',
      answer: 'Analizom konflikata, modifikacijom koda i testiranjem osiguravamo da svi moduli i teme funkcionišu zajedno bez problema.'
    },
    {
      question: 'Da li pružate podršku nakon implementacije?',
      answer: 'Da, nudimo kontinuiranu tehničku podršku, monitoring i optimizaciju kako bi sajt bio stabilan i siguran.'
    },
    {
      question: 'Kako optimizujete performanse WooCommerce prodavnica?',
      answer: 'Optimizujemo učitavanje stranica, baze podataka, pluginove i teme, smanjujemo sporo učitavanje i poboljšavamo iskustvo korisnika.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "WooCommerce Development",
    "provider": {
      "@type": "Organization",
      "name": "Zikma Solutions",
      "url": "https://zikmasolutions.rs"
    },
    "serviceType": "WooCommerce Custom Development",
    "areaServed": "RS",
    "description": "Profesionalan WooCommerce development - custom plugini, teme i funkcionalnosti po meri."
  };

  return (
    <>
      <Helmet>
        <title>WooCommerce Development – Custom Teme, Plugini i Funkcionalnosti</title>
        <meta name="description" content="Razvijamo prilagođene plugine, teme i funkcionalnosti za WooCommerce prodavnice, rešavajući probleme sa performansama, kompatibilnošću i skalabilnošću." />
        <meta name="keywords" content="woocommerce development, custom woocommerce plugini, woocommerce teme, woocommerce developer, woocommerce integracije" />
        
        {/* Open Graph */}
        <meta property="og:title" content="WooCommerce Development – Custom Teme, Plugini i Funkcionalnosti" />
        <meta property="og:description" content="Razvijamo prilagođene plugine, teme i funkcionalnosti za WooCommerce prodavnice, rešavajući probleme sa performansama, kompatibilnošću i skalabilnošću." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zikmasolutions.rs/e-commerce/woocommerce-development" />
        
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
                  <span className="text-[#28A745]" itemProp="name">WooCommerce Development</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-[#28A745]/10 border border-[#28A745]/30 rounded-full px-4 py-2 mb-6" data-aos="fade-down">
                <Sparkles size={16} className="text-[#28A745]" />
                <span className="text-[#28A745] text-sm font-medium">WooCommerce Experts</span>
              </div>

              {/* H1 - Najvažniji SEO element */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-montserrat" data-aos="fade-up">
                WooCommerce Development<br />
                <span className="text-[#28A745]">po Meri</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Razvijamo prilagođene plugine, teme i funkcionalnosti za WooCommerce prodavnice, 
                rešavajući probleme sa performansama, kompatibilnošću i skalabilnošću.
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
                  <div className="text-gray-400 text-sm">Custom Plugina</div>
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
                Šta Dobijate WooCommerce Development Uslugama
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Kompletan paket custom rešenja za vašu WooCommerce prodavnicu
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
                Zašto Izabrati Nas za WooCommerce Development
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Profesionalan pristup i dokazana metodologija za WooCommerce projekte
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
                Kako Radimo na WooCommerce Development Projektima
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Strukturiran proces u 5 koraka za uspešan custom WooCommerce projekat
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
                Često Postavljana Pitanja o WooCommerce Development
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Odgovori na najčešća pitanja o custom WooCommerce razvoju
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
                Spremni za Custom WooCommerce Rešenje?
              </h2>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Kontaktirajte nas za besplatnu konsultaciju i procenu vašeg WooCommerce development projekta. 
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

export default WooCommerceDevelopment;
