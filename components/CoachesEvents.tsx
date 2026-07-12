import Image from 'next/image';

export default function CoachesEvents() {
  return (
    <section id="events" className="grid grid-cols-1 xl:grid-cols-2 scroll-mt-[60px] lg:scroll-mt-[83px]">
      <div className="relative h-[278px] overflow-hidden">
        <Image
          src="/images/event-image-2.png"
          alt="Our coaches"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 left-6 lg:bottom-8 lg:left-6 xl:left-[135px] text-white pr-6 z-10">
          <h3 
            className="text-[36px] font-bold leading-none flex items-center gap-2"
          >
            Our Coaches <span className="inline-block w-[10px] h-[10px] bg-white rounded-full"></span>
          </h3>
          <p 
            className="mt-4 max-w-[400px] text-[16px] font-light leading-[23px] text-white/90"
          >
            Lorem ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s.
          </p>
          <button className="mt-9 rounded-full bg-[#99B81B] text-white px-8 py-3 text-[14px] font-semibold hover:bg-[#88a318] transition-colors">
            Read More
          </button>
        </div>
      </div>

      {/* Events Column */}
      <div className="relative h-[278px] overflow-hidden flex flex-col justify-center bg-[#99B81B] px-6 lg:px-6 xl:pl-[135px]">
        <div className="relative z-10 text-white">
          <h3 
            className="text-[36px] font-bold leading-none flex items-center gap-2"
          >
            Events <span className="inline-block w-[10px] h-[10px] bg-white rounded-full"></span>
          </h3>
          <p 
            className="mt-4 max-w-[400px] text-[16px] font-light leading-[23px] text-white"
          >
            Lorem ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s.
          </p>
          <button className="mt-9 rounded-full bg-black text-white px-8 py-3 text-[14px] font-semibold hover:bg-gray-900 transition-colors">
            Read More
          </button>
        </div>
        <div className="absolute right-0 bottom-0 w-[180px] h-[160px] lg:w-[295px] lg:h-[261px] z-0">
          <Image
            src="/images/event-image-1.png"
            alt="Events"
            fill
            className="object-contain object-right-bottom"
          />
        </div>
      </div>
    </section>
  );
}
