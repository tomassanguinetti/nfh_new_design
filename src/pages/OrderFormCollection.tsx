import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface OrderFormCollectionProps {
  onBack: () => void;
  language: 'EN' | 'FR';
}

export default function OrderFormCollection({ onBack, language }: OrderFormCollectionProps) {
  const formRef = useRef<HTMLDivElement>(null);
  
  const [quantities, setQuantities] = useState<{ [key: string]: number | '' }>({
    worldLeaders: '',
    pm: '',
    planet: '',
    gg: '',
    justices: ''
  });

  const [formData, setFormData] = useState({
    name: '',
    org: '',
    address: '',
    city: '',
    province: '',
    postalCode: ''
  });

  const [pricing, setPricing] = useState({
    subtotal: 0,
    shipping: 9.00,
    total: 9.00
  });

  useEffect(() => {
    const totalQty = Object.values(quantities).reduce<number>((acc, curr) => {
      const val = typeof curr === 'number' ? curr : 0;
      return acc + val;
    }, 0);
    
    let subtotal = 0;
    // Pricing logic based on screenshot: 1=$29.95, 2=$50, 3=$55, 4=$60
    if (totalQty === 1) subtotal = 29.95;
    else if (totalQty === 2) subtotal = 50.00;
    else if (totalQty === 3) subtotal = 55.00;
    else if (totalQty >= 4) subtotal = 60.00;

    setPricing({
      subtotal,
      shipping: totalQty > 0 ? 9.00 : 0,
      total: subtotal + (totalQty > 0 ? 9.00 : 0)
    });
  }, [quantities]);

  const handleQtyChange = (key: string, value: string) => {
    setQuantities(prev => ({
      ...prev,
      [key]: value === '' ? '' : parseInt(value)
    }));
  };

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
        className="max-w-[850px] mx-auto bg-white border-4 border-white shadow-2xl overflow-hidden font-archivo text-black p-8 space-y-6"
        style={{ minHeight: '1100px' }}
      >
        {/* Header */}
        <div className="bg-[#fdf8b3] p-2 flex justify-between items-center border-b-4 border-[#cc0000]">
           <img 
              src="https://i.postimg.cc/GmXwrt8s/New-Federation-Logo-Bilingual-Official.png" 
              alt="Logo" 
              className="h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
           />
           <div className="bg-[#cc0000] text-white px-8 py-3 translate-x-2">
              <h1 className="text-3xl font-black italic uppercase tracking-wider">ORDER FORM</h1>
           </div>
        </div>

        {/* Books Preview Row */}
        <div className="grid grid-cols-5 gap-2 pt-2">
          {[
            { tag: 'UPCOMING', img: 'https://i.postimg.cc/c46JvWrM/2-Eng-Worlds-Leaders-v5-1.png' },
            { tag: 'NEW RELEASE', img: 'https://i.postimg.cc/y6MGZXNR/1-Eng-PM-BK-1.png' },
            { tag: null, img: 'https://www.newfederation.org/Images/Env-cov-1-150.jpg' },
            { tag: null, img: 'https://www.newfederation.org/Images/GG-E-2.jpg' },
            { tag: null, img: 'https://www.newfederation.org/Images/Chief-Justices-Book-cover-EN-sml.jpg' }
          ].map((item, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              {item.tag && (
                <div className="absolute -top-4 bg-yellow-400 text-black px-2 py-0.5 text-[10px] font-black border border-black z-10 -rotate-2">
                  {item.tag}
                </div>
              )}
              <img src={item.img} alt="Book cover" className="w-full h-32 object-contain shadow-md border border-gray-200" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-4 gap-0 border-t-2 border-b-2 border-black py-2 font-black italic">
          <div className="flex items-center justify-center border-r-2 border-slate-300">
             <span className="text-3xl mr-1">1</span>
             <span className="text-sm uppercase leading-none mr-2">BOOK</span>
             <span className="text-xl">$</span>
             <span className="text-4xl">29</span>
             <span className="text-xl self-start pt-1">95</span>
          </div>
          <div className="flex items-center justify-center border-r-2 border-slate-300">
             <span className="text-3xl mr-1">2</span>
             <span className="text-sm uppercase leading-none mr-2">BOOKS</span>
             <span className="text-xl">$</span>
             <span className="text-4xl">50</span>
             <span className="text-xl self-start pt-1">00</span>
          </div>
          <div className="flex items-center justify-center border-r-2 border-slate-300">
             <span className="text-3xl mr-1">3</span>
             <span className="text-sm uppercase leading-none mr-2">BOOKS</span>
             <span className="text-xl">$</span>
             <span className="text-4xl">55</span>
             <span className="text-xl self-start pt-1">00</span>
          </div>
          <div className="flex items-center justify-center">
             <span className="text-3xl mr-1">4</span>
             <span className="text-sm uppercase leading-none mr-2">BOOKS</span>
             <span className="text-xl">$</span>
             <span className="text-4xl">60</span>
             <span className="text-xl self-start pt-1">00</span>
          </div>
        </div>

        {/* Order Table */}
        <div className="border-2 border-black">
          <div className="bg-black text-white flex font-black uppercase text-[20px] p-2 items-center">
            <div className="flex-grow">THE CANADIAN LEADERSHIP COLLECTION</div>
            <div className="w-16 text-center border-l border-white px-2">#</div>
            <div className="w-20 text-center border-l border-white px-2">$</div>
          </div>

          {[
            { label: "THE WORLD’S GREAT LEADERS - Humanity, Justice, Peace - ISBN 978-1-987832-41-9", id: 'worldLeaders' },
            { label: "THE PRIME MINISTERS OF CANADA - 7th edition - ISBN 978-1-987832-42-6", id: 'pm' },
            { label: "SAVING THE PLANET: THE LEADING ENVIRONMENTALISTS - ISBN 978-1-987832-38-9", id: 'planet' },
            { label: "THE GOVERNORS GENERAL OF CANADA - 2nd edition - ISBN 978-1-987832-33-4", id: 'gg' },
            { label: "THE CHIEF JUSTICES OF THE SUPREME COURT OF CANADA - 2nd edition - ISBN 978-1-987832-21-1", id: 'justices' }
          ].map((item, idx) => (
            <div key={idx} className="flex border-t border-black min-h-[48px] items-stretch text-[12px] font-bold">
               <div className="flex-grow px-3 py-2 flex items-center">
                 {item.label}
               </div>
               <div className="w-16 border-l border-black flex items-center justify-center">
                 <input 
                    type="number" 
                    min="0"
                    value={quantities[item.id]}
                    onChange={(e) => handleQtyChange(item.id, e.target.value)}
                    className="w-full text-center focus:outline-none font-black text-lg p-1"
                 />
               </div>
               <div className="w-20 border-l border-black bg-slate-50"></div>
            </div>
          ))}
        </div>

        {/* Payment & Address Grid */}
        <div className="grid grid-cols-12 gap-8 pt-4">
          <div className="col-span-6 space-y-6">
            <div className="space-y-4">
               <h3 className="text-blue-600 font-black text-2xl uppercase tracking-tight">HOW TO ORDER AND PAY</h3>
               
               <div>
                  <p className="text-[#cc0000] font-black text-[13px] uppercase">EMAIL YOUR ORDER TO</p>
                  <p className="font-black text-[15px]">newfederationhouse@gmail.com</p>
               </div>

               <div>
                  <p className="text-[#cc0000] font-black text-[13px] uppercase">BANK E-TRANSFER PAYMENT TO</p>
                  <p className="font-black text-[15px]">newfederationhouse@gmail.com</p>
               </div>

               <div className="pt-2 text-center border-t border-slate-200">
                  <p className="text-[#cc0000] font-bold text-[11px] leading-tight mb-2">
                    PLEASE MAIL BOTH YOUR CHEQUE AND THE COMPLETED ORDER FORM TO THE FOLLOWING ADDRESS
                  </p>
                  <p className="text-blue-600 text-[9px] font-bold italic mb-2">Mailing Address Only - ( Not open to the Public )</p>
                  <div className="font-black text-[14px]">
                    <p>NEW FEDERATION HOUSE</p>
                    <p>M161 - 4338 Innes Road, Ottawa, ON K4A 3W3</p>
                  </div>
                  <div className="mt-2 font-black text-[12px]">
                    <p>CONTACT US</p>
                    <p>TÉLÉPHONE - 613-415-6352</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="col-span-6 flex flex-col">
            <div className="space-y-0 text-white font-black uppercase text-center mb-4">
               <div className="flex overflow-hidden border-2 border-black">
                 <div className="bg-yellow-400 text-black w-2/3 py-2 text-xl border-r-2 border-black">SHIPPING</div>
                 <div className="bg-yellow-400 text-black flex-grow py-2 text-xl italic">$9.00</div>
               </div>
               <div className="flex overflow-hidden border-2 border-black border-t-0">
                 <div className="bg-black w-2/3 py-2 text-2xl tracking-widest">TOTAL</div>
                 <div className="bg-white text-black flex-grow py-2 text-2xl font-black">
                   ${pricing.total.toFixed(2)}
                 </div>
               </div>
               <div className="text-blue-600 text-[10px] mt-1 font-black tracking-widest text-right">TAX INCLUDED</div>
            </div>

            <div className="space-y-1 mt-auto">
               {[
                 { label: 'NAME :', name: 'name' },
                 { label: 'ORG :', name: 'org' },
                 { label: 'ADDRESS :', name: 'address' },
                 { label: '', name: 'address2' },
                 { label: 'CITY :', name: 'city' },
                 { label: 'PROVINCE :', name: 'province' },
                 { label: 'POSTAL CODE', name: 'postalCode' }
               ].map((field, idx) => (
                 <div key={idx} className="flex border-b border-[#cc0000] h-9 items-end pb-1">
                   <label className="font-black text-[11px] uppercase min-w-[90px] mb-0.5 text-[#5a1d37]">{field.label}</label>
                   <input 
                      type="text"
                      name={field.name}
                      value={(formData as any)[field.name] || ''}
                      onChange={handleInputChange}
                      className="flex-1 focus:outline-none bg-transparent px-2 font-bold mb-0.5 text-sm"
                   />
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[850px] mx-auto mt-8 text-center text-gray-500 text-sm italic">
        {language === 'EN' 
          ? "Fill out the form and click 'Generate PDF' to save and send your order."
          : "Remplissez le formulaire et cliquez sur « Générer le PDF » pour enregistrer et envoyer votre commande."}
      </div>
    </div>
  );
}
