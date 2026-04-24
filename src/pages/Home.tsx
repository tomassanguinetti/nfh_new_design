import React from 'react';
import { useNavigate } from 'react-router-dom';
import { translations, Language } from '../lib/translations';

interface HomeProps {
  language: Language;
}

export default function Home({ language }: HomeProps) {
  const navigate = useNavigate();
  const t = translations[language].home;

  return (
    <div className="w-full px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_1fr] gap-12">
        {/* Left Column: Info & Updating Box */}
        <div className="space-y-6">
          {/* Top Banner Notice - Moved to Left Column */}
          <div className="border-2 border-[#1a1b41] bg-[#4548fb] text-white p-4 rounded-xl shadow-sm text-center">
            <p className="text-[13px] font-bold leading-tight">
              {t.bannerNotice}
            </p>
          </div>

          <section>
            <h2 className="text-[15px] font-bold text-black border-b border-black mb-2 uppercase">{t.aboutUsTitle}</h2>
            <p className="text-[13px] leading-relaxed text-left">
              {t.aboutUsText}
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-bold text-black border-b border-black mb-2 uppercase">{t.missionTitle}</h2>
            <p className="text-[13px] leading-relaxed text-left">
              {t.missionText}
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-bold text-black border-b border-black mb-2 uppercase">{t.visionTitle}</h2>
            <p className="text-[13px] leading-relaxed text-left">
              {t.visionText}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-[15px] font-bold text-black border-b border-black mb-2 uppercase">{t.goalsTitle}</h2>
            <p className="text-[13px] leading-relaxed text-left">
              • {t.goal1}
            </p>
            <p className="text-[13px] leading-relaxed text-left">
              • {t.goal2}
            </p>
            <p className="text-[13px] leading-relaxed text-left">
              • {t.goal3}
            </p>
          </section>

          <div className="text-[#cc0000] text-[13px] font-bold space-y-4">
            <p className="leading-tight">{t.charityNumber}: 119247021 RR0001</p>
          </div>

          <div className="space-y-4 pt-4">
            <p className="text-[14px] font-bold leading-tight text-black text-center lg:text-left italic">
              {t.orderSeriesText}
            </p>
            <button 
              onClick={() => navigate('/order')}
              className="bg-[#cc0000] text-white w-full py-3 rounded font-bold uppercase tracking-widest hover:bg-[#b30000] transition-colors shadow-md"
            >
              {t.orderFormsBtn}
            </button>
          </div>
        </div>

        {/* Middle Column: PM Book */}
        <div className="space-y-6 text-center">
          <div className="space-y-1">
            <h2 className="text-[#cc0000] text-[24px] font-bold uppercase tracking-tight" style={{ fontFamily: '"Open Sans", sans-serif', letterSpacing: '0.45em' }}>{t.newRelease}</h2>
            <h3 className="text-black text-[24px] font-sans font-bold uppercase leading-tight" style={{ fontFamily: '"Crimson Text", serif' }}>
              {t.pmTitle}
            </h3>
            <p className="text-black text-[18px] font-bold uppercase">{t.seventhEdition}</p>
          </div>

          <div className="flex justify-center">
            <img 
              src="https://i.postimg.cc/y6MGZXNR/1-Eng-PM-BK-1.png" 
              alt="The Prime Ministers of Canada Book" 
              className="w-full max-w-[280px] shadow-xl border border-black cursor-pointer"
              onClick={() => navigate('/pm')}
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-2">
            <p className="text-[13px] font-bold leading-tight">
              {t.pmEditors}
            </p>
            <div className="text-[#cc0000] font-bold">
              <p className="text-[14px]">ISBN 978-1-987832-32-7</p>
              <p className="text-[14px]">$29.95 ({t.taxesIncluded})</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col items-center gap-1">
              <p className="text-[14px] font-bold uppercase tracking-widest text-slate-700">{t.pmOrderFormTitle}</p>
              <button 
                onClick={() => navigate('/order/pm')}
                className="bg-[#cc0000] text-white px-8 py-3 rounded font-bold uppercase tracking-widest hover:bg-[#b30000] transition-colors shadow-md"
              >
                {t.orderNow}
              </button>
            </div>
          </div>

          <div className="text-[13px] leading-relaxed text-center px-2">
            <p>
              {t.pmSummary}
            </p>
          </div>

          {/* CPAC Sponsorship info moved here */}
          <div className="pt-6 mt-4 border-t border-gray-100 flex flex-col items-center text-center space-y-3">
            <p className="text-[11px] font-bold italic leading-tight text-gray-600">
              {t.footerGratitude}
            </p>
            <div className="flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d7/CPAC_2016_logo.png" 
                alt="CPAC" 
                className="h-10 mb-1 opacity-90" 
                referrerPolicy="no-referrer" 
              />
              <p className="text-[12px] font-black uppercase tracking-widest leading-none">
                {t.cpacFull}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-black">
            <button 
              onClick={() => navigate('/pm')} 
              className="bg-[#1a1b41] text-white px-8 py-3 rounded font-bold uppercase tracking-widest hover:bg-[#2a2b51] transition-colors shadow-md text-[14px]"
            >
              {language === 'EN' ? 'More Information' : "Plus d'informations"}
            </button>
          </div>
        </div>

        {/* Right Column: World Leaders */}
        <div className="space-y-6 text-center">
          <div className="space-y-1">
            <h2 className="text-[#cc0000] text-[24px] font-bold uppercase tracking-tight" style={{ fontFamily: '"Open Sans", sans-serif', lineHeight: '1em' }}>{t.worldLeadersRelease}</h2>
            <h3 className="text-black text-[24px] font-sans font-bold uppercase leading-tight" style={{ fontFamily: '"Crimson Text", serif' }}>
              {t.worldLeadersTitle}
            </h3>
            <p className="text-black text-[18px] font-bold uppercase">{t.worldLeadersSubtitle}</p>
            <p className="italic font-bold">{t.worldLeadersPerspective}</p>
          </div>

          <div className="flex justify-center">
            <div className="relative cursor-pointer" onClick={() => navigate('/world-leaders')}>
              <img 
                src="https://i.postimg.cc/c46JvWrM/2-Eng-Worlds-Leaders-v5-1.png" 
                alt="The Great Leaders of the World Book" 
                className="w-full max-w-[280px] shadow-xl border border-black"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[14px] font-bold italic">
              {t.worldLeadersDirection}
            </p>
            <div className="text-[#cc0000] font-bold">
              <p className="text-[14px]">ISBN 978-1-987832-32-7</p>
              <p className="text-[14px]">$29.95 ({t.taxesIncluded})</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col items-center gap-1">
              <p className="text-[14px] font-bold uppercase tracking-widest text-slate-700">{t.leadersOrderFormTitle}</p>
              <button 
                onClick={() => navigate('/order/world-leaders')}
                className="bg-[#cc0000] text-white px-8 py-3 rounded font-bold uppercase tracking-widest hover:bg-[#b30000] transition-colors shadow-md"
              >
                {t.orderNow}
              </button>
            </div>
          </div>

          <div className="text-[13px] leading-relaxed text-center px-2">
            <p>
              {t.worldLeadersSummary}
            </p>
          </div>

          <div className="pt-4 border-t border-black">
            <button 
              onClick={() => navigate('/world-leaders')} 
              className="bg-[#1a1b41] text-white px-8 py-3 rounded font-bold uppercase tracking-widest hover:bg-[#2a2b51] transition-colors shadow-md text-[14px]"
            >
              {language === 'EN' ? 'More Information' : "Plus d'informations"}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
