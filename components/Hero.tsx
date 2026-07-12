import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/banner.gif"
        alt="Tennis courts at sunset"
        fill
        priority
        className="absolute inset-0 object-cover"
        unoptimized
      />
      <div className="absolute inset-0" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center pt-[80px] pb-[250px] md:pb-[200px] lg:pt-0 lg:pb-0 px-4 lg:px-8 text-center max-w-[1920px] mx-auto">
        <p className="mb-3 lg:mb-5 text-center text-[14px] lg:text-[18px] font-bold uppercase leading-none tracking-[0.4em] text-white/90">
          SSA HUNTER VALLEY
        </p>
        <h1 className="text-center text-[26px] md:text-[36px] lg:text-[50px] font-light uppercase leading-tight lg:leading-none tracking-normal text-white">
          GROW YOUR GAME WITH THE
        </h1>
        <h1 className="text-center text-[26px] md:text-[36px] lg:text-[50px] font-bold uppercase leading-tight lg:leading-none tracking-normal text-white mt-1 lg:mt-5 border-b-2 border-white pb-2 lg:pb-3 inline-block">
          PROFESSIONALS
        </h1>

        <div
          style={{
            background:
              "linear-gradient(to right, transparent 4%, #D2F24F 50%, transparent 96%)",
          }}
          className="mt-5 lg:mt-[36px] h-[30px] lg:h-[35px] w-full max-w-[623px] flex justify-center items-center gap-3 lg:gap-6 text-[12px] lg:text-[18px] font-normal uppercase leading-none tracking-[0.285em] text-white"
        >
          <span>ADOPT</span>
          <span className="h-1.5 w-1.5 lg:h-2 lg:w-2 rounded-full bg-white" />
          <span>NURTURE</span>
          <span className="h-1.5 w-1.5 lg:h-2 lg:w-2 rounded-full bg-white" />
          <span>DELIVER</span>
        </div>

        <button className="mt-5 lg:mt-[33px] rounded-full border border-[#99B81B] bg-transparent px-8 py-3 lg:px-10 lg:py-3.5 text-sm lg:text-base font-semibold text-white transition-transform hover:scale-105">
          Register Now
        </button>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-6 md:h-24 md:w-7 text-[#99B81B] scale-y-150"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Right Sidebar Widgets */}
      <div className="absolute right-0 bottom-20 lg:bottom-14 z-20 flex flex-col gap-3 lg:gap-6 items-end scale-[0.65] lg:scale-100 origin-bottom-right">
        {/* Weather Box */}
        <div className="flex flex-col items-end w-full">
          <div className="flex items-center gap-3 mb-2 mr-0">
            <Image
              src="/icon/double-left-arrow.svg"
              alt="arrow"
              width={20}
              height={20}
            />
            <span className="text-white font-bold tracking-wide uppercase text-sm">
              WEATHER
            </span>
            <div className="h-[2px] bg-[#99B81B] w-12 ml-2"></div>
          </div>

          <div className="bg-[#99B81B]/40 p-6 pr-8 backdrop-blur-md flex flex-col justify-between gap-3 w-[270px] border-y border-l border-white/10">
            <div className="flex items-center justify-start gap-2 mb-2">
              <svg
                className="w-5 h-5 text-white/90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-center text-[16px] font-bold leading-none tracking-normal text-white">
                Hunter Valley
              </span>
            </div>

            <div className="flex justify-between items-end gap-6 mt-1">
              <span className="text-center text-[50px] font-bold uppercase leading-none tracking-normal text-white flex items-start">
                19<span className="text-[24px] font-medium pt-1">°C</span>
              </span>
              <div className="flex flex-col pb-1 text-right">
                <span className="text-white font-bold text-lg">Weather</span>
                <span className="text-white/90 text-sm font-light mt-0.5">
                  Saturday, 8 pm
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ONGOING MATCHES */}
        <div className="flex items-center gap-3 mr-0 cursor-pointer group mt-4">
          <Image
            src="/icon/double-left-arrow.svg"
            alt="arrow"
            width={20}
            height={20}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span className="text-white font-bold tracking-wide uppercase text-sm">
            ONGOING MATCHES
          </span>
          <div className="h-[2px] bg-[#99B81B] w-12 ml-2"></div>
        </div>

        {/* SCORE */}
        <div className="flex items-center gap-3 mr-0 cursor-pointer group">
          <Image
            src="/icon/double-left-arrow.svg"
            alt="arrow"
            width={20}
            height={20}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span className="text-white font-bold tracking-wide uppercase text-sm">
            SCORE
          </span>
          <div className="h-[2px] bg-[#99B81B] w-12 ml-2"></div>
        </div>
      </div>
    </section>
  );
}
