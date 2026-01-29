import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ArrowLeft, Brain, Database, CreditCard, Cloud, Link as LinkIcon, BarChart, Zap, Shield, Smartphone, TrendingUp, Palette, Code, Users, Headphones, Award, Activity, DollarSign, MessageSquare, FileText, Clock, Sparkles, Target, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { serviceCategories } from '../newMockData';
import { getServiceDetails } from '../serviceDetailsData';
import AOS from 'aos';

const iconMap = {
  Brain, Database, CreditCard, Cloud, Link: LinkIcon, BarChart, Zap, Shield, Smartphone, TrendingUp, Palette, 
  Code, Users, Headphones, Award, Activity, DollarSign, MessageSquare, FileText, Clock, Sparkles, Target, CheckCircle
};

const ProfessionalServicePage = () => {
  const { category, service } = useParams();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, [category, service]);

  // Pronađi kategoriju i uslugu
  const categoryData = serviceCategories.find(cat => cat.slug === category);
  const serviceData = categoryData?.services.find(s => s.slug === service);
  const serviceDetails = getServiceDetails(category, service);

  if (!categoryData || !serviceData) {
    return (
      <div className="min-h-screen bg-[#0f1419] pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl text-white">Usluga nije pronađena</h1>
          <Link to="/usluge" className="text-[#ff6f61] mt-4 inline-block">Nazad na usluge</Link>
        </div>
      </div>
    );
  }

  // Ako nema detaljnih podataka, koristi generičke
  const displayData = serviceDetails || {
    h1: serviceData.title,
    subtitle: serviceData.shortDesc,
    features: [],
    benefits: [],
    process: [],
    caseStudies: [],
    faqs: []
  };

  return (
    <div className="min-h-screen bg-[#0f1419]">
      {/* 1️⃣ HERO SEKCIJA */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1419] via-[#1a2332] to-[#0f1419]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff6f61] rounded-full filter blur-[120px]"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#28A745] rounded-full filter blur-[120px]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8" data-aos="fade-right">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-[#ff6f61]">Početna</Link></li>
              <li className="text-gray-600">/</li>
              <li><Link to="/usluge" className="text-gray-400 hover:text-[#ff6f61]">Usluge</Link></li>
              <li className="text-gray-600">/</li>
              <li className="text-[#ff6f61]">{serviceData.title}</li>
            </ol>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-[#ff6f61]/10 border border-[#ff6f61]/30 rounded-full px-4 py-2 mb-6" data-aos="fade-down">
              <Sparkles size={16} className="text-[#ff6f61]" />
              <span className="text-[#ff6f61] text-sm font-medium">Enterprise Ready</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-poppins" data-aos="fade-up">
              {displayData.h1 || serviceData.title}
            </h1>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              {displayData.subtitle || serviceData.shortDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <Link to="/kontakt">
                <Button size="lg" className="bg-[#ff6f61] hover:bg-[#ff5647] text-white px-8 py-4 rounded-xl">
                  Kontaktirajte nas
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-[#ff6f61] text-white hover:bg-[#ff6f61]/10 px-8 py-4 rounded-xl">
                  Pogledajte portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ ŠTA NUDIMO */}
      {displayData.features && displayData.features.length > 0 && (
        <section className="py-20 bg-[#0a0c0f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
                Šta nudimo
              </h2>
              <p className="text-gray-400 text-lg">
                Kompletan paket funkcionalnosti za vaš uspeh
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {displayData.features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon];
                return (
                  <Card
                    key={index}
                    className="bg-[#1a2332]/50 border-[#ff6f61]/20 hover:border-[#ff6f61] transition-all duration-300 group"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-[#ff6f61] to-[#28A745] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        {IconComponent && <IconComponent size={24} className="text-white" />}
                      </div>
                      <CardTitle className="text-white text-lg font-poppins">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-400">
                        {feature.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3️⃣ PREDNOSTI / ZAŠTO MI */}
      {displayData.benefits && displayData.benefits.length > 0 && (
        <section className="py-20 bg-[#0f1419]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
                Zašto izabrati nas?
              </h2>
              <p className="text-gray-400 text-lg">
                Stručnost i iskustvo koje vam garantuje uspeh
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {displayData.benefits.map((benefit, index) => {
                const IconComponent = iconMap[benefit.icon];
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 bg-[#1a2332]/30 border border-[#ff6f61]/20 rounded-xl hover:border-[#ff6f61] transition-all"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#ff6f61] to-[#28A745] rounded-full flex items-center justify-center mb-4">
                      {IconComponent && <IconComponent size={28} className="text-white" />}
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-2 font-poppins">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4️⃣ PROCES RADA */}
      {displayData.process && displayData.process.length > 0 && (
        <section className="py-20 bg-[#0a0c0f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
                Naš proces rada
              </h2>
              <p className="text-gray-400 text-lg">
                Strukturiran pristup koji garantuje kvalitet
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {displayData.process.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 bg-[#1a2332]/50 border border-[#ff6f61]/20 rounded-xl p-6 hover:border-[#ff6f61] transition-all"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ff6f61] to-[#28A745] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-semibold mb-2 font-poppins">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5️⃣ PORTFOLIO / STUDIJE SLUČAJA */}
      {displayData.caseStudies && displayData.caseStudies.length > 0 && (
        <section className="py-20 bg-[#0f1419]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
                Studije slučaja
              </h2>
              <p className="text-gray-400 text-lg">
                Realna rešenja, merljivi rezultati
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {displayData.caseStudies.map((caseStudy, index) => (
                <Card
                  key={index}
                  className="bg-[#1a2332]/50 border-[#ff6f61]/20 hover:border-[#ff6f61] transition-all duration-300 overflow-hidden group cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419] to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-[#ff6f61] text-white text-xs px-3 py-1 rounded-full">
                        {caseStudy.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-lg group-hover:text-[#ff6f61] transition-colors font-poppins">
                      {caseStudy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 mb-4">
                      {caseStudy.desc}
                    </CardDescription>
                    {caseStudy.link ? (
                      <Link to={caseStudy.link} className="text-[#ff6f61] text-sm font-medium inline-flex items-center">
                        Pogledajte studiju slučaja
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <span className="text-[#ff6f61] text-sm font-medium inline-flex items-center">
                        Pogledajte studiju slučaja
                        <ArrowRight size={16} className="ml-2" />
                      </span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10" data-aos="fade-up">
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-[#ff6f61] text-white hover:bg-[#ff6f61]/10 px-8 py-4 rounded-xl">
                  Svi projekti
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 6️⃣ FAQ */}
      {displayData.faqs && displayData.faqs.length > 0 && (
        <section className="py-20 bg-[#0a0c0f]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
                Često postavljana pitanja
              </h2>
              <p className="text-gray-400 text-lg">
                Odgovori na najčešća pitanja naših klijenata
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {displayData.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-[#1a2332]/50 border border-[#ff6f61]/20 rounded-xl px-6 hover:border-[#ff6f61] transition-colors"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <AccordionTrigger className="text-white text-left hover:text-[#ff6f61] py-4 font-poppins">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 pb-4 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* 7️⃣ CTA SEKCIJA */}
      <section className="py-20 bg-gradient-to-r from-[#ff6f61] via-[#ff5647] to-[#ff6f61] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center" data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              Spremni za saradnju?
            </h2>
            <p className="text-white/90 text-xl mb-10">
              Kontaktirajte nas i započnite vaš projekat sa profesionalcima. Besplatna konsultacija i procena projekta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt">
                <Button size="lg" className="bg-white text-[#ff6f61] hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-xl">
                  Kontakt forma
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl">
                  Zatražite ponudu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalServicePage;
