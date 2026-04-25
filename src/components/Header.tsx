import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { translations, Language } from '../lib/translations';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const t = translations[language];

  const navItems = [
    { id: 'about', path: '/about', labelKey: 'about' },
    { id: 'books', path: '/books', labelKey: 'books' },
    { id: 'publications', path: '/publications', labelKey: 'publications' },
    { id: 'directors', path: '/directors', labelKey: 'directors' },
    { id: 'photos', path: '/photos', labelKey: 'photos' },
    { id: 'testimonials', path: '/testimonials', labelKey: 'testimonials' },
  ];

  return (
    <header className="w-full max-w-[1240px] mx-auto px-4 py-4 md:pt-4 md:pb-8 font-sans">
      <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-10">
        {/* Logo Section - Frameless and Clean */}
        <motion.div 
          className="w-36 lg:w-44 shrink-0 cursor-pointer bg-transparent" 
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img 
            src="https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png" 
            alt="New Federation logo" 
            className="w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Center Content: Title, Address */}
        <div className="flex-1 flex flex-col items-center">
          {/* Menu Area */}
          <nav className="w-full border-b border-gray-100 mb-1">
            <ul className="flex flex-wrap justify-between items-center gap-4 py-2">
              {navItems.map((item) => (
                <li key={item.id} className="relative group">
                  <button
                    onClick={() => navigate(item.path)}
                    style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}
                    className="text-[14px] lg:text-[16px] font-black text-gray-800 transition-colors uppercase tracking-tight flex flex-col items-center cursor-pointer relative"
                  >
                    <span>{t.menu[item.labelKey as keyof typeof t.menu]}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[2.5px] bg-[#5d1a33] transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Title Area - One Line */}
          <div className="w-full text-center py-2 mb-2">
            <h1 className="text-[24px] lg:text-[45px] font-serif font-medium tracking-tight leading-none text-black uppercase whitespace-nowrap overflow-hidden text-ellipsis">
              {t.header.siteTitle}
            </h1>
          </div>

          {/* Contact Area */}
          <div className="w-full max-w-[900px] text-center text-[10.5px] lg:text-[12px] font-sans text-gray-800 leading-relaxed mt-1">
            <p className="font-bold tracking-tight uppercase">
              {t.header.siteTitle} | {t.header.telephone}: 514-286-0444 | 613-415-6352 | {t.header.email}: newfederationhouse@gmail.com
            </p>
            <p className="font-bold tracking-tight uppercase">
              {t.header.mailingOnly} - M057 - 4338 Innes Road, Ottawa, ON K4A 3W3
            </p>
          </div>
        </div>

        {/* Action Section */}
        <div className="shrink-0 flex flex-col gap-2 items-center min-w-[140px] mb-1">
          <motion.button 
            onClick={() => setLanguage(language === 'EN' ? 'FR' : 'EN')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-4 py-5 border-2 border-[#5d1a33] text-[#5d1a33] font-black text-[13px] uppercase tracking-widest hover:bg-[#5d1a33] hover:text-white transition-all duration-300 shadow-sm"
            style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}
          >
            {language === 'EN' ? 'Français' : 'English'}
          </motion.button>
          <motion.button 
            onClick={() => navigate('/donate')}
            whileHover={{ scale: 1.02, backgroundColor: '#b30000' }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-4 py-5 bg-[#cc0000] text-white font-black text-[13px] uppercase tracking-widest transition-all duration-300 shadow-md"
            style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}
          >
            {t.menu.donate}
          </motion.button>
        </div>
      </div>
    </header>
  );
}
