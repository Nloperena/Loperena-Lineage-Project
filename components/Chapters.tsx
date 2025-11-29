import React from "react";

export function CoverPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
      <div className="mb-12 p-8 border-2 border-[#D1C7B7] rounded-full bg-[#FDFBF7] shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-[#8B2E2E] mx-auto mb-4"><path d="M12 2L15 7L12 22L9 7L12 2Z"/><path d="M15 7L20 12L12 22L4 12L9 7Z"/></svg>
      </div>
      <h1 className="text-6xl md:text-7xl font-bold text-[#2C2420] mb-6 leading-tight" style={{letterSpacing: '2px'}}>
        The Chronicle of the<br/>
        <span className="text-5xl md:text-6xl font-normal italic text-[#2C2420]/70">House of Loperena</span>
      </h1>
      <div className="w-full max-w-md border-b border-[#D1C7B7] my-8"></div>
      <div className="font-mono text-sm space-y-2 text-[#2C2420]/60 uppercase tracking-widest">
        <p>From the Pyrenees to the Peninsula: A History of Blood and Iron</p>
        <p>Prepared for: The Loperena Family</p>
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
          <span className="folio-tag">FOLIO I-A: MYTHIC ORIGINS</span>
          <h2>The Time of the Gentiles (Jentilak) <span className="date-range">(Pre-Record)</span></h2>
          
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
            <span className="exhibit-label">Exhibit 1: Etymological Deconstruction</span>
            <table className="data-table">
                <tbody>
                    <tr><td className="label">Root</td><td className="value">Otxoa / Lope (Wolf)</td></tr>
                    <tr><td className="label">Suffix</td><td className="value">-rena (Possessive / &quot;House of&quot;)</td></tr>
                    <tr><td className="label">Translation</td><td className="value">&quot;The House of the Wolf&quot;</td></tr>
                </tbody>
            </table>
          </div>

          <div className="exhibit-card">
            <span className="exhibit-label">Exhibit 2: Visual Artifact</span>
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
                    <p>In Diego&apos;s time, Navarre was a a distinct Kingdom. The family lived under the Fueros—ancient local constitutions that granted them immunity from Spanish military drafts, provided they defended their own valleys.</p>
                </div>
            </div>

            <div className="ledger-col data-col">
                <div className="exhibit-card info-dense">
                    <span className="exhibit-label">Exhibit 1: Vital Statistics Registry</span>
                    <table className="data-table">
                        <tbody>
                            <tr><td className="label">Name</td><td className="value">Diego Loperena</td></tr>
                            <tr><td className="label">Born</td><td className="value">c. 1685 (Navarre)</td></tr>
                            <tr><td className="label">Status</td><td className="value">Hidalgo / Dueño</td></tr>
                            <tr><td className="label">Spouse</td><td className="value">Simona Giner</td></tr>
                            <tr><td className="label">Issue</td><td className="value">Pedro Juan Loperena (b. 1720)</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="exhibit-card">
                    <span className="exhibit-label">Exhibit 2: Map Context</span>
                    <div className="map-placeholder" style={{backgroundImage: "url('/maps/navarre-frontier.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: "#e3decb"}}>
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
                    <p><strong>Pedro Juan Loperena</strong> (Diego&apos;s son) faced the choice common to younger sons: The Church, The Army, or The Sea. This individual chose the Sea. They did not flee poverty; rather, they sought to transcend the structural limitation of the Old World by establishing a new House in the Americas.</p>
                </div>
            </div>

            <div className="ledger-col data-col">
                <div className="exhibit-card">
                    <span className="exhibit-label">Exhibit 1: Legal Status</span>
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
                    <span className="exhibit-label">Exhibit 2: The Destination</span>
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

export function FolioII() { /* Renamed Chapter2 to FolioII */
  return (
    <div className="folio-slide">
      <div className="ledger-grid">
        <div className="ledger-col text-col relative">
          <span className="folio-tag">FOLIO II: THE CROSS AND THE DRAGON</span>
          <h2>The Conversion <span className="date-range">(9th - 12th Century)</span></h2>
          
          <p>Christianity did not conquer the Loperena valley by the sword; it conquered it by absorption. The Basques were the last people in Western Europe to convert, pledging loyalty to the Archangel Michael to keep their status.</p>
          
          <h3 className="text-xl font-bold text-[#2C2420] mt-6 mb-2 font-serif">&quot;Old Christians&quot;</h3>
          <p>Because the Islamic Moors never conquered the mountains of Navarre, the Loperenas claimed the status of <strong>Cristianos Viejos y Limpios de Sangre</strong> (Old Christians, Clean of Blood). They used this isolation as proof of their holiness and nobility during the Reconquista.</p>

          <div className="citation-block">
             <span className="ref-id">LEGEND: SAN MIGUEL DE ARALAR</span>
             <p>Near the ancestral home stands the Sanctuary of San Miguel de Aralar. Legend says the noble Teodosio was haunted by a Dragon (symbolizing the old Pagan ways) and was saved only by Archangel Michael. This myth marks the moment the ancestral inhabitants &quot;switched sides,&quot; pledging loyalty to the Archangel to maintain their status as Lords of the Valley.</p>
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

export function FolioIII() { /* Renamed Chapter3 to FolioIII */
    return (
      <div className="folio-slide">
        <div className="ledger-grid">
          <div className="ledger-col text-col relative">
            <span className="folio-tag">FOLIO III: THE PURGE</span>
            <h2>The Panic of Zugarramurdi <span className="date-range">(1609–1614)</span></h2>
            
            <p><strong>The Context:</strong> While the Loperenas were consolidating their status in the Larraun Valley, northern Navarre erupted in the largest witch hunt in Spanish history. The <strong>Zugarramurdi Trials</strong> (The Witches of Zugarramurdi) saw over 7,000 locals accused of practicing black magic in the caves of the Pyrenees.</p>
            
            <p><strong>The Family Stance:</strong> How did a family named &quot;House of the Wolf&quot; survive a purge against paganism? By doubling down on <strong>Orthodoxy</strong>. It is in this era that the Loperena family likely solidified their legal status as <em>Cristianos Viejos</em> (Old Christians). To be an Hidalgo was the ultimate shield against the Inquisition.</p>

            <div className="citation-block">
                <span className="ref-id">AUTO-DA-FÉ: LOGROÑO (1610)</span>
                <p>“The Devil is so powerful in these mountains that he blinds the understanding of the simple folk.” — <em>Inquisitor Juan del Valle Alvarado</em></p>
            </div>
            
            <p>While the peasantry was accused of dancing in the <em>Akelarre</em> (Witches&apos; Sabbath), the Nobility (the Loperenas) stood as the local judges and enforcers of the Faith. The &quot;Wolf&quot; was no longer a pagan spirit; it was now the hound of God.</p>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card">
                <span className="exhibit-label">Fig 3.1: The Geography of Fear</span>
                <div className="map-placeholder" style={{background: "#2C2420", color: "#fff"}}>
                    <div class="map-overlay">
                        <span className="coord" style={{color:"#d1c7b7"}}>Zugarramurdi <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 inline-block text-[#d1c7b7] mx-1"><polyline points="17 8 21 12 17 16"/><polyline points="8 17 12 21 16 17"/><line x1="21" y1="12" x2="10" y2="12"/><line x1="12" y1="21" x2="12" y2="10"/></svg> Larraun</span>
                        <span className="loc-name">Distance: 45 km</span>
                        <span className="caption">The family seat stood just outside the &quot;zone of contamination.&quot;</span>
                    </div>
                </div>
            </div>

            <div className="exhibit-card info-dense">
                <span className="exhibit-label">Terminology: Akelarre</span>
                <p className="text-sm mb-2">
                    <strong>Akelarre</strong> (Basque): &quot;The Meadow of the He-Goat.&quot;
                </p>
                <p className="text-xs italic text-gray-600 mb-2">
                    The Inquisition believed witches gathered in these meadows to worship the Devil (Akerbeltz).
                </p>
                <div className="note-block" style={{borderTop: "1px solid #8B2E2E"}}>
                    <em>Irony:</em> The Loperena name honors the Wolf (<em>Otsoa</em>), a creature often associated with the very same wild nature the Inquisitors feared.
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export function FolioIV() { /* Renamed Chapter4 to FolioIV */
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

            <span className="folio-tag">FOLIO IV: THE REIGN</span>
            <h2>The Era of Nobility <span className="date-range">(1700-1750)</span></h2>
            
            <p><strong>Juan Bernardo Loperena</strong> (Diego&apos;s brother) moved to Pamplona and consolidated power. In 1732, this individual sued the Royal Courts to certify the family&apos;s lineage and won, becoming <em>Rey de Armas</em> (King of Arms).</p>
            
            <h3 className="text-xl font-bold text-[#2C2420] mt-6 mb-2 font-serif">Warden of the Royal Palace</h3>
            <p>His son (also Juan Bernardo) raised a cavalry unit during the War of the Fantástica (1762) and was appointed <strong>Alcaide</strong> (Warden) of the Royal Palace of Pamplona, holding the keys to the King&apos;s fortress.</p>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card info-dense">
                <span className="exhibit-label">Professional Appointment</span>
                <h4 className="font-bold text-[#2C2420] mt-2 mb-1">Oficio: Rey de Armas</h4>
                <ul className="duties-list">
                    <li>Verifying Genealogy</li>
                    <li>Maintaining the <em>Libro de Armería</em> (Book of Armory).</li>
                    <li>Enforcing sumptuary laws regarding crests and titles.</li>
                </ul>
            </div>
            
            <div className="exhibit-card">
                <span className="exhibit-label">Heraldry</span>
                <div className="heraldry-grid">
                    <div className="shield-placeholder">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#2C2420] mx-auto"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/><path d="M9 10L10 12L9 14L8 12Z"/><path d="M15 10L14 12L15 14L16 12Z"/><path d="M12 15L13 17L11 17L12 15Z"/></svg>
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

export function FolioV() { /* Renamed Chapter5 to FolioV */
    return (
      <div className="folio-slide">
        <div className="ledger-grid">
          <div className="ledger-col text-col relative">
            <span className="folio-tag">FOLIO V: THE CROSSING</span>
            <h2>The Pioneer: Pedro Juan Loperena <span className="date-range">(1750–1800)</span></h2>
            
            <p><strong>The True Immigrant.</strong> Archival records confirm that <strong>Pedro Juan Loperena Giner</strong> (b. 1720) was the first to cross the Atlantic. This individual arrived in Puerto Rico mid-century, settling in Aguada, a strategic watering port for the Spanish treasure fleet.</p>
            
            <p>In 1758, the progenitor married <strong>María Antonia Olavarría Cabán</strong>. This marriage allied the immigrant Loperena line with the established Olavarría clan, planting the flag in the fertile soil of the West.</p>
            
            <div className="citation-block">
                <span className="ref-id">REF: DEFUNCIÓN-1780-AGUADA</span>
                <p>“Pedro Juan Loperena, natural del Reino de Navarra, falleció... en el año del Señor 1780.”</p>
            </div>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card info-dense">
                <span className="exhibit-label">Exhibit 1: The Bureaucracy of Travel</span>
                <p className="text-sm italic mb-2 text-gray-600">To emigrate, one required a Real Cédula.</p>
                <ul className="duties-list">
                    <li><strong>Step 1:</strong> Proof of Lineage (Catholic/Noble).</li>
                    <li><strong>Step 2:</strong> Port of Exit (Cádiz).</li>
                    <li><strong>Step 3:</strong> Destination (The Indies).</li>
                </ul>
            </div>

            <div className="exhibit-card">
                <span className="exhibit-label">Exhibit 2: Archivist Note</span>
                <p className="text-sm text-gray-600">
                    &quot;Genealogical Note: While the lineage from Diego (1685) to Pedro Juan (1720) is documented, the specific birth record connecting Pedro Juan to Ramon Loperena (b. 1800) is reconstructed via parish proximity. Status: High Confidence / Indirect Evidence.&quot;
                </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export function FolioVI() { /* Renamed Chapter6 to FolioVI */
    return (
      <div className="folio-slide">
        <div className="ledger-grid">
          <div className="ledger-col text-col relative">
            <span className="folio-tag">FOLIO VI: THE WARRIOR BLOOD</span>
            <h2>The Conti Merger & The Battle of 1797 <span className="date-range">(1800–1890)</span></h2>
            
            <p>In the 19th century, the agrarian Loperena line merged with one of the most distinguished military families in the Spanish Empire: The Contis.</p>
            
            <h3 className="text-xl font-bold text-[#2C2420] mt-6 mb-2 font-serif">The Hero: Colonel Rafael Conti</h3>
            <p><strong>Colonel Rafael Conti</strong> (1746-1814) was the commander of the local militias. When the British Empire invaded in 1797, Conti did not wait for reinforcements. He led the defense of Aguadilla, repelling the landing forces of Sir Ralph Abercromby. He was knighted in the Order of San Hermenegildo.</p>

            <div className="concept-box">
                <div className="concept-header"><span className="term">The Merger</span></div>
                <p><strong>Félix Antonio Loperena</strong> (The Landowner) married <strong>Rita Conti</strong> (The Colonel&apos;s Daughter/Granddaughter). This union joined Loperena wealth (Coffee) with Conti prestige (War).</p>
            </div>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card">
                <span className="exhibit-label">Exhibit 1: Military Action Report (1797)</span>
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

export function FolioVII() { /* Renamed Chapter7 to FolioVII */
    return (
      <div className="folio-slide">
        <div className="ledger-grid">
          <div className="ledger-col text-col relative">
            <span className="folio-tag">FOLIO VII: THE INDUSTRIAL TRANSITION</span>
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

export function FolioVIII() { /* Renamed Chapter8 to FolioVIII */
    return (
      <div className="folio-slide">
        <div className="ledger-grid">
          <div className="ledger-col text-col relative">
            <span className="folio-tag">FOLIO VIII: THE ANCHOR</span>
            <h2>The Industrial Transition <span className="date-range">(1891–Present)</span></h2>
            
            <p><strong>Hipolito Loperena Sr.</strong> (b. 1891) navigated the collapse of the Spanish Empire and the rise of the American Century. Moving beyond the agrarian roots, this individual became a titan of industry.</p>
            
            <h3 className="text-xl font-bold text-[#2C2420] mt-6 mb-2 font-serif">The Empire</h3>
            <p>Archival records document his ownership of <strong>Salutaris</strong> (Bottling/Soda) and <strong>Borinquen Bus Lines</strong>. This individual was a member of the &quot;National Bourgeoisie&quot;—local owners building the island&apos;s infrastructure.</p>

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

export function FolioIX() { /* Renamed Chapter9 to FolioIX */
    return (
      <div className="folio-slide">
        <div className="ledger-grid">
          <div className="ledger-col text-col relative">
            <span className="folio-tag">FOLIO IX: THE UNION OF WOLF AND CROW</span>
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

export function FolioX() { /* Renamed Chapter10 to FolioX */
    return (
      <div className="folio-slide">
        <div className="ledger-grid">
          <div className="ledger-col text-col relative">
            <span className="folio-tag">FOLIO X: THE BRIDGE TO THE MAINLAND</span>
            <h2>The Pioneer of the North <span className="date-range">(1960s–Present)</span></h2>
            
            <p>Just as Pedro Juan crossed the Atlantic in the 1700s, the progenitor <strong>Hipolito &quot;Joe&quot; Loperena III</strong> crossed the Caribbean. This individual left the island to establish a foothold in the US mainland (Florida).</p>
            
            <p>This individual and their spouse Denise founded <strong>Furniture Packages USA</strong> in 2001, building a business ecosystem. Working with their sibling <strong>Jose &quot;William&quot; Loperena</strong> (Real Estate), they re-established family influence in a new territory.</p>
            
            <div className="concept-box">
                <div className="concept-header"><span className="term">The Wolf Pack</span></div>
                <p>While Joe furnished the castles, William secured the land—a modern reflection of the ancient Loperena roles of land and stewardship.</p>
            </div>
          </div>
  
          <div className="ledger-col data-col">
            <div className="exhibit-card">
                <span className="exhibit-label">New Territory</span>
                <div className="map-placeholder" style={{backgroundImage: "url('/maps/florida-map.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: "#e3decb"}}>
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
            
            <p>The contemporary representatives, <strong>Nicholas &amp; William Loperena</strong>, represent the 4th Generation of the American line and the 10th Generation since records began in Navarre. The torch has passed from the iron forgers of the Pyrenees, to the coffee growers of Moca, to the digital architects of Florida.</p>
            
            <p className="italic text-lg mt-4 font-serif">The ancestral spirit persists.</p>

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

