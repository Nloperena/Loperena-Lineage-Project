"use client";

import { 
  CoverPage, FolioIA, FolioIB, FolioIC, 
  FolioII, FolioIII, FolioIV, 
  FolioV, FolioVI, FolioVII, 
  FolioVIII, FolioIX, FolioX, 
  Epilogue 
} from "@/components/Chapters";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-[#F0EBE0] text-[#2C2420]">
      {/* Vertical layout container */}
      <div className="max-w-4xl mx-auto bg-[#FDFBF7] shadow-2xl my-0 md:my-12 border-x md:border border-[#D1C7B7]">
        
        {/* Navigation / Header */}
        <nav className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-[#D1C7B7] p-4 flex justify-between items-center">
          <span className="font-mono text-xs md:text-sm font-bold text-[#8B2E2E] tracking-widest" style={{letterSpacing: '1px'}}>THE CHRONICLE</span>
          <a href="/" className="font-mono text-xs underline hover:text-[#8B2E2E]">Back to Ledger</a>
        </nav>

        {/* Content Stack */}
        <div className="divide-y divide-[#E5E0D8]">
          
          <section className="py-16 md:py-24 px-4 md:px-16">
            <CoverPage />
          </section>

          <div className="bg-[#E6E0D4] py-4 px-4 md:px-8 font-mono text-xs uppercase tracking-widest text-[#555] sticky top-12 z-40 border-y border-[#D1C7B7]">
            Part I: The Old World
          </div>

          <section className="py-16 md:py-24 px-4 md:px-16">
            <FolioIA />
          </section>

          <section className="py-16 md:py-24 px-4 md:px-16">
            <FolioIB />
          </section>

          <section className="py-16 md:py-24 px-4 md:px-16">
            <FolioIC />
          </section>

          <section className="py-16 md:py-24 px-4 md:px-16">
            <FolioII />
          </section>

          <section className="py-16 md:py-24 px-4 md:px-16">
            <FolioIII />
          </section>

          <section className="py-16 md:py-24 px-4 md:px-16">
            <FolioIV />
          </section>

          <div className="bg-[#E6E0D4] py-4 px-4 md:px-8 font-mono text-xs uppercase tracking-widest text-[#555] sticky top-12 z-40 border-y border-[#D1C7B7]">
            Part II: The New World
          </div>

          <section className="py-16 md:py-24 px-4 md:px-16">
            <FolioV />
          </section>

          <section className="py-16 md:py-24 px-4 md:px-16">
            <FolioVI />
          </section>

          <section className="py-16 md:py-24 px-4 md:px-16">
            <FolioVII />
          </section>

          <div className="bg-[#E6E0D4] py-4 px-4 md:px-8 font-mono text-xs uppercase tracking-widest text-[#555] sticky top-12 z-40 border-y border-[#D1C7B7]">
            Part III: The Modern Era
          </div>

          <section className="py-16 md:py-24 px-4 md:px-16">
            <FolioVIII />
          </section>

          <section className="py-16 md:py-24 px-4 md:px-16">
            <FolioIX />
          </section>

          <section className="py-16 md:py-24 px-4 md:px-16">
            <FolioX />
          </section>

          <section className="py-16 md:py-24 px-4 md:px-16 bg-[#faf8f5]">
            <Epilogue />
          </section>

        </div>

        {/* Footer */}
        <footer className="bg-[#2C2420] text-[#F0EBE0] p-12 text-center font-mono text-xs">
          <p className="mb-4">THE HOUSE OF LOPERENA</p>
          <p>Est. 1732 • Verified 2025</p>
        </footer>

      </div>
    </main>
  );
}
