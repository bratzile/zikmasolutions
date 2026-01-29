import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewHeader from "./components/NewHeader";
import Footer from "./components/Footer";
import ServicePage from "./components/ServicePage";
import { Toaster } from "./components/ui/sonner";
import AOS from 'aos';

// Pages
import FinalHome from "./pages/FinalHome";
import AllServices from "./pages/AllServices";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import About from "./pages/About";
import IzradaWebSajtova from "./pages/IzradaWebSajtova";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NewHeader />
        <Routes>
          <Route path="/" element={<FinalHome />} />
          <Route path="/usluge" element={<AllServices />} />
          
          {/* SEO Optimized Page */}
          <Route path="/usluge/izrada-web-sajtova" element={<IzradaWebSajtova />} />
          
          {/* Web Sajtovi */}
          <Route path="/web-sajtovi/izrada-web-sajta" element={<ServicePage />} />
          <Route path="/web-sajtovi/redizajn-sajta" element={<ServicePage />} />
          <Route path="/web-sajtovi/odrzavanje-sajta" element={<ServicePage />} />
          <Route path="/web-sajtovi/izrada-wordpress-sajta" element={<ServicePage />} />
          <Route path="/web-sajtovi/wordpress-development" element={<ServicePage />} />
          <Route path="/web-sajtovi/wordpress-odrzavanje" element={<ServicePage />} />
          
          {/* E-commerce */}
          <Route path="/e-commerce/izrada-prestashop-prodavnice" element={<ServicePage />} />
          <Route path="/e-commerce/izrada-woocommerce-prodavnice" element={<ServicePage />} />
          <Route path="/e-commerce/izrada-custom-prodavnice" element={<ServicePage />} />
          <Route path="/e-commerce/prestashop-development" element={<ServicePage />} />
          <Route path="/e-commerce/prestashop-odrzavanje" element={<ServicePage />} />
          
          {/* Aplikacije */}
          <Route path="/razvoj-softvera/web-aplikacije" element={<ServicePage />} />
          <Route path="/razvoj-softvera/mobilne-aplikacije" element={<ServicePage />} />
          <Route path="/razvoj-softvera/saas-resenja" element={<ServicePage />} />
          <Route path="/razvoj-softvera/poslovne-aplikacije" element={<ServicePage />} />
          <Route path="/razvoj-softvera/automatizacija-procesa" element={<ServicePage />} />
          <Route path="/razvoj-softvera/ai-agenti" element={<ServicePage />} />
          
          {/* SEO */}
          <Route path="/seo/optimizacija" element={<ServicePage />} />
          <Route path="/seo/lokalni-seo" element={<ServicePage />} />
          <Route path="/seo/tehnicki-seo" element={<ServicePage />} />
          <Route path="/seo/wordpress" element={<ServicePage />} />
          <Route path="/seo/prestashop" element={<ServicePage />} />
          
          {/* Marketing */}
          <Route path="/marketing/digitalni" element={<ServicePage />} />
          <Route path="/marketing/google-ads" element={<ServicePage />} />
          <Route path="/marketing/ppc" element={<ServicePage />} />
          <Route path="/marketing/social-media" element={<ServicePage />} />
          <Route path="/marketing/content" element={<ServicePage />} />
          
          {/* Dizajn */}
          <Route path="/dizajn/graficki" element={<ServicePage />} />
          <Route path="/dizajn/logo" element={<ServicePage />} />
          <Route path="/dizajn/brend" element={<ServicePage />} />
          
          {/* Other pages */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
          <Route path="/o-nama" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
