import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Books from './pages/Books';
import Donate from './pages/Donate';
import Landing from './pages/Landing';
import PrimeMinisters from './pages/PrimeMinisters';
import WorldLeaders from './pages/WorldLeaders';
import OrderForm from './pages/OrderForm';
import NativeLeaders from './pages/NativeLeaders';
import GovernorsGeneral from './pages/GovernorsGeneral';
import ChiefJustices from './pages/ChiefJustices';
import PremiersQuebec from './pages/PremiersQuebec';
import Museum from './pages/Museum';
import Directors from './pages/Directors';
import Photos from './pages/Photos';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';
import { Language } from './lib/translations';
import UnderConstruction from './pages/UnderConstruction';

export default function App() {
  const [hasSelectedLanguage, setHasSelectedLanguage] = useState(false);
  const [language, setLanguage] = useState<Language>('EN');

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setHasSelectedLanguage(true);
  };

  if (!hasSelectedLanguage) {
    return <Landing onSelect={handleLanguageSelect} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header 
          language={language} 
          setLanguage={setLanguage} 
        />
        <div className="max-w-[1240px] mx-auto pb-12">
          <main className="min-w-0 px-4">
            <Routes>
              <Route path="/" element={<Home language={language} />} />
              <Route path="/books" element={<Books language={language} />} />
              <Route path="/about" element={<AboutUs language={language} />} />
              <Route path="/pm" element={<PrimeMinisters language={language} />} />
              <Route path="/pm6" element={<UnderConstruction language={language} title={language === 'EN' ? 'The Prime Ministers of Canada (6th edition)' : 'Les Premiers ministres du Canada (6e édition)'} />} />
              <Route path="/world-leaders" element={<WorldLeaders language={language} />} />
              
              <Route path="/native" element={<UnderConstruction language={language} title={language === 'EN' ? 'Indigenous Leaders of Canada' : 'Chefs autochtones du Canada'} />} />
              <Route path="/govgen" element={<UnderConstruction language={language} title={language === 'EN' ? 'The Governors General of Canada' : 'Les Gouverneurs généraux du Canada'} />} />
              <Route path="/chief" element={<UnderConstruction language={language} title={language === 'EN' ? 'The Chief Justices of Canada' : 'Les Juges en chef du Canada'} />} />
              <Route path="/saving-planet" element={<UnderConstruction language={language} title={language === 'EN' ? 'Saving the Planet' : 'Sauver la planète'} />} />
              <Route path="/publications" element={<UnderConstruction language={language} title={language === 'EN' ? 'Other Publications' : 'Autres Publications'} />} />
              <Route path="/premiers" element={<UnderConstruction language={language} title={language === 'EN' ? 'The Premiers of Quebec' : 'Les Premiers ministres du Québec'} />} />
              
              <Route path="/museum" element={<Museum language={language} />} />
              <Route path="/directors" element={<Directors language={language} />} />
              <Route path="/photos" element={<Photos language={language} />} />
              <Route path="/testimonials" element={<Testimonials language={language} />} />
              <Route path="/contact" element={<ContactUs language={language} />} />
              <Route path="/order" element={<OrderForm language={language} />} />
              <Route path="/order/pm" element={<OrderForm language={language} initialView="pm" />} />
              <Route path="/order/world-leaders" element={<OrderForm language={language} initialView="world" />} />
              <Route path="/order/collection" element={<OrderForm language={language} initialView="collection" />} />
              <Route path="/donate" element={<Donate />} />
              {/* Fallback for old state-based navigation if needed, or redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
