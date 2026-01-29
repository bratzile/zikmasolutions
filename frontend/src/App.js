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
import RedizajnSajta from "./pages/RedizajnSajta";
import OdrzavanjeSajta from "./pages/OdrzavanjeSajta";
import IzradaWordPressSajta from "./pages/IzradaWordPressSajta";
import WordPressDevelopment from "./pages/WordPressDevelopment";
import WordPressOdrzavanje from "./pages/WordPressOdrzavanje";
import IzradaPrestaShopProdavnice from "./pages/IzradaPrestaShopProdavnice";
import IzradaWooCommerceProdavnice from "./pages/IzradaWooCommerceProdavnice";
import IzradaCustomProdavnice from "./pages/IzradaCustomProdavnice";
import PrestaShopDevelopment from "./pages/PrestaShopDevelopment";
import PrestaShopOdrzavanje from "./pages/PrestaShopOdrzavanje";
import WooCommerceDevelopment from "./pages/WooCommerceDevelopment";
import WebAplikacije from "./pages/WebAplikacije";
import MobilneAplikacije from "./pages/MobilneAplikacije";

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
          
          {/* Web Sajtovi - SEO Optimized */}
          <Route path="/web-sajtovi/izrada-web-sajta" element={<IzradaWebSajtova />} />
          <Route path="/web-sajtovi/redizajn-sajta" element={<RedizajnSajta />} />
          <Route path="/web-sajtovi/odrzavanje-sajta" element={<OdrzavanjeSajta />} />
          <Route path="/web-sajtovi/izrada-wordpress-sajta" element={<IzradaWordPressSajta />} />
          <Route path="/web-sajtovi/wordpress-development" element={<WordPressDevelopment />} />
          <Route path="/web-sajtovi/wordpress-odrzavanje" element={<WordPressOdrzavanje />} />
          
          {/* E-commerce - SEO Optimized */}
          <Route path="/e-commerce/izrada-prestashop-prodavnice" element={<IzradaPrestaShopProdavnice />} />
          <Route path="/e-commerce/izrada-woocommerce-prodavnice" element={<IzradaWooCommerceProdavnice />} />
          <Route path="/e-commerce/izrada-custom-prodavnice" element={<IzradaCustomProdavnice />} />
          <Route path="/e-commerce/prestashop-development" element={<PrestaShopDevelopment />} />
          <Route path="/e-commerce/prestashop-odrzavanje" element={<PrestaShopOdrzavanje />} />
          <Route path="/e-commerce/woocommerce-development" element={<WooCommerceDevelopment />} />
          
          {/* Razvoj Softvera - SEO Optimized */}
          <Route path="/razvoj-softvera/web-aplikacije" element={<WebAplikacije />} />
          <Route path="/razvoj-softvera/mobilne-aplikacije" element={<MobilneAplikacije />} />
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
