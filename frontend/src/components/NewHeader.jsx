import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, ShoppingCart, Code, TrendingUp, Megaphone, Palette, ArrowRight, Monitor, RefreshCw, Layout, Settings, Layers, Smartphone, Cloud, Cpu, Search, MapPin, FileSearch, Shield, ShoppingBag, Zap, BarChart } from 'lucide-react';
import { Button } from './ui/button';
import { serviceCategories } from '../newMockData';

const categoryIconMap = {
  Globe, ShoppingCart, Code, TrendingUp, Megaphone, Palette
};

const serviceIconMap = {
  Monitor, RefreshCw, Layout, Settings, Globe, ShoppingCart, Layers, Smartphone, Cloud, Cpu, Search, MapPin, FileSearch, Code, TrendingUp, Shield, ShoppingBag, Zap, BarChart
};

const NewHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]?.id || '');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Početna', path: '/' },
    { name: 'Usluge', path: '/usluge', hasMegaMenu: true },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'O nama', path: '/o-nama' },
    { name: 'Blog', path: '/blog' }
  ];

  const getServiceIcon = (iconName) => {
    const icons = {
      'Monitor': Monitor,
      'RefreshCw': RefreshCw,
      'Layout': Layout,
      'Settings': Settings,
      'Globe': Globe,
      'ShoppingCart': ShoppingCart,
      'ShoppingBag': ShoppingBag,
      'Layers': Layers,
      'Smartphone': Smartphone,
      'Cloud': Cloud,
      'Cpu': Cpu,
      'Search': Search,
      'MapPin': MapPin,
      'FileSearch': FileSearch,
      'Code': Code,
      'TrendingUp': TrendingUp,
      'Shield': Shield,
      'Zap': Zap,
      'BarChart': BarChart
    };
    return icons[iconName] || Globe;
  };

  return (
    <>
      {/* Blur Overlay when mega menu is open */}
      {megaMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setMegaMenuOpen(false)}
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || megaMenuOpen ? 'bg-[#0f1419]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="https://customer-assets.emergentagent.com/job_zikma-seo-portal/artifacts/l3nxnhy7_ZS.png" 
                alt="Zikma Solutions Logo" 
                className="w-12 h-12 rounded-lg transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="hidden md:block">
                <span className="text-white font-bold text-xl">Zikma Solutions</span>
                <p className="text-[#28A745] text-xs">Digital Agency</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.path} className="relative group">
                  {link.hasMegaMenu ? (
                    <button
                      onMouseEnter={() => setMegaMenuOpen(true)}
                      onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                      className="flex items-center space-x-1 text-white hover:text-[#28A745] transition-colors duration-300"
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={16} className={`transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`text-white hover:text-[#28A745] transition-colors duration-300 relative group ${
                        location.pathname === link.path ? 'text-[#28A745]' : ''
                      }`}
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#28A745] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/kontakt">
                <Button className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-6 py-2 rounded-lg transform hover:scale-105 transition-all duration-300">
                  Kontaktirajte nas
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-[#28A745] transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown - FULL WIDTH */}
        {megaMenuOpen && (
          <div
            className="hidden lg:block fixed left-0 right-0 top-20 bg-[#0a0c0f] border-t border-[#28A745]/20 shadow-2xl z-50"
            onMouseLeave={() => setMegaMenuOpen(false)}
            style={{ maxHeight: 'calc(100vh - 5rem)', overflowY: 'auto' }}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-4 gap-8">
                {/* LEFT SIDEBAR - Category Names */}
                <div className="col-span-1 space-y-2 border-r border-[#28A745]/20 pr-6">
                  {serviceCategories.map((category) => {
                    const IconComponent = categoryIconMap[category.icon];
                    const isActive = activeCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onMouseEnter={() => setActiveCategory(category.id)}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-[#28A745] to-[#1E7E34] shadow-lg' 
                            : 'hover:bg-[#1a2332]/50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isActive ? 'bg-white/20' : 'bg-[#28A745]/20'
                        }`}>
                          {IconComponent && <IconComponent size={20} className={isActive ? 'text-white' : 'text-[#28A745]'} />}
                        </div>
                        <div className="text-left">
                          <h3 className={`font-bold text-sm ${isActive ? 'text-white' : 'text-gray-300'}`}>
                            {category.name}
                          </h3>
                          <p className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                            {category.services.length} usluga
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* RIGHT CONTENT - Services List */}
                <div className="col-span-3">
                  {serviceCategories.map((category) => {
                    if (category.id !== activeCategory) return null;
                    return (
                      <div key={category.id} className="animate-in fade-in slide-in-from-right duration-300">
                        {/* Category Header */}
                        <div className="mb-6">
                          <h2 className="text-3xl font-bold text-white mb-2 font-poppins">{category.name}</h2>
                          <p className="text-gray-400">{category.description}</p>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          {category.services.map((service) => {
                            const ServiceIcon = getServiceIcon(service.icon);
                            return (
                              <Link
                                key={service.id}
                                to={service.fullPath}
                                onClick={() => setMegaMenuOpen(false)}
                                className="group p-4 rounded-xl bg-[#1a2332]/30 border border-[#28A745]/10 hover:border-[#28A745] hover:bg-[#1a2332]/50 transition-all duration-300"
                              >
                                <div className="flex items-start space-x-3">
                                  <div 
                                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                                    style={{ backgroundColor: `${service.color}20` }}
                                  >
                                    <ServiceIcon size={20} style={{ color: service.color }} />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-[#28A745] transition-colors">
                                      {service.title}
                                    </h4>
                                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                                      {service.shortDesc}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* View All Link */}
                        <div className="mt-6 pt-6 border-t border-[#28A745]/20">
                          <Link 
                            to="/usluge" 
                            className="inline-flex items-center text-[#28A745] hover:text-[#34D058] font-medium"
                            onClick={() => setMegaMenuOpen(false)}
                          >
                            Pogledajte sve usluge
                            <ArrowRight size={18} className="ml-2" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0f1419] border-t border-[#28A745]/20 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.hasMegaMenu ? (
                    <div className="space-y-2">
                      <button
                        className="w-full text-left text-white font-medium py-2"
                        onClick={() => {/* Toggle accordion if needed */}}
                      >
                        {link.name}
                      </button>
                      <div className="pl-4 space-y-2">
                        {serviceCategories.map((category) => (
                          <div key={category.id} className="space-y-1">
                            <p className="text-[#28A745] text-sm font-semibold">{category.name}</p>
                            {category.services.map((service) => (
                              <Link
                                key={service.id}
                                to={service.fullPath}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-gray-300 hover:text-[#28A745] transition-colors text-sm py-1 pl-2"
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-white hover:text-[#28A745] transition-colors py-2 block ${
                        location.pathname === link.path ? 'text-[#28A745]' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-[#28A745] hover:bg-[#1E7E34] text-white">
                  Kontaktirajte nas
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default NewHeader;
