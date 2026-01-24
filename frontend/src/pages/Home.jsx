import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Zap, Users, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { services, portfolioProjects, blogPosts, testimonials, stats } from '../mockData';

const Home = () => {
  useEffect(() => {
    // Google Analytics tracking
    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: window.location.pathname,
      });
    }
  }, []);

  const featuredServices = services.filter(s => s.featured).slice(0, 3);
  const featuredProjects = portfolioProjects.slice(0, 3);
  const featuredBlogPosts = blogPosts.filter(b => b.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0f1419]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1419] via-[#1a2332] to-[#0f1419]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#28A745] rounded-full filter blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1E7E34] rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#28A745]/10 border border-[#28A745]/30 rounded-full px-4 py-2 mb-8 animate-in fade-in slide-in-from-top duration-700">
              <Zap size={16} className="text-[#28A745]" />
              <span className="text-[#28A745] text-sm font-medium">Digitalna Agencija #1 u Srbiji</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-top duration-700" style={{ animationDelay: '0.1s' }}>
              Transformišemo vašu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28A745] via-[#34D058] to-[#28A745] animate-gradient">
                digitalnu viziju
              </span>
              {' '}u realnost
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-top duration-700" style={{ animationDelay: '0.2s' }}>
              Kreiramo moderne web sajtove, web aplikacije i digitalna rešenja koja vaš biznis vodi ka uspehu. SEO optimizacija, dizajn i razvoj - sve na jednom mestu.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-top duration-700" style={{ animationDelay: '0.3s' }}>
              <Link to="/kontakt">
                <Button size="lg" className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-8 py-6 text-lg rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#28A745]/50">
                  Započnite projekat
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-[#28A745] text-white hover:bg-[#28A745]/10 px-8 py-6 text-lg rounded-xl transform hover:scale-105 transition-all duration-300">
                  Pogledajte portfolio
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: '0.4s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#1a2332]/50 backdrop-blur-sm border border-[#28A745]/20 rounded-xl p-4 hover:border-[#28A745] transition-all duration-300">
                  <div className="text-3xl font-bold text-[#28A745] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#28A745] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#28A745] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#0a0c0f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#28A745] font-semibold mb-2 block">NAŠE USLUGE</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Šta nudimo
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kompletan spektar digitalnih usluga za rast vašeg biznisa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card
                key={service.id}
                className="bg-[#1a2332]/50 border-[#28A745]/20 hover:border-[#28A745] transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#28A745] to-[#1E7E34] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 mb-4">
                    {service.shortDesc}
                  </CardDescription>
                  <Link to={`/usluge/${service.slug}`} className="text-[#28A745] hover:text-[#34D058] inline-flex items-center group">
                    Saznajte više
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/usluge">
              <Button size="lg" variant="outline" className="border-2 border-[#28A745] text-white hover:bg-[#28A745]/10 px-8 py-6 rounded-xl">
                Sve usluge
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-[#0f1419]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#28A745] font-semibold mb-2 block">PORTFOLIO</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Naši projekti
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Pogledajte neke od naših najuspešnijih projekata
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Link to={`/portfolio/${project.slug}`} key={project.id}>
                <Card className="bg-[#1a2332]/50 border-[#28A745]/20 hover:border-[#28A745] transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419] to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-[#28A745] text-white text-xs px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-lg group-hover:text-[#28A745] transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 mb-3">
                      {project.description}
                    </CardDescription>
                    <div className="flex items-center text-[#28A745] text-sm font-medium">
                      Pogledajte projekat
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-2 border-[#28A745] text-white hover:bg-[#28A745]/10 px-8 py-6 rounded-xl">
                Svi projekti
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#0a0c0f]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#28A745] font-semibold mb-2 block">TESTIMONIALS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Šta kažu naši klijenti
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="bg-[#1a2332]/50 border-[#28A745]/20 hover:border-[#28A745] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full"
                    />
                    <div>
                      <CardTitle className="text-white text-base">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-400 text-sm">
                        {testimonial.position}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#FFC107] fill-current" viewBox="0 0 20 20">
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

      {/* Blog Section */}
      <section className="py-24 bg-[#0f1419]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#28A745] font-semibold mb-2 block">BLOG</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Najnoviji članci
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Korisni saveti, vodiči i insights iz sveta web developmenta i digitalnog marketinga
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogPosts.map((post, index) => (
              <Link to={`/blog/${post.slug}`} key={post.id}>
                <Card className="bg-[#1a2332]/50 border-[#28A745]/20 hover:border-[#28A745] transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#28A745] text-white text-xs px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-lg group-hover:text-[#28A745] transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-sm">
                      {post.date} • {post.readTime}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm line-clamp-3 mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-[#28A745] text-sm font-medium">
                      Pročitajte više
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" variant="outline" className="border-2 border-[#28A745] text-white hover:bg-[#28A745]/10 px-8 py-6 rounded-xl">
                Svi članci
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#28A745] via-[#1E7E34] to-[#28A745] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full filter blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Spremni da započnete vaš projekat?
            </h2>
            <p className="text-white/90 text-xl mb-10">
              Kontaktirajte nas danas i dobijte besplatnu konsultaciju i procenu projekta
            </p>
            <Link to="/kontakt">
              <Button size="lg" className="bg-white text-[#28A745] hover:bg-gray-100 px-8 py-6 text-lg rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl">
                Započnimo zajedno
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
