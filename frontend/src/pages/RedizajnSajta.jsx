import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Palette, TrendingUp, Smartphone, Zap, Shield, Target, Users, Award, Code, Headphones, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';

const RedizajnSajta = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Palette className="text-white" size={24} />,
      title: 'Moderni UI/UX Dizajn',
      desc: 'Redizajn vašeg sajta sa fokusom na korisničko iskustvo i vizuelnu privlačnost. Interaktivni prototipi i prilagođeni dizajn za maksimalne konverzije.'
    },
    {
      icon: <TrendingUp className="text-white" size={24} />,
      title: 'SEO Optimizacija',
      desc: 'Uključujemo tehnički SEO, on-page optimizaciju i page speed poboljšanja kako bi vaš sajt bolje rangirao na pretraživačima.'
    },
    {
      icon: <Smartphone className="text-white" size={24} />,
      title: 'Responzivnost i Mobile-First Pristup',
      desc: 'Sajt prilagođen svim uređajima: desktop, tablet i mobilni. Poboljšavamo korisničko iskustvo i doseg vaše ciljne grupe.'
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'Brze Performanse',
      desc: 'Optimizacija koda, lazy loading slika, CDN integracija i sub-2 sekunde load time za maksimalnu brzinu učitavanja.'
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: 'Sigurnost i Održavanje',
      desc: 'Redovni backup-ovi, SSL sertifikat, zaštita od napada i GDPR compliant rešenja za bezbednost vašeg sajta.'
    },
    {
      icon: <Target className="text-white" size={24} />,
      title: 'Skalabilnost i Modularnost',
      desc: 'Arhitektura sajta spremna za buduće proširenje funkcionalnosti i lako održavanje uz modularni pristup.'
    }
  ];

  const benefits = [
    {
      icon: <Award className="text-[#28A745]" size={32} />,
      title: 'Iskustvo i Profesionalnost',
      desc: 'Tim sa 10+ godina iskustva u razvoju i redizajnu web sajtova. Više od 200 realizovanih projekata i 150+ zadovoljnih klijenata širom Srbije i regiona.'
    },
    {
      icon: <Target className="text-[#28A745]" size={32} />,
      title: 'Enterprise Kvalitet',
      desc: 'Razvijamo skalabilna i pouzdana rešenja za kompleksne korporativne sajtove, koristeći najnovije tehnologije i best practices.'
    },
    {
      icon: <Headphones className="text-[#28A745]" size={32} />,
      title: 'Kompletna Podrška',
      desc: 'Od analize i dizajna do deployment-a i održavanja – pružamo full-stack podršku i kontinuirano praćenje performansi vašeg sajta.'
    },
    {
      icon: <Code className="text-[#28A745]" size={32} />,
      title: 'Moderne Tehnologije',
      desc: 'React, Next.js, Node.js i WordPress omogućavaju brze, responzivne i SEO-friendly sajtove spremne za rast i buduće nadogradnje.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analiza',
      desc: 'Detaljno proučavamo postojeći sajt, analiziramo poslovne potrebe, ciljnu grupu i konkurenciju. Kreiramo strategiju i sitemap za redizajn, uključujući UX/UI preporuke.'
    },
    {
      step: '02',
      title: 'UI/UX Dizajn',
      desc: 'Kreiramo moderan i intuitivan dizajn koji poboljšava korisničko iskustvo. Pripremamo mockup-e i interaktivni prototip za odobrenje pre razvoja.'
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Implementacija dizajna u funkcionalan web sajt koristeći moderne tehnologije. Agile pristup sa redovnim sprintovima i prikazom napretka klijentu.'
    },
    {
      step: '04',
      title: 'Testiranje & QA',
      desc: 'Detaljna provera funkcionalnosti, performansi i kompatibilnosti sajta. Load testing, security audit i ispravke bug-ova pre lansiranja.'
    },
    {
      step: '05',
      title: 'Lansiranje & Podrška',
      desc: 'Deployment sajta na produkcioni server, DNS i SSL konfiguracija, postavljanje analitike. 30 dana besplatne post-launch podrške i edukacija klijenta.'
    }
  ];

  const technologies = [
    { name: 'React', logo: '⚛️' },
    { name: 'Next.js', logo: '▲' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'WordPress', logo: '📝' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Docker', logo: '🐳' }
  ];

  const faqs = [
    {
      question: 'Koliko traje redizajn web sajta?',
      answer: 'Vreme trajanja redizajna zavisi od kompleksnosti sajta i broja stranica, ali prosečno traje između 4 i 8 nedelja. Uključeni su dizajn, razvoj, testiranje i finalna optimizacija.'
    },
    {
      question: 'Koja je cena redizajna sajta u Srbiji?',
      answer: 'Cena redizajna varira u zavisnosti od funkcionalnosti i obima projekta, od osnovnih paketa od 500€ do kompleksnih enterprise rešenja od 3.000€ i više.'
    },
    {
      question: 'Da li se stari sadržaj prenosi ili optimizuje?',
      answer: 'Sve postojeće sadržaje možemo migrirati i optimizovati za SEO, uključujući tekstove, slike i strukturu stranica, kako bi sajt bio spreman za bolje rangiranje.'
    },
    {
      question: 'Koje tehnologije koristite za redizajn sajta?',
      answer: 'Koristimo moderne tehnologije kao što su React, Next.js, Node.js, WordPress i druge, zavisno od zahteva projekta i ciljeva performansi.'
    },
    {
      question: 'Da li nudite podršku nakon lansiranja?',
      answer: 'Da, obezbeđujemo tehničku podršku i održavanje sajta, uključujući hosting, backup, sigurnosne update-ove i 24/7 monitoring prema dogovorenom paketu.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Redizajn Web Sajta",
    "provider": {
      "@type": "Organization",
      "name": "Zikma Solutions",
      "url": "https://zikmasolutions.rs"
    },
    "serviceType": "Web Redesign",
    "areaServed": "RS",
    "description": "Profesionalni redizajn web sajta sa modernim dizajnom, SEO optimizacijom i poboljšanim performansama."
  };

  return (
    <>
      <Helmet>
        <title>Redizajn Web Sajta – Modernizacija i Optimizacija Vašeg Sajta</title>
        <meta name="description" content="Osvežite vaš web sajt modernim dizajnom, poboljšanom funkcionalnošću i optimizacijom za SEO i performanse. Profesionalni redizajn od stručnog tima." />
        <meta name="keywords" content="redizajn sajta, modernizacija web sajta, osvežavanje sajta, redesign web, redizajn web sajta cena, poboljšanje sajta, optimizacija sajta" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Redizajn Web Sajta – Modernizacija i Optimizacija" />
        <meta property="og:description" content="Osvežite vaš web sajt modernim dizajnom, poboljšanom funkcionalnošću i optimizacijom za SEO i performanse." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zikmasolutions.rs/web-sajtovi/redizajn-sajta" />
        
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
                    <span itemProp="name">Web Sajtovi</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                <li className="text-gray-600">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span className="text-[#28A745]" itemProp="name">Redizajn Sajta</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-[#28A745]/10 border border-[#28A745]/30 rounded-full px-4 py-2 mb-6" data-aos="fade-down">
                <Sparkles size={16} className="text-[#28A745]" />
                <span className="text-[#28A745] text-sm font-medium">Modernizacija & Optimizacija</span>
              </div>

              {/* H1 - Najvažniji SEO element */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-montserrat" data-aos="fade-up">
                Profesionalni Redizajn<br />
                <span className="text-[#28A745]">Web Sajta</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Osvežite vaš web sajt modernim dizajnom, poboljšanom funkcionalnošću i optimizacijom 
                za SEO i performanse. Dokazana metodologija za uspešan redizajn.
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
                  <div className="text-3xl font-bold text-[#28A745]">200+</div>
                  <div className="text-gray-400 text-sm">Redizajniranih Sajtova</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#28A745]">10+</div>
                  <div className="text-gray-400 text-sm">Godina Iskustva</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#28A745]">150+</div>
                  <div className="text-gray-400 text-sm">Zadovoljnih Klijenata</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#28A745]">99%</div>
                  <div className="text-gray-400 text-sm">Satisfakcija</div>
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
                Šta Dobijate Redizajnom Web Sajta
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Kompletan paket usluga za modernizaciju i optimizaciju vašeg web sajta
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
                Zašto Izabrati Zikma Solutions za Redizajn
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Iskustvo, stručnost i dokazane rezultate u modernizaciji web sajtova
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
                Kako Radimo na Redizajnu Vašeg Sajta
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Strukturiran proces u 5 faza sa transparentnom komunikacijom i redovnim prikazima napretka
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

        {/* 🛠️ TEHNOLOGIJE */}
        <section className="py-20 bg-[#0f1419]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
                Tehnologije Za Moderan Redizajn
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Koristimo najnovije tehnologije koje garantuju brzinu, sigurnost i skalabilnost
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-12" data-aos="fade-up" data-aos-delay="100">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#1a2332]/50 border border-[#28A745]/20 rounded-xl px-6 py-4 hover:border-[#28A745] transition-all"
                >
                  <span className="text-3xl">{tech.logo}</span>
                  <span className="text-white font-medium">{tech.name}</span>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-delay="200">
              <p className="text-gray-300 text-lg leading-relaxed">
                Biramo tehnologije na osnovu specifičnih potreba vašeg projekta. React i Next.js za moderna, 
                brza rešenja. WordPress za sajtove sa moćnim CMS sistemom. Svaki redizajn je prilagođen 
                vašim poslovnim ciljevima i budućim planovima rasta.
              </p>
            </div>
          </div>
        </section>

        {/* ❓ FAQ - Često Postavljana Pitanja */}
        <section className="py-20 bg-[#0a0c0f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
                Često Postavljana Pitanja o Redizajnu
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Odgovori na najčešća pitanja o procesu redizajna web sajta
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
                Spremni za Redizajn Sajta?
              </h2>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Kontaktirajte nas danas za besplatnu analizu postojećeg sajta i procenu potrebnog redizajna. 
                Odgovaramo u roku od 24 sata!
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

export default RedizajnSajta;
