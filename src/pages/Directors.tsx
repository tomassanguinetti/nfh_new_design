import React from 'react';

interface DirectorsProps {
  language: 'EN' | 'FR';
}

export default function Directors({ language }: DirectorsProps) {
  const logoUrl = language === 'EN' 
    ? "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png"
    : "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png";

  const directors = [
    { 
      name: 'Jean Chevrier', 
      title: 'President and co-founder',
      bio: "Jean Chevrier is a lawyer and a former professor of Canadian political history and International Relations. He worked as legal counsel for the Department of Justice Canada. He has written extensively on Canadian politics and also served as an advisor to Robert Stanfield and to the Prime Minister, the Right Honourable Joe Clark.",
      image: "https://www.newfederation.org/Director%20Photos/Jean%20Chevrier-1.jpg"
    },
    { 
      name: 'Michael Jacques', 
      title: 'Director',
      bio: "Michael Jacques is a historian, author and curator based in Sherbrooke, Quebec. He is a specialist in 19th century Canadian industrial history.",
      image: "https://www.newfederation.org/Director%20Photos/Michael%20Jacques-1.jpg"
    },
    { 
      name: 'Célie Cournoyer', 
      title: 'Secretary',
      bio: "Director of operations for the organization \"Bien fait ici\", a pan-Canadian initiative. Ms. Cournoyer graduated in Languages and Modern Literature and Business Administration from the University of Ottawa.",
      image: "https://www.newfederation.org/Director%20Photos/Celie%20Cournoyer-1.jpg"
    },
    { 
      name: 'Diana Diaconu', 
      title: 'Treasurer',
      bio: "Diana Diaconu is a Law school graduate in her native Romania. After many years at Fido/Rogers Communications, joined the public service, working for Citizenship and Immigration Canada.",
      image: "https://www.newfederation.org/Director%20Photos/Diana%20Diaconu-1.jpg"
    },
    { 
      name: 'Tony Di Iorio', 
      title: 'Print Management Specialist',
      bio: "Specialties include concept development, design, and layout, as well as printing and distribution. He has pioneered techniques for short-run book publishing.",
      image: "https://www.newfederation.org/Director%20Photos/Tony%20Di%20Iorio-1.jpg"
    },
    { 
      name: 'James Lorimer', 
      title: 'Director',
      bio: "James Lorimer is an Ottawa-based public affairs consultant with over twenty years experience in government relations.",
      image: "https://www.newfederation.org/Director%20Photos/James%20Lorimer-1.jpg"
    },
    { 
      name: 'Lorne Monti', 
      title: 'Director',
      bio: "Lorne Monti is a gifted wordsmith with a background in the feature film industry. He has written about a variety of issues from politics to lifestyles.",
      image: "https://www.newfederation.org/Director%20Photos/Lorne%20Monti-1.jpg"
    },
    { 
      name: 'Jeanne Poulin', 
      title: 'Director',
      bio: "Jeanne Poulin is a bilingual journalist and essayist specialized in socio-political issues. She has a 35-year career in journalism and is also a visual artist.",
      image: "https://www.newfederation.org/Director%20Photos/Jeanne%20Poulin-2.jpg"
    },
    { 
      name: 'Ghislaine Sathoud', 
      title: 'Director',
      bio: "Human rights activist and author. She holds a Masters in Political Science and a Certificate in Criminology.",
      image: "https://www.newfederation.org/Director%20Photos/Ghislaine%20Sathoud-1.jpg"
    },
    { 
      name: 'Laura Ricotta', 
      title: 'Director',
      bio: "Holds a Bachelor of Commerce from Concordia University and a Masters of Education. Currently a Professor at John Abbott College.",
      image: "https://www.newfederation.org/Director%20Photos/Laura%20Ricotta-1.jpg"
    }
  ];

  return (
    <div className="flex-1 px-4 md:px-8 py-4 md:border-l-[3px] border-[#cc0000] md:ml-4 overflow-hidden">
      <div className="mb-8">
        <img src={logoUrl} alt="Logo" className="h-16 mx-auto md:mx-0" referrerPolicy="no-referrer" />
      </div>

      <div className="mb-8 border-b border-slate-200 pb-4">
        <h2 className="text-[#cc0000] font-sans text-[28px] font-bold leading-tight uppercase">
          {language === 'EN' ? 'DIRECTORS' : 'DIRECTEURS'}
        </h2>
      </div>

      <div className="bg-slate-50 p-6 border-l-4 border-[#cc0000] mb-12 max-w-[800px]">
        <h3 className="text-[#2e6e6e] font-bold text-[18px] mb-2 uppercase tracking-wide">Announcing Changes to the Board of Directors</h3>
        <p className="text-slate-700 leading-relaxed italic">
          We are pleased to announce the appointment of Michael Jacques to the Board of Directors. At the same time, the Board announces the resignation of co-founder and Vice President Denis Daigneault, whose leadership and friendship have left a lasting impression on our organization's permanent legacy.
        </p>
      </div>

      <div className="space-y-12 max-w-[800px]">
        {directors.map((director, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 group">
            <div className="w-[120px] h-[150px] shrink-0 bg-slate-100 overflow-hidden border border-slate-200 shadow-sm transition-transform group-hover:scale-[1.02] mx-auto md:mx-0">
              <img 
                src={director.image} 
                alt={director.name} 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${director.name.replace(' ', '')}/240/300?grayscale`;
                }}
              />
            </div>
            <div className="space-y-2">
              <div className="flex flex-col">
                <span className="text-[22px] font-bold text-slate-800 tracking-tight leading-none mb-1">{director.name}</span>
                <span className="text-[14px] text-[#cc0000] font-bold uppercase tracking-widest">{director.title}</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                {director.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
