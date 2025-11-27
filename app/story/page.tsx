"use client";

import { 
  CoverPage, FolioIA, FolioIB, FolioIC, 
  Chapter2, Chapter3, Chapter4, 
  Chapter5, Chapter6, Chapter7, 
  Chapter8, Chapter9, Chapter10, 
  Epilogue 
} from "@/components/Chapters";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-[#F0EBE0] text-[#2C2420]">
      {/* Vertical layout container */}
      <div className="max-w-4xl mx-auto bg-[#FDFBF7] shadow-2xl my-12 border border-[#D1C7B7]">
        
        {/* Navigation / Header */}
        <nav className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-[#D1C7B7] p-4 flex justify-between items-center">
          <span className="font-mono text-sm font-bold text-[#8B2E2E] tracking-widest">THE CHRONICLE</span>
          <a href="/" className="font-mono text-xs underline hover:text-[#8B2E2E]">Back to Ledger</a>
        </nav>

        {/* Content Stack */}
        <div className="divide-y divide-[#E5E0D8]">
          
          <section className="py-24 px-8 md:px-16">
            <CoverPage />
          </section>

          <div className="bg-[#E6E0D4] py-4 px-8 font-mono text-xs uppercase tracking-widest text-[#555] sticky top-12 z-40 border-y border-[#D1C7B7]">
            Part I: The Old World
          </div>

          <section className="py-24 px-8 md:px-16">
            <FolioIA />
          </section>

          <section className="py-24 px-8 md:px-16">
            <FolioIB />
          </section>

          <section className="py-24 px-8 md:px-16">
            <FolioIC />
          </section>

          <section className="py-24 px-8 md:px-16">
            <Chapter2 />
          </section>

          <section className="py-24 px-8 md:px-16">
            <Chapter3 />
          </section>

          <section className="py-24 px-8 md:px-16">
            <Chapter4 />
          </section>

          <div className="bg-[#E6E0D4] py-4 px-8 font-mono text-xs uppercase tracking-widest text-[#555] sticky top-12 z-40 border-y border-[#D1C7B7]">
            Part II: The New World
          </div>

          <section className="py-24 px-8 md:px-16">
            <Chapter5 />
          </section>

          <section className="py-24 px-8 md:px-16">
            <Chapter6 />
          </section>

          <section className="py-24 px-8 md:px-16">
            <Chapter7 />
          </section>

          <div className="bg-[#E6E0D4] py-4 px-8 font-mono text-xs uppercase tracking-widest text-[#555] sticky top-12 z-40 border-y border-[#D1C7B7]">
            Part III: The Modern Era
          </div>

          <section className="py-24 px-8 md:px-16">
            <Chapter8 />
          </section>

          <section className="py-24 px-8 md:px-16">
            <Chapter9 />
          </section>

          <section className="py-24 px-8 md:px-16">
            <Chapter10 />
          </section>

          <section className="py-24 px-8 md:px-16 bg-[#faf8f5]">
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

