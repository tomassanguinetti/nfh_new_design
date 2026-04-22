import React from 'react';

interface ChiefJusticesProps {
  onNavigate: (page: string) => void;
  language: 'EN' | 'FR';
}

export default function ChiefJustices({ onNavigate, language }: ChiefJusticesProps) {
  const logoUrl = language === 'EN' 
    ? "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png"
    : "https://i.postimg.cc/NF8mgknY/Screenshot-2026-04-20-20-51-14.png";

  return (
    <div className="flex-1 px-4 md:px-8 py-4 md:border-l-[3px] border-[#cc0000] md:ml-4 overflow-hidden">
      <div className="mb-4">
        <img src={logoUrl} alt="Logo" className="h-16 mx-auto md:mx-0" referrerPolicy="no-referrer" />
      </div>

      <div className="mb-8 border-b border-slate-200 pb-4">
        <h2 className="text-[#cc0000] font-sans text-[28px] font-bold leading-tight uppercase">
          THE CHIEF JUSTICES OF THE SUPREME COURT OF CANADA (2nd edition)
        </h2>
        <p className="text-[#2e6e6e] text-[20px] font-bold mt-2">from 1875 to the present</p>
      </div>

      <div className="text-[17px] leading-relaxed text-justify relative">
        <div className="flex flex-col md:float-right md:ml-8 mb-8 w-[240px] shrink-0 space-y-4 text-center mx-auto md:mx-0">
          <div className="border border-slate-200 p-2 bg-white shadow-md cursor-pointer" onClick={() => onNavigate('order')}>
            <img 
              src="https://www.newfederation.org/Images/Chief-Justices-Book-cover-EN-sml.jpg" 
              alt="The Chief Justices of Canada book cover"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-left space-y-1 text-sm bg-slate-50 p-4 border border-slate-200">
            <p><strong>ISBN:</strong> 978-1-987832-21-1</p>
            <p><strong>Price:</strong> $29.95 (taxes included)</p>
          </div>
          <button 
            onClick={() => onNavigate('order')}
            className="bg-[#cc0000] text-white px-8 py-2 font-bold uppercase tracking-widest hover:bg-[#b30000] w-full transition-colors"
          >
            ORDER NOW
          </button>
        </div>

        <div className="space-y-6 text-slate-800">
          <section className="space-y-4">
            <h3 className="text-[#cc0000] font-bold text-[18px] uppercase tracking-wider">Preface to the Second Edition</h3>
            <p className="font-bold">Senator Serge Joyal, P.C., O.C. O.Q. FRSC, Ad.E</p>
            <p>
              The Supreme Court of Canada occupies a unique place in our system of government. Without the presence of an impartial and independent judiciary, the law-based society that is Canada would at best be an aspiration, but certainly not a reality. There are essential relationships between democracy, the independence of the courts, and the rule of law.
            </p>
            <p>
              In addition to its traditional role as arbiter of last resort in litigation between private parties, the Supreme Court is also "responsible for protecting the balance of constitutional jurisdiction between the two levels of government" and, since 1982, for giving full effect to "individual freedoms and human rights" and the values that underlie the Canadian Charter of Rights and Freedoms.
            </p>
            <p>
              The judges of this court are the ultimate "guardians of the constitution," which is founded on the rule of law that serves a very specific purpose: "(it) assures citizens and residents a stable, predictable and orderly society in which to conduct their activities. It provides people with a bulwark against the arbitrariness of the state." The rule of law is thus "linked to the fundamental notions of democracy" and it is a "principle that every state power, including the judiciary, must strive to maintain."
            </p>
            <p>
              The Supreme Court, therefore, occupies a strategic place in the maintenance and development of democracy in the country. It is this court, for example, that has formulated, in landmark judgments, the principles of state neutrality that guarantee the free expression of religious pluralism in Canada's multicultural society, "a value which is a fundamental basis of our democracy."
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-[#cc0000] font-bold text-[18px] uppercase tracking-wider">Authors</h3>
            <div className="grid gap-4 text-[15px]">
              <p><strong>Jamie Benidickson (Sir Samuel Henry Strong)</strong> is Professor of Law at the University of Ottawa and a legal historian.</p>
              <p><strong>Adam Dodek (Sir Charles Fitzpatrick)</strong> is an Associate Professor at the University of Ottawa's Faculty of Law teaching courses on the Supreme Court.</p>
              <p><strong>Sean Fine (Richard Wagner)</strong> is a two-time winner of National Newspaper Awards for his work as The Globe and Mail's justice writer.</p>
              <p><strong>Philip Girard (Bora Laskin)</strong> is a professor at Osgoode Hall Law School and author of <i>Bora Laskin: Bringing Law to Life</i>.</p>
              <p><strong>Sébastien Grammond (Joseph Honoré Gérald Fauteux)</strong> is the former Dean of the Section on Civil Law at the University of Ottawa.</p>
              <p><strong>Susan Harada (Antonio Lamer)</strong> is a Carleton University journalism professor and former CBC reporter.</p>
              <p><strong>John J. L. Hunter, Q.C. (Francis Alexander Anglin)</strong> is a senior litigation counsel and past president of the Law Society of British Columbia.</p>
              <p><strong>Guy Levebvre (Sir Henri-Elzéar Taschereau)</strong> is Dean of the Faculty of Law at l'Université de Montréal.</p>
              <p><strong>Eugene Meehan (Beverley McLachlin)</strong> is Partner at Supreme Advocacy LLP and former Executive Legal Officer at the Supreme Court.</p>
            </div>
          </section>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 italic text-slate-500 text-sm">
          Editors: Jean Chevrier, D. L. Daigneault & Gerald G. Gummersell
        </div>
      </div>
    </div>
  );
}
