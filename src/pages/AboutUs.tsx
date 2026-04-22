import React from 'react';

interface AboutUsProps {
  onNavigate: (page: string) => void;
  language: 'EN' | 'FR';
}

export default function AboutUs({ onNavigate, language }: AboutUsProps) {
  if (language === 'FR') {
    return (
      <div className="flex-1 px-4 md:px-8 py-4 md:border-l-[3px] border-[#cc0000] md:ml-4">
        <h2 className="text-[#2e6e6e] font-sans text-[18px] font-bold mb-8 uppercase tracking-widest">À propos de nous</h2>
        
        <div className="space-y-8 text-[17px] leading-relaxed max-w-[800px] text-slate-800">
          <section className="space-y-4">
            <h3 className="text-[#cc0000] font-bold text-[20px] uppercase">Notre mission et notre vision</h3>
            <p>
              Notre mission est de publier des documents originaux et perspicaces en formats imprimés et numériques, et de promouvoir une appréciation du concept de leadership.
            </p>
            <p>
              Notre vision est que les Canadiens et les membres de la communauté internationale comprendront mieux l'importance du leadership dans le monde d'aujourd'hui.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-[#cc0000] font-bold text-[20px] uppercase">Nos objectifs</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-[#cc0000] font-bold">•</span>
                <span>
                  <strong>Publier des livres sur les chefs politiques canadiens</strong> – des collections uniques d'essais historiques présentant des chefs politiques qui ont influencé le cours des événements aux niveaux fédéral et provincial au Canada.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#cc0000] font-bold">•</span>
                <span>
                  <strong>Publier des livres sur les grands chefs politiques du monde</strong> – l'histoire est riche en chefs de plusieurs époques et de nombreux continents qui ont enflammé l'imagination collective.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#cc0000] font-bold">•</span>
                <span>
                  <strong>Créer un Musée du leadership mondial à Montréal</strong> – un musée international et une école du leadership pour favoriser une compréhension plus profonde du rôle critique du leadership politique dans la société contemporaine.
                </span>
              </li>
            </ul>
          </section>

          <footer className="pt-8 border-t border-slate-100">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
              Numéro d'enregistrement d'organisme de bienfaisance canadien : 119247021 RR0001
            </p>
          </footer>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 px-4 md:px-8 py-4 md:border-l-[3px] border-[#cc0000] md:ml-4">
      <h2 className="text-[#2e6e6e] font-sans text-[18px] font-bold mb-8 uppercase tracking-widest">About Us</h2>
      
      <div className="space-y-8 text-[17px] leading-relaxed max-w-[800px] text-slate-800">
        <section className="space-y-4">
          <h3 className="text-[#cc0000] font-bold text-[20px] uppercase">Our mission and vision</h3>
          <p>
            Our mission is to publish original and insightful materials in print and digital formats, and to promote an appreciation of the concept of leadership.
          </p>
          <p>
            Our vision is that Canadians and members of the international community will better understand the importance of leadership in today's world.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-[#cc0000] font-bold text-[20px] uppercase">Our goals</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-[#cc0000] font-bold">•</span>
              <span>
                <strong>To publish books on Canadian political leaders</strong> – unique collections of historical essays featuring political leaders who have influenced the course of events at the federal and provincial levels in Canada.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#cc0000] font-bold">•</span>
              <span>
                <strong>To publish books on the world’s great political leaders</strong> – history is rich in leaders from several eras and many continents who have ignited the collective imagination.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#cc0000] font-bold">•</span>
              <span>
                <strong>To create a World Leadership Museum in Montreal</strong> – an international museum and school of leadership to foster a deeper understanding of the critical role of political leadership in contemporary society.
              </span>
            </li>
          </ul>
        </section>

        <footer className="pt-8 border-t border-slate-100">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
            Canadian Registered Charitable number: 119247021 RR0001
          </p>
        </footer>
      </div>
    </div>
  );
}
