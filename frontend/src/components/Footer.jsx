import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { serviceCategories } from '../newMockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0c0f] border-t border-[#28A745]/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_zikma-seo-portal/artifacts/l3nxnhy7_ZS.png" 
                alt="Zikma Solutions" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-white font-bold text-lg">Zikma Solutions</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Vaš partner za digitalni uspeh. Kreiramo moderne web sajtove i digitalna rešenja koja donose rezultate.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-[#1a1a1a] hover:bg-[#28A745] rounded-lg flex items-center justify-center transition-colors duration-300">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-[#1a1a1a] hover:bg-[#28A745] rounded-lg flex items-center justify-center transition-colors duration-300">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-[#1a1a1a] hover:bg-[#28A745] rounded-lg flex items-center justify-center transition-colors duration-300">
                <Linkedin size={18} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-[#1a1a1a] hover:bg-[#28A745] rounded-lg flex items-center justify-center transition-colors duration-300">
                <Twitter size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Brzi Linkovi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#28A745] transition-colors text-sm">
                  Početna
                </Link>
              </li>
              <li>
                <Link to="/usluge" className="text-gray-400 hover:text-[#28A745] transition-colors text-sm">
                  Usluge
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-[#28A745] transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/o-nama" className="text-gray-400 hover:text-[#28A745] transition-colors text-sm">
                  O nama
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-[#28A745] transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Popularne usluge */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popularne Usluge</h3>
            <ul className="space-y-2">
              {serviceCategories.slice(0, 3).map(cat => (
                cat.services.slice(0, 2).map(service => (
                  <li key={service.id}>
                    <Link to={service.fullPath} className="text-gray-400 hover:text-[#28A745] transition-colors text-sm">
                      {service.title}
                    </Link>
                  </li>
                ))
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#28A745] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Beograd, Srbija</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[#28A745] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+381 60 123 4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#28A745] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@zikmasolutions.rs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#28A745]/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zikma Solutions. Sva prava zadržana.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-[#28A745] transition-colors text-sm">
                Politika Privatnosti
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#28A745] transition-colors text-sm">
                Uslovi Korišćenja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
