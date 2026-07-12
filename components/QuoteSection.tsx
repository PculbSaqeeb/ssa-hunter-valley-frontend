import Image from 'next/image';

export default function QuoteSection() {
  return (
    <section className="relative overflow-hidden px-4 lg:px-6 xl:px-[135px] py-20 lg:py-[114px] w-full max-w-[1920px] mx-auto">
      <Image
        src="/images/quote-bg.jpg"
        alt="Quote background"
        fill
        sizes="100vw"
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/10 z-0" />

      <div className="relative z-10 w-full max-w-[900px] mx-auto text-left">
        <blockquote 
          className="text-[24px] lg:text-[35px] font-semibold leading-snug text-white"
        >
          &ldquo;We have created an environment ideal for building craft. Our
          goal is to be recognized as the best tennis performance centre in the
          world.&rdquo;
        </blockquote>

        <div className="h-[2px] w-full bg-white mt-8 mb-6 opacity-70"></div>

        <div className="flex flex-col items-start">
          <p className="text-[18px] lg:text-[22px] font-bold text-white">John Doe</p>
          <p className="text-[14px] lg:text-[16px] font-light text-white uppercase tracking-widest mt-1">Chairman</p>
        </div>
      </div>
    </section>
  );
}


