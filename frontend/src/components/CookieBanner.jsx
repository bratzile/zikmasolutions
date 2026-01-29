import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie } from 'lucide-react';
import { Button } from './ui/button';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-4 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto">
        <div className="bg-[#1a2332]/95 backdrop-blur-xl border border-[#28A745]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            {/* Icon and Text */}
            <div className="flex items-start gap-3 sm:gap-4 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#28A745]/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Cookie className="text-[#28A745]" size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Koristimo kolačiće 🍪</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Ovaj sajt koristi kolačiće radi poboljšanja korisničkog iskustva.{' '}
                  <Link to="/privacy" className="text-[#28A745] hover:underline">
                    Saznaj više
                  </Link>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto mt-2 sm:mt-0">
              <Button
                onClick={declineCookies}
                variant="outline"
                size="sm"
                className="flex-1 sm:flex-none border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white text-xs sm:text-sm"
              >
                Odbij
              </Button>
              <Button
                onClick={acceptCookies}
                size="sm"
                className="flex-1 sm:flex-none bg-[#28A745] hover:bg-[#1E7E34] text-white text-xs sm:text-sm"
              >
                Prihvati
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
