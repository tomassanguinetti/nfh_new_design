import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface OrderFormCollectionProps {
  onBack: () => void;
  language: 'EN' | 'FR';
}

export default function OrderFormCollection({ onBack, language }: OrderFormCollectionProps) {
  const logoUrl = language === 'EN' 
    ? "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png"
    : "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png";

  const formRef = useRef<HTMLDivElement>(null);
  
  const [quantities, setQuantities] = useState({
    greatLeaders: 0,
    primeMinisters: 0,
    savingPlanet: 0,
    govGeneral: 0,
    chiefJustice: 0
  });

  const totalBooks = (Object.values(quantities) as number[]).reduce((a, b) => a + b, 0);
  const shipping = 9.0;

  const getSubtotal = (n: number) => {
    if (n === 0) return 0;
    if (n === 1) return 29.95;
    if (n === 2) return 50.00;
    if (n === 3) return 55.00;
    return 60.00; // 4 or more
  };

  const subtotal = getSubtotal(totalBooks);
  const total = totalBooks > 0 ? (subtotal + shipping).toFixed(2) : "0.00";

  const [formData, setFormData] = useState({
    name: '',
    org: '',
    address: '',
    city: '',
    province: '',
    postalCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQtyChange = (field: string, val: string) => {
    const num = parseInt(val) || 0;
    setQuantities(prev => ({ ...prev, [field]: num }));
  };

  const handlePrint = async () => {
    if (!formRef.current) return;
    const canvas = await html2canvas(formRef.current, { scale: 2, useCORS: true, logging: false });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    const pdfUrl = pdf.output('bloburl');
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="flex-1 px-4 md:px-8 py-8 bg-white md:border-l-[3px] border-[#cc0000] md:ml-4 print:p-0 print:border-0 print:ml-0">
      <div className="bg-[#cc0000] p-1 mb-6 print:hidden flex justify-between" data-html2canvas-ignore>
        <button 
          onClick={onBack}
          className="text-white text-sm font-bold uppercase py-1 px-4 border border-white hover:bg-white hover:text-[#cc0000] transition-colors"
        >
          Back to Selection
        </button>
      </div>

      <div ref={formRef} className="max-w-[850px] mx-auto border-2 border-black p-0 overflow-hidden bg-white shadow-xl mb-12 font-sans">
        {/* Banner Section */}
        <div className="bg-[#fdf8b3] p-4 flex flex-col md:flex-row justify-between items-center gap-4 border-b-2 border-black text-center md:text-left">
          <div className="flex flex-col gap-2">
            <img src={logoUrl} alt="Logo" className="h-16 object-contain" referrerPolicy="no-referrer" />
          </div>
          <div className="bg-[#cc0000] px-8 py-3 border-2 border-black -skew-x-0 md:-skew-x-6">
            <h1 className="text-white text-[24px] md:text-[36px] font-black italic tracking-widest uppercase whitespace-nowrap">ORDER FORM</h1>
          </div>
        </div>

        {/* Info Grid */}
        <div className="p-4 bg-white">
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-6">
              <div className="text-center">
                <p className="text-[10px] font-bold bg-yellow-400 border border-black px-1 mb-1">UPCOMING</p>
                <img src="https://i.postimg.cc/c46JvWrM/2-Eng-Worlds-Leaders-v5-1.png" alt="Book" className="h-32 mx-auto border border-black shadow-sm" referrerPolicy="no-referrer" />
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold bg-yellow-400 border border-black px-1 mb-1">NEW RELEASE</p>
                <img src="https://i.postimg.cc/y6MGZXNR/1-Eng-PM-BK-1.png" alt="Book" className="h-32 mx-auto border border-black shadow-sm" referrerPolicy="no-referrer" />
              </div>
              <div className="text-center pt-5">
                <img src="https://www.newfederation.org/Images/Saving_Planet_cover.jpg" alt="Book" className="h-32 mx-auto border border-black shadow-sm" referrerPolicy="no-referrer" />
              </div>
              <div className="text-center pt-5">
                <img src="https://www.newfederation.org/Images/GG-E-2.jpg" alt="Book" className="h-32 mx-auto border border-black shadow-sm" referrerPolicy="no-referrer" />
              </div>
              <div className="text-center pt-5">
                <img src="https://www.newfederation.org/Images/Chief-Justices-Book-cover-EN-sml.jpg" alt="Book" className="h-32 mx-auto border border-black shadow-sm" referrerPolicy="no-referrer" />
              </div>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-black divide-x-2 divide-black text-center mb-6">
             <div className="py-2"><span className="font-black text-2xl">1</span> <span className="font-bold">BOOK</span> <span className="text-[#cc0000] font-black text-3xl">$29<sup>95</sup></span></div>
             <div className="py-2 bg-[#fff7ed]"><span className="font-black text-2xl">2</span> <span className="font-bold">BOOKS</span> <span className="text-[#cc0000] font-black text-3xl">$50<sup>00</sup></span></div>
             <div className="py-2"><span className="font-black text-2xl">3</span> <span className="font-bold">BOOKS</span> <span className="text-[#cc0000] font-black text-3xl">$55<sup>00</sup></span></div>
             <div className="py-2 bg-[#fff7ed]"><span className="font-black text-2xl">4</span> <span className="font-bold">BOOKS</span> <span className="text-[#cc0000] font-black text-3xl">$60<sup>00</sup></span></div>
           </div>

           <div className="border-2 border-black">
             <div className="bg-black text-white p-2 font-black text-[18px] tracking-widest text-center flex justify-between px-8">
               <span>THE CANADIAN LEADERSHIP COLLECTION</span>
               <div className="flex gap-12">
                 <span>#</span>
                 <span>$</span>
               </div>
             </div>
             
             <div className="divide-y-2 divide-black">
               {[
                 { label: "THE WORLD'S GREAT LEADERS - Humanity, Justice, Peace - ISBN 978-1-987832-41-9", field: 'greatLeaders', price: totalBooks >= 4 ? "15.00" : totalBooks === 3 ? "18.33" : totalBooks === 2 ? "25.00" : "29.95" },
                 { label: "THE PRIME MINISTERS OF CANADA - 7th edition - ISBN 978-1-987832-42-6", field: 'primeMinisters', price: totalBooks >= 4 ? "15.00" : totalBooks === 3 ? "18.33" : totalBooks === 2 ? "25.00" : "29.95" },
                 { label: "SAVING THE PLANET: THE LEADING ENVIRONMENTALISTS - ISBN 978-1-987832-38-9", field: 'savingPlanet', price: totalBooks >= 4 ? "15.00" : totalBooks === 3 ? "18.33" : totalBooks === 2 ? "25.00" : "29.95" },
                 { label: "THE GOVERNORS GENERAL OF CANADA - 2nd edition - ISBN 978-1-987832-33-4", field: 'govGeneral', price: totalBooks >= 4 ? "15.00" : totalBooks === 3 ? "18.33" : totalBooks === 2 ? "25.00" : "29.95" },
                 { label: "THE CHIEF JUSTICES OF THE SUPREME COURT OF CANADA - 2nd ed - ISBN 978-1-987832-21-1", field: 'chiefJustice', price: totalBooks >= 4 ? "15.00" : totalBooks === 3 ? "18.33" : totalBooks === 2 ? "25.00" : "29.95" }
               ].map((item, idx) => (
                 <div key={item.field} className={`flex items-center ${idx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}`}>
                   <div className="flex-1 px-4 py-2 font-black text-[13px] uppercase leading-tight italic">{item.label}</div>
                   <div className="w-[80px] border-l-2 border-black h-14">
                     <input 
                      type="number" 
                      min="0"
                      value={quantities[item.field as keyof typeof quantities] || ''}
                      onChange={(e) => handleQtyChange(item.field, e.target.value)}
                      className="w-full h-full text-center font-black text-3xl bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-auto [&::-webkit-inner-spin-button]:appearance-auto" 
                     />
                   </div>
                   <div className="w-[100px] border-l-2 border-black h-14 bg-white flex items-center justify-center font-bold text-sm">
                     {quantities[item.field as keyof typeof quantities] > 0 ? `$${item.price}` : ''}
                   </div>
                 </div>
               ))}
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
             <div>
                <h3 className="text-[#0073ab] font-black text-[20px] mb-4">HOW TO ORDER AND PAY</h3>
                <div className="space-y-3 text-[14px]">
                  <p className="font-bold"><span className="text-[#cc0000]">EMAIL YOUR ORDER TO</span><br /><span className="text-black">newfederationhouse@gmail.com</span></p>
                  <p className="font-bold"><span className="text-[#cc0000]">BANK E-TRANSFER PAYMENT TO</span><br /><span className="text-black">newfederationhouse@gmail.com</span></p>
                  
                  <div className="pt-4 space-y-1">
                    <p className="text-[#cc0000] font-black text-[11px] leading-tight">PLEASE MAIL BOTH YOUR CHEQUE AND THE COMPLETED ORDER FORM TO THE FOLLOWING ADDRESS</p>
                    <p className="text-[#2563eb] text-[10px] font-bold underline">Mailing Address Only - ( Not open to the Public )</p>
                    <p className="font-black text-[16px] mt-2">NEW FEDERATION HOUSE</p>
                    <p className="font-bold">M161- 4338 Innes Road, Ottawa, ON K4A 3W3</p>
                    <p className="font-black pt-2">CONTACT US<br />TÉLÉPHONE - 613-415-6352</p>
                  </div>
                </div>
             </div>
             
             <div className="space-y-4">
                <div className="grid grid-cols-2 border-2 border-black">
                  <div className="bg-yellow-400 p-2 font-black text-center text-[18px]">SHIPPING</div>
                  <div className="bg-yellow-400 p-2 font-black text-xl text-center border-l-2 border-black">$9.00</div>
                  <div className="bg-black text-white p-2 font-black text-center text-[18px]">TOTAL</div>
                  <div className="bg-white p-2 font-black text-2xl text-center border-l-2 border-black">${total}</div>
                </div>
                <p className="text-[#2563eb] font-black text-center text-sm">TAX INCLUDED</p>

                <div className="space-y-[4px]">
                  {[
                    { label: 'NAME :', name: 'name' },
                    { label: 'ORG :', name: 'org' },
                    { label: 'ADDRESS :', name: 'address' },
                    { label: 'CITY :', name: 'city' },
                    { label: 'PROVINCE :', name: 'province' },
                    { label: 'POSTAL CODE', name: 'postalCode' }
                  ].map(field => (
                    <div key={field.name} className="flex border-b border-black items-end pb-1 pt-1">
                      <label className="font-bold text-[12px] shrink-0 min-w-[100px] uppercase">{field.label}</label>
                      <input 
                        type="text" 
                        name={field.name}
                        value={(formData as any)[field.name]}
                        onChange={handleInputChange}
                        className="flex-1 focus:outline-none px-2 text-[14px]" 
                      />
                    </div>
                  ))}
                </div>
             </div>
           </div>
        </div>
        
        <div className="p-4 bg-white border-t-2 border-black flex justify-center print:hidden" data-html2canvas-ignore>
          <button 
            onClick={handlePrint}
            className="bg-black text-white font-bold py-3 px-12 uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-colors"
          >
            Generate PDF for Order
          </button>
        </div>
      </div>
    </div>
  );
}
