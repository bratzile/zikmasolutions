import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, ShoppingCart, Code, TrendingUp, Megaphone, Palette } from 'lucide-react';
import { Button } from './ui/button';
import { serviceCategories } from '../newMockData';

const iconMap = {
  Globe, ShoppingCart, Code, TrendingUp, Megaphone, Palette
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Početna', path: '/' },
    { name: 'Usluge', path: '/usluge', hasMegaMenu: true },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'O nama', path: '/o-nama' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0f1419]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className=\"container mx-auto px-4\">
        <div className=\"flex items-center justify-between h-20\">
          {/* Logo */}
          <Link to=\"/\" className=\"flex items-center space-x-3 group\">
            <img 
              src=\"https://customer-assets.emergentagent.com/job_zikma-seo-portal/artifacts/l3nxnhy7_ZS.png\" 
              alt=\"Zikma Solutions Logo\" 
              className=\"w-12 h-12 rounded-lg transform group-hover:scale-105 transition-transform duration-300\"
            />
            <div className=\"hidden md:block\">
              <span className=\"text-white font-bold text-xl\">Zikma Solutions</span>
              <p className=\"text-[#28A745] text-xs\">Digital Agency</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className=\"hidden lg:flex items-center space-x-8\">
            {navLinks.map((link) => (
              <div key={link.path} className=\"relative group\">
                {link.hasMegaMenu ? (
                  <button
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                    className=\"flex items-center space-x-1 text-white hover:text-[#28A745] transition-colors duration-300\"
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
                    <span className=\"absolute -bottom-1 left-0 w-0 h-0.5 bg-[#28A745] group-hover:w-full transition-all duration-300\"></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className=\"hidden lg:block\">
            <Link to=\"/kontakt\">
              <Button className=\"bg-[#28A745] hover:bg-[#1E7E34] text-white px-6 py-2 rounded-lg transform hover:scale-105 transition-all duration-300\">
                Kontaktirajte nas
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className=\"lg:hidden text-white hover:text-[#28A745] transition-colors\"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      {megaMenuOpen && (
        <div
          className=\"hidden lg:block absolute left-0 right-0 bg-[#0f1419]/98 backdrop-blur-md border-t border-[#28A745]/20 shadow-2xl\"
          onMouseLeave={() => setMegaMenuOpen(false)}
        >
          <div className=\"container mx-auto px-4 py-8\">
            <div className=\"grid grid-cols-3 gap-8\">
              {serviceCategories.map((category) => {
                const IconComponent = iconMap[category.icon];
                return (
                  <div key={category.id} className=\"space-y-4\">
                    <div className=\"flex items-center space-x-3 mb-4\">
                      <div className=\"w-10 h-10 bg-gradient-to-br from-[#28A745] to-[#1E7E34] rounded-lg flex items-center justify-center\">
                        {IconComponent && <IconComponent size={20} className=\"text-white\" />}
                      </div>
                      <div>
                        <h3 className=\"text-white font-bold text-lg\">{category.name}</h3>
                        <p className=\"text-gray-400 text-xs\">{category.description}</p>
                      </div>
                    </div>
                    <div className=\"space-y-2\">
                      {category.services.map((service) => (
                        <Link
                          key={service.id}
                          to={service.fullPath}
                          className=\"block text-gray-300 hover:text-[#28A745] transition-colors text-sm py-2 px-3 rounded hover:bg-[#28A745]/10\"
                          onClick={() => setMegaMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=\"mt-6 pt-6 border-t border-[#28A745]/20 text-center\">
              <Link 
                to=\"/usluge\" 
                className=\"text-[#28A745] hover:text-[#34D058] font-medium\"
                onClick={() => setMegaMenuOpen(false)}
              >
                Pogledajte sve usluge →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className=\"lg:hidden bg-[#0f1419] border-t border-[#28A745]/20 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto\">
          <nav className=\"container mx-auto px-4 py-6 flex flex-col space-y-4\">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.hasMegaMenu ? (
                  <div className=\"space-y-2\">
                    <button
                      className=\"w-full text-left text-white font-medium py-2\"
                      onClick={() => {/* Toggle accordion if needed */}}
                    >
                      {link.name}
                    </button>
                    <div className=\"pl-4 space-y-2\">
                      {serviceCategories.map((category) => (
                        <div key={category.id} className=\"space-y-1\">
                          <p className=\"text-[#28A745] text-sm font-semibold\">{category.name}</p>
                          {category.services.map((service) => (
                            <Link
                              key={service.id}
                              to={service.fullPath}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className=\"block text-gray-300 hover:text-[#28A745] transition-colors text-sm py-1 pl-2\"
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
            <Link to=\"/kontakt\" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className=\"w-full bg-[#28A745] hover:bg-[#1E7E34] text-white\">
                Kontaktirajte nas
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
