import React from 'react';

interface ContactUsProps {
  language: 'EN' | 'FR';
}

export default function ContactUs({ language }: ContactUsProps) {
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
          {language === 'EN' ? 'CONTACT US' : 'CONTACTEZ-NOUS'}
        </h2>
      </div>

      <div className="space-y-8 max-w-[600px] text-[18px]">
        <div className="space-y-4">
          <p className="font-bold text-[#cc0000]">New Federation House</p>
          <div className="leading-relaxed text-slate-700">
            <p>1155 Metcalfe Street, Suite 1500</p>
            <p>Montreal, Quebec H3B 2V6</p>
            <p>Canada</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex gap-4">
            <span className="font-bold w-20">Email:</span>
            <a href="mailto:nfh@newfederation.org" className="text-[#0073ab] hover:underline">nfh@newfederation.org</a>
          </div>
          <div className="flex gap-4">
            <span className="font-bold w-20">Phone:</span>
            <span>(514) 932-3555</span>
          </div>
        </div>
      </div>
    </div>
  );
}
