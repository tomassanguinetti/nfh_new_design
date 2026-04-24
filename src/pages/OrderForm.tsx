import React, { useState } from 'react';
import OrderFormPM from './OrderFormPM';
import OrderFormCollection from './OrderFormCollection';
import OrderFormWorldLeaders from './OrderFormWorldLeaders';

interface OrderFormProps {
  language: 'EN' | 'FR';
  initialView?: FormView;
}

type FormView = 'selection' | 'pm' | 'collection' | 'world';

export default function OrderForm({ language, initialView = 'selection' }: OrderFormProps) {
  const [view, setView] = useState<FormView>(initialView);

  const logoUrl = language === 'EN' 
    ? "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png"
    : "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png";

  if (view === 'pm') {
    return <OrderFormPM onBack={() => setView('selection')} language={language} />;
  }

  if (view === 'collection') {
    return <OrderFormCollection onBack={() => setView('selection')} language={language} />;
  }

  if (view === 'world') {
    return <OrderFormWorldLeaders onBack={() => setView('selection')} language={language} />;
  }

  return (
    <div className="flex-1 px-4 md:px-8 py-4 md:border-l-[3px] border-[#cc0000] md:ml-4 bg-slate-50 min-h-screen">
      <div className="mb-4">
        <img src={logoUrl} alt="Logo" className="h-16 mx-auto md:mx-0" referrerPolicy="no-referrer" />
      </div>

      <div className="mb-8 border-b border-slate-200 pb-4 text-center md:text-left">
        <h2 className="text-[#cc0000] font-sans text-[28px] font-bold leading-tight uppercase">
          ORDER FORMS
        </h2>
        <p className="text-[#2e6e6e] text-[20px] font-bold mt-2 italic">Select the order form you wish to complete</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px]">
        {/* Collection Form */}
        <div className="bg-white border border-slate-200 shadow-md flex flex-col hover:shadow-xl transition-shadow group">
          <div className="p-4 bg-slate-100 border-b border-slate-200">
             <img src="https://www.newfederation.org/Images/IL-E-3.jpg" alt="Collection" className="h-48 mx-auto" referrerPolicy="no-referrer" />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-[#cc0000] font-bold text-lg leading-tight mb-2">CANADIAN LEADERSHIP COLLECTION</h3>
              <p className="text-sm text-slate-600 mb-4">Multiple titles: Great Leaders, PMs, Environment, Governors, Chief Justices.</p>
            </div>
            <button 
              onClick={() => setView('collection')}
              className="w-full bg-[#cc0000] text-white font-bold py-2 uppercase text-sm tracking-widest hover:bg-[#b30000] transition-colors"
            >
              Select Form
            </button>
          </div>
        </div>

        {/* PM Form */}
        <div className="bg-white border border-slate-200 shadow-md flex flex-col hover:shadow-xl transition-shadow group">
          <div className="p-4 bg-slate-100 border-b border-slate-200">
             <img src="https://i.postimg.cc/y6MGZXNR/1-Eng-PM-BK-1.png" alt="PM" className="h-48 mx-auto" referrerPolicy="no-referrer" />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-[#cc0000] font-bold text-lg leading-tight mb-2">THE PRIME MINISTERS OF CANADA</h3>
              <p className="text-sm text-slate-600 mb-4">Individual order form for Prime Ministers 7th Edition.</p>
            </div>
            <button 
              onClick={() => setView('pm')}
              className="w-full bg-[#cc0000] text-white font-bold py-2 uppercase text-sm tracking-widest hover:bg-[#b30000] transition-colors"
            >
              Select Form
            </button>
          </div>
        </div>

        {/* World Leaders Form */}
        <div className="bg-white border border-slate-200 shadow-md flex flex-col hover:shadow-xl transition-shadow group">
          <div className="p-4 bg-slate-100 border-b border-slate-200">
             <img src="https://i.postimg.cc/c46JvWrM/2-Eng-Worlds-Leaders-v5-1.png" alt="World" className="h-48 mx-auto" referrerPolicy="no-referrer" />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-[#cc0000] font-bold text-lg leading-tight mb-2">THE WORLD'S GREAT LEADERS</h3>
              <p className="text-sm text-slate-600 mb-4">Individual order form for the upcoming 2026 release.</p>
            </div>
            <button 
              onClick={() => setView('world')}
              className="w-full bg-[#cc0000] text-white font-bold py-2 uppercase text-sm tracking-widest hover:bg-[#b30000] transition-colors"
            >
              Select Form
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-[#2e6e6e] text-white max-w-[1000px]">
        <h4 className="font-bold text-lg mb-2">HOW TO SUBMIT YOUR ORDER</h4>
        <ul className="list-disc ml-6 space-y-2 text-sm opacity-90">
          <li>Select a book above to view its specific order form.</li>
          <li>For the Prime Ministers book, you can view the form directly in your browser.</li>
          <li>To place an order, download or print the form image, fill it out, and email it to: <strong>newfederationhouse@gmail.com</strong></li>
          <li>Bank E-Transfer payment is accepted at the same email address.</li>
        </ul>
      </div>
    </div>
  );
}
