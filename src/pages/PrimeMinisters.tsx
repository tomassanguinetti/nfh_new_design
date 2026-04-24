import React from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../lib/translations';

interface PrimeMinistersProps {
  language: 'EN' | 'FR';
}

export default function PrimeMinisters({ language }: PrimeMinistersProps) {
  const navigate = useNavigate();
  const t = translations[language].home;
  return (
    <div className="flex-1 px-4 md:px-8 py-4 overflow-hidden pt-8">
      {/* Title Section - Full Width, One Line */}
      <div className="mb-0">
        <h2 className="text-[#cc0000] font-sans text-[24px] lg:text-[34px] font-bold leading-tight uppercase tracking-tight">
          {language === 'EN' 
            ? <>THE PRIME MINISTERS OF CANADA 7<sup className="text-[0.6em] align-top">TH</sup> EDITION</> 
            : <>LES PREMIERS MINISTRES DU CANADA 7<sup className="text-[0.6em] align-top">E</sup> ÉDITION</>
          }
        </h2>
        <p className="text-[#2e6e6e] text-[20px] lg:text-[24px] font-bold mt-1">
          {language === 'EN' ? 'From John A. Macdonald to Mark Carney' : 'De John A. Macdonald à Mark Carney'}
        </p>
      </div>

      <div className="w-full h-px bg-gray-200 mt-6 mb-10" />

      {/* Main Content Area */}
      <div className="text-[17px] leading-[1.6] text-justify relative font-sans text-gray-900">
        {/* Book Cover Container - Floated Right */}
        <div className="flex flex-col md:float-right md:ml-12 mb-8 w-[240px] lg:w-[280px] shrink-0 space-y-6 text-center mx-auto md:mx-0">
          <img 
            src="https://i.postimg.cc/y6MGZXNR/1-Eng-PM-BK-1.png" 
            alt="The Prime Ministers of Canada" 
            className="w-full shadow-lg border border-gray-100"
            referrerPolicy="no-referrer"
          />
          <div className="space-y-4 pt-2">
            <p className="text-[14px] font-bold">ISBN 978-1-987832-42-6</p>
            <div className="text-[15px] font-bold leading-tight text-gray-800">
              Jean Chevrier,<br />
              Denis L. Daigneault,<br />
              Jeanne Poulin<br />
              and<br />
              Gerald C. Gummersell, Editors
            </div>
            
            <div className="pt-4">
              <p className="text-[#cc0000] text-[58px] font-bold leading-none">$29.95</p>
              <p className="text-[13px] font-bold text-gray-500 uppercase mt-1 tracking-wider">
                {language === 'EN' ? '(taxes included)' : '(taxes incluses)'}
              </p>
            </div>

            <div className="pt-6">
              <button 
                onClick={() => navigate('/order/pm')}
                className="w-full bg-[#cc0000] text-white font-bold py-4 px-8 uppercase tracking-widest border-2 border-[#cc0000] hover:bg-white hover:text-[#cc0000] transition-all duration-300 shadow-xl text-[14px]"
              >
                {language === 'EN' ? 'Order Now' : 'Commander maintenant'}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-2 text-left">
            <h3 className="text-[24px] lg:text-[26px] font-bold text-black">{language === 'EN' ? 'Foreword' : 'Avant-propos'}</h3>
            <div className="space-y-0.5">
              <p className="font-bold text-[18px] text-black">The Right Honourable Adrienne Clarkson</p>
              <p className="italic text-gray-600 font-medium text-[17px]">{language === 'EN' ? 'Former Governor General of Canada' : 'Ancienne Gouverneure générale du Canada'}</p>
            </div>
          </div>

          <p>
            {language === 'EN' ? (
              <>
                In Canada, we have created a country based on social equality. While it is still a work in progress, neither perfect nor complete, it is a glorious experiment. It is not centered in an elite or a self-serving majority but in a society of minorities who learn from each other and who agree, in the words of Louis-Hippolyte Lafontaine, that "there can be no privileged caste in Canada outside and above the mass of its people."
              </>
            ) : (
              <>
                Au Canada, nous avons créé un pays fondé sur l'égalité sociale. Bien qu'il s'agisse encore d'un travail en cours, ni parfait ni achevé, c'est une expérience glorieuse. Il n'est pas centré sur une élite ou une majorité égoïste, mais sur une société de minorités qui apprennent les unes des autres et qui conviennent, selon les mots de Louis-Hippolyte Lafontaine, qu'« il ne peut y avoir de caste privilégiée au Canada en dehors et au-dessus de la masse de son peuple ».
              </>
            )}
          </p>
          <p>
            {language === 'EN' ? (
              <>
                Our trajectory to nationhood began some 400 years ago when French, English and Aboriginal joined in a small circle of mutual benefit and need. Since then, the circle has widened to welcome native-born and immigrant and we have collaborated in building a pluralistic society that Pierre Elliott Trudeau envisioned would make Canada "the envied seat of a form of federalism that belongs to tomorrow's world."
              </>
            ) : (
              <>
                Notre trajectoire vers la nation a commencé il y a quelque 400 ans lorsque Français, Anglais et Autochtones se sont unis dans un petit cercle d'avantages et de besoins mutuels. Depuis lors, le cercle s'est élargi pour accueillir les natifs et les immigrants et nous avons collaboré à la construction d'une société pluraliste dont Pierre Elliott Trudeau imaginait qu'elle ferait du Canada « le siège envié d'une forme de fédéralisme qui appartient au monde de demain ».
              </>
            )}
          </p>
          <p>
            {language === 'EN' ? (
              <>
                The part played by Canada's leaders in our political awakening begins with Louis-Hippolyte Lafontaine and Robert Baldwin whose reform alliance introduced responsible government and the principles that have guided our best accomplishments. These two men, along with Joseph Howe who brought democracy to Nova Scotia, promoted the democratic ideal of elected representatives serving an educated citizenry.
              </>
            ) : (
              <>
                Le rôle joué par les dirigeants du Canada dans notre éveil politique commence avec Louis-Hippolyte Lafontaine et Robert Baldwin dont l'alliance de réforme a introduit le gouvernement responsable et les principes qui ont guidé nos meilleures réalisations. Ces deux hommes, ainsi que Joseph Howe qui a apporté la démocratie en Nouvelle-Écosse, ont promu l'idéal démocratique de représentants élus au service d'une population instruite.
              </>
            )}
          </p>
          <p>
            {language === 'EN' ? (
              <>
                Our prime ministers have guided our country's destiny by adhering to the ethics that give responsible government its integrity, and by responding with restraint and moderation to the difficulties posed by a complex population and geography. Their success in good governance has given us political captains who have helped chart our evolution, from the Charlottetown Conference in 1864 to the creation of Nunavut and the Nisga'a treaty in 2000. Their commitment to advance the collective well-being was expressed by Joseph Howe in his dictum, "The only questions I ask myself are, What is right? What is just? What is for the public good?" and reflects a fundamental principle that has become a national characteristic.
              </>
            ) : (
              <>
                Nos premiers ministres ont guidé le destin de notre pays en adhérant à l'éthique qui donne son intégrité au gouvernement responsable, et en répondant avec retenue et modération aux difficultés posées par une population et une géographie complexes. Leur succès en matière de bonne gouvernance nous a donné des capitaines politiques qui ont aidé à tracer notre évolution, de la Conférence de Charlottetown en 1864 à la création du Nunavut et au traité Nisga'a en 2000. Leur engagement à faire progresser le bien-être collectif a été exprimé par Joseph Howe dans son dicton : « Les seules questions que je me pose sont : Qu'est-ce qui est juste ? Qu'est-ce qui est bien ? Qu'est-ce qui est pour le bien public ? » et reflète un principe fondamental qui est devenu une caractéristique nationale.
              </>
            )}
          </p>
          <p>
            {language === 'EN' ? (
              <>
                As we look at our nation's history, we see how Canada has been influenced by the character and actions of our prime ministers. Their limitations and their mistakes are lessons in nation building for all of us. But the solid principles that have informed their terms of office—their egalitarian assumptions, their reliance on a reasoned, rather than coercive, call to unity and justice—have assisted our nation in its most admirable accomplishment, that of being a working democracy.
              </>
            ) : (
              <>
                Lorsque nous regardons l'histoire de notre nation, nous voyons comment le Canada a été influencé par le caractère et les actions de nos premiers ministres. Leurs limites et leurs erreurs sont des leçons de construction nationale pour nous tous. Mais les principes solides qui ont éclairé leurs mandats — leurs présupposés égalitaires, leur recours à un appel raisonné, plutôt que coercitif, à l'unité et à la justice — ont aidé notre nation dans sa réalisation la plus admirable, celle d'être une démocratie qui fonctionne.
              </>
            )}
          </p>
          <p>
            {language === 'EN' ? (
              <>
                I am grateful to those who contributed to this book. To its readers, I offer my hope that it will encourage you to read more about Canada's leaders and its history. We have, from an elite-driven colonial past, created a prosperous, generous place, a country that has moved from ethnocentrism to a creative and dynamic inclusiveness, and our leaders have played a central part in this transformation. Our role as citizens in this democracy is not separate from that of our politicians. Together, we are engaged in establishing ideals that my predecessor Lord Alexander encouraged Canadians to pursue, those "... moral and spiritual values which form the character of a people and make them truly great."
              </>
            ) : (
              <>
                Je suis reconnaissant envers ceux qui ont contribué à ce livre. À ses lecteurs, j'exprime mon espoir qu'il vous encouragera à en apprendre davantage sur les dirigeants et l'histoire du Canada. À partir d'un passé colonial dirigé par une élite, nous avons créé un endroit prospère et généreux, un pays qui est passé de l'ethnocentrisme à une inclusion créative et dynamique, et nos dirigeants ont joué un rôle central dans cette transformation. Notre rôle de citoyens dans cette démocratie n'est pas séparé de celui de nos politiciens. Ensemble, nous sommes engagés à établir les idéaux que mon prédécesseur Lord Alexander encourageait les Canadiens à poursuivre, ces « ... valeurs morales et spirituelles qui forment le caractère d'un peuple et le rendent vraiment grand. »
              </>
            )}
          </p>
        </div>
      </div>

      {/* CPAC Sponsorship info moved here */}
      <div className="mt-16 pt-8 border-t border-gray-200 text-center flex flex-col items-center space-y-4">
        <p className="text-[14px] font-bold italic text-gray-600">
          {t.footerGratitude}
        </p>
        <div className="flex flex-col items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/d/d7/CPAC_2016_logo.png" 
            alt="CPAC" 
            className="h-16 mb-2" 
            referrerPolicy="no-referrer" 
          />
          <p className="text-[16px] font-black uppercase tracking-widest">
            {t.cpacFull}
          </p>
        </div>
      </div>

      {/* Authors Section - Bottom of page */}
      <div className="mt-12 bg-slate-50 p-6 rounded-sm border border-slate-200">
        <h3 className="text-[18px] font-bold mb-4 tracking-widest">AUTHORS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[14px] leading-tight text-left">
          <p><strong>Michael Bliss (John A. Macdonald)</strong> was University Professor Emeritus at the University of Toronto. His many books include Right Honourable Men: The Descent of Canadian Politics from Macdonald to Chrétien. He passed away on May 18, 2017.</p>
          <p><strong>John M. Bumstead (Alexander Mackenzie)</strong>, was a professor of history and Fellow of St. John's College, has written extensively on Scottish and Canadian history. He passed away on January 25, 2020.</p>
          <p><strong>Carman Miller (John Abbott)</strong> is Emeritus Professor of history and former Dean of the Faculty of Arts at McGill University.</p>
          <p><strong>P. B. Waite (John Thompson)</strong> was Professor Emeritus at the history Department at Dalhousie University and has written several books of Canadian history. He passed away on August 24, 2020</p>
          <p><strong>Jacques Monet, s.j. (Mackenzie Bowell)</strong> is Emeritus Professor of history at Regis College at the University of Toronto, and Historian at the Archive of the Jesuits in Canada, Montreal.</p>
          <p><strong>David M. L. Farr (Charles Tupper)</strong> was Professor Emeritus at history at Carleton University; he wrote on the 19th-century relationship between Canada and Great Britain. He passed away on October 3, 2016.</p>
          <p><strong>Réal Bélanger (Wilfrid Laurier)</strong> is a retired Professor of socio-political history of Canada and Quebec at Laval University and is co-director of the Dictionary of Canadian Biography/Dictionnaire biographique du Canada.</p>
          <p><strong>Robert Craig Brown (Robert Borden)</strong> was Emeritus Professor of history at the University of Toronto and a former president of the Canadian Historical Association. He passed away on September 22, 2016</p>
          <p><strong>J. L. Granatstein (Arthur Meighen)</strong> is a historian and former Director and CEO of the Canadian War Museum.</p>
          <p><strong>H. Blair Neatby (W. L. Mackenzie King)</strong>, was Professor Emeritus at Carleton University; he was a specialist in Canadian political history. He passed away on March 11, 2018.</p>
          <p><strong>Larry Glassford (R. B. Bennett)</strong> is a Professor at the University of Windsor where he teaches history and the politics of education.</p>
          <p><strong>Bernard Chevrier (Louis St. Laurent)</strong> is a historian, author and former federal public servant.</p>
          <p><strong>Bill Waiser (John Diefenbaker)</strong>, is a Distinguished Professor Emeritus at the University of Saskatchewan and a specialist in western and northern Canadian history.</p>
          <p><strong>John English (Lester B. Pearson)</strong> taught history at the University of Waterloo, authored a two-volume biography of Lester Pearson, and is an editor of the Dictionary of Canadian Biography.</p>
          <p><strong>Ramsay Cook (Pierre Elliott Trudeau)</strong> was Professor of history at York University and is general editor of the Dictionary of Canadian Biography. He passed away in Toronto on 14 July 2016.</p>
          <p><strong>Patrick Brennan (Joe Clark)</strong> is Associate Professor Emeritus of history at the University of Calgary specializing in 20th-century Canadian political and military history.</p>
          <p><strong>Robert Bothwell (John Turner)</strong> is the author of the Penguin History of Canada and several books on foreign relations and teaches at the University of Toronto.</p>
          <p><strong>Norman Hillmer (Brian Mulroney)</strong> is Professor of history and international affairs at Carleton University and co-author of Prime Ministers: Ranking Canada's Leaders.</p>
          <p><strong>Patricia Roy (Kim Campbell)</strong> is Emeritus Professor of Canadian history at the University of Victoria.</p>
          <p><strong>Desmond Morton (Jean Chrétien)</strong> taught history at McGill University and was the founding director of the McGill Institute for the study of Canada. He passed away in Montreal on September 5th 2019.</p>
          <p><strong>Michael Behiels (Paul Martin)</strong> is a professor of modern Canadian History at the University of Ottawa and is a former chair of its Department of History.</p>
          <p><strong>Dimitry Anastakis (Stephen Harper)</strong> is L.R. Wilson/R.J. Currie Chair in Canadian Business History at the Rotman School and the Department of History at the University of Toronto.</p>
          <p><strong>Jacques G. Ruelland (Justin Trudeau)</strong> taught philosophy at Collège Édouard-Montpetit and history at the University of Montreal. He is a museologist and has close to fifty books to his credit.</p>
          <p><strong>Jeanne Poulin (Mark Carney)</strong> writes on political and cultural issues. She was a contributor for Publishers Weekly in New York.</p>
        </div>
      </div>
    </div>
  );
}
