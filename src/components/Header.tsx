import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { translations, Language } from '../lib/translations';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const menuItems = [
  { id: 'about', labelKey: 'about', path: '/about' },
  { id: 'order', labelKey: 'order', path: '/order' },
  { id: 'world', labelKey: 'world', path: '/publications' },
  { id: 'directors', labelKey: 'directors', path: '/directors' },
  { id: 'photos', labelKey: 'photos', path: '/photos' },
  { id: 'testimonials', labelKey: 'testimonials', path: '/testimonials' },
];

export default function Header({ language, setLanguage }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const t = translations[language];

  return (
    <header className="w-full max-w-[1240px] mx-auto px-4 py-4 md:pt-4 md:pb-8 font-serif" style={{ letterSpacing: '0.09em' }}>
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

        {/* Center Content: Menu, Title, Address */}
        <div className="flex-1 flex flex-col items-center">
          {/* Constrained Menu centered above title */}
          <nav className="w-full max-w-[900px] mb-4">
            <div className="flex flex-row items-stretch justify-center gap-[2px] w-full">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}
                  className={`
                    flex-x flex-1 px-1 py-3 text-[10px] lg:text-[11px] font-black uppercase tracking-tighter
                    transition-all duration-200 text-center flex items-center justify-center
                    cursor-pointer shadow-sm min-h-[54px] leading-[1.1]
                    ${location.pathname === item.path 
                      ? 'bg-[#5d1a33] text-white' 
                      : 'bg-gray-100 text-[#5d1a33] hover:bg-gray-200'
                    }
                  `}
                >
                  {t.menu[item.labelKey as keyof typeof t.menu]}
                </motion.button>
              ))}
            </div>
          </nav>

          {/* Title Area - One Line */}
          <div className="w-full max-w-[900px] text-center py-2 mb-2">
            <h1 className="text-[24px] lg:text-[48px] font-serif font-bold tracking-tight leading-none text-black uppercase whitespace-nowrap overflow-hidden text-ellipsis" style={{ letterSpacing: '0.06em' }}>
              New Federation House
            </h1>
          </div>

          {/* Contact Area - One Line */}
          <div className="w-full max-w-[900px] text-center text-[10px] lg:text-[11.5px] font-sans text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
            <p className="font-bold tracking-tight">
              {t.header.telephone}: 514-286-0444 | 613-415-6352 | {t.header.email}: newfederationhouse@gmail.com | Ottawa, ON K4A 3W3
            </p>
          </div>
        </div>

        {/* Action Section */}
        <div className="shrink-0 flex flex-col gap-2 items-center min-w-[130px] mb-1">
          <motion.button 
            onClick={() => setLanguage(language === 'EN' ? 'FR' : 'EN')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-4 py-2 border-2 border-[#5d1a33] text-[#5d1a33] font-black text-[11px] uppercase tracking-widest hover:bg-[#5d1a33] hover:text-white transition-all duration-300 shadow-sm"
            style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}
          >
            {language === 'EN' ? 'Français' : 'English'}
          </motion.button>
          <motion.button 
            onClick={() => navigate('/donate')}
            whileHover={{ scale: 1.02, backgroundColor: '#b30000' }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-4 py-2 bg-[#cc0000] text-white font-black text-[11px] uppercase tracking-widest transition-all duration-300 shadow-md"
            style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}
          >
            {t.menu.donate}
          </motion.button>
        </div>
      </div>
    </header>
  );
}
