import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Zap, Target, Shield, Layers, TrendingUp, Users, Award, Headphones, BarChart, Sparkles, Settings, Database, Lock, LineChart, Bell, RefreshCw, Eye, Search, Globe, FileText, Link2, Activity, ClipboardList, FileSearch, PieChart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';

const SEOAnaliza = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Settings className="text-white" size={24} />,
      title: 'Tehnička SEO Analiza',
      desc: 'Pregled sajta za greške u indeksiranju, strukturi, meta tagovima, schema markup-u i URL arhitekturi.'
    },
    {
      icon: <FileText className="text-white" size={24} />,
      title: 'Analiza Sadržaja',
      desc: 'Procena kvalitetnog sadržaja, keyword optimizacije, interne povezanosti i blog strategije.'
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: 'Konkurentska Analiza',
      desc: 'Upoređujemo vaš sajt sa konkurencijom u vašoj niši i identifikujemo prednosti i slabosti.'
    },
    {
      icon: <Link2 className="text-white" size={24} />,
      title: 'Backlink Profil',
      desc: 'Analiziramo kvalitet i kvantitet povratnih linkova, identifikujemo rizike i prilike za link building.'
    },
    {
      icon: <Globe className="text-white" size={24} />,
      title: 'Lokalna i Globalna Vidljivost',
      desc: 'Procena prisustva sajta u lokalnim i globalnim pretragama, preporuke za poboljšanje pozicija.'
    },
    {
      icon: <ClipboardList className="text-white" size={24} />,
      title: 'SEO Preporuke i Akcioni Plan',
      desc: 'Detaljan plan sa prioritetima za tehničku, sadržajnu i off-page optimizaciju, za brže i dugoročne rezultate.'
    }
  ];

  const benefits = [
    {
      icon: <FileSearch className="text-[#28A745]" size={32} />,
      title: 'Otkrivanje Kritičnih Problema',
      desc: 'Identifikujemo sve prepreke koje sprečavaju sajt da se rangira bolje i dobije više relevantnog saobraćaja.'
    },
    {
      icon: <TrendingUp className="text-[#28A745]" size={32} />,
      title: 'Strategija za Povećanje Vidljivosti',
      desc: 'Na osnovu analize kreiramo akcioni plan za unapređenje SEO performansi sajta.'
    },
    {
      icon: <Target className="text-[#28A745]" size={32} />,
      title: 'Praćenje Konkurencije',
      desc: 'Razumevanje gde konkurencija ima prednosti i kako ih nadmašiti u rezultatima pretrage.'
    },
    {
      icon: <PieChart className="text-[#28A745]" size={32} />,
      title: 'Pouzdana Preporuka',
      desc: 'Naša analiza pruža jasan put ka optimizaciji sajta i povećanju organskih poseta i konverzija.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Prikupljanje Podataka',
      desc: 'Pristupamo sajtu, Google Analytics, Search Console i drugim relevantnim alatima za detaljan uvid.'
    },
    {
      step: '02',
      title: 'Tehnička i Sadržajna Analiza',
      desc: 'Pregled strukture sajta, meta tagova, sadržaja, linkova i svih elemenata koji utiču na SEO.'
    },
    {
      step: '03',
      title: 'Analiza Konkurencije',
      desc: 'Upoređujemo sajt sa ključnim konkurentima i identifikujemo gde su prednosti i slabosti.'
    },
    {
      step: '04',
      title: 'Izrada Akcionog Plana',
      desc: 'Pripremamo listu prioritetnih SEO akcija, uključujući tehničke, sadržajne i off-page preporuke.'
    },
    {
      step: '05',
      title: 'Prezentacija i Konsultacija',
      desc: 'Predstavljamo nalaz i preporuke klijentu, sa savetima za implementaciju i dalji razvoj SEO strategije.'
    }
  ];

  const faqs = [
    {
      question: 'Šta obuhvata SEO analiza?',
      answer: 'SEO analiza uključuje tehnički pregled sajta, analizu sadržaja, konkurencije, backlink profila, vidljivosti u pretragama i predlog akcija za optimizaciju.'
    },
    {
      question: 'Zašto je SEO analiza važna?',
      answer: 'Bez analize ne znate gde su problemi, koje stranice rangiraju loše ili šta konkurencija radi bolje. Analiza daje jasan plan za poboljšanja.'
    },
    {
      question: 'Da li je analiza dovoljna ili je potrebna i implementacija?',
      answer: 'Analiza je prvi korak – daje smernice. Implementacija preporuka vodi ka poboljšanju rangiranja i organskih poseta.'
    },
    {
      question: 'Koliko traje SEO analiza?',
      answer: 'Trajanje zavisi od obima sajta, ali detaljna analiza pruža kompletnu sliku problema i prilika za optimizaciju.'
    },
    {
      question: 'Da li mogu da dobijem i akcioni plan za implementaciju?',
      answer: 'Da, svaki klijent dobija detaljan akcioni plan sa prioritetima za tehničku, sadržajnu i off-page optimizaciju.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Analiza Sajta",
    "provider": {
      "@type": "Organization",
      "name": "Zikma Solutions",
      "url": "https://zikmasolutions.rs"
    },
    "serviceType": "SEO Analysis",
    "areaServed": "RS",
    "description": "Detaljna analiza sajta koja otkriva tehničke i sadržajne probleme, rangiranje i prilike za povećanje vidljivosti i poseta."
  };

  return (
    <>
      <Helmet>
        <title>SEO Analiza Sajta – Otkrivanje Problema i Prilika</title>
        <meta name="description" content="Detaljna analiza sajta koja otkriva tehničke i sadržajne probleme, rangiranje i prilike za povećanje vidljivosti i poseta." />
        <meta name="keywords" content="SEO analiza, analiza sajta, SEO audit, konkurentska analiza, backlink analiza" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SEO Analiza Sajta – Otkrivanje Problema i Prilika" />
        <meta property="og:description" content="Detaljna analiza sajta koja otkriva tehničke i sadržajne probleme, rangiranje i prilike za povećanje vidljivosti i poseta." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zikmasolutions.rs/seo/analiza" />
        
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
                  <span className="text-[#28A745]" itemProp="name">Analiza</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-[#28A745]/10 border border-[#28A745]/30 rounded-full px-4 py-2 mb-6" data-aos="fade-down">
                <Sparkles size={16} className="text-[#28A745]" />
                <span className="text-[#28A745] text-sm font-medium">SEO Audit</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-montserrat" data-aos="fade-up">
                SEO Analiza<br />
                <span className="text-[#28A745]">Vašeg Sajta</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Detaljna analiza sajta koja otkriva tehničke i sadržajne probleme, 
                rangiranje i prilike za povećanje vidljivosti i poseta.
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
                  <div className="text-3xl font-bold text-[#28A745]">500+</div>
                  <div className="text-gray-400 text-sm">Analiziranih Sajtova</div>
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
                Šta Dobijate SEO Analizom
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Kompletan uvid u stanje sajta i plan za optimizaciju
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
                Zašto Izabrati Našu SEO Analizu
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Otkrivanje problema, strategija i praćenje konkurencije
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
                Kako Radimo SEO Analizu
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Strukturiran proces u 5 koraka za detaljnu analizu sajta
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
                Često Postavljana Pitanja o SEO Analizi
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Odgovori na najčešća pitanja o analizi sajta
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
                Spremni za SEO Analizu?
              </h2>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Kontaktirajte nas za besplatnu SEO analizu vašeg sajta i akcioni plan za optimizaciju. 
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

export default SEOAnaliza;
