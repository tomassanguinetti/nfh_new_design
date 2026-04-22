import React from 'react';

interface GovernorsGeneralProps {
  onNavigate: (page: string) => void;
  language: 'EN' | 'FR';
}

export default function GovernorsGeneral({ onNavigate, language }: GovernorsGeneralProps) {
  const logoUrl = language === 'EN' 
    ? "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png"
    : "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png";

  return (
    <div className="flex-1 px-4 md:px-8 py-4 md:border-l-[3px] border-[#cc0000] md:ml-4 overflow-hidden">
      <div className="mb-4">
        <img src={logoUrl} alt="Logo" className="h-16 mx-auto md:mx-0" referrerPolicy="no-referrer" />
      </div>

      <div className="mb-8 border-b border-slate-200 pb-4">
        <h2 className="text-[#cc0000] font-sans text-[28px] font-bold leading-tight uppercase">
          THE GOVERNORS GENERAL OF CANADA
        </h2>
        <p className="text-[#2e6e6e] text-[20px] font-bold mt-2">from Viscount Monck to David Johnston</p>
      </div>

      <div className="text-[17px] leading-relaxed text-justify relative">
        <div className="flex flex-col md:float-right md:ml-8 mb-8 w-[240px] shrink-0 space-y-4 text-center mx-auto md:mx-0">
          <div className="border border-slate-200 p-2 bg-white shadow-md cursor-pointer" onClick={() => onNavigate('order')}>
            <img 
              src="https://www.newfederation.org/Images/GG-E-2.jpg" 
              alt="The Governors General of Canada book cover"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-left space-y-1 text-sm bg-slate-50 p-4 border border-slate-200">
            <p><strong>ISBN:</strong> 978-1-987832-33-4</p>
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
          <section className="space-y-4">
            <h3 className="text-[#cc0000] font-bold text-[18px] uppercase tracking-wider">Foreword</h3>
            <p>
              Since Confederation in 1867, a total of 30 governors general have stood at the helm of Canada's parliamentary democracy. Of that number 13 have served under Queen Elizabeth II during the 70 years of her reign.
            </p>
            <p>
              The office of governor general can claim a long and brilliant history with deep roots in New France. Those holding the title have contributed to the building of a political, social and economic society in North America that is not only successful but also distinctive. Few examples of such a multicultural union, one that is nurtured by two founding peoples, First Nations and millions of immigrants from many countries, exist elsewhere in the world.
            </p>
            <p>
              Every region of Canada can boast a park, school, institution or sporting event that recalls the contributions of the French, British and Canadian-born governors. The Champlain Bridge in Montreal, Vancouver's Stanley Park and Ottawa's Lisgar Collegiate Institute were named after distinguished governors general, as were such national institutions as the Vanier Institute for the Family, Michener Awards for Journalism, and the Stanley and Grey Cups.
            </p>
            <p>
              This volume is dedicated to the governors general and captures their political and human dimensions, the challenges they faced, and the defining moments of their tenures. History is their legacy, as Canada builds on its past during a new era with Mary Simon as the 30th Governor General and the first Indigenous woman to occupy the post.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-[#cc0000] font-bold text-[18px] uppercase tracking-wider">Authors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[14px]">
              <p><strong>Dimitry Anastakisis</strong> - L.R. Wilson/R.J. Currie Chair in Canadian Business History, University of Toronto</p>
              <p><strong>Stephen Azzi</strong> - Director, Clayton H. Riddell Graduate Program in Political Management, Carleton University</p>
              <p><strong>D. L. Daigneault</strong> - Historian, writer, editor, Vice-President of New Federation House</p>
              <p><strong>John English</strong> - Author of two-volume biography of Lester Pearson, Editor of Dictionary of Canadian Biography</p>
              <p><strong>Larry Glassford</strong> - Professor, University of Windsor</p>
              <p><strong>J. L. Granatstein</strong> - Historian, former Director and CEO, Canadian War Museum</p>
              <p><strong>Naomi Griffiths</strong> - Distinguished scholar of Acadian history, Carleton University</p>
              <p><strong>Gerald Gummersell</strong> - Political scientist and director of New Federation House</p>
              <p><strong>Jacques Monet, s.j</strong> - Historian, Archive of the Jesuits in Canada</p>
              <p><strong>Lorne Monti</strong> - Journalist, filmmaker, director of New Federation House</p>
              <p><strong>Nelle Oosterom</strong> - Senior editor with Canada's History magazine</p>
              <p><strong>Jeanne Poulin</strong> - Journalist, storyteller, director of New Federation House</p>
            </div>
          </section>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 italic text-slate-500 text-sm">
          Editors: Jean Chevrier, Denis L. Daigneault, Jeanne Poulin and Gerald C. Gummersell
        </div>
      </div>
    </div>
  );
}
