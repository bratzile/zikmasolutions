import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { name: 'Usluge', path: '/usluge' },
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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#28A745] to-[#1E7E34] rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl">ZS</span>
            </div>
            <div className="hidden md:block">
              <span className="text-white font-bold text-xl">Zikma Solutions</span>
              <p className="text-[#28A745] text-xs">Digital Agency</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white hover:text-[#28A745] transition-colors duration-300 relative group ${
                  location.pathname === link.path ? 'text-[#28A745]' : ''
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#28A745] group-hover:w-full transition-all duration-300"></span>
              </Link>
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0f1419] border-t border-[#28A745]/20 animate-in slide-in-from-top duration-300">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-white hover:text-[#28A745] transition-colors py-2 ${
                  location.pathname === link.path ? 'text-[#28A745]' : ''
                }`}
              >
                {link.name}
              </Link>
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
  );
};

export default Header;
