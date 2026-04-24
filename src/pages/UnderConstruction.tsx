import React from 'react';
import { useNavigate } from 'react-router-dom';
import { translations, Language } from '../lib/translations';

interface UnderConstructionProps {
  language: Language;
  title?: string;
}

export default function UnderConstruction({ language, title }: UnderConstructionProps) {
  const navigate = useNavigate();
  const t = translations[language].header;

  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-12">
      <div className="mb-8">
        <svg 
          className="w-24 h-24 text-[#cc0000] mx-auto opacity-80" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
          />
        </svg>
      </div>
      
      <h2 
        className="text-[32px] lg:text-[42px] font-black text-gray-900 uppercase tracking-tight mb-4"
        style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}
      >
        {title || t.underConstruction}
      </h2>
      
      <p className="text-[18px] text-gray-600 max-w-lg mx-auto mb-10 leading-relaxed font-medium italic">
        {t.returningSoon}
      </p>
      
      <button
        onClick={() => navigate('/')}
        className="bg-[#cc0000] text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-[#b30000] transition-all duration-300 shadow-xl transform hover:scale-105 active:scale-95"
        style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}
      >
        {t.backHome}
      </button>

      <div className="mt-16 w-32 h-1 bg-[#cc0000] rounded-full opacity-20" />
    </div>
  );
}
