import Image from 'next/image';

const FACILITIES = [
  {
    title: "Tennis",
    tags: ["9 Clay Courts", "4 Hard Courts"],
    desc: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: "/images/fac-img-1.jpg",
    theme: "dark",
  },
  {
    title: "Accommodation",
    tags: ["5 Star Hotel"],
    desc: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: "/images/fac-img-2.jpg",
    theme: "dark",
  },
  {
    title: "Fitness",
    tags: ["Gym", "Fitness Room"],
    desc: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: "/images/fac-img-3.jpg",
    theme: "light",
  },
  {
    title: "Recovery",
    tags: ["Spa", "Pool", "Massage"],
    desc: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: "/images/fac-img-4.jpg",
    theme: "light",
  },
];

export default function Facilities() {
  return (
    <section id="amenities" className="relative w-full overflow-hidden bg-white">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 flex flex-col w-full h-full pointer-events-none">
        {/* Top White Block */}
        <div className="w-full h-[150px] md:h-[250px] lg:h-[400px] bg-white shrink-0"></div>
        
        {/* Middle Colored Gradient Block */}
        <div className="w-full h-[900px] md:h-[750px] lg:h-[654px] shrink-0 relative overflow-hidden bg-gradient-to-r from-[#003A5D] to-[#99B81B]">
          {/* Background Image Watermark */}
          <Image src="/images/fac-bg.svg" alt="" width={800} height={654} className="absolute right-0 bottom-[-30px] md:bottom-[-60px] w-[250px] md:w-[400px] h-full lg:w-[800px] lg:h-full object-contain object-right-bottom" />
        </div>
        
        {/* Bottom White Block */}
        <div className="w-full flex-1 bg-white"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 xl:px-16 xl:py-[90px] 2xl:px-[135px] max-w-[1440px] mx-auto">
        <h2 
          className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-gray-900 flex items-center gap-3 leading-none"
        >
          Facilities <span className="inline-block w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#99B81B] -translate-y-1 md:-translate-y-2"></span>
        </h2>
        <p 
          className="mt-4 md:mt-6 max-w-[400px] text-[14px] md:text-[15px] lg:text-[16px] text-gray-500 font-light leading-[20px] md:leading-[23px]"
        >
          Lorem ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
        </p>

        <div className="mt-10 md:mt-16 xl:mt-[40px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[386px_386px] gap-y-12 md:gap-y-24 lg:gap-y-32 xl:gap-y-24 gap-x-6 lg:gap-x-10 xl:gap-x-[65px] w-full">
          {FACILITIES.map((fac, idx) => (
            <div key={fac.title} className={`flex flex-col w-full transition-transform ${idx >= 2 ? 'md:translate-x-6 lg:translate-x-12 xl:translate-x-[250px]' : ''}`}>
              <div className="relative w-full xl:max-w-[386px] h-[240px] sm:h-[320px] md:h-[260px] lg:h-[330px] xl:h-[373px] rounded-[15px] overflow-hidden mb-6 md:mb-8 shadow-2xl">
                <Image 
                  src={fac.img} 
                  fill
                  className="object-cover" 
                  alt={fac.title} 
                />
                <button className="absolute inset-0 m-auto w-[30px] h-[30px] md:w-[35px] md:h-[35px] flex items-center justify-center hover:scale-110 transition-transform rounded-full">
                  <Image src="/images/play-logo.svg" width={35} height={35} className="object-contain" alt="Play" />
                </button>
              </div>
              
              <h3 
                className={`text-[22px] md:text-[24px] lg:text-[28px] font-bold ${fac.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              >
                {fac.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 md:gap-3 mt-2 md:mt-3">
                {fac.tags.map(tag => (
                   <span 
                     key={tag} 
                     className={`rounded-full px-3 py-1 text-[11px] md:text-[12px] lg:text-[13px] font-light leading-[18px] md:leading-[23px] ${fac.theme === 'dark' ? 'bg-white text-gray-900' : 'bg-[#99B81B] text-white'}`}
                   >
                     {tag}
                   </span>
                ))}
              </div>
              
              <p 
                className={`mt-3 md:mt-5 max-w-[400px] font-light text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] md:leading-[22px] lg:leading-[23px] ${fac.theme === 'dark' ? 'text-white/80' : 'text-gray-500'}`}
              >
                {fac.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
