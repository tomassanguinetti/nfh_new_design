import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface OrderFormPMProps {
  onBack: () => void;
  language: 'EN' | 'FR';
}

export default function OrderFormPM({ onBack, language }: OrderFormPMProps) {
  const formRef = useRef<HTMLDivElement>(null);
  
  const [qty, setQty] = useState<number | ''>('');
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    address: '',
    city: '',
    province: '',
    postalCode: ''
  });

  const pricePerBook = 29.95;
  const shipping = 9.0;
  const total = qty && typeof qty === 'number' ? (qty * pricePerBook + shipping).toFixed(2) : "0.00";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePrint = async () => {
    if (!formRef.current) return;
    
    const canvas = await html2canvas(formRef.current, { 
      scale: 2, 
      useCORS: true, 
      logging: false,
      backgroundColor: '#ffffff'
    });
    
    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    const pdfUrl = pdf.output('bloburl');
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="flex-1 px-4 md:px-8 py-8 bg-slate-50 min-h-screen">
      <div className="max-w-[850px] mx-auto mb-6 flex justify-between items-center no-print">
        <button 
          onClick={onBack}
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded transition-colors text-sm"
        >
          {language === 'EN' ? '← Back' : '← Retour'}
        </button>
        <button 
          onClick={handlePrint}
          className="bg-[#cc0000] hover:bg-[#a60000] text-white font-bold py-2 px-6 rounded transition-colors shadow-lg text-sm uppercase tracking-widest"
        >
          {language === 'EN' ? 'Generate PDF' : 'Générer le PDF'}
        </button>
      </div>

      <div 
        ref={formRef} 
        className="max-w-[850px] mx-auto bg-white border-4 border-white shadow-2xl overflow-hidden font-archivo text-black p-8 space-y-8"
        style={{ minHeight: '1050px' }}
      >
        {/* Yellow Header */}
        <div className="bg-[#fdf8b3] p-2 flex justify-between items-center border-4 border-[#cc0000]">
          <div className="flex items-center gap-4">
             <div className="flex items-center">
                <img 
                   src="https://i.postimg.cc/GmXwrt8s/New-Federation-Logo-Bilingual-Official.png" 
                   alt="Logo" 
                   className="h-16 w-auto object-contain"
                   referrerPolicy="no-referrer"
                />
             </div>
          </div>
          <div className="bg-[#4a4a4a] text-white px-4 py-2 mr-2">
             <h1 className="text-sm font-black italic tracking-tighter uppercase whitespace-nowrap">
               ORDER FORM / BON DE COMMANDE
             </h1>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="col-span-12 md:col-span-6 space-y-6">
            <div className="bg-[#004b87] p-4 text-white w-full font-archivo border-4 border-[#cc0000]">
              <h2 className="text-4xl font-black leading-tight tracking-tighter uppercase mb-2 w-full text-center">
                THE PRIME MINISTERS OF CANADA
              </h2>
              <h3 className="text-3xl font-black italic mb-4 w-full text-center">7<sup className="text-xl">TH</sup> EDITION</h3>
              <div className="flex items-start justify-center w-full">
                <span className="text-6xl font-black pr-1 pt-6">$</span>
                <span className="text-9xl font-black tracking-tighter leading-none">29</span>
                <div className="flex flex-col pl-2 pt-3">
                   <span className="text-5xl font-black leading-none">95</span>
                   <span className="text-[14px] font-bold uppercase mt-2 leading-none">PRICE<br />PER BOOK</span>
                </div>
              </div>
            </div>

            <p className="text-center font-bold text-xl">ISBN 978-1-987832-42-6</p>

            <div className="space-y-4">
               <div className="flex items-center">
                 <div className="bg-[#cc0000] text-white p-2 flex-grow text-center font-black h-14 flex items-center justify-center uppercase leading-tight mr-4">
                    NUMBER OF<br />BOOKS ORDERED
                 </div>
                 <input 
                    type="number"
                    min="1"
                    value={qty}
                    onChange={(e) => setQty(e.target.value === '' ? '' : parseInt(e.target.value))}
                    className="border-2 border-black w-24 h-14 text-center text-3xl font-black focus:outline-none bg-white"
                 />
               </div>

               <div className="flex items-center">
                 <div className="bg-[#004b87] text-white p-2 flex-grow text-center font-black h-14 flex items-center justify-center uppercase tracking-widest text-xl mr-4">
                    SHIPPING
                 </div>
                 <div className="border-2 border-black w-24 h-14 flex items-center justify-center text-2xl font-black bg-white">
                    $9.00
                 </div>
               </div>

               <div className="flex items-center">
                 <div className="bg-[#cc0000] text-white p-2 flex-grow text-center font-black h-14 flex items-center justify-center uppercase leading-tight mr-4 relative">
                    TOTAL
                    <span className="absolute bottom-1 text-[8px] font-bold">TAXES INCLUDED</span>
                 </div>
                 <div className="border-2 border-black w-24 h-14 flex items-center justify-center text-2xl font-black bg-white">
                    <span className="mr-1">$</span>
                    {total}
                 </div>
               </div>
            </div>

            <div className="pt-6 space-y-2 font-archivo">
              <h3 className="text-[#004b87] font-black text-2xl tracking-tighter uppercase">HOW TO ORDER AND PAY</h3>
              
              <div className="space-y-2">
                <div>
                  <p className="text-[#cc0000] font-bold text-sm">Email your order to:</p>
                  <p className="font-black text-lg">newfederationhouse@gmail.com</p>
                </div>
                
                <div>
                  <p className="text-[#cc0000] font-bold text-sm">Bank E-Transfer payment to:</p>
                  <p className="font-black text-lg">newfederationhouse@gmail.com</p>
                </div>

                <div className="space-y-1">
                  <p className="text-[#cc0000] font-bold leading-tight text-sm">
                    Please Mail both your cheque and the<br />
                    completed order form to the following address
                  </p>
                  <p className="text-blue-600 font-bold text-[12px]">
                    Mailing Address Only - ( Not open to the Public )
                  </p>
                  <p className="font-black text-lg pt-1">NEW FEDERATION HOUSE</p>
                  <p className="font-bold text-base">M161 - 4338 Innes Road,</p>
                  <p className="font-bold text-base">Ottawa, ON K4A 3W3</p>
                  <p className="font-black pt-2 text-sm">Contact us - Telephone: 613 415 6352</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 md:col-span-6 flex flex-col items-center">
            <div className="mb-4 w-full">
              <img 
                src="https://i.postimg.cc/y6MGZXNR/1-Eng-PM-BK-1.png" 
                alt="Prime Ministers Cover" 
                className="w-full h-auto object-contain border-4 border-black shadow-2xl" 
                referrerPolicy="no-referrer" 
              />
            </div>

            {/* Address Form Section */}
            <div className="w-full mt-4 space-y-0.5">
               {[
                 { label: 'NAME :', name: 'name' },
                 { label: 'ORG :', name: 'org' },
                 { label: 'ADDRESS :', name: 'address' },
                 { label: '', name: 'address2' }, // Empty spacer for double line address
                 { label: 'CITY :', name: 'city' },
                 { label: 'PROVINCE :', name: 'province' },
                 { label: 'POSTAL CODE :', name: 'postalCode' }
               ].map((field, idx) => (
                 <div key={idx} className="flex border-b border-black h-10 items-end pb-1">
                   <label className="font-black text-[12px] uppercase min-w-[100px] mb-0.5">{field.label}</label>
                   <input 
                      type="text"
                      name={field.name}
                      value={(formData as any)[field.name] || ''}
                      onChange={handleInputChange}
                      className="flex-1 focus:outline-none bg-transparent px-2 font-bold mb-0.5"
                   />
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[850px] mx-auto mt-12 bg-white p-8 border-t-4 border-[#cc0000] shadow-lg text-center">
         <p className="text-lg font-bold text-gray-800 mb-2">
            {language === 'EN' 
              ? "Completed your form?" 
              : "Formulaire complété ?"}
         </p>
         <p className="text-gray-600 mb-6">
            {language === 'EN'
              ? "Click 'Generate PDF' at the top to save your completed form, then email it to newfederationhouse@gmail.com"
              : "Cliquez sur « Générer le PDF » en haut pour enregistrer votre formulaire, puis envoyez-le par e-mail à newfederationhouse@gmail.com"}
         </p>
      </div>
    </div>
  );
}
