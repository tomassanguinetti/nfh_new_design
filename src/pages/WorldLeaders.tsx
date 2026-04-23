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
  const content = {
    EN: {
      title: "THE WORLD’S GREAT LEADERS",
      tagline: "Humanity, Justice, Peace",
      perspective: "A Canadian Perspective",
      p1: "We live in a world shaken by wars, atrocities and disorders of all kinds. Dictators and authoritarian regimes continue to afflict mankind. The leaders of today and tomorrow have every interest in improving international order so that justice, democracy and solidarity between nations can prevail.",
      p2: "Given the multiplicity of cultures and differences between peoples, this challenge is crucial. This soon to be published book will give an overview of the great leaders, both men and women who, in every era, fought for a better world and succeeded in transforming adversity into opportunities for revival and growth. Our goal is to pay them tribute in the hope that they may serve as an inspiration to the leaders of today and tomorrow.",
      criteriaTitle: "Selection Criteria -",
      criteriaText: "The world leaders, from ancient times to the present day, to be included in this book have been chosen on the basis of their ability to promote socio-political objectives such as reconciliation, equality, justice, human rights and peace.",
      leadersLabel: "Leaders -",
      leadersSublabel: "Some thirty names in the following list have been chosen",
      leadershipTitle: "Leadership",
      leadershipText: "This book follows the same format as previous books in our leadership series. Expert authors have written original biographies, illustrated with photos and other appropriate images. In addition, a quotation from each leader appears at the beginning of each entry. Here are a few examples:",
      quote1: "“I am not truly free if I am taking away someone else’s freedom, just as surely as I am not free when my freedom is taken from me. The oppressed and the oppressor alike are robbed of their humanity.”",
      quote2: "“We must learn to live together as brothers or perish together as fools.”",
      quote3: "“Ask not what your country can do for you ask what you can do for your country.”",
      projectTitle: "A BOOK PROJECT",
      directedBy: "DIRECTED BY JACQUES G. RUELLAND, PH.D.",
      aboutUs: "New Federation House is a non-profit organization devoted to public education on Canadian political, economic and social issues.",
      testimonial: "“The quality and content of these volumes are remarkable. I think they should be required reading in every high school and university across the country.”",
      availableIn: "This book is also available in French.",
      mailingAddress: "Mailing Address Only - ( Not open to the Public )",
      phone: "Phone: 613 415 6352",
      email: "E-mail: newfederationhouse@gmail.com"
    },
    FR: {
      title: "LES GRANDS DIRIGEANTS DU MONDE",
      tagline: "Humanité, Justice, Paix",
      perspective: "Une perspective canadienne",
      p1: "Nous vivons dans un monde secoué par des guerres, des atrocités et des désordres de toutes sortes. Les dictateurs et les régimes autoritaires continuent de tourmenter l'humanité. Les dirigeants d'aujourd'hui et de demain ont tout intérêt à améliorer l'ordre international afin que la justice, la démocratie et la solidarité entre les nations puissent prévaloir.",
      p2: "Étant donné la multiplicité des cultures et les différences entre les peuples, ce défi est crucial. Ce livre, qui paraîtra prochainement, donnera un aperçu des grands dirigeants, tant hommes que femmes, qui, à chaque époque, ont lutté pour un monde meilleur et ont réussi à transformer l'adversité en opportunités de renouveau et de croissance. Notre objectif est de leur rendre hommage dans l'espoir qu'ils puissent servir d'inspiration aux dirigeants d'aujourd'hui et de demain.",
      criteriaTitle: "Critères de sélection -",
      criteriaText: "Les dirigeants mondiaux, de l'Antiquité à nos jours, qui figureront dans ce livre ont été choisois en fonction de leur capacité à promouvoir des objectifs socio-politiques tels que la réconciliation, l'égalité, la justice, les droits de la personne et la paix.",
      leadersLabel: "Dirigeants -",
      leadersSublabel: "Une trentaine de noms dans la liste suivante ont été choisis",
      leadershipTitle: "Leadership",
      leadershipText: "Ce livre suit le même format que les livres précédents de notre série sur le leadership. Des auteurs experts ont rédigé des biographies originales, illustrées de photos et d'autres images appropriées. De plus, une citation de chaque dirigeant apparaît au début de chaque entrée. En voici quelques exemples :",
      quote1: "« Je ne suis pas vraiment libre si je prive quelqu'un d'autre de sa liberté, aussi sûrement que je ne suis pas libre quand ma liberté m'est enlevée. L'opprimé et l'oppresseur sont tous deux dépouillés de leur humanité. »",
      quote2: "« Nous devons apprendre à vivre ensemble comme des frères, sinon nous allons périr ensemble comme des imbéciles. »",
      quote3: "« Ne demandez pas ce que votre pays peut faire pour vous, demandez ce que vous pouvez faire pour votre pays. »",
      projectTitle: "UN PROJET DE LIVRE",
      directedBy: "DIRIGÉ PAR JACQUES G. RUELLAND, PH.D.",
      aboutUs: "Maison de la Nouvelle Fédération est un organisme à but non lucratif voué à l'éducation du public sur les enjeux politiques, économiques et sociaux canadiens.",
      testimonial: "« La qualité et le contenu de ces volumes sont remarquables. Je pense qu'ils devraient être une lecture obligatoire dans chaque école secondaire et université à travers le pays. »",
      availableIn: "Ce livre est également disponible en anglais.",
      mailingAddress: "Adresse postale uniquement - ( Non ouvert au public )",
      phone: "Tél : 613 415 6352",
      email: "Courriel : newfederationhouse@gmail.com"
    }
  }[language];

  const logoUrl = "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png";

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
              {content.title}
            </h2>
            <p className="text-[#cc0000] text-[20px] font-bold mt-2">{content.tagline}</p>
            <p className="italic text-[18px] text-slate-700">{content.perspective}</p>
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
            <p>{content.p1}</p>
            <p>{content.p2}</p>
          </div>

          <div className="space-y-2">
            <p className="text-[#cc0000] font-bold text-[18px]">{content.criteriaTitle}</p>
            <p>{content.criteriaText}</p>
          </div>

          <div className="space-y-4 text-left">
            <p className="text-[#cc0000] font-bold text-[18px]">{content.leadersLabel} <span className="text-black font-normal">{content.leadersSublabel}</span></p>
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
            <h3 className="text-[#cc0000] font-bold text-[22px] text-left">{content.leadershipTitle}</h3>
            <p>{content.leadershipText}</p>

            <div className="space-y-8 pl-6 border-l-4 border-slate-100 italic text-slate-700 text-[16px]">
              <div className="space-y-2 text-left">
                <p>{content.quote1}</p>
                <p className="font-bold text-black not-italic">— Nelson Mandela</p>
              </div>
              <div className="space-y-2 text-left">
                <p>{content.quote2}</p>
                <p className="font-bold text-black not-italic">— Martin Luther King, Jr.</p>
              </div>
              <div className="space-y-2 text-left">
                <p>{content.quote3}</p>
                <p className="font-bold text-black not-italic">— John Fitzgerald Kennedy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Info Section - Bottom */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          <div className="text-center space-y-6 py-8 bg-slate-50 border border-slate-200 rounded-sm">
            <div className="space-y-1">
              <p className="text-[#cc0000] font-bold tracking-widest uppercase text-[18px]">{content.projectTitle}</p>
              <p className="font-bold text-[20px] uppercase">{content.directedBy}</p>
            </div>
            
            <div className="text-[15px] px-8 max-w-2xl mx-auto">
              {content.aboutUs}
            </div>

            <div className="px-8 py-6 border-t border-b border-slate-200 italic text-[18px] text-blue-800 max-w-2xl mx-auto">
              {content.testimonial}
              <p className="not-italic font-bold text-black mt-3">— Henri Habib, Professor Emeritus at Ottawa and Concordia Universities.</p>
            </div>

            <p className="text-[16px] font-bold">{content.availableIn}</p>
          </div>

          <div className="text-[15px] space-y-3 text-center border-t border-slate-200 pt-6 pb-12">
            <p className="font-bold text-[16px]">{content.mailingAddress}</p>
            <p>M161- 4338 Innes Road, Ottawa, ON K4A 3W3</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              <p>{content.phone}</p>
              <p>{content.email}</p>
            </div>
            <p className="text-blue-600 font-bold text-[15px]">www.newfederation.org</p>
          </div>
        </div>
      </div>
    </div>
  );
}
