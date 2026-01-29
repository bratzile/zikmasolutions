import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Palette, TrendingUp, Smartphone, Zap, Shield, Layers, Users, Award, Target, Headphones, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';

const IzradaWooCommerceProdavnice = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Palette className="text-white" size={24} />,
      title: 'Custom Dizajn Prodavnice',
      desc: 'Jedinstveni vizuelni identitet vaše online prodavnice sa fokusom na korisničko iskustvo i povećanje konverzija.'
    },
    {
      icon: <TrendingUp className="text-white" size={24} />,
      title: 'SEO Optimizacija',
      desc: 'Ugrađena tehnička i on-page SEO optimizacija za bolje rangiranje proizvoda i kategorija na pretraživačima.'
    },
    {
      icon: <Smartphone className="text-white" size={24} />,
      title: 'Responzivna Prodavnica',
      desc: 'Optimalno iskustvo za sve uređaje – desktop, tablet i mobilni telefoni – sa jednostavnom navigacijom i kupovinom.'
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'Brze Performanse',
      desc: 'Optimizacija brzine učitavanja stranica i proizvoda, lazy loading slika i poboljšan workflow za kupce.'
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: 'Sigurnost i Backup',
      desc: 'Zaštita od hakerskih napada, SSL sertifikat i redovni backup-ovi podataka prodavnice.'
    },
    {
      icon: <Layers className="text-white" size={24} />,
      title: 'Skalabilnost i Nadogradnja',
      desc: 'Arhitektura spremna za dodavanje novih funkcionalnosti, proizvoda i modula, omogućavajući rast vaše online prodavnice.'
    }
  ];

  const benefits = [
    {
      icon: <Award className="text-[#28A745]" size={32} />,
      title: 'Iskustvo u WooCommerce Razvoju',
      desc: 'Naš tim ima dugogodišnje iskustvo u izradi i prilagođavanju WooCommerce prodavnica, sa stotinama realizovanih projekata i zadovoljnim klijentima.'
    },
    {
      icon: <Headphones className="text-[#28A745]" size={32} />,
      title: 'Pouzdana Podrška',
      desc: 'Pružamo tehničku podršku i održavanje prodavnice, osiguravajući stabilan rad i nesmetano poslovanje.'
    },
    {
      icon: <TrendingUp className="text-[#28A745]" size={32} />,
      title: 'SEO i Marketing Fokus',
      desc: 'Brinemo o SEO optimizaciji i konverzijama, kako bi vaša prodavnica imala bolju vidljivost i prodaju.'
    },
    {
      icon: <Target className="text-[#28A745]" size={32} />,
      title: 'Fokus na Vaš Biznis',
      desc: 'Mi brinemo o tehničkim i dizajnerskim detaljima, dok se vi fokusirate na rast i prodaju proizvoda online.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Analiza Potreba',
      desc: 'Procena ciljeva vaše prodavnice, identifikacija ključnih proizvoda i konkurencije, i kreiranje strategije razvoja WooCommerce rešenja.'
    },
    {
      step: '02',
      title: 'UI/UX Dizajn',
      desc: 'Kreiranje modernog i intuitivnog dizajna prodavnice sa interaktivnim prototipovima i fokusom na korisničko iskustvo.'
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Implementacija dizajna u WooCommerce, konfiguracija pluginova i optimizacija funkcionalnosti prodavnice.'
    },
    {
      step: '04',
      title: 'Testiranje & QA',
      desc: 'Detaljno testiranje funkcionalnosti, procesa kupovine, kompatibilnosti i brzine sajta pre lansiranja.'
    },
    {
      step: '05',
      title: 'Lansiranje & Podrška',
      desc: 'Deployment prodavnice, konfiguracija SSL-a i post-launch podrška, uključujući održavanje i tehničku asistenciju.'
    }
  ];

  const faqs = [
    {
      question: 'Zašto odabrati WooCommerce za online prodavnicu?',
      answer: 'WooCommerce je fleksibilna i skalabilna e-commerce platforma unutar WordPress-a, omogućavajući jednostavno upravljanje proizvodima, narudžbinama i modulima.'
    },
    {
      question: 'Mogu li samostalno dodavati nove proizvode i kategorije?',
      answer: 'Da, WooCommerce omogućava jednostavno dodavanje i upravljanje proizvodima i kategorijama direktno iz admin panela.'
    },
    {
      question: 'Da li je SEO optimizacija uključena?',
      answer: 'Da, svaka prodavnica ima tehničku i on-page SEO optimizaciju kako bi proizvodi i kategorije bolje rangirali na pretraživačima.'
    },
    {
      question: 'Da li pružate podršku nakon lansiranja?',
      answer: 'Da, pružamo tehničku podršku, održavanje i optimizaciju prodavnice kako bi radila stabilno i bez problema.'
    },
    {
      question: 'Mogu li kasnije dodavati nove funkcionalnosti?',
      answer: 'Da, WooCommerce prodavnice su modularne i skalabilne, što omogućava dodavanje novih funkcionalnosti u svakom trenutku.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Izrada WooCommerce Prodavnice",
    "provider": {
      "@type": "Organization",
      "name": "Zikma Solutions",
      "url": "https://zikmasolutions.rs"
    },
    "serviceType": "E-commerce Development",
    "areaServed": "RS",
    "description": "Profesionalna izrada WooCommerce prodavnica sa SEO optimizacijom i custom dizajnom."
  };

  return (
    <>
      <Helmet>
        <title>Izrada WooCommerce Prodavnice – Profesionalni E-commerce</title>
        <meta name="description" content="Razvijamo skalabilne i optimizovane WooCommerce prodavnice koje olakšavaju prodaju, upravljanje proizvodima i rast vašeg online biznisa." />
        <meta name="keywords" content="izrada woocommerce prodavnice, woocommerce development, online prodavnica, e-commerce srbija, woocommerce srbija" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Izrada WooCommerce Prodavnice – Profesionalni E-commerce" />
        <meta property="og:description" content="Razvijamo skalabilne i optimizovane WooCommerce prodavnice koje olakšavaju prodaju, upravljanje proizvodima i rast vašeg online biznisa." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zikmasolutions.rs/e-commerce/izrada-woocommerce-prodavnice" />
        
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
                  <span className="text-[#28A745]" itemProp="name">WooCommerce Prodavnica</span>
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
                Profesionalna Izrada<br />
                <span className="text-[#28A745]">WooCommerce Prodavnice</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Razvijamo skalabilne i optimizovane WooCommerce prodavnice koje olakšavaju 
                prodaju, upravljanje proizvodima i rast vašeg online biznisa.
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
                  <div className="text-gray-400 text-sm">WooCommerce Prodavnica</div>
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
                Šta Dobijate Izradom WooCommerce Prodavnice
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Kompletan paket funkcionalnosti za uspešnu online prodavnicu
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
                Profesionalan pristup i dokazana metodologija za e-commerce projekte
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
                Kako Radimo na Izradi WooCommerce Prodavnice
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Strukturiran proces u 5 koraka za uspešnu online prodavnicu
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
                Često Postavljana Pitanja o WooCommerce Prodavnici
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Odgovori na najčešća pitanja o izradi WooCommerce online prodavnica
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
                Spremni za WooCommerce Prodavnicu?
              </h2>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Kontaktirajte nas za besplatnu konsultaciju i procenu vašeg e-commerce projekta. 
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

export default IzradaWooCommerceProdavnice;
