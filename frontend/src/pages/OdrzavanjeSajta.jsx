import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Database, Shield, TrendingUp, Headphones, Search, Layers, Users, Award, Code, Target, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';

const OdrzavanjeSajta = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Database className="text-white" size={24} />,
      title: 'Redovni Backup-ovi',
      desc: 'Automatski i manuelni backup podataka sajta kako biste uvek imali sigurnu kopiju i mogućnost brzog vraćanja u slučaju problema.'
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: 'Sigurnosne Ažuriranja',
      desc: 'Instalacija najnovijih verzija CMS-a, pluginova i tema. Zaštita od potencijalnih sigurnosnih propusta i napada.'
    },
    {
      icon: <TrendingUp className="text-white" size={24} />,
      title: 'Monitoring Performansi',
      desc: 'Praćenje brzine učitavanja, uptime-a i resursa sajta, uz optimizaciju za maksimalnu efikasnost i stabilnost.'
    },
    {
      icon: <Headphones className="text-white" size={24} />,
      title: 'Tehnička Podrška',
      desc: '24/7 podrška za hitne slučajeve, rešavanje bug-ova i konsultacije za dodatne funkcionalnosti sajta.'
    },
    {
      icon: <Search className="text-white" size={24} />,
      title: 'SEO i Tehnička Optimizacija',
      desc: 'Održavamo tehnički SEO, optimizujemo brzinu, strukturu i metadata sajta kako bi rangiranje ostalo stabilno i efikasno.'
    },
    {
      icon: <Layers className="text-white" size={24} />,
      title: 'Skalabilnost i Nadogradnja',
      desc: 'Priprema sajta za buduće funkcionalnosti, implementaciju novih modula i lako održavanje kako vaša firma raste.'
    }
  ];

  const benefits = [
    {
      icon: <Headphones className="text-[#28A745]" size={32} />,
      title: 'Pouzdana Tehnička Podrška',
      desc: 'Naš tim pruža konstantnu podršku i nadzor, osiguravajući da vaš sajt uvek funkcioniše bez problema i prekida rada.'
    },
    {
      icon: <Shield className="text-[#28A745]" size={32} />,
      title: 'Bezbednost Sajta',
      desc: 'Implementiramo sigurnosne standarde, zaštitu od hakerskih napada i GDPR compliance kako bi vaši podaci i podaci korisnika bili zaštićeni.'
    },
    {
      icon: <TrendingUp className="text-[#28A745]" size={32} />,
      title: 'Optimizacija Performansi',
      desc: 'Redovno pratimo i optimizujemo performanse sajta, uključujući brzinu učitavanja i server-side resurse, za bolje korisničko iskustvo.'
    },
    {
      icon: <Target className="text-[#28A745]" size={32} />,
      title: 'Fokus na Vaš Biznis',
      desc: 'Mi brinemo o tehničkim detaljima, a vi se možete fokusirati na rast poslovanja dok vaš sajt radi optimalno.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Procena i Analiza',
      desc: 'Pregled trenutnog stanja sajta, identifikacija kritičnih tačaka i potencijalnih rizika, kao i kreiranje plana održavanja prilagođenog vašim potrebama.'
    },
    {
      step: '02',
      title: 'Backup i Sigurnosne Mere',
      desc: 'Postavljanje i konfiguracija redovnih backup-ova i sigurnosnih protokola, uključujući SSL sertifikate i zaštitu od napada.'
    },
    {
      step: '03',
      title: 'Ažuriranje i Optimizacija',
      desc: 'Instalacija svih novih verzija CMS-a, tema i pluginova, optimizacija brzine učitavanja, strukture stranica i tehničkog SEO-a.'
    },
    {
      step: '04',
      title: 'Monitoring i Izveštavanje',
      desc: 'Kontinuirano praćenje performansi sajta, uptime-a i sigurnosti, sa redovnim izveštajima o statusu i preporukama za unapređenje.'
    },
    {
      step: '05',
      title: 'Podrška i Nadogradnja',
      desc: '24/7 tehnička podrška, rešavanje hitnih problema, implementacija novih funkcionalnosti i stalna nadogradnja sajta prema rastu poslovanja.'
    }
  ];

  const technologies = [
    { name: 'AWS', logo: '☁️' },
    { name: 'Docker', logo: '🐳' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'WordPress', logo: '📝' },
    { name: 'Node.js', logo: '🟢' }
  ];

  const faqs = [
    {
      question: 'Zašto je održavanje sajta važno?',
      answer: 'Redovno održavanje sajta je ključno za bezbednost, performanse i stabilnost vašeg online prisustva. Sprečava gubitak podataka, poboljšava brzinu učitavanja i pomaže SEO rangiranju.'
    },
    {
      question: 'Koliko često se rade backup-ovi?',
      answer: 'Backup-ovi se mogu raditi dnevno, nedeljno ili po dogovoru, u zavisnosti od obima sajta i vaših potreba, kako bi podaci uvek bili sigurni.'
    },
    {
      question: 'Da li nudite hitnu tehničku podršku?',
      answer: 'Da, pružamo 24/7 podršku za hitne situacije, uključujući rešavanje bug-ova, sigurnosnih propusta i neplaniranih problema.'
    },
    {
      question: 'Da li održavanje uključuje SEO optimizaciju?',
      answer: 'Da, redovno proveravamo tehnički SEO, optimizujemo brzinu učitavanja i strukturu sajta kako bi vaša pozicija u pretraživačima ostala stabilna i konkurentna.'
    },
    {
      question: 'Mogu li nadograditi sajt dok je u održavanju?',
      answer: 'Naravno. Sajt je modularan i spreman za nove funkcionalnosti i nadogradnje, a naš tim može implementirati promene bez zastoja u radu.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Održavanje Web Sajta",
    "provider": {
      "@type": "Organization",
      "name": "Zikma Solutions",
      "url": "https://zikmasolutions.rs"
    },
    "serviceType": "Website Maintenance",
    "areaServed": "RS",
    "description": "Profesionalno održavanje web sajta sa tehničkom podrškom, backup-ovima i sigurnosnim ažuriranjima."
  };

  return (
    <>
      <Helmet>
        <title>Održavanje Web Sajta – Tehnička Podrška i Bezbednost</title>
        <meta name="description" content="Obezbedite sigurnost, brzinu i neprekidan rad vašeg sajta uz naše profesionalne usluge održavanja i podrške. 24/7 monitoring i tehnička podrška." />
        <meta name="keywords" content="održavanje web sajta, tehnička podrška sajta, backup sajta, sigurnost sajta, monitoring sajta, optimizacija performansi" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Održavanje Web Sajta – Tehnička Podrška i Bezbednost" />
        <meta property="og:description" content="Obezbedite sigurnost, brzinu i neprekidan rad vašeg sajta uz naše profesionalne usluge održavanja i podrške." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zikmasolutions.rs/web-sajtovi/odrzavanje-sajta" />
        
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
                  <span className="text-[#28A745]" itemProp="name">Održavanje Sajta</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-[#28A745]/10 border border-[#28A745]/30 rounded-full px-4 py-2 mb-6" data-aos="fade-down">
                <Sparkles size={16} className="text-[#28A745]" />
                <span className="text-[#28A745] text-sm font-medium">24/7 Podrška & Monitoring</span>
              </div>

              {/* H1 - Najvažniji SEO element */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-montserrat" data-aos="fade-up">
                Profesionalno Održavanje<br />
                <span className="text-[#28A745]">Web Sajta</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Obezbedite sigurnost, brzinu i neprekidan rad vašeg sajta uz naše profesionalne 
                usluge održavanja i podrške. Fokusirajte se na biznis dok mi brinemo o tehnologiji.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
                <Link to="/kontakt">
                  <Button size="lg" className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-8 py-6 text-lg rounded-xl">
                    Kontaktirajte Nas
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="border-2 border-[#28A745] text-white hover:bg-[#28A745]/10 px-8 py-6 text-lg rounded-xl">
                    Naši Paketi
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" data-aos="fade-up" data-aos-delay="300">
                <div>
                  <div className="text-3xl font-bold text-[#28A745]">24/7</div>
                  <div className="text-gray-400 text-sm">Tehnička Podrška</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#28A745]">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime Garancija</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#28A745]">150+</div>
                  <div className="text-gray-400 text-sm">Sajtova u Održavanju</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#28A745]">10+</div>
                  <div className="text-gray-400 text-sm">Godina Iskustva</div>
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
                Šta Uključuje Održavanje Web Sajta
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Kompletan paket usluga za sigurnost, stabilnost i optimizaciju vašeg sajta
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
                Zašto Izabrati Nas za Održavanje
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Profesionalna podrška i kontinuirani monitoring za neprekidan rad vašeg sajta
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
                Kako Radimo na Održavanju Sajta
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Strukturiran pristup u 5 faza za kompletnu brigu o vašem web sajtu
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
                Tehnologije Za Profesionalno Održavanje
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Koristimo najnovije alate za monitoring, backup i optimizaciju sajta
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
                Koristimo napredne alate za monitoring uptime-a, automatske backup sisteme i sigurnosne 
                protokole koji garantuju stabilnost i bezbednost vašeg sajta 24/7. Svi podaci se čuvaju 
                na pouzdanim cloud serverima sa visokom dostupnošću.
              </p>
            </div>
          </div>
        </section>

        {/* ❓ FAQ - Često Postavljana Pitanja */}
        <section className="py-20 bg-[#0a0c0f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
                Često Postavljana Pitanja o Održavanju
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Odgovori na najčešća pitanja o uslugama održavanja web sajta
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
                Spremni za Profesionalno Održavanje?
              </h2>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Kontaktirajte nas za besplatnu procenu vašeg sajta i preporuke za optimalan paket održavanja. 
                Odgovaramo u roku od 24 sata!
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

export default OdrzavanjeSajta;
