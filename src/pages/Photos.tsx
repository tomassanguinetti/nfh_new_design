import React from 'react';

interface PhotosProps {
  language: 'EN' | 'FR';
}

export default function Photos({ language }: PhotosProps) {
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
          {language === 'EN' ? 'PHOTO GALLERY' : 'GALERIE DE PHOTOS'}
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center py-20 bg-slate-50 border border-slate-100 rounded-lg">
        <div className="text-[48px] mb-4">🚧</div>
        <h3 className="text-[#cc0000] font-bold text-[24px] uppercase tracking-wider mb-2">
          {language === 'EN' ? 'Under Construction' : 'En construction'}
        </h3>
        <p className="text-slate-500 text-[16px] italic">
          {language === 'EN' 
            ? 'This section is currently being updated. Please check back soon.' 
            : 'Cette section est en cours de mise à jour. Veuillez revenir bientôt.'}
        </p>
      </div>
    </div>
  );
}
