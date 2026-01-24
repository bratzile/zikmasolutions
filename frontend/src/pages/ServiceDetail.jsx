import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Globe, Layout, ShoppingCart, Code, TrendingUp, Megaphone, Palette, Server } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { services, faqs } from '../mockData';

const iconMap = {
  Globe, Layout, ShoppingCart, Code, TrendingUp, Megaphone, Palette, Server
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundService = services.find(s => s.slug === slug);
    setService(foundService);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0f1419] pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl text-white">Usluga nije pronađena</h1>
          <Link to="/usluge" className="text-[#28A745] mt-4 inline-block">Nazad na usluge</Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon];

  // Mock detailed content
  const processSteps = [
    { step: 1, title: 'Analiza i planiranje', desc: 'Detaljno analiziramo vaše potrebe i kreiramo strategiju' },
    { step: 2, title: 'Dizajn i koncept', desc: 'Kreiramo vizuelni identitet i korisničko iskustvo' },
    { step: 3, title: 'Razvoj i implementacija', desc: 'Profesionalan razvoj sa najnovijim tehnologijama' },
    { step: 4, title: 'Testiranje i optimizacija', desc: 'Detaljno testiranje i performance tuning' },
    { step: 5, title: 'Lansiranje i podrška', desc: 'Pomoć pri lansiranju i kontinuirana podrška' }
  ];

  const technologies = [
    'React', 'Next.js', 'Node.js', 'WordPress', 'WooCommerce', 'MongoDB', 'MySQL', 'AWS', 'Docker'
  ];

  const benefits = [
    'Moderni, responzivni dizajn',
    'SEO optimizacija',
    'Brze performanse',
    'Sigurnost i zaštita podataka',
    'Mobilna optimizacija',
    'Kontinuirana podrška'
  ];

  return (
    <div className="min-h-screen bg-[#0f1419] pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/usluge" className="inline-flex items-center text-[#28A745] hover:text-[#34D058] mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Nazad na sve usluge
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: `${service.color}20` }}
            >
              {IconComponent && <IconComponent size={40} style={{ color: service.color }} />}
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">{service.title}</h1>
              <p className="text-gray-400 text-xl mt-2">{service.shortDesc}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What is this service */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Šta je {service.title}?</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {service.title} je profesionalna digitalna usluga dizajnirana da vam pomogne da transformišete vašu online prezentaciju. 
                Sa našim stručnim pristupom, osiguravamo da vaš projekat bude realizovan prema najvišim standardima industrije.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                Namenjena je kompanijama koje žele da se istaknuto na tržištu Srbije, povećaju online vidljivost i ostvare merljive rezultate kroz digitalne kanale.
              </p>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Prednosti našeg pristupa</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-[#1a2332]/50 border border-[#28A745]/20 rounded-lg p-4">
                    <CheckCircle className="text-[#28A745] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Naš proces rada</h2>
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-[#1a2332]/50 border border-[#28A745]/20 rounded-xl p-6 hover:border-[#28A745] transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#28A745] to-[#1E7E34] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-white text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-400">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Tehnologije i alati</h2>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#1a2332]/50 border border-[#28A745]/30 text-gray-300 px-4 py-2 rounded-lg hover:border-[#28A745] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Često postavljana pitanja</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={`item-${faq.id}`}
                    className="bg-[#1a2332]/50 border border-[#28A745]/20 rounded-xl px-6 hover:border-[#28A745] transition-colors"
                  >
                    <AccordionTrigger className="text-white text-left hover:text-[#28A745] py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* CTA Card */}
              <Card className="bg-gradient-to-br from-[#28A745] to-[#1E7E34] border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="text-white text-2xl font-bold mb-3">Zainteresovani?</h3>
                  <p className="text-white/90 mb-6">
                    Kontaktirajte nas za besplatnu konsultaciju i procenu projekta
                  </p>
                  <Link to="/kontakt">
                    <Button size="lg" className="w-full bg-white text-[#28A745] hover:bg-gray-100">
                      Pošaljite upit
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Related Services */}
              <Card className="bg-[#1a2332]/50 border-[#28A745]/20">
                <CardContent className="p-6">
                  <h3 className="text-white text-xl font-bold mb-4">Slične usluge</h3>
                  <div className="space-y-3">
                    {services
                      .filter(s => s.id !== service.id)
                      .slice(0, 3)
                      .map(relatedService => (
                        <Link
                          key={relatedService.id}
                          to={`/usluge/${relatedService.slug}`}
                          className="block text-gray-300 hover:text-[#28A745] transition-colors"
                        >
                          {relatedService.title}
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
