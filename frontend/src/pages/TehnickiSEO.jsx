import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Zap, Target, Shield, Layers, TrendingUp, Users, Award, Headphones, BarChart, Sparkles, Settings, Database, Lock, LineChart, Bell, RefreshCw, Eye, Search, Globe, FileText, Link2, Activity, MapPin, Star, Building, Smartphone, Server, Gauge } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';

const TehnickiSEO = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Gauge className="text-white" size={24} />,
      title: 'Optimizacija Brzine Sajta',
      desc: 'Poboljšavamo performanse sajta kroz optimizaciju koda, slika, lazy loading, caching i CDN implementaciju.'
    },
    {
      icon: <Smartphone className="text-white" size={24} />,
      title: 'Mobile-Friendly i Responsivni Dizajn',
      desc: 'Prilagođavamo sajt svim uređajima i veličinama ekrana kako bi korisnici imali besprekorno iskustvo.'
    },
    {
      icon: <Layers className="text-white" size={24} />,
      title: 'Struktura Sajta i URL Optimizacija',
      desc: 'Kreiramo logičnu strukturu stranica, čiste URL-ove, internu povezanost i sitemap za bolje indeksiranje.'
    },
    {
      icon: <Code className="text-white" size={24} />,
      title: 'Schema i Structured Data',
      desc: 'Implementiramo schema markup za poboljšanje prikaza u SERP-u i omogućavamo rich snippets za bolju vidljivost.'
    },
    {
      icon: <Search className="text-white" size={24} />,
      title: 'Indeksiranje i Crawlability',
      desc: 'Osiguravamo pravilno indeksiranje stranica, rešavamo duplikate, kanonizaciju i blokade za pretraživače.'
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: 'Sigurnost i HTTPS',
      desc: 'Postavljanje SSL sertifikata, zaštita od napada, backup-ovi i implementacija sigurnosnih protokola.'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="text-[#28A745]" size={32} />,
      title: 'Brži i Efikasniji Sajt',
      desc: 'Optimizacija performansi smanjuje bounce rate, poboljšava UX i povećava rangiranje u pretraživačima.'
    },
    {
      icon: <Search className="text-[#28A745]" size={32} />,
      title: 'Bolje Indeksiranje',
      desc: 'Pravilna struktura, sitemap i schema olakšavaju pretraživačima da indeksiraju i razumeju vaš sadržaj.'
    },
    {
      icon: <Smartphone className="text-[#28A745]" size={32} />,
      title: 'Mobilna Prilagođenost',
      desc: 'Sajt optimizovan za sve uređaje povećava angažman korisnika i doprinosi boljim rezultatima SEO-a.'
    },
    {
      icon: <Lock className="text-[#28A745]" size={32} />,
      title: 'Siguran i Pouzdan Sajt',
      desc: 'Implementacija HTTPS i sigurnosnih protokola štiti podatke korisnika i povećava poverenje pretraživača i klijenata.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Audit Tehničkog SEO',
      desc: 'Analiziramo brzinu, sigurnost, strukturu i indeksiranje sajta, identifikujemo tehničke probleme koji utiču na SEO.'
    },
    {
      step: '02',
      title: 'Optimizacija Performansi',
      desc: 'Poboljšavamo brzinu sajta kroz kod, slike, caching, lazy loading i CDN integraciju.'
    },
    {
      step: '03',
      title: 'Mobile i Struktura',
      desc: 'Prilagođavamo sajt svim uređajima, uređujemo URL-ove, internu povezanost i sitemap za maksimalnu crawlability.'
    },
    {
      step: '04',
      title: 'Implementacija Schema i Structured Data',
      desc: 'Dodajemo schema markup za poboljšan prikaz u SERP-u i omogućavamo rich snippets i bolju SEO vidljivost.'
    },
    {
      step: '05',
      title: 'Sigurnost i Monitoring',
      desc: 'Postavljamo SSL, backup-ove i sigurnosne protokole, pratimo performanse i indeksiranje kako bi sajt bio stabilan i siguran.'
    }
  ];

  const faqs = [
    {
      question: 'Šta je tehnički SEO i zašto je važan?',
      answer: 'Tehnički SEO obuhvata optimizaciju brzine, strukture, mobilne prilagodljivosti, schema markup-a i sigurnosti sajta, što direktno utiče na rangiranje i UX.'
    },
    {
      question: 'Kako brzina sajta utiče na SEO?',
      answer: 'Sporo učitavanje povećava bounce rate, smanjuje angažman korisnika i negativno utiče na rangiranje u pretraživačima.'
    },
    {
      question: 'Da li tehnički SEO uključuje mobilnu optimizaciju?',
      answer: 'Da, responsive dizajn i mobile-friendly pristup su ključni za korisničko iskustvo i SEO rangiranje.'
    },
    {
      question: 'Šta je schema markup i kako pomaže?',
      answer: 'Schema markup omogućava pretraživačima da bolje razumeju sadržaj sajta i prikazuju rich snippets, što povećava CTR i vidljivost.'
    },
    {
      question: 'Da li tehnički SEO utiče na sigurnost sajta?',
      answer: 'Da, implementacija HTTPS, sigurnosnih protokola i backup-a štiti sajt i podatke korisnika, što takođe doprinosi poverenju pretraživača.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tehnički SEO",
    "provider": {
      "@type": "Organization",
      "name": "Zikma Solutions",
      "url": "https://zikmasolutions.rs"
    },
    "serviceType": "Technical SEO",
    "areaServed": "RS",
    "description": "Optimizujemo tehničke aspekte sajta kako bi bio brz, siguran, mobilan i lako indeksiran od strane pretraživača."
  };

  return (
    <>
      <Helmet>
        <title>Tehnički SEO – Brzina, Struktura i Sigurnost Sajta</title>
        <meta name="description" content="Optimizujemo tehničke aspekte sajta kako bi bio brz, siguran, mobilan i lako indeksiran od strane pretraživača." />
        <meta name="keywords" content="tehnički SEO, brzina sajta, mobile SEO, schema markup, HTTPS, indeksiranje" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Tehnički SEO – Brzina, Struktura i Sigurnost Sajta" />
        <meta property="og:description" content="Optimizujemo tehničke aspekte sajta kako bi bio brz, siguran, mobilan i lako indeksiran od strane pretraživača." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zikmasolutions.rs/seo/tehnicki-seo" />
        
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
                  <span className="text-[#28A745]" itemProp="name">Tehnički SEO</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-[#28A745]/10 border border-[#28A745]/30 rounded-full px-4 py-2 mb-6" data-aos="fade-down">
                <Sparkles size={16} className="text-[#28A745]" />
                <span className="text-[#28A745] text-sm font-medium">Technical SEO</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-montserrat" data-aos="fade-up">
                Profesionalni Tehnički<br />
                <span className="text-[#28A745]">SEO</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Optimizujemo tehničke aspekte sajta kako bi bio brz, siguran, 
                mobilan i lako indeksiran od strane pretraživača.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
                <Link to="/kontakt">
                  <Button size="lg" className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-8 py-6 text-lg rounded-xl">
                    Besplatni Tehnički Audit
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
                Šta Dobijate Tehničkim SEO
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Kompletan paket funkcionalnosti za tehničku optimizaciju sajta
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
                Zašto Izabrati Tehnički SEO
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Brzina, indeksiranje, mobilna prilagođenost i sigurnost sajta
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
                Kako Radimo na Tehničkom SEO
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Strukturiran proces u 5 koraka za tehničku optimizaciju sajta
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
                Često Postavljana Pitanja o Tehničkom SEO
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Odgovori na najčešća pitanja o tehničkoj SEO optimizaciji
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
                Spremni za Tehnički SEO Audit?
              </h2>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Kontaktirajte nas za besplatnu tehničku analizu sajta i strategiju optimizacije. 
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

export default TehnickiSEO;
