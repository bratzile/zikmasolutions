import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Layout, ShoppingCart, Code, TrendingUp, Megaphone, Palette, Server } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { services } from '../mockData';

const iconMap = {
  Globe,
  Layout,
  ShoppingCart,
  Code,
  TrendingUp,
  Megaphone,
  Palette,
  Server
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1419] pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#28A745] font-semibold mb-2 block">NAŠE USLUGE</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Kompletan spektar digitalnih usluga
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Od ideje do realizacije - sve što vam je potrebno za digitalni uspeh na jednom mestu
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="bg-[#1a2332]/50 border-[#28A745]/20 hover:border-[#28A745] transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
              >
                <CardHeader>
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    {IconComponent && <IconComponent className="text-white" size={32} style={{ color: service.color }} />}
                  </div>
                  <CardTitle className="text-white text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 mb-6 text-base">
                    {service.shortDesc}
                  </CardDescription>
                  <Link
                    to={`/usluge/${service.slug}`}
                    className="inline-flex items-center font-medium group"
                    style={{ color: service.color }}
                  >
                    Detaljnije
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-[#28A745]/10 to-[#1E7E34]/10 border border-[#28A745]/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Niste sigurni koja usluga vam je potrebna?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Kontaktirajte nas za besplatnu konsultaciju. Naš tim će vam pomoći da pronađete najbolje rešenje za vaš biznis.
          </p>
          <Link to="/kontakt">
            <Button size="lg" className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-8 py-6 text-lg rounded-xl transform hover:scale-105 transition-all duration-300">
              Zakazite besplatnu konsultaciju
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
