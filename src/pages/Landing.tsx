import React from 'react';

interface LandingProps {
  onSelect: (lang: 'EN' | 'FR') => void;
}

export default function Landing({ onSelect }: LandingProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="mb-16">
        <img 
          src="https://www.newfederation.org/Images/NewFederation_logo_bil.jpg" 
          alt="New Federation House logo" 
          className="max-w-[500px] w-full h-auto"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="flex gap-40">
        <button 
          onClick={() => onSelect('EN')}
          className="px-16 py-2 teal-gradient-reverse text-[#2e6e6e] font-sans text-[18px] font-bold tracking-[0.1em] hover:brightness-95 transition-all"
        >
          ENGLISH
        </button>

        <button 
          onClick={() => onSelect('FR')}
          className="px-16 py-2 teal-gradient text-[#2e6e6e] font-sans text-[18px] font-bold tracking-[0.1em] hover:brightness-95 transition-all"
        >
          FRANÇAIS
        </button>
      </div>
    </div>
  );
}
