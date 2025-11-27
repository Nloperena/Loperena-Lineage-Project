import React from "react";

export function CoverPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
      <div className="mb-12 p-8 border-2 border-[#D1C7B7] rounded-full bg-[#FDFBF7] shadow-sm">
        <span className="text-7xl block text-[#8B2E2E]">⚜</span>
      </div>
      <h1 className="text-6xl md:text-7xl font-bold text-[#2C2420] mb-6 leading-tight">
        The Chronicle of the<br/>
        <span className="text-5xl md:text-6xl font-normal italic text-[#2C2420]/70">House of Loperena</span>
      </h1>
      <div className="w-full max-w-md border-b border-[#D1C7B7] my-8"></div>
      <div className="font-mono text-sm space-y-2 text-[#2C2420]/60 uppercase tracking-widest">
        <p>From the Pyrenees to the Peninsula</p>
        <p>November 2025</p>
        <p className="pt-4 text-[#8B2E2E]">Vol I - III</p>
      </div>
    </div>
  );
}

export function FolioIA() {
  return (
    <div className="folio-slide">
      <div className="ledger-grid">
        <div className="ledger-col text-col relative">
          <span className="folio-tag">CHAPTER I: THE TIME OF THE GENTILES</span>
          <h2>The Pagan Roots <span className="date-range">(Pre-History)</span></h2>
          
          <p>Before the Loperenas were "Nobles," and before they were "Christians," they were Basques. To understand the family name, one must understand the world that created it.</p>
          
          <h3 className="text-xl font-bold text-[#2C2420] mt-6 mb-2 font-serif">The Spirit of the Wolf (Otsoa)</h3>
          <p>The surname Loperena is derived from <em>Lope</em> (Wolf) + <em>Rena</em> (House of). In the ancient Basque worldview, the Wolf was not seen as a demon but as the companion of the <strong>Basajaun</strong>—the "Lord of the Woods." By taking the name "Wolf," the ancestral founders signaled their connection to the wild nature of the Pyrenees.</p>

          <div className="concept-box">
            <div className="concept-header"><span className="term">Concept: The Sacred House (Etxea)</span></div>
            <p>In Basque culture, the House is more important than the individual. It has a soul. Before Christianity, the head of the house (<em>Etxeko Jaun</em>) was effectively the priest, worshipping the Goddess Mari (Mother Earth).</p>
          </div>
        </div>

        <div className="ledger-col data-col">
          <div className="exhibit-card">
            <span className="exhibit-label">Ancient Relic</span>
            <h4 className="font-bold text-[#2C2420] mt-2 mb-1">Eguzkilore (Sun Flower)</h4>
            <p className="text-sm text-gray-600 mb-2">
              A pagan talisman (dried thistle) nailed to doors to stop evil spirits.
            </p>
            <div className="note-block">
              "Your ancestors almost certainly practiced this rite in the town of Aldaz."
            </div>
          </div>

          <div className="exhibit-card">
             <span className="exhibit-label">Location</span>
             <div className="map-placeholder" style={{background: "#e3decb"}}>
                <div className="map-overlay">
                    <span className="coord">Valle de Larraún</span>
                    <span className="loc-name">Kingdom of Navarre</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FolioIB() {
  return (
    <div className="folio-slide">
        <div className="ledger-grid">
            <div className="ledger-col text-col relative">
                <span className="folio-tag">FOLIO I-B: THE PATRIARCH</span>
                <h2>The Era of Diego Loperena <span className="date-range">(1685–1750)</span></h2>
                
                <p><strong>Diego Loperena</strong> is the "Deep Root" of the recorded lineage. Born circa 1685 in the Kingdom of Navarre, his life spans the transition from the Habsburg to the Bourbon dynasties.</p>

                <p>He came of age during the <strong>War of the Spanish Succession (1701–1714)</strong>. While the rest of Spain was torn apart by civil war, the Basques of Navarre held their borders. Diego married <strong>Simona Giner</strong> during this volatile era, maintaining the <em>Casa Solar</em> (Ancestral Seat) in the Valley of Larraún.</p>

                <div className="citation-block">
                    <span className="ref-id">HISTORICAL CONTEXT: THE FORAL KINGDOM</span>
                    <p>In Diego's time, Navarre was not merely a province; it was a Kingdom. The Loperenas lived under the "Fueros"—ancient local laws that granted them immunity from Spanish military drafts, provided they defended their own valleys.</p>
                </div>
            </div>

            <div className="ledger-col data-col">
                <div className="exhibit-card info-dense">
                    <span className="exhibit-label">Registry of the Patriarch</span>
                    <table className="data-table">
                        <tbody>
                            <tr><td className="label">Name</td><td className="value">Diego Loperena</td></tr>
                            <tr><td className="label">Born</td><td className="value">c. 1685</td></tr>
                            <tr><td className="label">Status</td><td className="value">Hidalgo / Dueño</td></tr>
                            <tr><td className="label">Spouse</td><td className="value">Simona Giner</td></tr>
                            <tr><td className="label">Primary Issue</td><td className="value">Pedro Juan Loperena (b. 1720)</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="exhibit-card">
                    <span className="exhibit-label">Fig 1.2: The War of Succession</span>
                    <div className="map-placeholder" style={{background: "#e3decb"}}>
                        <div className="map-overlay">
                            <span className="coord">The Pyrenean Frontier</span>
                            <span className="loc-name">Kingdom of Navarre</span>
                            <span className="caption">The buffer zone between France and Castile.</span>
                        </div>
                    </div>
                    <p className="symbolism-note" style={{marginTop:"10px"}}>
                        Diego raised his son, Pedro Juan, in a militarized borderland. This explains the "Warrior Spirit" that Pedro Juan carried to Puerto Rico.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export function FolioIC() {
  return (
    <div className="folio-slide">
        <div className="ledger-grid">
            <div className="ledger-col text-col relative">
                <span className="folio-tag">FOLIO I-C: THE LAW OF INHERITANCE</span>
                <h2>The Mayorazgo & The Departure</h2>
                
                <p>Why did the son of a Noble House leave for the Indies? The answer lies in the Basque law of <strong>Mayorazgo</strong> (Primogeniture).</p>

                <p>To prevent the family estate from being divided into small, useless plots, the entire house—land, title, and livestock—passed to the eldest child. This ensured the survival of the "House of Loperena" but created a class of <em>Segundones</em> (Second Sons).</p>

                <div className="concept-box">
                    <div className="concept-header"><span className="term">The Fate of the Second Son</span></div>
                    <p><strong>Pedro Juan Loperena</strong> (Diego's son) faced a choice common to Basque younger sons: The Church, The King's Army, or The Sea.</p>
                    <p>He chose the Sea. He did not flee poverty; he fled the structural limitation of his homeland to build a <em>new</em> House in the Americas.</p>
                </div>
            </div>

            <div className="ledger-col data-col">
                <div className="exhibit-card">
                    <span className="exhibit-label">Legal Concept: Hidalguía Universal</span>
                    <p className="blazon-text">
                        In Navarre, Hidalguía (Nobility) was "Universal" to those born in the valleys. When Pedro Juan boarded the ship for Puerto Rico, he carried certificates proving his "Clean Blood" (Limpieza de Sangre).
                    </p>
                    <div className="wax-seal" style={{position: "relative", margin: "20px auto", transform: "scale(0.8) rotate(-10deg)"}}>
                        <div className="seal-inner">
                            <span>SANGRE</span>
                            <strong>PURA</strong>
                        </div>
                    </div>
                </div>

                <div className="exhibit-card info-dense">
                    <span className="exhibit-label">The Destination</span>
                    <h4 className="font-bold text-[#2C2420] mt-2 mb-1">West Puerto Rico (Aguada)</h4>
                    <p className="text-sm italic text-gray-600">
                        Why Aguada? In the 1700s, Aguada was the primary port for ships refilling water (watering station) before San Juan. It was a hub for merchants, smugglers, and pioneers—perfect for a second son looking to build a fortune.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export function Chapter2() {
  return (
    <div className="folio-slide">
      <div className="ledger-grid">
        <div className="ledger-col text-col relative">
          <span className="folio-tag">CHAPTER II: THE CROSS AND THE DRAGON</span>
          <h2>The Conversion <span className="date-range">(9th - 12th Century)</span></h2>
          
          <p>Christianity did not conquer the Loperena valley by the sword; it conquered it by absorption. The Basques were the last people in Western Europe to convert, pledging loyalty to the Archangel Michael to keep their status.</p>
          
          <h3 className="text-xl font-bold text-[#2C2420] mt-6 mb-2 font-serif">"Old Christians"</h3>
          <p>Because the Islamic Moors never breached the mountains of Navarre, the Loperenas claimed a unique status: <strong>Cristianos Viejos y Limpios de Sangre</strong> (Old Christians, Clean of Blood). This became the basis of their power.</p>

          <div className="citation-block">
             <span className="ref-id">LEGEND: SAN MIGUEL DE ARALAR</span>
             <p>Teodosio, a local noble, prayed to St. Michael to defeat the Dragon (symbol of paganism). The Loperenas "switched sides" to the New God.</p>
          </div>
        </div>

        <div className="ledger-col data-col">
          <div className="exhibit-card info-dense">
            <span className="exhibit-label">Status Claim</span>
            <h4 className="font-bold text-[#2C2420] mt-2 mb-1">Limpieza de Sangre</h4>
            <p className="text-sm italic mb-2 text-gray-600">"Purity of Blood"</p>
            <ul className="duties-list">
                <li>Free of Moorish Blood</li>
                <li>Free of Jewish Blood</li>
                <li>Unconquered by Islam</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter3() {
    return (
      <div className="folio-slide">
        <div className="ledger-grid">
          <div className="ledger-col text-col relative">
            <span className="folio-tag">CHAPTER III: THE WITCH TRIALS</span>
            <h2>The Crisis of 1610</h2>
            
            <p>In the early 1600s, the Inquisition launched the famous Zugarramurdi witch hunt just north of the family valley. The Church suspected the Basques were still honoring the Goat Spirit (<em>Akerbeltz</em>).</p>
            
            <h3 className="text-xl font-bold text-[#2C2420] mt-6 mb-2 font-serif">The Family's Survival</h3>
            <p>To survive, the Loperenas became "More Catholic than the Pope." They stopped public rituals, placed the Coat of Arms prominently on their home, and joined the Military and Priesthood.</p>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card">
              <span className="exhibit-label">Historical Event</span>
              <h4 className="font-bold text-[#2C2420] mt-2 mb-1">Auto-da-fé of Logroño (1610)</h4>
              <p className="text-sm text-gray-600">
                11 Basques burned at the stake. Thousands arrested.
              </p>
              <div className="note-block">
                "They transitioned from Rural Chieftains to Catholic Guardians."
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export function Chapter4() {
    return (
      <div className="folio-slide">
        <div className="ledger-grid">
          <div className="ledger-col text-col relative">
            <div className="wax-seal absolute -top-4 -right-4 z-10">
                <div className="seal-inner">
                    <span>EST.</span>
                    <strong>1732</strong>
                </div>
            </div>

            <span className="folio-tag">CHAPTER IV: THE REIGN</span>
            <h2>The Era of Nobility <span className="date-range">(1700-1750)</span></h2>
            
            <p><strong>Juan Bernardo Loperena</strong> (Diego's brother) moved to Pamplona and consolidated power. In 1732, he sued the Royal Courts to certify the family's lineage and won, becoming <em>Rey de Armas</em> (King of Arms).</p>
            
            <h3 className="text-xl font-bold text-[#2C2420] mt-6 mb-2 font-serif">Warden of the Royal Palace</h3>
            <p>His son (also Juan Bernardo) raised a cavalry unit during the War of the Fantástica (1762) and was appointed <strong>Alcaide</strong> (Warden) of the Royal Palace of Pamplona, holding the keys to the King's fortress.</p>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card info-dense">
                <span className="exhibit-label">Professional Appointment</span>
                <h4 className="font-bold text-[#2C2420] mt-2 mb-1">Oficio: Rey de Armas</h4>
                <ul className="duties-list">
                    <li>Verifying Genealogy</li>
                    <li>Maintaining the Book of Armory</li>
                    <li>Gatekeeper of Nobility</li>
                </ul>
            </div>
            
            <div className="exhibit-card">
                <span className="exhibit-label">Heraldry</span>
                <div className="heraldry-grid">
                    <div className="shield-placeholder">
                        <svg viewBox="0 0 100 120" width="60" height="80">
                            <path d="M10,10 L90,10 L90,40 Q90,100 50,110 Q10,100 10,40 Z" 
                                  fill="none" stroke="#2C2420" strokeWidth="2"/>
                            <text x="50" y="70" fontFamily="serif" fontSize="40" 
                                  textAnchor="middle" fill="#2C2420">🐺</text>
                        </svg>
                    </div>
                    <div className="blazon-text">
                        <p className="blazon-title">The Wolf</p>
                        <p className="text-xs italic">"Valiant Captain"</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export function Chapter5() {
    return (
      <div className="folio-slide">
        <div className="ledger-grid">
          <div className="ledger-col text-col relative">
            <span className="folio-tag">CHAPTER V: THE SPLIT & THE CROSSING</span>
            <h2>The Pioneer <span className="date-range">(1750)</span></h2>
            
            <p>While Juan Bernardo's "Royal" branch stayed in Pamplona, the younger brother's line (Diego's descendants) faced a choice: stay as secondary nobles or build a new Kingdom. <strong>Pedro Juan Loperena Giner</strong> (Diego's son) chose the ocean.</p>
            
            <p>He left the stone house in Aldaz and boarded a ship for Puerto Rico, settling in <strong>Aguada</strong>, a center of trade. He married María Antonia Olavarría, grounding the Loperena name in the island's soil.</p>
            
            <div className="citation-block">
                <span className="ref-id">REF: DEFUNCIÓN-1780-AGUADA</span>
                <p>“Pedro Juan Loperena, natural del Reino de Navarra, falleció... en el año del Señor 1780.”</p>
            </div>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card">
                <span className="exhibit-label">Migration Timeline</span>
                <ul className="duties-list">
                    <li><strong>1720:</strong> Born in Navarre.</li>
                    <li><strong>c. 1750:</strong> Arrival in Caribbean.</li>
                    <li><strong>1758:</strong> Marriage to Olavarría.</li>
                    <li><strong>1780:</strong> Death in Aguada.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export function Chapter6() {
    return (
      <div className="folio-slide">
        <div className="ledger-grid">
          <div className="ledger-col text-col relative">
            <span className="folio-tag">CHAPTER VI: THE WARRIOR BLOOD</span>
            <h2>The Conti Merger <span className="date-range">(1797)</span></h2>
            
            <p>The Loperena bloodline merged with the <strong>Contis</strong>, a famous military family. <strong>Colonel Rafael Conti</strong> (1746-1814) was an Italian-born hero of the Spanish Empire.</p>
            
            <h3 className="text-xl font-bold text-[#2C2420] mt-6 mb-2 font-serif">Battle of Aguadilla (1797)</h3>
            <p>When the British Empire invaded with 60 ships, Colonel Conti led the local militia to repel the landing force, saving the western coast. He was knighted in the Order of San Hermenegildo.</p>

            <div className="concept-box">
                <div className="concept-header"><span className="term">Wolf + Eagle</span></div>
                <p>The marriage of Félix Antonio Loperena to Rita Conti (The Colonel's granddaughter) united the Wolf (Status & Law) with the Eagle (Military Might).</p>
            </div>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card">
                <span className="exhibit-label">Military Record</span>
                <h4 className="font-bold text-[#2C2420] mt-2 mb-1">Col. Rafael Conti</h4>
                <p className="text-sm text-gray-600">Defender of Aguadilla vs. The British Empire.</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export function Chapter7() {
    return (
      <div className="folio-slide">
        <div className="ledger-grid">
          <div className="ledger-col text-col relative">
            <span className="folio-tag">CHAPTER VII: GOLDEN AGE & THE CRASH</span>
            <h2>The Landowner <span className="date-range">(1833-1899)</span></h2>
            
            <p><strong>Félix Antonio Loperena</strong> lived during the "Golden Age" of coffee. The mountains of Moca were covered in "Oro Negro." The Loperenas were <em>Hacendados</em> (Dons).</p>
            
            <h3 className="text-xl font-bold text-[#2C2420] mt-6 mb-2 font-serif">The Year Everything Changed: 1898</h3>
            <p>The end of the century brought a triple catastrophe:</p>
            <ul className="list-disc list-inside text-[#2C2420] space-y-2 ml-4 mt-2">
                <li><strong>The Invasion (1898):</strong> US Army lands; Spanish rule ends.</li>
                <li><strong>The Devaluation:</strong> US devalues PR Peso by 40%, destroying wealth.</li>
                <li><strong>Hurricane San Ciriaco (1899):</strong> Destroyed the coffee plantations.</li>
            </ul>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card info-dense">
                <span className="exhibit-label">Economic Impact</span>
                <p className="text-sm text-gray-600 italic">"The era of the Grand Estate was over."</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export function Chapter8() {
    return (
      <div className="folio-slide">
        <div className="ledger-grid">
          <div className="ledger-col text-col relative">
            <span className="folio-tag">CHAPTER VIII: THE ANCHOR</span>
            <h2>The Tycoon <span className="date-range">(1891-1982)</span></h2>
            
            <p><strong>Hipolito Loperena Garcia (Sr.)</strong> navigated the chaotic transition from Spanish colony to US territory. Moving beyond agrarian roots, he became a titan of industry in the 1940s.</p>
            
            <h3 className="text-xl font-bold text-[#2C2420] mt-6 mb-2 font-serif">The Empire</h3>
            <ul className="duties-list">
                <li><strong>Salutaris:</strong> Dominated the carbonated beverage market.</li>
                <li><strong>Borinquen Bus Line:</strong> Controlled key transportation routes.</li>
                <li><strong>Shell Gas Stations:</strong> Fueled the island's modernization.</li>
            </ul>

            <div className="concept-box">
                <div className="concept-header"><span className="term">The Fallen Protector</span></div>
                <p>Family memory honors Policeman Aníbal Loperena Soto (killed 1974), remembered as the brave Loperena who gave his life for the law.</p>
            </div>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card">
                <span className="exhibit-label">Vital Stats</span>
                <ul className="duties-list">
                    <li><strong>Born:</strong> 1891 (Spanish Subject)</li>
                    <li><strong>Died:</strong> 1982 (US Citizen)</li>
                    <li><strong>Role:</strong> The Survivor</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export function Chapter9() {
    return (
      <div className="folio-slide">
        <div className="ledger-grid">
          <div className="ledger-col text-col relative">
            <span className="folio-tag">CHAPTER IX: THE UNION</span>
            <h2>Wolf & Crow <span className="date-range">(1939-2010s)</span></h2>
            
            <p><strong>Hipolito "Polo" Loperena Jr.</strong> married <strong>Sonia Velázquez</strong>.</p>
            
            <h3 className="text-xl font-bold text-[#2C2420] mt-6 mb-2 font-serif">The "Two Z's"</h3>
            <p>Family history is adamant that her name is spelled Velázquez (with two Z's). Just as Lope means "Wolf," Velázquez is derived from the Basque <em>Belasko</em>, meaning "The Crow" or "Raven."</p>

            <p>Sonia (born c. 1938) stands today as the matriarch, the keeper of the Loperena memory.</p>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card">
                <span className="exhibit-label">Lineage</span>
                <p className="text-sm text-gray-600">They raised the generation that would finally leave the island to conquer the mainland.</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export function Chapter10() {
    return (
      <div className="folio-slide">
        <div className="ledger-grid">
          <div className="ledger-col text-col relative">
            <span className="folio-tag">CHAPTER X: THE BRIDGE TO THE MAINLAND</span>
            <h2>The Pioneer of the North <span className="date-range">(1960s-Present)</span></h2>
            
            <p>Just as Pedro Juan crossed the Atlantic, <strong>Hipolito "Joe" Loperena III</strong> crossed the Caribbean. He left the island to establish a foothold in the US mainland (Florida).</p>
            
            <p>He and his wife Denise founded <strong>Furniture Packages USA</strong> in 2001, building a business ecosystem. Working with his brother <strong>Jose "William" Loperena</strong> (Real Estate), they re-established family influence in a new territory.</p>
            
            <div className="concept-box">
                <div className="concept-header"><span className="term">The Wolf Pack</span></div>
                <p>While Joe furnished the castles, William secured the land—a modern reflection of the ancient Loperena roles of land and stewardship.</p>
            </div>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card">
                <span className="exhibit-label">New Territory</span>
                <div className="map-placeholder" style={{background: "#e3decb"}}>
                    <div className="map-overlay">
                        <span className="coord">Osceola County</span>
                        <span className="loc-name">Florida, USA</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export function Epilogue() {
    return (
      <div className="folio-slide">
        <div className="ledger-grid">
          <div className="ledger-col text-col relative">
            <span className="folio-tag">EPILOGUE</span>
            <h2>The Standard Bearers <span className="date-range">(Present Day)</span></h2>
            
            <p><strong>Nicholas & William Loperena</strong> represent the 4th Generation of the American line and the 10th Generation since records began. The torch has passed from the iron forgers of the Pyrenees, to the coffee growers of Moca, to the digital architects of Florida.</p>
            
            <p className="italic text-lg mt-4 font-serif">The Wolf still hunts.</p>

            <div className="archivist-stamp">
                VERIFIED LINEAGE<br/>
                <span className="stamp-date">NOV 26 2025</span>
            </div>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card info-dense">
                <span className="exhibit-label">Current Status</span>
                <p className="text-sm italic text-gray-600">"The Keepers of the History."</p>
            </div>
          </div>
        </div>
      </div>
    );
}

