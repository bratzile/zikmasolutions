import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShoppingCart, Code, TrendingUp, Megaphone, Palette } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { serviceCategories } from '../newMockData';
import AOS from 'aos';

const iconMap = {
  Globe, ShoppingCart, Code, TrendingUp, Megaphone, Palette
};

const AllServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1419] pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-[#28A745] font-semibold mb-2 block">NAŠE USLUGE</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">
            Kompletan spektar digitalnih usluga
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Od ideje do realizacije - sve što vam je potrebno za digitalni uspeh na jednom mestu
          </p>
        </div>

        {/* Sve usluge po kategorijama */}
        {serviceCategories.map((category, catIndex) => {
          const CategoryIcon = iconMap[category.icon];
          return (
            <div key={category.id} className="mb-20" data-aos="fade-up" data-aos-delay={catIndex * 100}>
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#28A745] to-[#1E7E34] rounded-xl flex items-center justify-center">
                  {CategoryIcon && <CategoryIcon size={32} className="text-white" />}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white font-poppins">{category.name}</h2>
                  <p className="text-gray-400">{category.description}</p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, servIndex) => (
                  <Card
                    key={service.id}
                    className="bg-[#1a2332]/50 border-[#28A745]/20 hover:border-[#28A745] transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
                    data-aos="fade-up"
                    data-aos-delay={servIndex * 50}
                  >
                    <CardHeader>
                      <div
                        className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-[#28A745] to-[#1E7E34] rounded-lg"></div>
                      </div>
                      <CardTitle className="text-white text-xl font-poppins">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-400 mb-6 text-base">
                        {service.shortDesc}
                      </CardDescription>
                      <Link
                        to={service.fullPath}
                        className="inline-flex items-center font-medium group text-[#28A745] hover:text-[#34D058]"
                      >
                        Detaljnije
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-[#28A745]/10 to-[#1E7E34]/10 border border-[#28A745]/30 rounded-2xl p-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
            Niste sigurni koja usluga vam je potrebna?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Kontaktirajte nas za besplatnu konsultaciju. Naš tim će vam pomoći da pronađete najbolje rešenje za vaš biznis.
          </p>
          <Link to="/kontakt">
            <button className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-8 py-4 text-lg rounded-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              Zakazite besplatnu konsultaciju
              <ArrowRight className="ml-2" size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
