import React from 'react';

interface NativeLeadersProps {
  onNavigate: (page: string) => void;
  language: 'EN' | 'FR';
}

export default function NativeLeaders({ onNavigate, language }: NativeLeadersProps) {
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
          INDIGENOUS LEADERS OF CANADA
        </h2>
        <p className="text-[#2e6e6e] text-[20px] font-bold mt-2">A Collection of Historical Essays</p>
      </div>

      <div className="text-[17px] leading-relaxed text-justify relative">
        <div className="flex flex-col md:float-right md:ml-8 mb-8 w-[240px] shrink-0 space-y-4 text-center mx-auto md:mx-0">
          <div className="border border-slate-200 p-2 bg-white shadow-md cursor-pointer" onClick={() => onNavigate('order')}>
            <img 
              src="https://www.newfederation.org/Images/IL-E-3.jpg" 
              alt="Indigenous Leaders of Canada book cover"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-left space-y-1 text-sm bg-slate-50 p-4 border border-slate-200">
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
            <p className="font-bold">The Right Honourable Paul Martin</p>
            <p className="text-sm italic text-slate-500">Former Prime Minister of Canada, Founder of The Martin Family Initiative (MFI)</p>
            <p>
              The rich narratives of Indigenous leadership across Canada chronicled in this volume are critical to understanding the good and the bad of this country's complex past.
            </p>
            <p>
              Since the first contact, Canada's Indigenous people in Canada have shown strength of will and resilience of spirit in the face of oppression, misrepresentation and marginalization. And thus, the quest for peace, equality and full recognition of Indigenous rights and freedoms has been a recurring theme throughout the history of this land. Through the lives of the leaders profiled in this book, one can grasp their journeys, which captured together chronologically show how their battles have opened the door to tomorrow.
            </p>
            <p>
              Today, Indigenous children and youth represent the youngest and fastest growing segment of the Canadian population. There are more Indigenous people graduating from post-secondary education than ever before. Indigenous communities are not only at the table when it comes to major issues such as resource development and climate change but they are leading the conversation. Notable achievements, from the Royal Commission on Aboriginal Peoples to the Truth and Reconciliation Commission, from the National Inquiry into Missing and Murdered Indigenous Women and Girls to the government's intention to abolish the Indian Act, have been led by Indigenous voices.
            </p>
            <p>
              The road toward such progress is a direct result of the relentless initiative of Indigenous leaders, activists, professionals, parents, and grandparents in community after community across the land. They have carried the courage of their ancestors to vast heights by skilfully negotiating and representing their communities at every level.
            </p>
            <p>
              The newest edition of this collection of biographies represents so many of the people and the events that have brought us to the present day. A moment which, while inequalities persist, holds more hope for the future than ever before. Every narrative represented in the pages that follow this introduction demonstrates the courage, patience and spirituality required if together we are to ensure a better future for the First Peoples of this land.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-[#cc0000] font-bold text-[18px] uppercase tracking-wider">Authors (second edition)</h3>
            <div className="space-y-4 text-[14px]">
              <p><strong>Dan Asfar</strong> (Joseph Gosnell, Sr., Bill Reid) is a British Columbia writer.</p>
              <p><strong>Patrick Brazeau</strong> (Harry Daniels), of Métis ancestry, is a federal Senator and former president of the Congress of Aboriginal Peoples.</p>
              <p><strong>Anna De Aguayo</strong> (Sandra Lovelace Nicholas) is a Montreal researcher and teacher who worked with several of the Tobique women on border issues through Miingignoti Keteaoag.</p>
              <p><strong>Sally Erskine Doucette</strong> (Donald Marshall, Sr.), whose background includes urban and rural planning, is a Nova Scotia writer and editor who focuses on heritage and housing.</p>
              <p><strong>Julie Gedeon</strong> (Matthew Coon Come) is a Montreal-area writer specializing in history and environmental issues.</p>
              <p><strong>Carole Gerson</strong> (E. Pauline Johnson), professor of English Literature at Simon Fraser University, has written several books on Canadian writers and poets.</p>
              <p><strong>Susan Hallet</strong> (Billy Diamond) is an award-winning journalist whose credits include The Beaver, and The Globe & Mail among many others, and is Editor of The Society Magazine.</p>
              <p><strong>Kathlyn Horibe</strong> (Paul Okalik) is a Montreal-based writer and editor who has been published in trade magazines and newspapers such as the International Herald Tribune.</p>
              <p><strong>Robert A. Innes</strong> (Piapot), a Plains Cree member of Cowessess First Nation, teaches Native studies at the University of Saskatchewan.</p>
              <p><strong>Leonard Judge</strong> (Phil Fontaine) is an Ontario author and Editor of the four-volume textbook series, The Elders' Gift.</p>
              <p><strong>Hélèna Katz</strong> (Rosemarie Kuptana, Mary May Simon), is an award-winning journalist based in the Northwest Territories.</p>
              <p><strong>Randolph Lewis</strong> (Alanis Obomsawin) is an associate professor of American studies in the Honors College of the University of Oklahoma.</p>
              <p><strong>Lee Maracle</strong> (Gail Guthrie Valaskakis), a member of the Sto:lo Nation, is an award winning author of a number of books and a distinguished visiting scholar at the University of Toronto.</p>
              <p><strong>Antonia Mills</strong> (Frank Calder) is the acting chair of the First Nations studies program at the University of Northern British Columbia where she has taught since 1994.</p>
              <p><strong>Lorne Monti</strong> (James Bartleman, Elijah Harper, Murray Sinclair), an Ottawa-based journalist and filmmaker, is a director of New Federation House.</p>
              <p><strong>Rosemary Neering</strong> (George Manuel), an award-winning British Columbia author of social science texts, is a visiting lecturer in creative writing at the University of Victoria.</p>
              <p><strong>David Newhouse</strong> (Sheila Watt-Cloutier, Roberta Jamieson), Onondaga from the Six Nations of the Grand River, is a professor at Trent University and Director of its Chanie Wenjack School for Indigenous Studies.</p>
              <p><strong>Nelle Oosterom</strong> (Tommy Prince, Perry Bellegarde) Nelle Oosterom was a senior editor with Canada's History magazine and worked for various news organizations as a journalist and editor, including the Canadian Press, CBC Radio, and CanWest News Service.</p>
              <p><strong>Brian Parsons</strong> (Ghislain Picard), a Quebec writer and political scientist, is a specialist in Quebec Native issues and an advisor to the Quebec government.</p>
              <p><strong>Taqralik Partridge</strong> (Natan Obed) is a writer and multi-disciplinary artist. Her writings have appeared in Inuktitut, ArtsEverywhere, Maisonneuve and CBC Books, among others, and she recently co-curated the Tunirrusiangit: Kenojuak Ashevak and Tim Pitsiulak exhibitions at the Art Gallery of Ontario.</p>
              <p><strong>Jeannine Peru</strong> (Louis Riel), of Métis ancestry, is a Quebec-based author and editor.</p>
              <p><strong>Lisa Peterson</strong> (Andrew Delisle, Sr.), a member of the Mohawk Nation, is a writer based in Kahnawake.</p>
              <p><strong>Jeanne Poulin</strong> (In the beginning..., Max Gros-Louis, Jody Wilson-Raybould), whose great-grandmother was Abenaki, is a journalist and storyteller, and a director of New Federation House.</p>
              <p><strong>Mark Reid</strong> (Crowfoot, Poundmaker) is Editor-in-Chief and Director, Content Development at Canada's History magazine, and was assistant news editor at CanWest News Service in Winnipeg.</p>
              <p><strong>Jean Teillet</strong> (Clément Chartier) is an Indigenous rights lawyer and treaty negotiator who has appeared many times before the Supreme Court of Canada. A published writer and a public speaker, Ms. Teillet is the great grand-niece of Louis Riel.</p>
              <p><strong>Elle Andra-Warner</strong> (Georges Erasmus), a best-selling author, journalist and photographer based in Thunder Bay, Ontario, has written extensively about First Nations peoples and their histories.</p>
              <p><strong>Anne Johnston Williams</strong> (Bertha Allen), a Montreal educator, writer and editor, is a committed volunteer on issues of literacy and education.</p>
              <p><strong>Wanda Wuttunee</strong> (Harold Cardinal), a member of the Red Pheasant Nation, Saskatchewan, is a professor of Native studies at the University of Manitoba.</p>
            </div>
          </section>

          <footer className="pt-8 border-t border-slate-100">
            <p className="text-[14px] text-slate-600">
              A web site has been created which includes a more complete listing of Aboriginal leaders.<br />
              <a href="https://www.newfederation.org/Native_Leaders/Index.htm" target="_blank" rel="noopener noreferrer" className="text-[#0073ab] hover:underline font-bold">
                Click here to visit the Native Leaders of Canada site.
              </a>
            </p>
          </footer>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 italic text-slate-500 text-sm">
          Editors: Denis L. Daigneault, Jean Chevrier, Jeanne Poulin and Gerald C. Gummersell
        </div>
      </div>
    </div>
  );
}
