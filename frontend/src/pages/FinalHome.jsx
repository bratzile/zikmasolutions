import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Users, Award, Globe, ShoppingCart, Code, TrendingUp, Megaphone, Palette, Server, Sparkles, Brain, Target, ExternalLink, Rocket } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { serviceCategories, portfolioProjects, testimonials, stats } from '../newMockData';
import AOS from 'aos';

const iconMap = {
  Globe, ShoppingCart, Code, TrendingUp, Megaphone, Palette, Server, Zap, CheckCircle, Users, Award
};

const FinalHome = () => {
  useEffect(() => {
    AOS.refresh();
    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: window.location.pathname,
      });
    }
  }, []);

  const mainServices = [
    { 
      title: 'Web Sajtovi', 
      desc: 'Izrada, redizajn, WordPress, održavanje', 
      icon: Globe, 
      link: '/web-sajtovi/izrada-web-sajta',
      color: '#28A745'
    },
    { 
      title: 'E-commerce', 
      desc: 'WooCommerce, PrestaShop, custom prodavnice', 
      icon: ShoppingCart, 
      link: '/e-commerce/izrada-woocommerce-prodavnice',
      color: '#ff6f61'
    },
    { 
      title: 'Aplikacije', 
      desc: 'Web, Mobile, SaaS, AI agenti, automatizacija', 
      icon: Code, 
      link: '/razvoj-softvera/web-aplikacije',
      color: '#28A745'
    },
    { 
      title: 'SEO Optimizacija', 
      desc: 'Tehnički SEO, lokalni SEO, optimizacija za e-commerce', 
      icon: TrendingUp, 
      link: '/seo/optimizacija',
      color: '#ff6f61'
    },
    { 
      title: 'Digitalni Marketing', 
      desc: 'Google Ads, PPC, social media, content marketing', 
      icon: Megaphone, 
      link: '/marketing/digitalni',
      color: '#28A745'
    },
    { 
      title: 'Grafički Dizajn', 
      desc: 'Logo, brend identitet, digitalni dizajn', 
      icon: Palette, 
      link: '/dizajn/graficki',
      color: '#ff6f61'
    },
    { 
      title: 'Hosting i Podrška', 
      desc: 'Hosting, održavanje, backup, tehnička podrška', 
      icon: Server, 
      link: '/web-sajtovi/odrzavanje-sajta',
      color: '#28A745'
    }
  ];

  const whyUs = [
    { icon: Target, title: 'B2B i Enterprise projekti', desc: 'Iskustvo u kompleksnim poslovnim rešenjima' },
    { icon: Brain, title: 'AI i automatizacija', desc: 'Integracija inteligentnih sistema' },
    { icon: Code, title: 'Full-stack razvoj', desc: 'Web i mobilne aplikacije od nule' },
    { icon: Zap, title: 'Skalabilna SaaS rešenja', desc: 'Cloud platforme spremne za rast' },
    { icon: TrendingUp, title: 'SEO i marketing podrška', desc: 'Kompletna digitalna strategija' }
  ];

  return (
    <div className="min-h-screen bg-[#0f1419]">
      {/* 1️⃣ HERO SEKCIJA */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1419] via-[#1a2332] to-[#0f1419]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff6f61] rounded-full filter blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#28A745] rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#ff6f61]/10 border border-[#ff6f61]/30 rounded-full px-4 py-2 mb-8" data-aos="fade-down">
              <Sparkles size={16} className="text-[#ff6f61]" />
              <span className="text-[#ff6f61] text-sm font-medium">AI & Innovation Driven</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-poppins" data-aos="fade-up">
              Profesionalna izrada{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6f61] via-[#28A745] to-[#ff6f61]">
                web i softverskih rešenja
              </span>
              {' '}za B2B i enterprise klijente
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-3xl mx-auto font-inter leading-relaxed px-2" data-aos="fade-up" data-aos-delay="100">
              Razvijamo web sajtove, aplikacije, SaaS platforme, AI agente i kompletna digitalna rešenja za rast vašeg poslovanja.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="200">
              <Link to="/usluge">
                <Button size="lg" className="bg-[#ff6f61] hover:bg-[#ff5647] text-white px-8 py-6 text-lg rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#ff6f61]/50">
                  Pogledajte usluge
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button size="lg" variant="outline" className="border-2 border-[#ff6f61] text-white hover:bg-[#ff6f61]/10 px-8 py-6 text-lg rounded-xl transform hover:scale-105 transition-all duration-300">
                  Kontaktirajte nas
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-12 md:mt-16 px-2" data-aos="fade-up" data-aos-delay="300">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#1a2332]/50 backdrop-blur-sm border border-[#ff6f61]/20 rounded-xl p-3 sm:p-4 hover:border-[#ff6f61] transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-[#ff6f61] mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#ff6f61] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#ff6f61] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 2️⃣ GLAVNE USLUGE */}
      <section className="py-24 bg-[#0a0c0f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Šta radimo
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Kompletna digitalna rešenja za rast vašeg poslovanja
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link to={service.link} key={index}>
                  <Card
                    className="bg-[#1a2332]/50 border-[#ff6f61]/20 hover:border-[#ff6f61] transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group h-full"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <IconComponent size={28} style={{ color: service.color }} />
                      </div>
                      <CardTitle className="text-white text-xl font-poppins">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-400">
                        {service.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3️⃣ ISTAKNUTI PROJEKTI */}
      <section className="py-24 bg-[#0f1419]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Istaknuti projekti
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Realna rešenja, merljivi rezultati
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioProjects.slice(0, 3).map((project, index) => (
              <Link to={`/portfolio/${project.slug}`} key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="bg-[#1a2332]/50 border-[#ff6f61]/20 hover:border-[#ff6f61] transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419] to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-[#ff6f61] text-white text-xs px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      {project.website && (
                        <span className="float-right">
                          <ExternalLink className="text-white" size={20} />
                        </span>
                      )}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-lg group-hover:text-[#ff6f61] transition-colors font-poppins">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 mb-3">
                      {project.description}
                    </CardDescription>
                    <div className="flex items-center text-[#ff6f61] text-sm font-medium">
                      Pogledajte studiju slučaja
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-2 border-[#ff6f61] text-white hover:bg-[#ff6f61]/10 px-8 py-6 rounded-xl">
                Svi projekti
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4️⃣ ZAŠTO MI */}
      <section className="py-24 bg-gradient-to-br from-[#1a2332] to-[#0f1419]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Zašto Zikma Solutions?
            </h2>
            <p className="text-gray-400 text-xl">
              Vaš partner za digitalni uspeh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-[#0f1419]/50 border border-[#ff6f61]/20 rounded-xl hover:border-[#ff6f61] transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ff6f61] to-[#28A745] rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2 font-poppins">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5️⃣ AI I INOVACIJE */}
      <section className="py-24 bg-[#0f1419] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff6f61] rounded-full filter blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#28A745] rounded-full filter blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-[#ff6f61]/10 border border-[#ff6f61]/30 rounded-full px-4 py-2 mb-6">
                <Brain size={20} className="text-[#ff6f61]" />
                <span className="text-[#ff6f61] font-medium">AI & Innovation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
                AI i inteligentna rešenja
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed">
                Implementiramo AI agente i automatizaciju poslovnih procesa kako bi vaša firma radila brže i efikasnije. 
                Od chatbotova do potpuno automatizovanih sistema – budućnost je ovde.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#1a2332]/50 border border-[#ff6f61]/20 rounded-xl p-6 text-center hover:border-[#ff6f61] transition-all">
                <div className="text-3xl font-bold text-[#ff6f61] mb-2">80%</div>
                <div className="text-gray-400 text-sm">Automatizacija procesa</div>
              </div>
              <div className="bg-[#1a2332]/50 border border-[#ff6f61]/20 rounded-xl p-6 text-center hover:border-[#ff6f61] transition-all">
                <div className="text-3xl font-bold text-[#ff6f61] mb-2">24/7</div>
                <div className="text-gray-400 text-sm">AI asistenti</div>
              </div>
              <div className="bg-[#1a2332]/50 border border-[#ff6f61]/20 rounded-xl p-6 text-center hover:border-[#ff6f61] transition-all">
                <div className="text-3xl font-bold text-[#ff6f61] mb-2">3x</div>
                <div className="text-gray-400 text-sm">Brži procesi</div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/razvoj-softvera/ai-agenti">
                <Button size="lg" className="bg-[#ff6f61] hover:bg-[#ff5647] text-white px-8 py-6 rounded-xl">
                  Saznajte više o AI rešenjima
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ TESTIMONIALS */}
      <section className="py-24 bg-[#0a0c0f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Šta kažu naši klijenti
            </h2>
            <p className="text-gray-400 text-xl">
              Realni utisci, merljivi rezultati
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="bg-[#1a2332]/50 border-[#ff6f61]/20 hover:border-[#ff6f61] transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full"
                    />
                    <div>
                      <CardTitle className="text-white text-base font-poppins">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-400 text-sm">
                        {testimonial.position}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#ff6f61] fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ CTA SEKCIJA */}
      <section className="py-24 bg-gradient-to-r from-[#ff6f61] via-[#ff5647] to-[#ff6f61] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full filter blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center" data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              Spremni za saradnju?
            </h2>
            <p className="text-white/90 text-xl mb-10">
              Kontaktirajte nas i započnite vaš projekat sa profesionalcima.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt">
                <Button size="lg" className="bg-white text-[#ff6f61] hover:bg-gray-100 px-8 py-6 text-lg rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Kontakt forma
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl transform hover:scale-105 transition-all duration-300">
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

export default FinalHome;
