import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Zap, Target, Shield, Layers, TrendingUp, Users, Award, Headphones, BarChart, Sparkles, Settings, Database, Lock, LineChart, Bell, RefreshCw, Eye, Search, Globe, FileText, Link2, Activity, MapPin, Star, Building } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';

const LokalniSEO = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <MapPin className="text-white" size={24} />,
      title: 'Optimizacija Google My Business Profila',
      desc: 'Kreiramo i optimizujemo GMB profil, dodajemo relevantne informacije, fotografije, recenzije i ključne kategorije za bolju vidljivost.'
    },
    {
      icon: <Search className="text-white" size={24} />,
      title: 'Lokalno Keyword Istraživanje',
      desc: 'Identifikujemo ključne fraze koje lokalni korisnici pretražuju i implementiramo ih u sadržaj, meta tagove i strukturu sajta.'
    },
    {
      icon: <FileText className="text-white" size={24} />,
      title: 'On-Page Lokalne SEO Strategije',
      desc: 'Optimizacija lokalnih landing stranica, naslova, meta opisa i schema markup-a za geografski relevantne pretrage.'
    },
    {
      icon: <Link2 className="text-white" size={24} />,
      title: 'Off-Page Lokalne Strategije',
      desc: 'Povezivanje sa lokalnim direktorijumima, recenzijama i backlinkovima koji povećavaju autoritet i lokalni rang sajta.'
    },
    {
      icon: <Star className="text-white" size={24} />,
      title: 'Map Pack i Lokalne Recenzije',
      desc: 'Povećavamo šanse da se vaš biznis pojavi u Google Map Pack-u i da recenzije budu istaknute za veći trust korisnika.'
    },
    {
      icon: <Activity className="text-white" size={24} />,
      title: 'Praćenje i Izveštavanje',
      desc: 'Redovno pratimo rangiranje, posete, klikove i lokalne konverzije kako bismo kontinuirano optimizovali strategiju.'
    }
  ];

  const benefits = [
    {
      icon: <Eye className="text-[#28A745]" size={32} />,
      title: 'Vidljivost u Lokalnim Pretragama',
      desc: 'Vaš biznis se pojavljuje tamo gde lokalni kupci traže usluge ili proizvode koje nudite, povećavajući posete i prodaju.'
    },
    {
      icon: <Users className="text-[#28A745]" size={32} />,
      title: 'Povećanje Povratnih Posetilaca',
      desc: 'Lokalni SEO omogućava da vas korisnici lakše pronađu, što povećava šanse za ponovnu posetu i lojalnost.'
    },
    {
      icon: <Target className="text-[#28A745]" size={32} />,
      title: 'Dominacija u Lokalu',
      desc: 'Kombinacija on-page i off-page strategija čini da budete konkurentni i istaknuti u svojoj oblasti.'
    },
    {
      icon: <BarChart className="text-[#28A745]" size={32} />,
      title: 'Transparentno Praćenje Rezultata',
      desc: 'Sve metrike i KPI-jevi se prate, analiziraju i prilagođavaju kako bi optimizacija davala maksimalne rezultate.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Analiza Lokalne Konkurencije',
      desc: 'Identifikujemo ključne konkurente, njihove prednosti i slabosti u lokalnom SEO kako bismo kreirali efikasnu strategiju.'
    },
    {
      step: '02',
      title: 'Optimizacija Web Sajta',
      desc: 'Implementiramo lokalne ključne reči, optimizujemo strukturu sajta, meta tagove i schema markup za lokalne pretrage.'
    },
    {
      step: '03',
      title: 'Google My Business i Direktori',
      desc: 'Kreiramo i optimizujemo GMB profil, dodajemo firmu u relevantne lokalne direktorijume i upravljamo recenzijama.'
    },
    {
      step: '04',
      title: 'Link Building i Off-Page Strategije',
      desc: 'Radimo na lokalnim backlinkovima i PR aktivnostima kako bi vaš sajt postao autoritet u lokalnoj niši.'
    },
    {
      step: '05',
      title: 'Praćenje i Optimizacija',
      desc: 'Redovno pratimo rezultate, analiziramo metrike i kontinuirano prilagođavamo strategiju za maksimalni efekat.'
    }
  ];

  const faqs = [
    {
      question: 'Šta je lokalni SEO i zašto mi je potreban?',
      answer: 'Lokalni SEO optimizuje vaš biznis za pretrage koje dolaze od korisnika u vašoj oblasti, povećava posete, pozive i konverzije.'
    },
    {
      question: 'Da li optimizujete Google My Business profil?',
      answer: 'Da, kreiramo, optimizujemo i održavamo GMB profil sa tačnim podacima, fotografijama, kategorijama i recenzijama.'
    },
    {
      question: 'Kako lokalni SEO utiče na prodaju?',
      answer: 'Povećava vidljivost u lokalnim pretragama, što dovodi do više korisnika, poseta i direktnih konverzija u vašem poslovanju.'
    },
    {
      question: 'Da li je potrebno imati web sajt za lokalni SEO?',
      answer: 'Da, web sajt je ključan, jer omogućava implementaciju lokalnih ključnih reči, strukture, sadržaja i tehničkih optimizacija.'
    },
    {
      question: 'Koliko vremena je potrebno da se vidi efekat lokalnog SEO?',
      answer: 'Rezultati zavise od konkurencije i obima optimizacije, ali obično su vidljivi nakon nekoliko meseci kontinuiranog rada.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Lokalni SEO Optimizacija",
    "provider": {
      "@type": "Organization",
      "name": "Zikma Solutions",
      "url": "https://zikmasolutions.rs"
    },
    "serviceType": "Local SEO Optimization",
    "areaServed": "RS",
    "description": "Pomažemo lokalnim preduzećima da se rangiraju na vrhu pretraga, privuku više kupaca i dominiraju u svojoj oblasti."
  };

  return (
    <>
      <Helmet>
        <title>Lokalni SEO – Povećajte Vidljivost Vašeg Biznisa u Srbiji</title>
        <meta name="description" content="Pomažemo lokalnim preduzećima da se rangiraju na vrhu pretraga, privuku više kupaca i dominiraju u svojoj oblasti." />
        <meta name="keywords" content="lokalni SEO, SEO srbija, google my business, lokalna optimizacija, lokalni marketing" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Lokalni SEO – Povećajte Vidljivost Vašeg Biznisa u Srbiji" />
        <meta property="og:description" content="Pomažemo lokalnim preduzećima da se rangiraju na vrhu pretraga, privuku više kupaca i dominiraju u svojoj oblasti." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zikmasolutions.rs/seo/lokalni-seo" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0f1419]">
        {/* HERO SEKCIJA */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1419] via-[#1a2332] to-[#0f1419]">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#28A745] rounded-full filter blur-[120px]"></div>
              <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#ff6f61] rounded-full filter blur-[120px]"></div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
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
                    <span itemProp="name">SEO</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                <li className="text-gray-600">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span className="text-[#28A745]" itemProp="name">Lokalni SEO</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-[#28A745]/10 border border-[#28A745]/30 rounded-full px-4 py-2 mb-6" data-aos="fade-down">
                <Sparkles size={16} className="text-[#28A745]" />
                <span className="text-[#28A745] text-sm font-medium">Local SEO</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-montserrat" data-aos="fade-up">
                Lokalni SEO<br />
                <span className="text-[#28A745]">Optimizacija</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Pomažemo lokalnim preduzećima da se rangiraju na vrhu pretraga, 
                privuku više kupaca i dominiraju u svojoj oblasti.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
                <Link to="/kontakt">
                  <Button size="lg" className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-8 py-6 text-lg rounded-xl">
                    Besplatna Lokalna Analiza
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
                  <div className="text-gray-400 text-sm">Lokalnih Biznisa</div>
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

        {/* ŠTA NUDIMO - Features */}
        <section className="py-20 bg-[#0a0c0f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
                Šta Dobijate Lokalnim SEO
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Kompletan paket funkcionalnosti za dominaciju u lokalnim pretragama
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

        {/* ZAŠTO MI */}
        <section className="py-20 bg-[#0f1419]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
                Zašto Izabrati Lokalni SEO
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Vidljivost, dominacija i praćenje rezultata u lokalnim pretragama
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

        {/* PROCES RADA */}
        <section className="py-20 bg-[#0a0c0f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
                Kako Radimo na Lokalnom SEO
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Strukturiran proces u 5 koraka za uspešnu lokalnu optimizaciju
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

        {/* FAQ */}
        <section className="py-20 bg-[#0f1419]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
                Često Postavljana Pitanja o Lokalnom SEO
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Odgovori na najčešća pitanja o lokalnoj SEO optimizaciji
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

        {/* CTA SEKCIJA */}
        <section className="py-20 bg-gradient-to-br from-[#28A745] to-[#1E7E34] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-[100px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-montserrat">
                Spremni za Lokalnu Dominaciju?
              </h2>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Kontaktirajte nas za besplatnu analizu lokalnog SEO i strategiju optimizacije. 
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

export default LokalniSEO;
