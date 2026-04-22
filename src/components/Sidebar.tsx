import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  'HOME',
  'ABOUT US',
  'PRIME MINISTERS OF CANADA',
  'INDIGENOUS LEADERS',
  'GOVERNORS GENERAL',
  'CHIEF JUSTICES OF CANADA',
  'PREMIERS OF QUEBEC',
  'WORLD LEADERS',
  'MUSEUM',
  'DIRECTORS',
  'PHOTOS',
  'TESTIMONIALS',
  'CONTACT US',
  'ORDER FORMS',
];

interface SidebarProps {
  onNavigate: (page: string) => void;
  language: 'EN' | 'FR';
}

export default function Sidebar({ onNavigate, language }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const logoUrl = language === 'EN' 
    ? "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png"
    : "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png";

  const handleItemClick = (item: string) => {
    if (item === 'HOME') onNavigate('home');
    else if (item === 'PRIME MINISTERS OF CANADA') onNavigate('pm');
    else if (item === 'INDIGENOUS LEADERS') onNavigate('native');
    else if (item === 'GOVERNORS GENERAL') onNavigate('govgen');
    else if (item === 'CHIEF JUSTICES OF CANADA') onNavigate('chief');
    else if (item === 'PREMIERS OF QUEBEC') onNavigate('premiers');
    else if (item === 'WORLD LEADERS') onNavigate('world');
    else if (item === 'MUSEUM') onNavigate('museum');
    else if (item === 'DIRECTORS') onNavigate('directors');
    else if (item === 'PHOTOS') onNavigate('photos');
    else if (item === 'TESTIMONIALS') onNavigate('testimonials');
    else if (item === 'CONTACT US') onNavigate('contact');
    else if (item === 'ABOUT US') onNavigate('about');
    else if (item === 'ORDER FORMS') onNavigate('order');
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-50 print:hidden">
        <div className="h-10 cursor-pointer" onClick={() => onNavigate('home')}>
          <img 
            src={logoUrl} 
            alt="New Federation House" 
            className="h-full w-auto"
            referrerPolicy="no-referrer"
          />
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#2e6e6e] hover:bg-slate-100 transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`
        ${isOpen ? 'flex' : 'hidden'} 
        md:flex w-full md:w-[250px] flex-col pt-4 print:hidden
        fixed md:static inset-0 top-[73px] md:top-0 bg-white z-40
        overflow-y-auto
      `}>
        <div className="hidden md:block px-4 mb-8 cursor-pointer" onClick={() => onNavigate('home')}>
          <img 
            src={logoUrl} 
            alt="New Federation House" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="space-y-[2px] mb-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleItemClick(item)}
              className="w-full text-left px-6 md:px-4 py-3 md:py-2 teal-gradient text-[#2e6e6e] font-sans text-[13px] md:text-[13px] font-bold tracking-wider hover:brightness-95 transition-all border-b md:border-b-0 border-slate-100"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="px-6 md:px-4 mb-8">
          <button 
            onClick={() => handleItemClick('ORDER FORMS')}
            className="w-full bg-[#cc0000] text-white font-bold py-3 uppercase tracking-widest border-2 border-[#cc0000] hover:bg-white hover:text-[#cc0000] transition-colors shadow-lg"
          >
            Order Forms
          </button>
        </div>
      </div>
    </>
  );
}
