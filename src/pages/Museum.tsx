import React from 'react';

interface MuseumProps {
  language: 'EN' | 'FR';
}

export default function Museum({ language }: MuseumProps) {
  const logoUrl = language === 'EN' 
    ? "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png"
    : "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png";

  return (
    <div className="flex-1 px-4 md:px-8 py-4 md:border-l-[3px] border-[#cc0000] md:ml-4 overflow-hidden">
      <div className="mb-8">
        <img src={logoUrl} alt="Logo" className="h-16 mx-auto md:mx-0" referrerPolicy="no-referrer" />
      </div>

      <div className="mb-8 border-b border-slate-200 pb-4">
        <h2 className="text-[#cc0000] font-sans text-[28px] font-bold leading-tight uppercase">
          MUSÉE LAFONTAINE MUSEUM
        </h2>
      </div>

      <div className="w-full">
        <a 
          href="https://www.newfederation.org/Docs/LaFontaine-2022-4p-3.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block border border-slate-200 shadow-lg hover:shadow-xl transition-shadow group"
        >
          <img 
            src="https://www.newfederation.org/Images/Musee-Lafontaine-FR-image.png" 
            alt="Musée LaFontaine Museum" 
            className="cursor-pointer"
            referrerPolicy="no-referrer"
          />
          <div className="bg-slate-50 py-3 text-center text-[#2e6e6e] font-bold uppercase tracking-widest text-[14px] group-hover:bg-[#2e6e6e] group-hover:text-white transition-colors">
            {language === 'EN' ? 'View Museum Brochure (PDF)' : 'Consulter la brochure du Musée (PDF)'}
          </div>
        </a>
      </div>
    </div>
  );
}
