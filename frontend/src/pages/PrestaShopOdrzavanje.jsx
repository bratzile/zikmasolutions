import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Database, Shield, TrendingUp, Zap, Headphones, Search, Users, Award, Target, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';

const PrestaShopOdrzavanje = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Database className="text-white" size={24} />,
      title: 'Redovni Backup-ovi',
      desc: 'Bez backup-a, bilo koji problem sa serverom ili modulom može rezultovati gubitkom svih proizvoda, narudžbina i korisničkih podataka.'
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: 'Sigurnosna Ažuriranja',
      desc: 'Zastarele verzije PrestaShop-a, tema i modula su meta hakera. Redovna ažuriranja sprečavaju kompromitaciju sajta i krađu podataka.'
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'Monitoring Funkcionalnosti',
      desc: 'Neispravni moduli, plaćanja ili dostava mogu blokirati prodaju i frustrirati kupce. Praćenje funkcionalnosti osigurava besprekorno iskustvo.'
    },
    {
      icon: <TrendingUp className="text-white" size={24} />,
      title: 'Optimizacija Performansi',
      desc: 'Bez optimizacije, sajt postaje spor, a kupci napuštaju korpu. Redovno čišćenje i optimizacija održavaju brzinu i konverzije.'
    },
    {
      icon: <Headphones className="text-white" size={24} />,
      title: 'Podrška za Hitne Situacije',
      desc: 'Server ili modul može pasti u najnezgodnijem trenutku. Brza intervencija smanjuje downtime i gubitak prodaje.'
    },
    {
      icon: <Search className="text-white" size={24} />,
      title: 'SEO i Stabilnost',
      desc: 'Neodržavan sajt može izgubiti rangiranje u pretraživačima zbog grešaka, neispravnih linkova i spore brzine učitavanja.'
    }
  ];

  const benefits = [
    {
      icon: <Shield className="text-[#28A745]" size={32} />,
      title: 'Prevencija Problema',
      desc: 'Redovno održavanje sprečava padove sajta, greške u kupovini i sigurnosne propuste koji mogu ugroziti prodaju i reputaciju brenda.'
    },
    {
      icon: <TrendingUp className="text-[#28A745]" size={32} />,
      title: 'Kontinuitet Prodaje',
      desc: 'Sajt koji je optimizovan i siguran funkcioniše bez zastoja, što znači da vaši kupci mogu uvek kupovati bez problema.'
    },
    {
      icon: <Database className="text-[#28A745]" size={32} />,
      title: 'Sigurnost Podataka',
      desc: 'Zaštita korisničkih podataka i transakcija je ključna za poverenje kupaca i poštovanje GDPR standarda.'
    },
    {
      icon: <Headphones className="text-[#28A745]" size={32} />,
      title: 'Brza Intervencija',
      desc: 'Ako se problem pojavi, naš tim reaguje odmah kako bi se sajt vratio u funkcionalno stanje i minimizirao gubitak prihoda.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Procena Stanja Prodavnice',
      desc: 'Pregled trenutnih verzija PrestaShop-a, modula, tema i integracija kako bi se identifikovale kritične tačke koje zahtevaju intervenciju.'
    },
    {
      step: '02',
      title: 'Backup i Sigurnosne Mere',
      desc: 'Konfiguracija redovnih backup-ova i sigurnosnih protokola kako bi se zaštitili podaci i sprečili potencijalni gubici.'
    },
    {
      step: '03',
      title: 'Ažuriranje i Popravka',
      desc: 'Instalacija svih dostupnih ažuriranja za core, module i teme, rešavanje grešaka i problema u funkcionalnosti.'
    },
    {
      step: '04',
      title: 'Monitoring i Optimizacija',
      desc: 'Praćenje performansi sajta, brzine, linkova i funkcionalnosti plaćanja/dostave, sa redovnim izveštajima i preporukama.'
    },
    {
      step: '05',
      title: 'Podrška i Nadogradnje',
      desc: 'Hitna tehnička podrška i implementacija novih funkcionalnosti ili modula po potrebi, bez ometanja rada prodavnice.'
    }
  ];

  const faqs = [
    {
      question: 'Šta se dešava ako ne održavam PrestaShop prodavnicu?',
      answer: 'Bez održavanja, prodavnica može postati spora, moduli prestati da rade, sistem biti ranjiv na napade, a podaci kupaca ugroženi. Sve to vodi do gubitka prodaje i lošeg korisničkog iskustva.'
    },
    {
      question: 'Kako redovno održavanje pomaže u SEO-u?',
      answer: 'Održavanjem sajta uklanjaju se neispravni linkovi, optimizuje brzina i funkcionalnosti, što poboljšava rangiranje u pretraživačima.'
    },
    {
      question: 'Koliko često je potrebno ažurirati module i teme?',
      answer: 'Sve module i teme je potrebno ažurirati čim se pojave nove verzije, kako bi se sprečile sigurnosne propuste i greške u funkcionalnosti.'
    },
    {
      question: 'Šta uključuje hitna podrška?',
      answer: 'Hitna podrška obuhvata intervenciju u slučaju pada servera, problema sa plaćanjem ili dostavom, hakerskih napada i drugih kritičnih situacija.'
    },
    {
      question: 'Mogu li i sami upravljati nekim delovima održavanja?',
      answer: 'Da, možemo vam omogućiti pristup za osnovno praćenje, dok mi preuzimamo kritične zadatke kao što su backup, sigurnost i ažuriranja.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "PrestaShop Održavanje",
    "provider": {
      "@type": "Organization",
      "name": "Zikma Solutions",
      "url": "https://zikmasolutions.rs"
    },
    "serviceType": "PrestaShop Maintenance",
    "areaServed": "RS",
    "description": "Profesionalno održavanje PrestaShop prodavnica - sigurnost, stabilnost i kontinuitet."
  };

  return (
    <>
      <Helmet>
        <title>PrestaShop Održavanje – Sigurnost, Stabilnost i Kontinuitet</title>
        <meta name="description" content="Redovno održavanje sprečava gubitak podataka, napade, probleme sa funkcionalnostima i padove prodaje. 24/7 tehnička podrška." />
        <meta name="keywords" content="prestashop održavanje, prestashop podrška, prestashop backup, prestashop sigurnost, prestashop optimizacija" />
        
        {/* Open Graph */}
        <meta property="og:title" content="PrestaShop Održavanje – Sigurnost, Stabilnost i Kontinuitet" />
        <meta property="og:description" content="Redovno održavanje sprečava gubitak podataka, napade, probleme sa funkcionalnostima i padove prodaje." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zikmasolutions.rs/e-commerce/prestashop-odrzavanje" />
        
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
                  <span className="text-[#28A745]" itemProp="name">PrestaShop Održavanje</span>
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
                <span className="text-[#28A745]">PrestaShop Prodavnica</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Redovno održavanje sprečava gubitak podataka, napade, probleme sa funkcionalnostima 
                i padove prodaje. Fokusirajte se na rast biznisa!
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
                  <div className="text-gray-400 text-sm">Prodavnica u Održavanju</div>
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
                Šta Uključuje PrestaShop Održavanje
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Kompletan paket usluga za sigurnost, stabilnost i optimizaciju PrestaShop prodavnice
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
                Zašto Je Održavanje PrestaShop Prodavnice Kritično
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Prevencija problema i kontinuitet prodaje su ključni za uspeh vašeg online biznisa
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
                Kako Održavamo PrestaShop Prodavnice
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Strukturiran pristup u 5 faza za kompletnu brigu o vašoj prodavnici
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
                Često Postavljana Pitanja o PrestaShop Održavanju
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Odgovori na najčešća pitanja o uslugama održavanja PrestaShop prodavnica
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
                Kontaktirajte nas za besplatnu procenu stanja vaše PrestaShop prodavnice. 
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

export default PrestaShopOdrzavanje;
