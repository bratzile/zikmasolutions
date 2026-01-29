import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Zap, Target, Shield, Layers, TrendingUp, Users, Award, Headphones, BarChart, Sparkles, Settings, Database, Lock, LineChart, Bell, RefreshCw, Eye, Bot, Brain, MessageSquare, Cpu } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';

const AIAgenti = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <MessageSquare className="text-white" size={24} />,
      title: 'Automatizacija Komunikacije',
      desc: 'AI agenti odgovaraju na upite korisnika, šalju obaveštenja i podržavaju korisnički servis 24/7, smanjujući rad ljudskog tima.'
    },
    {
      icon: <Brain className="text-white" size={24} />,
      title: 'Analiza Podataka i Predikcije',
      desc: 'Agenti koriste AI za analizu velikih količina podataka i daju predikcije ili preporuke za poslovne odluke.'
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: 'Personalizacija Korisničkog Iskustva',
      desc: 'AI agenti prilagođavaju sadržaj, ponude i preporuke svakom korisniku, povećavajući angažman i konverzije.'
    },
    {
      icon: <Database className="text-white" size={24} />,
      title: 'Integracija sa Poslovnim Sistemima',
      desc: 'Povezujemo AI agente sa CRM, ERP, e-commerce, web i mobilnim aplikacijama radi besprekornog rada i automatizacije.'
    },
    {
      icon: <Cpu className="text-white" size={24} />,
      title: 'Pametno Automatizovani Procesi',
      desc: 'Agenti mogu da upravljaju rutinskim zadacima, workflow-om i analizom podataka, oslobađajući resurse za strateške aktivnosti.'
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: 'Sigurnost i Kontrola',
      desc: 'AI agenti rade sa kontrolom pristupa i sigurnim protokolima, sa audit log-ovima i enkripcijom podataka.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="text-[#28A745]" size={32} />,
      title: 'Efikasnija Poslovanja',
      desc: 'Automatizacijom interakcija i analiza podataka, AI agenti štede vreme zaposlenih i povećavaju produktivnost.'
    },
    {
      icon: <Zap className="text-[#28A745]" size={32} />,
      title: 'Brže i Preciznije Odluke',
      desc: 'Agenti analiziraju podatke u realnom vremenu i daju preporuke, omogućavajući menadžmentu donošenje bržih i preciznijih odluka.'
    },
    {
      icon: <Target className="text-[#28A745]" size={32} />,
      title: 'Povećanje Angažmana Korisnika',
      desc: 'Personalizovani odgovori i preporuke podižu korisničko iskustvo i povećavaju konverzije i lojalnost.'
    },
    {
      icon: <Layers className="text-[#28A745]" size={32} />,
      title: 'Skalabilnost i Integracije',
      desc: 'AI agenti se lako integrišu u postojeće sisteme i skaliraju sa rastom poslovanja, bez prekida rada ili dodatnog opterećenja.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Analiza Poslovnih Potreba',
      desc: 'Identifikujemo gde AI agent može dodati vrednost – korisnička podrška, automatizacija procesa ili analiza podataka.'
    },
    {
      step: '02',
      title: 'Dizajn AI Agenta',
      desc: 'Kreiramo logiku, tok interakcija i modele za analizu podataka, prilagođene specifičnim potrebama klijenta.'
    },
    {
      step: '03',
      title: 'Razvoj i Integracija',
      desc: 'Implementiramo AI agenta, treniramo modele i integrišemo ga sa poslovnim sistemima i aplikacijama.'
    },
    {
      step: '04',
      title: 'Testiranje & QA',
      desc: 'Detaljno testiramo performanse, preciznost odgovora, integracije i sigurnost AI agenta pre lansiranja.'
    },
    {
      step: '05',
      title: 'Lansiranje & Podrška',
      desc: 'Deploy AI agenta, monitoring performansi i kontinuirana optimizacija kako bi agent bio pouzdan i efikasan.'
    }
  ];

  const faqs = [
    {
      question: 'Šta je AI agent i čemu služi?',
      answer: 'AI agent je softverski sistem koji koristi veštačku inteligenciju za obavljanje zadataka, automatizaciju procesa, interakciju sa korisnicima i analizu podataka.'
    },
    {
      question: 'Gde mogu koristiti AI agente u svom biznisu?',
      answer: 'U korisničkoj podršci, prodaji, automatizaciji workflow-a, predikcijama i analizi podataka, kao i u personalizaciji korisničkog iskustva.'
    },
    {
      question: 'Da li AI agent može zameniti ljudski tim?',
      answer: 'Ne, agent automatizuje rutinske i repetitivne zadatke, ali strateške odluke i kreativni rad i dalje zahtevaju ljudsku kontrolu.'
    },
    {
      question: 'Kako AI agenti poboljšavaju korisničko iskustvo?',
      answer: 'Agenti daju brze i personalizovane odgovore, preporuke i obaveštenja, čime povećavaju angažman, lojalnost i konverzije korisnika.'
    },
    {
      question: 'Da li je korišćenje AI agenata sigurno?',
      answer: 'Da, svi agenti rade u sigurnom okruženju sa kontrolom pristupa, enkripcijom i audit log-ovima, štiteći podatke i poslovne informacije.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Agenti po Meri",
    "provider": {
      "@type": "Organization",
      "name": "Zikma Solutions",
      "url": "https://zikmasolutions.rs"
    },
    "serviceType": "AI Agent Development",
    "areaServed": "RS",
    "description": "Implementiramo AI agente koji automatizuju procese, analiziraju podatke i pomažu u donošenju brzih i preciznih poslovnih odluka."
  };

  return (
    <>
      <Helmet>
        <title>AI Agenti – Automatizacija, Inteligencija i Personalizacija</title>
        <meta name="description" content="Implementiramo AI agente koji automatizuju procese, analiziraju podatke i pomažu u donošenju brzih i preciznih poslovnih odluka." />
        <meta name="keywords" content="AI agenti, veštačka inteligencija, automatizacija, chatbot, machine learning, personalizacija" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Agenti – Automatizacija, Inteligencija i Personalizacija" />
        <meta property="og:description" content="Implementiramo AI agente koji automatizuju procese, analiziraju podatke i pomažu u donošenju brzih i preciznih poslovnih odluka." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zikmasolutions.rs/razvoj-softvera/ai-agenti" />
        
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
                  <span className="text-[#28A745]" itemProp="name">AI Agenti</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-[#28A745]/10 border border-[#28A745]/30 rounded-full px-4 py-2 mb-6" data-aos="fade-down">
                <Sparkles size={16} className="text-[#28A745]" />
                <span className="text-[#28A745] text-sm font-medium">AI Solutions</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-montserrat" data-aos="fade-up">
                Razvoj AI Agenata<br />
                <span className="text-[#28A745]">po Meri</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Implementiramo AI agente koji automatizuju procese, analiziraju podatke 
                i pomažu u donošenju brzih i preciznih poslovnih odluka.
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
                  <div className="text-gray-400 text-sm">AI Agenata</div>
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
                Šta Dobijate Razvojem AI Agenta
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Kompletan paket funkcionalnosti za automatizaciju i inteligentne poslovne odluke
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
                Zašto Izabrati AI Agente
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Efikasnost, preciznost i personalizacija za vaše poslovanje
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
                Kako Radimo na Razvoju AI Agenata
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Strukturiran proces u 5 koraka za uspešnog AI agenta
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
                Često Postavljana Pitanja o AI Agentima
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Odgovori na najčešća pitanja o razvoju i implementaciji AI agenata
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
                Spremni za AI Agenta po Meri?
              </h2>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Kontaktirajte nas za besplatnu analizu vaših poslovnih potreba i procenu AI rešenja. 
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

export default AIAgenti;
