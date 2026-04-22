import React from 'react';

const leadersList = [
  'Ardern, Jacinda', 'Bolivar, Simon', 'Bonaparte, Napoléon I', 'Bourguiba, Habib', 'Carter, Jimmy',
  'Catherine II of Russia', 'Charlemagne', 'Christian X of Denmark', 'Churchill, Winston', 'Cleopatra VI Philopator',
  'd’Arc, Jeanne', 'Gaulle, Charles de', 'Gandhi', 'Geronimo', 'Gorbachev, Mikhail',
  'Kennedy, John F.', 'King, Martin L. Jr.', 'Kyi, Aung San Suu', 'Lincoln, Abraham', 'Mandela, Nelson',
  'Merkel, Angela', 'Mulroney, Brian', 'Pearson, Lester B.', 'Peres, Shimon', 'Pericles',
  'Peron, Eva', 'Roosevelt, Franklin D.', 'Samba-Panza, Catherine', 'Sirlief, Ellen J.', 'Tum, Rigoberta Menchu'
];

interface WorldLeadersProps {
  language: 'EN' | 'FR';
}

export default function WorldLeaders({ language }: WorldLeadersProps) {
  const logoUrl = language === 'EN' 
    ? "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png"
    : "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png";

  return (
    <div className="flex-1 px-4 md:px-8 py-4 md:border-l-[3px] border-[#cc0000] md:ml-4 overflow-hidden">
      <div className="flex flex-col gap-12 max-w-[800px] text-[18px] leading-relaxed text-justify relative">
        {/* Logo and Title Section - Full Width */}
        <div className="space-y-4 mb-8 border-b border-slate-200 pb-4">
          <img 
            src={logoUrl} 
            alt="New Federation House" 
            className="h-16"
            referrerPolicy="no-referrer"
          />
          <div className="text-left">
            <h2 className="text-[#cc0000] font-sans text-[28px] font-bold leading-tight uppercase">
              THE WORLD’S GREAT LEADERS
            </h2>
            <p className="text-[#cc0000] text-[20px] font-bold mt-2">Humanity, Justice, Peace</p>
            <p className="italic text-[18px] text-slate-700">A Canadian Perspective</p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="space-y-8">
          {/* Book Cover Container - Floated Right, Lowered */}
          <div className="flex flex-col md:float-right md:ml-8 mb-8 w-[220px] shrink-0 space-y-4 text-center mx-auto md:mx-0">
            <img 
              src={language === 'EN' 
                ? "https://i.postimg.cc/c46JvWrM/2-Eng-Worlds-Leaders-v5-1.png" 
                : "https://i.postimg.cc/Kv4Y1bRn/2-Fre-Worlds-Leaders.png"} 
              alt="The World's Great Leaders Book Cover" 
              className="w-full border border-black shadow-md"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-6">
            <p>
              We live in a world shaken by wars, atrocities and disorders of all kinds. Dictators and authoritarian regimes continue to afflict mankind. The leaders of today and tomorrow have every interest in improving international order so that justice, democracy and solidarity between nations can prevail.
            </p>
            <p>
              Given the multiplicity of cultures and differences between peoples, this challenge is crucial. This soon to be published book will give an overview of the great leaders, both men and women who, in every era, fought for a better world and succeeded in transforming adversity into opportunities for revival and growth. Our goal is to pay them tribute in the hope that they may serve as an inspiration to the leaders of today and tomorrow.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-[#cc0000] font-bold text-[18px]">Selection Criteria -</p>
            <p>
              The world leaders, from ancient times to the present day, to be included in this book have been chosen on the basis of their ability to promote socio-political objectives such as reconciliation, equality, justice, human rights and peace.
            </p>
          </div>

          <div className="space-y-4 text-left">
            <p className="text-[#cc0000] font-bold text-[18px]">Leaders - <span className="text-black font-normal">Some thirty names in the following list have been chosen</span></p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2 text-[16px]">
              {leadersList.map(name => (
                <div key={name}>{name}</div>
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-8 border-t border-slate-200 clear-both">
            <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
              {['gandhi', 'joan', 'merkel', 'gorbachev', 'lincoln', 'mulroney'].map(img => (
                <img 
                  key={img}
                  src={`https://newfederation.org/images/${img}.jpg`} 
                  alt={img} 
                  className="w-20 h-24 object-cover border border-black shadow-sm"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <h3 className="text-[#cc0000] font-bold text-[22px] text-left">Leadership</h3>
            <p>
              This book follows the same format as previous books in our leadership series. Expert authors have written original biographies, illustrated with photos and other appropriate images. In addition, a quotation from each leader appears at the beginning of each entry. Here are a few examples:
            </p>

            <div className="space-y-8 pl-6 border-l-4 border-slate-100 italic text-slate-700 text-[16px]">
              <div className="space-y-2 text-left">
                <p>“I am not truly free if I am taking away someone else’s freedom, just as surely as I am not free when my freedom is taken from me. The oppressed and the oppressor alike are robbed of their humanity.”</p>
                <p className="font-bold text-black not-italic">— Nelson Mandela</p>
              </div>
              <div className="space-y-2 text-left">
                <p>“We must learn to live together as brothers or perish together as fools.”</p>
                <p className="font-bold text-black not-italic">— Martin Luther King, Jr.</p>
              </div>
              <div className="space-y-2 text-left">
                <p>“Ask not what your country can do for you ask what you can do for your country.”</p>
                <p className="font-bold text-black not-italic">— John Fitzgerald Kennedy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Info Section - Bottom */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          <div className="text-center space-y-6 py-8 bg-slate-50 border border-slate-200 rounded-sm">
            <div className="space-y-1">
              <p className="text-[#cc0000] font-bold tracking-widest uppercase text-[18px]">A BOOK PROJECT</p>
              <p className="font-bold text-[20px]">DIRECTED BY JACQUES G. RUELLAND, PH.D.</p>
            </div>
            
            <div className="text-[15px] px-8 max-w-2xl mx-auto">
              New Federation House is a non-profit organization devoted to public education on Canadian political, economic and social issues.
            </div>

            <div className="px-8 py-6 border-t border-b border-slate-200 italic text-[18px] text-blue-800 max-w-2xl mx-auto">
              “The quality and content of these volumes are remarkable. I think they should be required reading in every high school and university across the country.”
              <p className="not-italic font-bold text-black mt-3">— Henri Habib, Professor Emeritus at Ottawa and Concordia Universities.</p>
            </div>

            <p className="text-[16px] font-bold">This book is also available in French.</p>
          </div>

          <div className="text-[15px] space-y-3 text-center border-t border-slate-200 pt-6 pb-12">
            <p className="font-bold text-[16px]">Mailing Address Only - ( Not open to the Public )</p>
            <p>M161- 4338 Innes Road, Ottawa, ON K4A 3W3</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              <p>Phone: 613 415 6352</p>
              <p>E-mail: newfederationhouse@gmail.com</p>
            </div>
            <p className="text-blue-600 font-bold text-[15px]">www.newfederation.org</p>
          </div>
        </div>
      </div>
    </div>
  );
}
