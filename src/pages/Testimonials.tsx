import React from 'react';

interface TestimonialsProps {
  language: 'EN' | 'FR';
}

export default function Testimonials({ language }: TestimonialsProps) {
  const logoUrl = language === 'EN' 
    ? "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png"
    : "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png";

  const testimonials = [
    {
      quote: "I want to thank you for sending me the excellent books in the Canadian Leadership Series, including Les Premiers Ministres du Québec. The quality and content of these volumes are remarkable. I think they should be required reading in every high school across the country; and should also be used by the Departments of Immigration and Foreign Affairs as an excellent tool to introduce new immigrants to Canadian and Quebec history and personalities. Congratulations to New Federation House for making these books available to the general public in both English and French.",
      author: "Dr. Henri Habib",
      title: "Distinguished Professor Emeritus, Political Science, Concordia University"
    },
    {
      quote: "Thank you very much for your gift of a copy of the most interesting and handsome New Federation House's fourth edition of The Prime Ministers of Canada. It will be a special addition to my library.",
      author: "The Honourable Roy McMurtry",
      title: "Former Attorney General of Ontario, Chief Justice of the Ontario Court of Appeal"
    },
    {
      quote: "I look forward to using this excellent resource, The Prime Ministers of Canada, in order to help me better fulfill my legislative duties as a public servant of Canada.",
      author: "The Honourable Roméo A. Dallaire",
      title: "Senator (ret'd), Lieutenant-General (ret'd)"
    },
    {
      quote: "The Prime Ministers of Canada [is] recommended as a learning resource.",
      author: "Department of Education of Saskatchewan",
      title: ""
    },
    {
      quote: "What a wonderful publication! This book, The Prime Ministers of Canada, is a learning tool for everyone, whether students, teachers, historians, politicians and Mr. and Mrs. Everyone.",
      author: "Dr. Bernard Patry,",
      title: "Member of Parliament, Pierrefonds-Dollard"
    },
    {
      quote: "Having worked alongside more than a few of the Prime Ministers featured in this book, The Prime Ministers of Canada, I can attest to the importance of documenting their time in office, and linking the context of the times to the actions they have taken as Prime Minister. The graphics are great and help make the text accessible and memorable. All in all, this work is a great achievement.",
      author: "The Honourable Mark Harb",
      title: "Senator"
    },
    {
      quote: "Upon reviewing this concise and accessible volume, The Prime Ministers of Canada, its popularity among schools and libraries is easily explained. I look forward to adding both the French and English versions to my personal collection, and plan to share them with my children.",
      author: "The Right Honourable Stephen Harper",
      title: "Prime Minister of Canada"
    },
    {
      quote: "This book, The Prime Ministers of Canada, will serve wonderfully in education.",
      author: "Jacques Monet, s.j.",
      title: "Professor of History, University of Toronto"
    },
    {
      quote: "Congratulations on a magnificent publication. I can see why there has been continued interest and demand for this book across the country as it relates to the important stories of Canada's political leaders.",
      author: "The Honourable Larry Smith",
      title: "Senator"
    },
    {
      quote: "I would like to congratulate you on the quality of this publication, The Prime Ministers of Canada.",
      author: "The Honourable Stéphane Dion",
      title: "Minister of Foreign Affairs"
    },
    {
      quote: "Native Leaders of Canada is a fascinating and informative book that should be mandatory reading in high schools across Canada.",
      author: "Ottawa Life Magazine",
      title: ""
    },
    {
      quote: "It was with great interest that I read your book The Chief Justices of the Supreme Court of Canada. I send you my thanks, and I offer you and your team my sincere congratulations for the excellence of this document.",
      author: "David Heurtel",
      title: "Ministre de l'environnement du Québec"
    }
  ];

  return (
    <div className="flex-1 px-4 md:px-8 py-4 md:border-l-[3px] border-[#cc0000] md:ml-4 overflow-hidden">
      <div className="mb-8">
        <img src={logoUrl} alt="Logo" className="h-16 mx-auto md:mx-0" referrerPolicy="no-referrer" />
      </div>

      <div className="mb-8 border-b border-slate-200 pb-4">
        <h2 className="text-[#cc0000] font-sans text-[28px] font-bold leading-tight uppercase">
          {language === 'EN' ? 'TESTIMONIALS' : 'TÉMOIGNAGES'}
        </h2>
        <p className="text-[#2e6e6e] text-[20px] font-bold mt-2">The Canadian Leadership Collection</p>
      </div>

      <div className="space-y-12 max-w-[800px]">
        {testimonials.map((t, index) => (
          <div key={index} className="space-y-4 border-b border-slate-50 pb-8 last:border-0">
            <p className="text-[18px] font-sans italic text-slate-800 leading-relaxed">
              "{t.quote}"
            </p>
            <div className="flex flex-col">
              <span className="font-bold text-[#cc0000]">{t.author}</span>
              {t.title && <span className="text-slate-500 italic text-sm">{t.title}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
