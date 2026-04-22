import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { translations, Language } from '../lib/translations';

interface HomeProps {
  language: Language;
}

export default function Home({ language }: HomeProps) {
  const navigate = useNavigate();
  const [showFullPm, setShowFullPm] = useState(false);
  const [showFullWorld, setShowFullWorld] = useState(false);
  const t = translations[language].home;

  return (
    <div className="w-full px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_1fr] gap-12">
        {/* Left Column: Info & Updating Box */}
        <div className="space-y-6">
          {/* Top Banner Notice - Moved to Left Column */}
          <div className="border-2 border-[#1a1b41] bg-white text-[#1a1b41] p-4 rounded-xl shadow-sm text-center">
            <p className="text-[13px] font-bold leading-tight">
              {t.bannerNotice}
            </p>
          </div>

          <section>
            <h2 className="text-[15px] font-bold text-black border-b border-black mb-2 uppercase">{t.aboutUsTitle}</h2>
            <p style={{ fontFamily: '"Open Sans", sans-serif' }} className="text-[13px] leading-relaxed text-left">
              {t.aboutUsText}
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-bold text-black border-b border-black mb-2 uppercase">{t.missionTitle}</h2>
            <p style={{ fontFamily: '"Open Sans", sans-serif' }} className="text-[13px] leading-relaxed text-left">
              {t.missionText}
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-bold text-black border-b border-black mb-2 uppercase">{t.visionTitle}</h2>
            <p style={{ fontFamily: '"Open Sans", sans-serif' }} className="text-[13px] leading-relaxed text-left">
              {t.visionText}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-[15px] font-bold text-black border-b border-black mb-2 uppercase">{t.goalsTitle}</h2>
            <p style={{ fontFamily: '"Open Sans", sans-serif' }} className="text-[13px] leading-relaxed text-left">
              • {t.goal1}
            </p>
            <p style={{ fontFamily: '"Open Sans", sans-serif' }} className="text-[13px] leading-relaxed text-left">
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
            <h2 className="text-[#cc0000] text-[24px] font-bold uppercase tracking-tight">{t.newRelease}</h2>
            <h3 style={{ fontFamily: '"Crimson Text", serif' }} className="text-black text-[24px] font-serif font-bold uppercase leading-tight">
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
                onClick={() => navigate('/order')}
                className="bg-[#cc0000] text-white px-8 py-3 rounded font-bold uppercase tracking-widest hover:bg-[#b30000] transition-colors shadow-md"
              >
                {t.orderNow}
              </button>
            </div>
          </div>

          <div style={{ fontFamily: '"Open Sans", sans-serif' }} className="text-[13px] leading-relaxed text-left px-2">
            <p>
              {showFullPm ? t.pmSummary : `${t.pmSummary.substring(0, 300)}...`}
            </p>
            <button 
              onClick={() => setShowFullPm(!showFullPm)} 
              className="text-[#cc0000] font-bold mt-1 hover:underline"
            >
              {showFullPm ? t.seeLess : t.seeMore}
            </button>
          </div>

          <div className="pt-4 border-t border-black">
            <button onClick={() => navigate('/pm')} className="text-[#cc0000] font-bold underline text-[14px]">
              {t.pmMoreInfo}
            </button>
          </div>
        </div>

        {/* Right Column: World Leaders */}
        <div className="space-y-6 text-center">
          <div className="space-y-1">
            <h2 className="text-[#cc0000] text-[24px] font-bold uppercase tracking-tight">{t.worldLeadersRelease}</h2>
            <h3 style={{ fontFamily: '"Crimson Text", serif' }} className="text-black text-[24px] font-serif font-bold uppercase leading-tight">
              {t.worldLeadersTitle}
            </h3>
            <p className="text-black text-[18px] font-bold uppercase">{t.worldLeadersSubtitle}</p>
            <p className="italic font-bold">{t.worldLeadersPerspective}</p>
          </div>

          <div className="flex justify-center">
            <div className="relative cursor-pointer" onClick={() => navigate('/publications')}>
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
                onClick={() => navigate('/order')}
                className="bg-[#cc0000] text-white px-8 py-3 rounded font-bold uppercase tracking-widest hover:bg-[#b30000] transition-colors shadow-md"
              >
                {t.orderNow}
              </button>
            </div>
          </div>

          <div style={{ fontFamily: '"Open Sans", sans-serif' }} className="text-[13px] leading-relaxed text-left px-2">
            <p>
              {showFullWorld ? t.worldLeadersSummary : `${t.worldLeadersSummary.substring(0, 300)}...`}
            </p>
            <button 
              onClick={() => setShowFullWorld(!showFullWorld)} 
              className="text-[#cc0000] font-bold mt-1 hover:underline"
            >
              {showFullWorld ? t.seeLess : t.seeMore}
            </button>
          </div>

          <div className="pt-4 border-t border-black">
            <button onClick={() => navigate('/publications')} className="text-[#cc0000] font-bold underline text-[14px]">
              {t.worldLeadersMoreInfo}
            </button>
          </div>
        </div>
      </div>

      {/* Global Footer Acknowledgement */}
      <div className="mt-16 pt-8 border-t border-black text-center">
        <p className="text-[14px] max-w-2xl mx-auto mb-6 text-gray-600 font-medium">
          {t.footerNarrative}
        </p>
        <div className="space-y-2">
          <p className="text-[12px] font-bold italic">{t.footerGratitude}</p>
          <div className="flex flex-col items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/CPAC_2016_logo.png" alt="CPAC" className="h-12 mb-2" referrerPolicy="no-referrer" />
            <p className="text-[14px] font-black uppercase tracking-widest">{t.cpacFull}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
