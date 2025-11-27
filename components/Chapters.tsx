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
          
          <p>Before the Loperenas were &quot;Nobles,&quot; and before they were &quot;Christians,&quot; they were Basques. To understand the family name, one must understand the worldview that created it.</p>
          
          <h3 className="text-xl font-bold text-[#2C2420] mt-6 mb-2 font-serif">The Spirit of the Wolf (Otsoa)</h3>
          <p>The surname Loperena is a patronymic-toponymic compound derived from <em>Lope</em> (Wolf) + <em>Rena</em> (The House of). In ancient Basque mythology, the Wolf was not a demon, but the companion of the <strong>Basajaun</strong> (The Lord of the Woods), a guardian spirit who taught humans agriculture. By adopting this name, the ancestral founders signaled their role as &quot;Keepers of the Valley.&quot;</p>

          <div className="concept-box">
            <div className="concept-header"><span className="term">Concept: The Sacred House (Etxea)</span></div>
            <p>In Basque customary law, the House possesses a soul. It has its own rights separate from the family. The <em>Etxeko Jaun</em> (Lord of the House) was merely a custodian of the stones.</p>
          </div>
        </div>

        <div className="ledger-col data-col">
          <div className="exhibit-card">
            <span className="exhibit-label">Etymological Deconstruction</span>
            <table className="data-table">
                <tbody>
                    <tr><td className="label">Root</td><td className="value">Otxoa / Lope (Wolf)</td></tr>
                    <tr><td className="label">Suffix</td><td className="value">-rena (Possessive / &quot;House of&quot;)</td></tr>
                    <tr><td className="label">Translation</td><td className="value">&quot;The House of the Wolf&quot;</td></tr>
                </tbody>
            </table>
          </div>

          <div className="exhibit-card">
            <span className="exhibit-label">Visual Artifact</span>
            <h4 className="font-bold text-[#2C2420] mt-2 mb-1">Eguzkilore (Sun Flower)</h4>
            <p className="text-sm text-gray-600 mb-2">
              A traditional solar talisman placed on Loperena doors to ward off evil spirits.
            </p>
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
                
                <p><strong>Diego Loperena</strong> represents the &quot;Deep Root&quot; of the recorded lineage. Born circa 1685 in the Kingdom of Navarre, his life coincides with the turbulent War of the Spanish Succession (1701–1714).</p>

                <p>While the rest of Spain was fractured by civil war, the Basques of Navarre held their borders. Diego married <strong>Simona Giner</strong> during this volatile era, maintaining the <em>Casa Solar</em> in the Valley of Larraún.</p>

                <div className="citation-block">
                    <span className="ref-id">HISTORICAL CONTEXT: THE FORAL KINGDOM</span>
                    <p>In Diego&apos;s time, Navarre was a distinct Kingdom. The family lived under the Fueros—ancient local constitutions that granted them immunity from Spanish military drafts, provided they defended their own valleys.</p>
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
                    <span className="exhibit-label">Map Context</span>
                    <div className="map-placeholder" style={{background: "#e3decb"}}>
                        <div className="map-overlay">
                            <span className="coord">The Pyrenean Frontier</span>
                            <span className="loc-name">Kingdom of Navarre</span>
                            <span className="caption">The Buffer Zone between France and Castile.</span>
                        </div>
                    </div>
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

                <p>To prevent the fragmentation of the estate, the entire House—land, title, and livestock—passed indivisibly to the eldest child. This ensured the survival of the &quot;House of Loperena&quot; but created a class of <em>Segundones</em> (Second Sons).</p>

                <div className="concept-box">
                    <div className="concept-header"><span className="term">The Choice</span></div>
                    <p><strong>Pedro Juan Loperena</strong> (Diego&apos;s son) faced the choice common to younger sons: The Church, The Army, or The Sea. He chose the Sea. He did not flee poverty; he fled the structural limitation of the Old World to build a new House in the Americas.</p>
                </div>
            </div>

            <div className="ledger-col data-col">
                <div className="exhibit-card">
                    <span className="exhibit-label">Legal Status</span>
                    <table className="data-table">
                        <tbody>
                            <tr><td className="label">Privilege</td><td className="value">Hidalguía Universal (Universal Nobility)</td></tr>
                            <tr><td className="label">Right</td><td className="value">Exemption from Royal Tribute (Tax)</td></tr>
                            <tr><td className="label">Requirement</td><td className="value">Limpieza de Sangre (Proof of Clean Blood) for emigration.</td></tr>
                        </tbody>
                    </table>
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
          
          <h3 className="text-xl font-bold text-[#2C2420] mt-6 mb-2 font-serif">&quot;Old Christians&quot;</h3>
          <p>Because the Islamic Moors never conquered the mountains of Navarre, the Loperenas claimed the status of <strong>Cristianos Viejos y Limpios de Sangre</strong> (Old Christians, Clean of Blood). They used this isolation as proof of their holiness and nobility during the Reconquista.</p>

          <div className="citation-block">
             <span className="ref-id">LEGEND: SAN MIGUEL DE ARALAR</span>
             <p>Near the ancestral home stands the Sanctuary of San Miguel de Aralar. Legend says the noble Teodosio was haunted by a Dragon (symbolizing the old Pagan ways) and was saved only by Archangel Michael. This myth marks the moment your ancestors &quot;switched sides,&quot; pledging loyalty to the Archangel to maintain their status as Lords of the Valley.</p>
          </div>
        </div>

        <div className="ledger-col data-col">
          <div className="exhibit-card info-dense">
            <span className="exhibit-label">Status Claim</span>
            <h4 className="font-bold text-[#2C2420] mt-2 mb-1">Limpieza de Sangre</h4>
            <p className="text-sm italic mb-2 text-gray-600">&quot;Purity of Blood&quot;</p>
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
            <p>To survive, the Loperenas became &quot;More Catholic than the Pope.&quot; They stopped public rituals, placed the Coat of Arms prominently on their home, and joined the Military and Priesthood.</p>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card">
              <span className="exhibit-label">Historical Event</span>
              <h4 className="font-bold text-[#2C2420] mt-2 mb-1">Auto-da-fé of Logroño (1610)</h4>
              <p className="text-sm text-gray-600">
                11 Basques burned at the stake. Thousands arrested.
              </p>
              <div className="note-block">
                &quot;They transitioned from Rural Chieftains to Catholic Guardians.&quot;
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
                        <p className="text-xs italic">&quot;Valiant Captain&quot;</p>
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
            
            <p>While Juan Bernardo&apos;s &quot;Royal&quot; branch stayed in Pamplona, the younger brother&apos;s line (Diego&apos;s descendants) faced a choice: stay as secondary nobles or build a new Kingdom. <strong>Pedro Juan Loperena Giner</strong> (Diego&apos;s son) chose the ocean.</p>
            
            <p>He left the stone house in Aldaz and boarded a ship for Puerto Rico, settling in <strong>Aguada</strong>, a center of trade. He married María Antonia Olavarría, grounding the Loperena name in the island&apos;s soil.</p>
            
            <div className="citation-block">
                <span className="ref-id">REF: DEFUNCIÓN-1780-AGUADA</span>
                <p>“Pedro Juan Loperena, natural del Reino de Navarra, falleció... en el año del Señor 1780.”</p>
            </div>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card info-dense">
                <span className="exhibit-label">The Bureaucracy of Travel</span>
                <p className="text-sm italic mb-2 text-gray-600">To emigrate, one required a Real Cédula.</p>
                <ul className="duties-list">
                    <li><strong>Step 1:</strong> Proof of Lineage (Catholic/Noble).</li>
                    <li><strong>Step 2:</strong> Port of Exit (Cádiz).</li>
                    <li><strong>Step 3:</strong> Destination (The Indies).</li>
                </ul>
            </div>

            <div className="exhibit-card">
                <span className="exhibit-label">Archivist Note</span>
                <p className="text-sm text-gray-600">
                    &quot;Genealogical Note: While the lineage from Diego (1685) to Pedro Juan (1720) is documented, the specific birth record connecting Pedro Juan to Ramon Loperena (b. 1800) is reconstructed via parish proximity. Status: High Confidence / Indirect Evidence.&quot;
                </p>
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
                <p>The marriage of Félix Antonio Loperena to Rita Conti (The Colonel&apos;s granddaughter) united the Wolf (Status &amp; Law) with the Eagle (Military Might).</p>
            </div>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card">
                <span className="exhibit-label">Military Action Report (1797)</span>
                <table className="data-table">
                    <tbody>
                        <tr><td className="label">Commander</td><td className="value">Col. Rafael Conti</td></tr>
                        <tr><td className="label">Enemy Force</td><td className="value">Royal Navy (Gen. Abercromby)</td></tr>
                        <tr><td className="label">Unit</td><td className="value">Milicias Disciplinadas</td></tr>
                        <tr><td className="label">Outcome</td><td className="value">British Repelled</td></tr>
                    </tbody>
                </table>
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
            
            <p><strong>Félix Antonio Loperena</strong> lived during the &quot;Golden Age&quot; of coffee. The mountains of Moca were covered in &quot;Oro Negro.&quot; The Loperenas were <em>Hacendados</em> (Dons).</p>
            
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
                <p className="text-sm text-gray-600 italic">&quot;The era of the Grand Estate was over.&quot;</p>
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
            <h2>The Industrial Transition <span className="date-range">(1891–Present)</span></h2>
            
            <p><strong>Hipolito Loperena Sr.</strong> (b. 1891) navigated the collapse of the Spanish Empire and the rise of the American Century. Moving beyond the agrarian roots, he became a titan of industry.</p>
            
            <h3 className="text-xl font-bold text-[#2C2420] mt-6 mb-2 font-serif">The Empire</h3>
            <p>Family memory records his ownership of <strong>Salutaris</strong> (Bottling/Soda) and <strong>Borinquen Bus Lines</strong>. He was a member of the &quot;National Bourgeoisie&quot;—local owners building the island&apos;s infrastructure.</p>

            <p><strong>The Name:</strong> Official records often contain misprints, listing the surname as &quot;Luperena.&quot; Family oral history confirms this was a common clerical error.</p>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card">
                <span className="exhibit-label">The Fallen Protector</span>
                <h4 className="font-bold text-[#2C2420] mt-2 mb-1">Aníbal Loperena Soto</h4>
                <p className="text-sm text-gray-600">Police Officer killed in the line of duty (1974).</p>
                <div className="note-block">
                    &quot;Remembered as the brave Loperena who gave his life for the law.&quot;
                </div>
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
            <span className="folio-tag">CHAPTER IX: THE UNION OF WOLF AND CROW</span>
            <h2>The Patriarch & Matriarch <span className="date-range">(1939–2010s)</span></h2>
            
            <p><strong>Hipolito &quot;Polo&quot; Loperena Jr.</strong> married <strong>Sonia Velázquez</strong>.</p>
            
            <h3 className="text-xl font-bold text-[#2C2420] mt-6 mb-2 font-serif">The &quot;Two Z&apos;s&quot;</h3>
            <p>Family history is adamant that her name is spelled Velázquez (with two Z&apos;s). Just as Lope means &quot;Wolf,&quot; Velázquez is derived from the Basque <em>Belasko</em>, meaning &quot;The Crow&quot; or &quot;Raven.&quot;</p>

            <p>Sonia (born c. 1938) stands today as the matriarch, the keeper of the Loperena memory.</p>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card">
                <span className="exhibit-label">Symbolism</span>
                <p className="text-sm text-gray-600">The Union: The Wolf (Loperena) and The Crow (Velázquez).</p>
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
            <h2>The Pioneer of the North <span className="date-range">(1960s–Present)</span></h2>
            
            <p>Just as Pedro Juan crossed the Atlantic in the 1700s, your father <strong>Hipolito &quot;Joe&quot; Loperena III</strong> crossed the Caribbean. He left the island to establish a foothold in the US mainland (Florida).</p>
            
            <p>He and his wife Denise founded <strong>Furniture Packages USA</strong> in 2001, building a business ecosystem. Working with his brother <strong>Jose &quot;William&quot; Loperena</strong> (Real Estate), they re-established family influence in a new territory.</p>
            
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
            
            <p><strong>Nicholas &amp; William Loperena</strong> represent the 4th Generation of the American line and the 10th Generation since records began in Navarre. The torch has passed from the iron forgers of the Pyrenees, to the coffee growers of Moca, to the digital architects of Florida.</p>
            
            <p className="italic text-lg mt-4 font-serif">The Wolf still hunts.</p>

            <div className="archivist-stamp">
                VERIFIED LINEAGE<br/>
                <span className="stamp-date">NOV 26 2025</span>
            </div>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card info-dense">
                <span className="exhibit-label">Current Status</span>
                <p className="text-sm italic text-gray-600">&quot;The Keepers of the History.&quot;</p>
            </div>
          </div>
        </div>
      </div>
    );
}

