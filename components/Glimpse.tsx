
export default function Glimpse() {
  return (
    <section className="px-4 py-8 lg:px-6 lg:py-12 xl:px-[135px] xl:py-24">
      <div className="flex items-center justify-between">
        <div>
          <h2 
            className="flex items-center gap-3 text-[28px] lg:text-[36px] font-bold text-gray-900 leading-tight"
          >
            A Glimpse of Excellence <span className="w-[10px] h-[10px] rounded-full bg-[#99B81B] inline-block shrink-0"></span>
          </h2>
          <p 
            className="mt-4 lg:mt-6 text-[16px] font-light leading-[23px] text-gray-500"
          >
            Lorem ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s.
          </p>
        </div>
        <button className="hidden rounded-full bg-[#99B81B] text-white px-8 py-3 text-[14px] font-semibold lg:block hover:bg-[#88a318] transition-colors">
          Register Now
        </button>
      </div>

      <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 w-full">
        <div className="relative w-full lg:w-[40%] h-[180px] lg:h-[350px] xl:h-[462px] overflow-hidden rounded-[10px]">
          <img
            src="/images/glimpse-img-1.jpg"
            alt="Glimpse 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative w-full lg:w-[60%] h-[180px] lg:h-[350px] xl:h-[462px] overflow-hidden rounded-[10px]">
          <img
            src="/images/glimpse-img-2.jpg"
            alt="Glimpse 2"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
