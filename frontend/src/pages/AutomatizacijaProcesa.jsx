import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Zap, Target, Shield, Layers, TrendingUp, Users, Award, Headphones, BarChart, Sparkles, Settings, Database, Lock, LineChart, Bell, RefreshCw, Eye } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';

const AutomatizacijaProcesa = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <RefreshCw className="text-white" size={24} />,
      title: 'Automatizacija Rutinskih Zadataka',
      desc: 'Zamena manualnih, repetitivnih procesa digitalnim workflow-om, štedeći vreme zaposlenih i smanjujući greške.'
    },
    {
      icon: <Database className="text-white" size={24} />,
      title: 'Integracija Sistemske Logike',
      desc: 'Povezujemo ERP, CRM, skladište i druge sisteme kako bi podaci automatski prolazili kroz sve procese bez ručnog unosa.'
    },
    {
      icon: <Bell className="text-white" size={24} />,
      title: 'Real-time Monitoring i Notifikacije',
      desc: 'Praćenje procesa u realnom vremenu sa automatskim obaveštenjima o greškama, kašnjenjima ili zadacima.'
    },
    {
      icon: <BarChart className="text-white" size={24} />,
      title: 'Analitika i Izveštaji',
      desc: 'Automatsko generisanje izveštaja i dashboarda, omogućavajući menadžmentu brze i informisane odluke.'
    },
    {
      icon: <Layers className="text-white" size={24} />,
      title: 'Skalabilna Automatizacija',
      desc: 'Rešenja koja rastu sa vašim poslovanjem i omogućavaju dodavanje novih procesa i funkcionalnosti bez prekida rada.'
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: 'Bezbednost i Kontrola',
      desc: 'Automatizacija bez kompromisa na sigurnosti: kontrola pristupa, enkripcija podataka i audit log-ovi.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="text-[#28A745]" size={32} />,
      title: 'Smanjenje Grešaka i Troškova',
      desc: 'Automatizacijom procesa eliminišu se ljudske greške, štedi se vreme i smanjuju troškovi rada.'
    },
    {
      icon: <Zap className="text-[#28A745]" size={32} />,
      title: 'Povećanje Efikasnosti',
      desc: 'Procesi se odvijaju brže i preciznije, omogućavajući zaposlenima da se fokusiraju na strateške zadatke.'
    },
    {
      icon: <Eye className="text-[#28A745]" size={32} />,
      title: 'Transparentnost i Praćenje',
      desc: 'Sve aktivnosti su evidentirane, lako pratljive i dostupne u realnom vremenu, olakšavajući nadzor i optimizaciju.'
    },
    {
      icon: <Target className="text-[#28A745]" size={32} />,
      title: 'Fokus na Rast Poslovanja',
      desc: 'Sistem je modularan i skalabilan, omogućavajući brzo dodavanje novih automatizovanih procesa po potrebi.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Analiza Poslovnih Procesa',
      desc: 'Identifikujemo kritične procese, problematične tačke i zadatke koji se mogu automatizovati za maksimalnu efikasnost.'
    },
    {
      step: '02',
      title: 'Dizajn Automatizacije',
      desc: 'Kreiranje digitalnih workflow-a i prototipova procesa sa jasno definisanim pravilima i integracijama.'
    },
    {
      step: '03',
      title: 'Development i Integracije',
      desc: 'Implementacija automatizacije kroz web aplikacije, SaaS ili interne sisteme, sa integracijom svih relevantnih servisa.'
    },
    {
      step: '04',
      title: 'Testiranje & QA',
      desc: 'Detaljno testiranje automatizovanih procesa kako bi se osigurala preciznost, pouzdanost i kompatibilnost sa postojećim sistemima.'
    },
    {
      step: '05',
      title: 'Lansiranje & Podrška',
      desc: 'Deployment automatizovanih procesa, monitoring i kontinuirana podrška za optimizaciju i skaliranje.'
    }
  ];

  const faqs = [
    {
      question: 'Zašto je automatizacija važna za moj biznis?',
      answer: 'Bez automatizacije, poslovni procesi troše vreme, stvaraju greške i ograničavaju rast. Automatizacijom se štedi vreme, povećava efikasnost i preciznost.'
    },
    {
      question: 'Koje procese mogu automatizovati?',
      answer: 'Rutinske zadatke, workflow između sistema, generisanje izveštaja, notifikacije i komunikaciju između timova i alata.'
    },
    {
      question: 'Da li je integracija sa ERP/CRM sistemima moguća?',
      answer: 'Da, razvijamo rešenja koja povezuju sve vaše poslovne sisteme i omogućavaju besprekornu automatizaciju.'
    },
    {
      question: 'Da li automatizacija smanjuje kontrolu nad procesima?',
      answer: 'Ne, sve aktivnosti se prate u realnom vremenu, sa audit log-ovima i notifikacijama, čime se povećava kontrola i transparentnost.'
    },
    {
      question: 'Mogu li dodavati nove procese kasnije?',
      answer: 'Da, sistem je modularan i skalabilan, što omogućava lako dodavanje novih automatizovanih procesa i funkcionalnosti.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automatizacija Poslovnih Procesa",
    "provider": {
      "@type": "Organization",
      "name": "Zikma Solutions",
      "url": "https://zikmasolutions.rs"
    },
    "serviceType": "Business Process Automation",
    "areaServed": "RS",
    "description": "Implementiramo rešenja koja automatizuju rutinske i složene procese, smanjuju greške i povećavaju efikasnost vašeg poslovanja."
  };

  return (
    <>
      <Helmet>
        <title>Automatizacija Poslovnih Procesa – Povećajte Efikasnost i Produktivnost</title>
        <meta name="description" content="Implementiramo rešenja koja automatizuju rutinske i složene procese, smanjuju greške i povećavaju efikasnost vašeg poslovanja." />
        <meta name="keywords" content="automatizacija procesa, automatizacija poslovanja, workflow automatizacija, ERP integracije, CRM integracije" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Automatizacija Poslovnih Procesa – Povećajte Efikasnost i Produktivnost" />
        <meta property="og:description" content="Implementiramo rešenja koja automatizuju rutinske i složene procese, smanjuju greške i povećavaju efikasnost vašeg poslovanja." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zikmasolutions.rs/razvoj-softvera/automatizacija-procesa" />
        
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
                    <span itemProp="name">Razvoj Softvera</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                <li className="text-gray-600">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span className="text-[#28A745]" itemProp="name">Automatizacija Procesa</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-[#28A745]/10 border border-[#28A745]/30 rounded-full px-4 py-2 mb-6" data-aos="fade-down">
                <Sparkles size={16} className="text-[#28A745]" />
                <span className="text-[#28A745] text-sm font-medium">Process Automation</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-montserrat" data-aos="fade-up">
                Automatizacija Poslovnih Procesa<br />
                <span className="text-[#28A745]">po Meri</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Implementiramo rešenja koja automatizuju rutinske i složene procese, 
                smanjuju greške i povećavaju efikasnost vašeg poslovanja.
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
                  <div className="text-gray-400 text-sm">Automatizovanih Procesa</div>
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
                Šta Dobijate Automatizacijom Procesa
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

        {/* ZAŠTO MI */}
        <section className="py-20 bg-[#0f1419]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
                Zašto Izabrati Automatizaciju Procesa
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Smanjenje grešaka, povećanje efikasnosti i kontrola nad poslovnim procesima
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
                Kako Radimo na Automatizaciji Procesa
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Strukturiran proces u 5 koraka za uspešnu automatizaciju
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
                Često Postavljana Pitanja o Automatizaciji
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Odgovori na najčešća pitanja o automatizaciji poslovnih procesa
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
                Spremni za Automatizaciju Procesa?
              </h2>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Kontaktirajte nas za besplatnu analizu vaših poslovnih procesa i procenu automatizacije. 
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

export default AutomatizacijaProcesa;
