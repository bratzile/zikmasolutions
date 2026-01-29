import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '../components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0f1419] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-[150px] sm:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#28A745] to-[#1E7E34] leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419] via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Message */}
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
          Stranica nije pronađena
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          Izvinite, stranica koju tražite ne postoji ili je premeštena na drugu lokaciju.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="bg-[#28A745] hover:bg-[#1E7E34] text-white px-8 py-6 text-lg rounded-xl w-full sm:w-auto">
              <Home className="mr-2" size={20} />
              Nazad na početnu
            </Button>
          </Link>
          <Link to="/usluge">
            <Button size="lg" variant="outline" className="border-[#28A745] text-[#28A745] hover:bg-[#28A745]/10 px-8 py-6 text-lg rounded-xl w-full sm:w-auto">
              <Search className="mr-2" size={20} />
              Pogledaj usluge
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-[#28A745]/20">
          <p className="text-gray-500 mb-4">Možda vas zanima:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/web-sajtovi/izrada-web-sajta" className="text-[#28A745] hover:text-[#34D058] transition-colors">
              Izrada Web Sajtova
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/seo/optimizacija" className="text-[#28A745] hover:text-[#34D058] transition-colors">
              SEO Optimizacija
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/kontakt" className="text-[#28A745] hover:text-[#34D058] transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
