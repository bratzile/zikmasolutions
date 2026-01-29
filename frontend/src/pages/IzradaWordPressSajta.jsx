import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Palette, Smartphone, TrendingUp, Zap, Shield, Target, Users, Award, Headphones, Code, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';

const IzradaWordPressSajta = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Palette className="text-white" size={24} />,
      title: 'Custom WordPress Dizajn',
      desc: 'Jedinstveni vizuelni identitet prilagođen vašem brendu i poslovnim ciljevima. Moderni UI/UX dizajn fokusiran na konverzije.'
    },
    {
      icon: <Smartphone className="text-white" size={24} />,
      title: 'Responzivnost',
      desc: 'Savršen prikaz na svim uređajima – desktop, tablet i mobilni telefoni. Mobile-first pristup za maksimalan reach.'
    },
    {
      icon: <TrendingUp className="text-white" size={24} />,
      title: 'SEO Optimizacija',
      desc: 'Ugrađena SEO optimizacija za bolje rangiranje na pretraživačima, uključujući tehnički SEO, structured data i page speed.'
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'Brze Performanse',
      desc: 'Optimizovan kod i sadržaj sajta, lazy loading slika i sub-2 sekunde load time za maksimalnu brzinu učitavanja.'
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: 'Sigurnost i Backup',
      desc: 'SSL sertifikat, redovni backup-ovi i zaštita od napada. GDPR compliant i sigurnosne best practices.'
    },
    {
      icon: <Target className="text-white" size={24} />,
      title: 'Skalabilnost i Održavanje',
      desc: 'Arhitektura sajta spremna za buduće proširenje funkcionalnosti i lako održavanje uz modularni pristup.'
    }
  ];

  const benefits = [
    {
      icon: <Award className="text-[#28A745]" size={32} />,
      title: 'Iskustvo i Profesionalnost',
      desc: 'Tim sa 10+ godina iskustva u izradi WordPress sajtova, sa preko 200 realizovanih projekata i 150+ zadovoljnih klijenata.'
    },
    {
      icon: <Target className="text-[#28A745]" size={32} />,
      title: 'Enterprise Kvalitet',
      desc: 'Razvijamo skalabilna i pouzdana rešenja za kompleksne i korporativne sajtove, koristeći best practices u WordPress development-u.'
    },
    {
      icon: <Headphones className="text-[#28A745]" size={32} />,
      title: 'Kompletna Podrška',
      desc: 'Od analize i dizajna do lansiranja i održavanja – pružamo full-service podršku za WordPress sajtove.'
    },
    {
      icon: <Code className="text-[#28A745]" size={32} />,
      title: 'Fokus na Vaš Biznis',
      desc: 'Mi brinemo o tehničkim detaljima i optimizaciji, dok se vi fokusirate na rast i razvoj vašeg poslovanja.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analiza',
      desc: 'Pregled potreba i ciljeva vašeg sajta, analiza konkurencije i definisanje strategije i strukture za WordPress rešenje.'
    },
    {
      step: '02',
      title: 'UI/UX Dizajn',
      desc: 'Kreiranje modernog i intuitivnog dizajna sa interaktivnim mockup-ima i prototipovima za odobrenje klijenta.'
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Implementacija dizajna u WordPress, konfiguracija tema i pluginova, i optimizacija funkcionalnosti i performansi.'
    },
    {
      step: '04',
      title: 'Testiranje & QA',
      desc: 'Detaljna provera funkcionalnosti, kompatibilnosti i brzine sajta pre lansiranja.'
    },
    {
      step: '05',
      title: 'Lansiranje & Podrška',
      desc: 'Deployment sajta, konfiguracija SSL-a i analytics, uz 30 dana besplatne post-launch podrške.'
    }
  ];

  const faqs = [
    {
      question: 'Koliko traje izrada WordPress sajta?',
      answer: 'Prosečno trajanje izrade je 3–6 nedelja, u zavisnosti od broja stranica i složenosti funkcionalnosti.'
    },
    {
      question: 'Koja je cena izrade WordPress sajta?',
      answer: 'Cena zavisi od paketa i funkcionalnosti sajta, od 500€ za osnovne sajtove do 1.500€+ za kompleksna rešenja.'
    },
    {
      question: 'Da li je SEO optimizacija uključena?',
      answer: 'Da, svaki WordPress sajt ima ugrađenu tehničku i on-page SEO optimizaciju, uključujući meta tagove i strukturu stranica.'
    },
    {
      question: 'Mogu li se dodavati nove funkcionalnosti kasnije?',
      answer: 'Da, WordPress sajtovi su skalabilni i modularni, što omogućava dodavanje novih funkcionalnosti i pluginova u bilo kom trenutku.'
    },
    {
      question: 'Da li nudite podršku nakon lansiranja?',
      answer: 'Da, pružamo tehničku podršku i održavanje sajta, uključujući backup, sigurnosne update-ove i troubleshooting po dogovoru.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Izrada WordPress Sajta",
    "provider": {
      "@type": "Organization",
      "name": "Zikma Solutions",
      "url": "https://zikmasolutions.rs"
    },
    "serviceType": "WordPress Development",
    "areaServed": "RS",
    "description": "Profesionalna izrada WordPress sajtova u Srbiji. Responzivni dizajn, SEO optimizacija, brze performanse."
  };

  return (
    <>
      <Helmet>
        <title>Izrada WordPress Sajta – Profesionalni Web Development</title>
        <meta name="description" content="Razvijamo moderne, responzivne i SEO optimizovane WordPress sajtove u Srbiji koji donose rezultate. Profesionalni WordPress development tim." />
        <meta name="keywords" content="izrada wordpress sajta, wordpress development, wordpress sajt srbija, wordpress dizajn, profesionalni wordpress sajt" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Izrada WordPress Sajta – Profesionalni Web Development" />
        <meta property="og:description" content="Razvijamo moderne, responzivne i SEO optimizovane WordPress sajtove u Srbiji koji donose rezultate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zikmasolutions.rs/web-sajtovi/izrada-wordpress-sajta" />
        
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
                  <span className="text-[#28A745]" itemProp="name">WordPress Sajt</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-[#28A745]/10 border border-[#28A745]/30 rounded-full px-4 py-2 mb-6" data-aos="fade-down">
                <Sparkles size={16} className="text-[#28A745]" />
                <span className="text-[#28A745] text-sm font-medium">WordPress Experts</span>
              </div>

              {/* H1 - Najvažniji SEO element */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-montserrat" data-aos="fade-up">
                Profesionalna Izrada<br />
                <span className="text-[#28A745]">WordPress Sajta</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Razvijamo moderne, responzivne i SEO optimizovane WordPress sajtove u Srbiji 
                koji donose rezultate. Profesionalni pristup i dokazana metodologija.
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
                  <div className="text-gray-400 text-sm">WordPress Sajtova</div>
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
                Šta Dobijate Izradom WordPress Sajta
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Kompletan paket funkcionalnosti za moderan, brz i SEO optimizovan WordPress sajt
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
                Zašto Izabrati Nas za WordPress Razvoj
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Vaš pouzdani partner za profesionalnu izradu WordPress sajtova u Srbiji
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
                Kako Radimo na Izradi WordPress Sajta
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Transparentan proces u 5 koraka - od ideje do lansiranja
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
                Često Postavljana Pitanja o WordPress Razvoju
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Odgovori na najčešća pitanja o izradi WordPress sajtova
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
                Spremni za WordPress Sajt?
              </h2>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Kontaktirajte nas danas za besplatnu konsultaciju i procenu projekta. 
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

export default IzradaWordPressSajta;
