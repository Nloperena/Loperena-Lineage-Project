"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CoverPage, FolioIA, FolioIB, FolioIC, 
  Chapter2, Chapter3, Chapter4, 
  Chapter5, Chapter6, Chapter7, 
  Chapter8, Chapter9, Chapter10, 
  Epilogue 
} from "@/components/Chapters";

// Vertical CSS Timeline Implementation - Kept local as it has specific state logic
function Appendix() {
  const [activeLine, setActiveLine] = useState<"loperena" | "conti">("loperena");

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-3xl font-bold text-[#2C2420] mb-4 pb-4 border-b border-[#E5E0D8] text-center uppercase tracking-widest font-serif">
        Appendix: The Bloodlines
      </h2>

      <div className="flex justify-center gap-4 mb-6">
        <button 
          onClick={() => setActiveLine("loperena")}
          className={`px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all ${
            activeLine === "loperena" 
              ? "bg-[#2C2420] text-white border border-[#2C2420]" 
              : "bg-transparent text-[#2C2420] border border-[#D1C7B7] hover:bg-[#E6E0D4]"
          }`}
        >
          House of Loperena
        </button>
        <button 
          onClick={() => setActiveLine("conti")}
          className={`px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all ${
            activeLine === "conti" 
              ? "bg-[#8B2E2E] text-white border border-[#8B2E2E]" 
              : "bg-transparent text-[#8B2E2E] border border-[#D1C7B7] hover:bg-[#E6E0D4]"
          }`}
        >
          House of Conti
        </button>
      </div>
      
      <div className="bloodline-container">
          <div className="timeline-thread"></div>

          {activeLine === "loperena" ? (
            <>
              <div className="gen-node pair">
                  <div className="card ancestor" style={{border: "2px dashed #2C2420", background: "#E6E0D4"}}>
                      <h3>Juan Bernardo</h3>
                      <p className="role">The King of Arms</p>
                      <p className="location">Stayed in Spain</p>
                  </div>
                  <span className="marriage-link" style={{fontStyle: "normal", fontSize: "1rem", color: "#666"}}>— Brothers —</span>
                  <div className="card ancestor">
                      <h3>Diego Loperena</h3>
                      <p className="role">The Root</p>
                      <p className="location">c. 1685</p>
                  </div>
              </div>

              <div className="gen-node">
                  <div className="date-marker">1750</div>
                  <div className="card ancestor">
                      <h3>Pedro Juan Loperena</h3>
                      <p className="role">The Immigrant (Son of Diego)</p>
                      <p className="location">Navarre → Puerto Rico</p>
                  </div>
              </div>

              <div className="gen-node">
                  <div className="date-marker">1760</div>
                  <div className="card ancestor">
                      <h3>Manuel Loperena</h3>
                      <p className="role">First Gen. Criollo</p>
                  </div>
              </div>

              <div className="gen-node">
                  <div className="date-marker">1833</div>
                  <div className="card ancestor">
                      <h3>Félix Antonio Loperena</h3>
                      <p className="role">The Landowner</p>
                      <p className="location">Moca, PR</p>
                  </div>
              </div>

              <div className="gen-node pair">
                  <div className="card ancestor">
                      <h3>Félix Antonio</h3>
                  </div>
                  <span className="marriage-link">&</span>
                  <div className="card spouse">
                      <h3>Rita Conti</h3>
                  </div>
              </div>

              <div className="gen-node">
                  <div className="date-marker">1865</div>
                  <div className="card ancestor">
                      <h3>José María Loperena y Conti</h3>
                      <p className="role">The Bridge</p>
                  </div>
              </div>

              <div className="gen-node">
                  <div className="date-marker">1891</div>
                  <div className="card ancestor">
                      <h3>Hipolito Loperena Sr.</h3>
                      <p className="role">The Anchor</p>
                  </div>
              </div>

              <div className="gen-node">
                  <div className="date-marker">1939</div>
                  <div className="card ancestor">
                      <h3>Hipólito &quot;Polo&quot; Loperena Jr.</h3>
                      <p className="role">The Unifier</p>
                  </div>
              </div>

              <div className="gen-node">
                  <div className="date-marker">1960s</div>
                  <div className="card ancestor">
                      <h3>Hipólito &quot;Joe&quot; Loperena III</h3>
                      <p className="role">Pioneer of the North</p>
                  </div>
              </div>

              <div className="gen-node current">
                  <div className="date-marker">2025</div>
                  <div className="card self">
                      <h3>Nicholas & William</h3>
                      <p className="role">Standard Bearers</p>
                  </div>
              </div>
            </>
          ) : (
            <>
              {/* CONTI LINE */}
              <div className="gen-node">
                  <div className="date-marker">1700s</div>
                  <div className="card spouse">
                      <h3>Giovanni Giacomo Conti</h3>
                      <p className="role">The Italian Root</p>
                      <p className="location">Italy</p>
                  </div>
              </div>

              <div className="gen-node">
                  <div className="date-marker">1746</div>
                  <div className="card spouse">
                      <h3>Col. Rafael Conti</h3>
                      <p className="role">Defender of Aguadilla</p>
                      <p className="location">The War Hero</p>
                  </div>
              </div>

              <div className="gen-node">
                  <div className="date-marker">1845</div>
                  <div className="card spouse">
                      <h3>Rita Conti</h3>
                      <p className="role">The Colonel&apos;s Daughter</p>
                  </div>
              </div>

              <div className="gen-node">
                  <div className="date-marker">Merged</div>
                  <div className="card ancestor" style={{background: "#F0EBE0", border: "1px dashed #8B2E2E"}}>
                      <p className="role" style={{color: "#8B2E2E"}}>Merged into House of Loperena</p>
                  </div>
              </div>
            </>
          )}
      </div>
    </div>
  );
}

const SECTIONS = [
  { id: "cover", title: "Cover", label: "The Chronicle" },
  { id: "folio-ia", title: "Folio I-A", label: "Time of Gentiles" },
  { id: "folio-ib", title: "Folio I-B", label: "The Patriarch Diego" },
  { id: "folio-ic", title: "Folio I-C", label: "Law of Inheritance" },
  { id: "ch2", title: "Chapter II", label: "Cross & Dragon" },
  { id: "ch3", title: "Chapter III", label: "The Witch Trials" },
  { id: "ch4", title: "Chapter IV", label: "The Reign" },
  { id: "ch5", title: "Chapter V", label: "The Crossing" },
  { id: "ch6", title: "Chapter VI", label: "Warrior Blood" },
  { id: "ch7", title: "Chapter VII", label: "Golden Age & Crash" },
  { id: "ch8", title: "Chapter VIII", label: "The Anchor" },
  { id: "ch9", title: "Chapter IX", label: "Wolf & Crow" },
  { id: "ch10", title: "Chapter X", label: "Bridge to Mainland" },
  { id: "epilogue", title: "Epilogue", label: "Standard Bearers" },
  { id: "appendix", title: "Appendix", label: "The Bloodlines" },
];

export default function ArchivalLedger() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setCurrentIndex((prev) => Math.min(prev + 1, SECTIONS.length - 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentSection = SECTIONS[currentIndex];

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar / Cloth Binding */}
      <aside className="w-[280px] flex-shrink-0 border-r border-[#D1C7B7] flex flex-col bg-[#E6E0D4] relative shadow-inner z-20">
        {/* Binder Visual Cue */}
        <div className="absolute left-4 top-0 bottom-0 w-2 border-l border-r border-[#D1C7B7]/50"></div>

        <div className="p-8 pl-12 pt-12 border-b border-[#D1C7B7]">
          <h1 className="font-mono text-xs uppercase tracking-widest text-[#8B2E2E] mb-2 font-bold">File Reference</h1>
          <p className="font-mono text-2xl font-bold text-[#2C2420]">LOP-2025</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-8 pl-12 custom-scrollbar">
          <ul className="space-y-6">
            {SECTIONS.map((section, index) => (
              <li key={section.id}>
                <button
                  onClick={() => setCurrentIndex(index)}
                  className={`group flex flex-col items-start text-left transition-all duration-200 w-full pr-4 ${
                    currentIndex === index 
                      ? "text-[#8B2E2E] translate-x-1" 
                      : "text-[#2C2420]/60 hover:text-[#2C2420]"
                  }`}
                >
                  <div className={`flex items-center gap-3 ${currentIndex === index ? "border-l-4 border-[#8B2E2E] pl-2 -ml-3" : ""}`}>
                    <span className="font-mono text-sm font-bold uppercase tracking-wider">{section.title}</span>
                  </div>
                  <span className={`font-serif text-sm italic mt-1 transition-colors ${
                    currentIndex === index ? "text-[#8B2E2E]/80 pl-2" : "text-[#2C2420]/40 pl-0"
                  }`}>
                    {section.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-8 pl-12 border-t border-[#D1C7B7]">
          <p className="font-mono text-[10px] uppercase text-[#2C2420]/50 leading-relaxed">
            Archive Status: Open<br/>
            Last Access: {new Date().toLocaleDateString()}<br/>
            Loc: Orlando, FL
          </p>
        </div>
      </aside>

      {/* Main Stage */}
      <main className="flex-1 relative overflow-hidden flex flex-col p-8 md:p-12 items-center justify-center">
        
        {/* The Physical Page (Cardstock) */}
        <div className="relative w-full h-full max-w-6xl bg-[#FDFBF7] border border-[#E5E0D8] rounded-[2px] shadow-[1px_1px_2px_rgba(0,0,0,0.05),10px_10px_30px_rgba(44,30,20,0.15)] flex flex-col overflow-hidden">
          
          {/* Header inside the page */}
          <header className="h-16 border-b border-[#E5E0D8] flex items-center justify-between px-8 md:px-12 bg-[#FDFBF7] z-10 flex-shrink-0">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs uppercase text-[#2C2420]/50">Current Folio:</span>
              <span className="font-serif text-lg font-bold italic text-[#2C2420]">{currentSection.label}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs uppercase text-[#2C2420]/50">Page</span>
              <span className="font-mono text-sm font-bold border border-[#E5E0D8] px-2 py-1 rounded bg-white/50 text-[#2C2420]">
                {String(currentIndex + 1).padStart(2, '0')} / {String(SECTIONS.length).padStart(2, '0')}
              </span>
            </div>
          </header>

          {/* Content Area */}
          <div className="flex-1 relative w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <div className="h-full overflow-y-auto custom-scrollbar p-8 md:p-12 pb-24">
                  {currentIndex === 0 && <CoverPage />}
                  {currentIndex === 1 && <FolioIA />}
                  {currentIndex === 2 && <FolioIB />}
                  {currentIndex === 3 && <FolioIC />}
                  {currentIndex === 4 && <Chapter2 />}
                  {currentIndex === 5 && <Chapter3 />}
                  {currentIndex === 6 && <Chapter4 />}
                  {currentIndex === 7 && <Chapter5 />}
                  {currentIndex === 8 && <Chapter6 />}
                  {currentIndex === 9 && <Chapter7 />}
                  {currentIndex === 10 && <Chapter8 />}
                  {currentIndex === 11 && <Chapter9 />}
                  {currentIndex === 12 && <Chapter10 />}
                  {currentIndex === 13 && <Epilogue />}
                  {currentIndex === 14 && <Appendix />}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </main>
    </div>
  );
}
