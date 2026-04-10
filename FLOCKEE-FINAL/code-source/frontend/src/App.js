import React, { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Home from "./pages/Home";
import Bike from "./pages/Bike";
import Customization from "./pages/Customization";
import Pricing from "./pages/Pricing";
import Fleet from "./pages/Fleet";
import Advantages from "./pages/Advantages";
import Comparison from "./pages/Comparison";
import Quote from "./pages/Quote";
import SEOLocal from "./pages/SEOLocal";
import LocalSEO from "./pages/LocalSEO";

function App() {
  // Google Analytics
  useEffect(() => {
    // Add Google Analytics if needed
    // For now, we'll add the tracking code placeholder
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    // document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/velo-flockee" element={<Bike />} />
            <Route path="/personnalisation" element={<Customization />} />
            <Route path="/tarifs" element={<Pricing />} />
            <Route path="/flottes" element={<Fleet />} />
            <Route path="/avantages" element={<Advantages />} />
            <Route path="/comparatif" element={<Comparison />} />
            <Route path="/devis" element={<Quote />} />
            <Route path="/seo/:location" element={<SEOLocal />} />
            <Route path="/paris" element={<SEOLocal />} />
            <Route path="/ile-de-france" element={<SEOLocal />} />
            
            {/* Pages SEO par arrondissement */}
            <Route path="/paris-1er" element={<LocalSEO />} />
            <Route path="/paris-2e" element={<LocalSEO />} />
            <Route path="/paris-3e" element={<LocalSEO />} />
            <Route path="/paris-4e" element={<LocalSEO />} />
            <Route path="/paris-5e" element={<LocalSEO />} />
            <Route path="/paris-6e" element={<LocalSEO />} />
            <Route path="/paris-7e" element={<LocalSEO />} />
            <Route path="/paris-8e" element={<LocalSEO />} />
            <Route path="/paris-9e" element={<LocalSEO />} />
            <Route path="/paris-10e" element={<LocalSEO />} />
            <Route path="/paris-11e" element={<LocalSEO />} />
            <Route path="/paris-12e" element={<LocalSEO />} />
            <Route path="/paris-13e" element={<LocalSEO />} />
            <Route path="/paris-14e" element={<LocalSEO />} />
            <Route path="/paris-15e" element={<LocalSEO />} />
            <Route path="/paris-16e" element={<LocalSEO />} />
            <Route path="/paris-17e" element={<LocalSEO />} />
            <Route path="/paris-18e" element={<LocalSEO />} />
            <Route path="/paris-19e" element={<LocalSEO />} />
            <Route path="/paris-20e" element={<LocalSEO />} />
            
            {/* Pages SEO villes Île-de-France */}
            <Route path="/boulogne-billancourt" element={<LocalSEO />} />
            <Route path="/montreuil" element={<LocalSEO />} />
            <Route path="/saint-denis" element={<LocalSEO />} />
            <Route path="/nanterre" element={<LocalSEO />} />
            <Route path="/creteil" element={<LocalSEO />} />
            <Route path="/versailles" element={<LocalSEO />} />
            <Route path="/argenteuil" element={<LocalSEO />} />
            <Route path="/levallois-perret" element={<LocalSEO />} />
            <Route path="/issy-les-moulineaux" element={<LocalSEO />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </BrowserRouter>
    </div>
  );
}

export default App;