import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Zap, Target, Shield, Layers, TrendingUp, Users, Award, Headphones, BarChart, Sparkles, Settings, Database, Lock, LineChart, Bell, RefreshCw, Eye, Search, Globe, FileText, Link2, Activity } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';

const SEOOptimizacija = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Settings className="text-white" size={24} />,
      title: 'Tehnička SEO Optimizacija',
      desc: 'Ispravljanje grešaka, optimizacija brzine sajta, strukture URL-ova, sitemap-a i indeksiranja radi boljeg rangiranja.'
    },
    {
      icon: <FileText className="text-white" size={24} />,
      title: 'On-Page Optimizacija',
      desc: 'Analiza i optimizacija sadržaja, meta tagova, H1-H6 strukture, interne povezanosti i semantičkog SEO.'
    },
    {
      icon: <Search className="text-white" size={24} />,
      title: 'Keyword Strategija',
      desc: 'Istraživanje i primena relevantnih ključnih reči za vašu nišu, fokusirano na visokokonverzione termine i lokalni SEO.'
    },
    {
      icon: <Link2 className="text-white" size={24} />,
      title: 'Off-Page Optimizacija',
      desc: 'Link building, PR članci i strategija povećanja autoriteta domena kako bi vaš sajt bio konkurentan u pretragama.'
    },
    {
      icon: <Code className="text-white" size={24} />,
      title: 'SEO za CMS Platforme',
      desc: 'Optimizacija WordPress, PrestaShop i drugih platformi, rešavanje plugin konflikata i implementacija SEO najboljih praksi.'
    },
    {
      icon: <Activity className="text-white" size={24} />,
      title: 'Analitika i Praćenje',
      desc: 'Postavljanje i analiza Google Analytics, Search Console i drugih alata za praćenje performansi i ROI.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="text-[#28A745]" size={32} />,
      title: 'Povećanje Organskog Saobraćaja',
      desc: 'Pravilno optimizovan sajt privlači više posetilaca iz pretraživača, smanjuje bounce rate i povećava konverzije.'
    },
    {
      icon: <Settings className="text-[#28A745]" size={32} />,
      title: 'Rešenje Tehničkih Problema',
      desc: 'Otkrivamo i rešavamo tehničke greške koje mogu sabotirati SEO, uključujući sporo učitavanje, duplikate i loše indeksiranje.'
    },
    {
      icon: <Globe className="text-[#28A745]" size={32} />,
      title: 'Fokus na Lokalni i Globalni SEO',
      desc: 'Kreiramo strategiju koja povećava vidljivost kako na lokalnom tržištu tako i na globalnom nivou.'
    },
    {
      icon: <RefreshCw className="text-[#28A745]" size={32} />,
      title: 'Kontinuirano Praćenje i Optimizacija',
      desc: 'SEO nije jednokratna akcija – pratimo rezultate, prilagođavamo strategije i optimizujemo sajt kontinuirano.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'SEO Analiza',
      desc: 'Detaljno pregledamo vaš sajt, identifikujemo tehničke i sadržajne probleme i pripremamo strategiju optimizacije.'
    },
    {
      step: '02',
      title: 'Keyword Istraživanje',
      desc: 'Analiziramo konkurenciju i pronalazimo ključne reči koje donose najviše relevantnog saobraćaja.'
    },
    {
      step: '03',
      title: 'Implementacija Optimizacija',
      desc: 'Izvršavamo tehničke i sadržajne promene, uključujući meta tagove, strukturu sajta, interne linkove i schema markup.'
    },
    {
      step: '04',
      title: 'Off-Page Strategija',
      desc: 'Radimo na povećanju autoriteta domena kroz kvalitetne backlinkove, PR i društvene signale.'
    },
    {
      step: '05',
      title: 'Praćenje i Izveštavanje',
      desc: 'Postavljamo metrike uspeha i redovno pratimo rangiranje, saobraćaj i konverzije, prilagođavajući strategiju po potrebi.'
    }
  ];

  const faqs = [
    {
      question: 'Zašto je SEO važan za moj sajt?',
      answer: 'SEO povećava vidljivost sajta u pretraživačima, dovodi više relevantnih posetilaca, poboljšava UX i direktno utiče na prodaju i konverzije.'
    },
    {
      question: 'Koliko vremena je potrebno da se vide rezultati SEO optimizacije?',
      answer: 'SEO je proces koji zahteva kontinuirani rad – rezultati se obično vide kroz nekoliko meseci, zavisno od konkurencije i obima optimizacije.'
    },
    {
      question: 'Da li optimizujete i postojeći sadržaj sajta?',
      answer: 'Da, analiziramo postojeći sadržaj, optimizujemo ga za ključne reči, poboljšavamo strukturu i prilagođavamo SEO najboljim praksama.'
    },
    {
      question: 'Da li SEO uključuje i tehničke promene?',
      answer: 'Da, tehnička optimizacija je ključna – radimo na brzini sajta, mobilnoj responzivnosti, strukturiranim podacima i ispravci grešaka.'
    },
    {
      question: 'Da li SEO optimizacija uključuje i praćenje rezultata?',
      answer: 'Da, koristimo alate kao što su Google Analytics i Search Console za praćenje, izveštavanje i prilagođavanje strategije za maksimalni efekat.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Optimizacija",
    "provider": {
      "@type": "Organization",
      "name": "Zikma Solutions",
      "url": "https://zikmasolutions.rs"
    },
    "serviceType": "SEO Optimization",
    "areaServed": "RS",
    "description": "Poboljšavamo rangiranje vašeg sajta, povećavamo organski saobraćaj i optimizujemo tehničke i sadržajne aspekte sajta."
  };

  return (
    <>
      <Helmet>
        <title>SEO Optimizacija – Povećajte Vidljivost i Posete</title>
        <meta name="description" content="Poboljšavamo rangiranje vašeg sajta, povećavamo organski saobraćaj i optimizujemo tehničke i sadržajne aspekte sajta." />
        <meta name="keywords" content="SEO optimizacija, SEO srbija, optimizacija sajta, keyword istraživanje, link building, tehnički SEO" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SEO Optimizacija – Povećajte Vidljivost i Posete" />
        <meta property="og:description" content="Poboljšavamo rangiranje vašeg sajta, povećavamo organski saobraćaj i optimizujemo tehničke i sadržajne aspekte sajta." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zikmasolutions.rs/seo/optimizacija" />
        
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
                  <span className="text-[#28A745]" itemProp="name">Optimizacija</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-[#28A745]/10 border border-[#28A745]/30 rounded-full px-4 py-2 mb-6" data-aos="fade-down">
                <Sparkles size={16} className="text-[#28A745]" />
                <span className="text-[#28A745] text-sm font-medium">SEO Services</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-montserrat" data-aos="fade-up">
                Profesionalna SEO<br />
                <span className="text-[#28A745]">Optimizacija</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Poboljšavamo rangiranje vašeg sajta, povećavamo organski saobraćaj 
                i optimizujemo tehničke i sadržajne aspekte sajta.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
                <Link to="/kontakt">
                  <Button size="lg" className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-8 py-6 text-lg rounded-xl">
                    Besplatna SEO Analiza
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
                  <div className="text-gray-400 text-sm">Optimizovanih Sajtova</div>
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
                Šta Dobijate SEO Optimizacijom
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Kompletan paket funkcionalnosti za poboljšanje vidljivosti vašeg sajta
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
                Zašto Izabrati Našu SEO Optimizaciju
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Povećanje saobraćaja, tehničko rešavanje i kontinuirana optimizacija
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
                Kako Radimo na SEO Optimizaciji
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Strukturiran proces u 5 koraka za uspešnu SEO optimizaciju
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
                Često Postavljana Pitanja o SEO Optimizaciji
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Odgovori na najčešća pitanja o SEO optimizaciji sajta
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
                Spremni za SEO Optimizaciju?
              </h2>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Kontaktirajte nas za besplatnu SEO analizu vašeg sajta i strategiju optimizacije. 
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

export default SEOOptimizacija;
