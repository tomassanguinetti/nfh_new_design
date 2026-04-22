import React from 'react';

interface PremiersQuebecProps {
  onNavigate: (page: string) => void;
  language: 'EN' | 'FR';
}

export default function PremiersQuebec({ onNavigate, language }: PremiersQuebecProps) {
  const logoUrl = language === 'EN' 
    ? "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png"
    : "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png";

  const title = language === 'EN' ? 'THE PREMIERS OF QUEBEC' : 'LES PREMIERS MINISTRES DU QUÉBEC';

  return (
    <div className="flex-1 px-4 md:px-8 py-4 md:border-l-[3px] border-[#cc0000] md:ml-4 overflow-hidden">
      <div className="mb-4">
        <img src={logoUrl} alt="Logo" className="h-16 mx-auto md:mx-0" referrerPolicy="no-referrer" />
      </div>

      <div className="mb-8 border-b border-slate-200 pb-4">
        <h2 className="text-[#cc0000] font-sans text-[28px] font-bold leading-tight uppercase">
          {title}
        </h2>
        <p className="text-[#2e6e6e] text-[20px] font-bold mt-2 italic">From Pierre-Olivier Chauveau to Philippe Couillard</p>
      </div>

      <div className="text-[17px] leading-relaxed text-justify relative">
        <div className="flex flex-col md:float-right md:ml-8 mb-8 w-[240px] shrink-0 space-y-4 text-center mx-auto md:mx-0">
          <div className="border border-slate-200 p-2 bg-white shadow-md cursor-pointer" onClick={() => onNavigate('order')}>
            <img 
              src="https://www.newfederation.org/Images/QPM-cover%20small.jpg" 
              alt="The Premiers of Quebec book cover"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-left space-y-2 text-sm bg-slate-50 p-4 border border-slate-200">
            <p className="text-[#cc0000] font-bold italic">(available in French only)</p>
            <p><strong>ISBN:</strong> 978-1-987832-00-6</p>
            <p><strong>Price:</strong> $29.95 (taxes included)</p>
          </div>
          <button 
            onClick={() => onNavigate('order')}
            className="bg-[#cc0000] text-white px-8 py-2 font-bold uppercase tracking-widest hover:bg-[#b30000] w-full transition-colors"
          >
            ORDER NOW
          </button>
        </div>

        <div className="space-y-6 text-slate-800">
          <p className="mb-6">
            Over thirty Premiers have succeeded each other at the head of Quebec's government since Confederation — Beautifully illustrated, this book, whose biographical essays have been written by veteran historians, traces the career highlights of these leaders, their achievements, and the challenges they faced during their terms in office.
          </p>

          <section className="space-y-6 pt-4 border-t border-slate-100">
            <h3 className="text-[#cc0000] font-bold text-[18px] uppercase tracking-wider">Chapters and Authors</h3>
            <div className="grid grid-cols-1 gap-4 text-[15px]">
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-bold">Hon. Pierre-Joseph-Olivier Chauveau</span>
                <span className="text-slate-500 italic">Jacques G. Ruelland</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-bold">Hon. Gédéon Ouimet</span>
                <span className="text-slate-500 italic">Gaëtan Dostie</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-bold">Hon. Charles-Eugène Boucher de Boucherville</span>
                <span className="text-slate-500 italic">Léo Beaudoin</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-bold">Hon. Henri-Gustave Joly de Lotbinière</span>
                <span className="text-slate-500 italic">J. I. Little</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-bold">Hon. Joseph-Adolphe Chapleau</span>
                <span className="text-slate-500 italic">Caroline Ménard</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-bold">Hon. Honoré Mercier</span>
                <span className="text-slate-500 italic">Dominique Foisy-Geoffroy</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-bold">Hon. Maurice Duplessis</span>
                <span className="text-slate-500 italic">Jacques Lacoursière</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-bold">Hon. Jean Lesage</span>
                <span className="text-slate-500 italic">Michel Lévesque</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-bold">Hon. René Lévesque</span>
                <span className="text-slate-500 italic">Pierre Godin</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-bold">Hon. Philippe Couillard</span>
                <span className="text-slate-500 italic">Olivier Marcil</span>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 italic text-slate-500 text-sm">
          Editors: Jean Chevrier, Jacques G. Ruelland et Jeanne Poulin
        </div>
      </div>
    </div>
  );
}
