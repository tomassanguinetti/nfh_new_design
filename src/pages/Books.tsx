import React from 'react';
import { useNavigate } from 'react-router-dom';
import { translations, Language } from '../lib/translations';

interface BooksProps {
  language: Language;
}

export default function Books({ language }: BooksProps) {
  const navigate = useNavigate();
  const t = translations[language].home;

  const books = [
    {
      id: 'pm',
      title: language === 'EN' ? 'THE PRIME MINISTERS OF CANADA 7' : 'LES PREMIERS MINISTRES DU CANADA 7',
      sup: language === 'EN' ? 'TH' : 'E',
      edition: language === 'EN' ? 'EDITION' : 'ÉDITION',
      subtitle: language === 'EN' ? 'From John A. Macdonald to Mark Carney' : 'De John A. Macdonald à Mark Carney',
      isbn: '978-1-987832-42-6',
      editors: 'Jean Chevrier, Denis L. Daigneault, Jeanne Poulin and Gerald C. Gummersell, Editors',
      price: '$29.95',
      image: "https://i.postimg.cc/y6MGZXNR/1-Eng-PM-BK-1.png",
      path: '/pm',
      summary: t.pmSummary
    },
    {
      id: 'world',
      title: language === 'EN' ? 'THE GREAT LEADERS OF THE WORLD' : 'LES GRANDS LEADERS DU MONDE',
      sup: '',
      edition: '',
      subtitle: language === 'EN' ? 'Humanity, Justice, Peace - A Canadian Perspective' : 'Humanité, Justice, Paix - Une perspective canadienne',
      isbn: '978-1-987832-32-7',
      editors: 'Under the direction of Jacques G. Ruelland, PhD',
      price: '$29.95',
      image: "https://i.postimg.cc/c46JvWrM/2-Eng-Worlds-Leaders-v5-1.png",
      path: '/world-leaders',
      summary: t.worldLeadersSummary
    },
    {
      id: 'environmentalists',
      title: language === 'EN' ? 'Saving the Planet: The Leading Environmentalists' : 'Sauver la planète : les grands écologistes',
      image: "https://www.newfederation.org/Images/Env-cov-1-150.jpg",
      path: '/saving-planet'
    },
    {
      id: 'pm6',
      title: language === 'EN' ? 'The Prime Ministers of Canada (6th edition)' : 'Les Premiers ministres du Canada (6e édition)',
      image: "https://www.newfederation.org/Images/PMC-E-6-150.jpg",
      path: '/pm6'
    },
    {
      id: 'indigenous',
      title: language === 'EN' ? 'Indigenous Leaders of Canada (3rd edition)' : 'Chefs autochtones du Canada (3e édition)',
      image: "https://www.newfederation.org/Images/IL-E-3.jpg",
      path: '/native'
    },
    {
      id: 'govgen',
      title: language === 'EN' ? 'THE GOVERNORS GENERAL OF CANADA' : 'LES GOUVERNEURS GÉNÉRAUX DU CANADA',
      image: "https://www.newfederation.org/Images/GG-E-2.jpg",
      path: '/govgen'
    },
    {
      id: 'chiefjustices',
      title: language === 'EN' ? 'The Chief Justices of the Supreme Court of Canada (2nd edition)' : 'Les juges en chef de la Cour suprême du Canada (2e édition)',
      image: "https://www.newfederation.org/Images/Chief-Justices-Book-cover-EN-sml.jpg",
      path: '/chief'
    }
  ];

  return (
    <div className="w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
        {books.map((book) => (
          <div key={book.id} className="flex flex-col items-center group">
            <div 
              className="relative cursor-pointer mb-6 transform transition-all duration-300 group-hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => navigate(book.path)}
            >
              <img 
                src={book.image} 
                alt={book.title} 
                className="w-full max-w-[320px] shadow-2xl border border-gray-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity" />
            </div>
            
            <h3 
              className="text-center font-black text-[18px] lg:text-[20px] text-gray-900 uppercase tracking-tight cursor-pointer hover:text-[#cc0000] transition-colors leading-tight px-4 mb-4"
              style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}
              onClick={() => navigate(book.path)}
            >
              {book.title}
            </h3>
            
            <button
              onClick={() => navigate(book.path)}
              className="bg-[#cc0000] text-white px-6 py-2 text-[12px] font-black uppercase tracking-widest hover:bg-[#b30000] transition-all duration-300 shadow-md transform hover:scale-105 active:scale-95"
              style={{ fontFamily: '"Arial Black", Gadget, sans-serif' }}
            >
              {translations[language].menu.moreInfo}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
