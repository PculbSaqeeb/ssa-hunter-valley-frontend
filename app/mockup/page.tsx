"use client";
import Link from 'next/link';

export default function MockupPage() {
  return (
    <div className="h-screen w-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3a471c] via-[#111827] to-black flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <Link href="/" className="absolute top-6 left-6 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg font-medium transition-colors z-50">
        &larr;
      </Link>

      <div className="flex-1 w-full flex items-center justify-center">
        {/* Desktop Mockup (lg and up) - Ultra Realistic MacBook Style */}
        <div className="hidden 2xl:flex flex-col items-center relative scale-[0.55] xl:scale-[0.65] 2xl:scale-75 mt-2 transform-gpu">
          {/* Screen Assembly */}
          <div className="relative w-[1280px] h-[800px] bg-[#0a0a0a] rounded-[2rem] border-[1px] border-[#333] ring-1 ring-white/10 p-[20px] pb-[40px] shadow-2xl z-10">
            {/* Camera */}
            <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#111] rounded-full border border-white/10 flex items-center justify-center shadow-inner">
               <div className="w-1 h-1 bg-blue-500/30 rounded-full"></div>
            </div>
            {/* Screen */}
            <div className="w-full h-full bg-white overflow-hidden rounded-md relative shadow-[inset_0_0_12px_rgba(0,0,0,0.5)]">
              <iframe src="/" className="w-full h-full border-none" />
            </div>
            {/* Brand */}
            <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 text-[12px] font-medium tracking-[0.3em] text-[#666]">MACBOOK PRO</div>
          </div>
          
          {/* Laptop Base (Keyboard Deck) */}
          <div className="relative w-[1400px] h-[30px] bg-gradient-to-b from-[#d1d5db] to-[#6b7280] rounded-b-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.9)] z-20 flex justify-center border-t-2 border-[#f3f4f6] -mt-[8px]">
             {/* Thumb Notch */}
             <div className="w-[200px] h-[16px] bg-gradient-to-b from-[#9ca3af] to-[#4b5563] rounded-b-[16px] shadow-[inset_0_3px_6px_rgba(0,0,0,0.4)]"></div>
          </div>
        </div>

        {/* Tablet Mockup (md to 2xl) - Realistic iPad Pro Style */}
        <div className="hidden md:flex 2xl:hidden flex-col items-center relative scale-[0.85] md:scale-[0.95] xl:scale-100 mt-4">
          {/* Main Body */}
          <div className="relative w-[768px] h-[1024px] max-h-[85vh] bg-[#111] rounded-[3rem] border border-[#222] ring-[2px] ring-[#555] p-[24px] shadow-[0_40px_80px_rgba(0,0,0,0.9)] z-10">
            {/* Top Power Button */}
            <div className="absolute top-[0px] right-[100px] w-[50px] h-[3px] bg-gradient-to-r from-[#555] to-[#444] rounded-t-md shadow-[0_-2px_4px_rgba(255,255,255,0.1)] -mt-[3px]"></div>
            
            {/* Right Side Buttons (Volume) */}
            <div className="absolute top-[80px] -right-[3px] w-[3px] h-[50px] bg-gradient-to-b from-[#666] to-[#444] rounded-r-md shadow-lg"></div>
            <div className="absolute top-[140px] -right-[3px] w-[3px] h-[50px] bg-gradient-to-b from-[#666] to-[#444] rounded-r-md shadow-lg"></div>
            
            {/* Camera & Sensors */}
            <div className="absolute top-[32px] left-1/2 -translate-x-1/2 flex items-center gap-4 z-20 opacity-80">
               {/* Ambient Light Sensor */}
               <div className="w-1.5 h-1.5 bg-[#000] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,1)]"></div>
               {/* Main Lens */}
               <div className="w-3 h-3 bg-[#050505] rounded-full ring-1 ring-white/5 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,1)]">
                 <div className="w-1 h-1 bg-blue-700/40 rounded-full"></div>
               </div>
            </div>
            
            {/* Screen Container */}
            <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] border-[3px] border-[#0a0a0a]">
              {/* Glass Glare Overlay */}
              <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/[0.04] to-transparent z-10 pointer-events-none rounded-t-[2rem]"></div>
              <iframe src="/" className="w-full h-full border-none relative z-0" />
            </div>
          </div>
        </div>

        {/* Mobile Mockup (less than md) - Realistic iPhone Style */}
        <div className="flex md:hidden flex-col items-center relative scale-95 sm:scale-105 mt-6">
          <div className="relative w-[375px] max-w-[95vw] h-[812px] max-h-[80vh] bg-[#0a0a0a] rounded-[3rem] border-[1px] border-[#444] ring-[2px] ring-[#666] p-[8px] shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-10">
            {/* Side Buttons */}
            <div className="absolute top-[120px] -left-[3px] w-[3px] h-[30px] bg-gradient-to-b from-[#777] to-[#555] rounded-l-md shadow-lg"></div>
            <div className="absolute top-[170px] -left-[3px] w-[3px] h-[60px] bg-gradient-to-b from-[#777] to-[#555] rounded-l-md shadow-lg"></div>
            <div className="absolute top-[240px] -left-[3px] w-[3px] h-[60px] bg-gradient-to-b from-[#777] to-[#555] rounded-l-md shadow-lg"></div>
            <div className="absolute top-[180px] -right-[3px] w-[3px] h-[90px] bg-gradient-to-b from-[#777] to-[#555] rounded-r-md shadow-lg"></div>
            
            {/* Dynamic Island */}
            <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-[110px] h-[32px] bg-black rounded-[1.5rem] z-20 shadow-[inset_0_0_4px_rgba(255,255,255,0.1)] flex items-center justify-end pr-2 border border-white/5">
              <div className="w-3.5 h-3.5 bg-[#0a0a0a] rounded-full border border-white/10 flex items-center justify-center">
                 <div className="w-1 h-1 bg-blue-500/40 rounded-full shadow-[0_0_2px_#3b82f6]"></div>
              </div>
            </div>
            
            {/* Screen */}
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative shadow-[inset_0_0_12px_rgba(0,0,0,0.5)]">
              <iframe src="/" className="w-full h-full border-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
