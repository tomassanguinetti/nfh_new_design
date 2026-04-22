import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface OrderFormWorldLeadersProps {
  onBack: () => void;
  language: 'EN' | 'FR';
}

export default function OrderFormWorldLeaders({ onBack, language }: OrderFormWorldLeadersProps) {
  const logoUrl = language === 'EN' 
    ? "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png"
    : "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png";

  const formRef = useRef<HTMLDivElement>(null);
  const [numBooks, setNumBooks] = useState<number>(0);
  const pricePerBook = 29.95;
  const shipping = 9.0;
  
  const getSubtotal = (n: number) => {
    if (n === 0) return 0;
    if (n === 1) return 29.95;
    if (n === 2) return 50.00;
    if (n === 3) return 55.00;
    return 60.00; // 4 or more
  };

  const subtotal = getSubtotal(numBooks);
  const total = numBooks > 0 ? (subtotal + shipping).toFixed(2) : "0.00";

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

      <div ref={formRef} className="max-w-[800px] mx-auto border-2 border-black p-0 overflow-hidden bg-white shadow-xl mb-12">
        {/* Header Banner */}
        <div className="bg-[#cc0000] p-4 flex flex-col md:flex-row justify-between items-center gap-4 border-b-2 border-black text-center md:text-left">
          <div className="flex items-center gap-4">
             <img src={logoUrl} alt="Logo" className="h-16" referrerPolicy="no-referrer" />
          </div>
          <div className="bg-[#5a4632] px-8 py-2 border-2 border-black">
            <h1 className="text-white font-sans text-[24px] md:text-[32px] font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase whitespace-nowrap">ORDER FORM</h1>
          </div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="bg-[#5a1c3e] p-6 text-white text-center space-y-2 border-2 border-black">
              <h2 className="text-[20px] font-bold uppercase font-sans">THE WORLD'S GREAT LEADERS</h2>
              <p className="text-[14px] uppercase border-b border-white pb-2 mb-2">Humanity, Justice, Peace</p>
              <div className="flex justify-center items-end gap-1 pt-4">
                <span className="text-[40px] font-bold leading-none">$</span>
                <span className="text-[64px] font-bold leading-none">29</span>
                <div className="flex flex-col items-start leading-none -mb-1">
                  <span className="text-[32px] font-bold">95</span>
                  <span className="text-[10px] font-bold uppercase mt-1">PRICE<br />PER BOOK</span>
                </div>
              </div>
            </div>

            <p className="text-center font-bold text-[18px]">ISBN 978-1-987832-41-9</p>

            <div className="space-y-4">
              <div className="flex border-2 border-black">
                <div className="bg-[#cc0000] text-white p-3 font-bold uppercase text-[14px] flex-[3] flex items-center justify-center text-center leading-tight">
                  NUMBER OF<br />BOOKS ORDERED
                </div>
                <div className="flex-[2] bg-white">
                  <input 
                    type="number" 
                    min="0"
                    value={numBooks || ''}
                    onChange={(e) => setNumBooks(parseInt(e.target.value) || 0)}
                    className="w-full h-full p-2 text-center text-4xl font-black bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-auto [&::-webkit-inner-spin-button]:appearance-auto"
                  />
                </div>
              </div>

              <div className="flex border-2 border-black">
                <div className="bg-[#334155] text-white p-3 font-bold uppercase text-[18px] flex-[3] flex items-center justify-center">
                  SHIPPING
                </div>
                <div className="flex-[2] bg-white p-3 text-center text-2xl font-bold border-l-2 border-black">
                  $9.00
                </div>
              </div>

              <div className="flex border-4 border-black">
                <div className="bg-[#cc0000] text-white p-3 font-bold uppercase text-[18px] flex-[3] flex flex-col items-center justify-center text-center">
                  <span>TOTAL</span>
                  <span className="text-[10px] normal-case mt-1 font-normal italic">TAXES INCLUDED</span>
                </div>
                <div className="flex-[2] bg-white p-3 text-center text-3xl font-bold flex items-center justify-center">
                  $ {total}
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-[#0073ab] font-bold text-[20px] uppercase border-b-2 border-[#0073ab] pb-1">HOW TO ORDER AND PAY</h3>
              <div className="space-y-3 text-[14px]">
                <p className="font-bold"><span className="text-[#cc0000]">Email your order to:</span><br /><span className="text-black text-[16px]">newfederationhouse@gmail.com</span></p>
                <p className="font-bold"><span className="text-[#cc0000]">Bank E-Transfer payment to:</span><br /><span className="text-black text-[16px]">newfederationhouse@gmail.com</span></p>
                <div className="text-[#cc0000] font-bold italic text-[13px]">
                  <p>Please Mail both your cheque and the</p>
                  <p>completed order form to the following address</p>
                </div>
                <div className="text-[13px] font-bold text-[#374151]">
                   <p className="text-[#2563eb]">Mailing Address Only - ( Not open to the Public )</p>
                   <p className="text-[16px] text-black uppercase mt-1 font-black">NEW FEDERATION HOUSE</p>
                   <p className="text-[15px] text-black">M161- 4338 Innes Road, Ottawa, ON K4A 3W3</p>
                   <p className="mt-2 font-bold whitespace-nowrap"><span className="text-[#2563eb]">Contact us</span> - Telephone: 613-415-6352</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            <div className="bg-[#f8fafc] p-2 border border-black shadow-md">
                <img 
                  src="https://i.postimg.cc/c46JvWrM/2-Eng-Worlds-Leaders-v5-1.png" 
                  alt="The World's Great Leaders" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
            </div>

            <div className="space-y-4">
              {[
                { label: 'NAME :', name: 'name' },
                { label: 'ORG :', name: 'org' },
                { label: 'ADDRESS :', name: 'address' },
                { label: 'CITY :', name: 'city' },
                { label: 'PROVINCE :', name: 'province' },
                { label: 'POSTAL CODE:', name: 'postalCode' }
              ].map(field => (
                <div key={field.name} className="flex border-b-2 border-black items-end pb-1 pt-2">
                  <label className="font-bold text-[14px] shrink-0 min-w-[120px] uppercase">{field.label}</label>
                  <input 
                    type="text" 
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleInputChange}
                    className="flex-1 focus:outline-none px-2 text-[16px]" 
                  />
                </div>
              ))}
            </div>

            <div className="pt-8 print:hidden" data-html2canvas-ignore>
              <button 
                onClick={handlePrint}
                className="w-full bg-black text-white font-bold py-3 uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-colors"
              >
                PRINT FORM (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
