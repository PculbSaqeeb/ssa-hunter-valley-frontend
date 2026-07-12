import Image from 'next/image';

const FEATURES = [
  "First venue in the world",
  "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
  "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
  "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
  "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
  "First one stop tennis academy inAsia Pacific",
];

export default function KeyFeatures() {
  const left = FEATURES;
  const right = FEATURES;

  return (
    <section
      id="features-glimpse"
      className="relative overflow-hidden bg-[url('/images/feature-bg.png')] bg-cover bg-center"
    >
      <div className="px-4 py-12 lg:px-6 lg:py-16 xl:px-[135px] xl:py-24 max-w-[1920px] mx-auto">
        {/* Key Features Section */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2
              className="flex items-center gap-3 text-[32px] lg:text-[36px] font-bold text-gray-900 capitalize"
            >
              Key Features{" "}
              <span className="w-[10px] h-[10px] rounded-full bg-[#99B81B] inline-block shrink-0 -translate-y-2"></span>
            </h2>
            <p
              className="mt-4 lg:mt-6 max-w-[500px] text-[16px] font-light leading-[23px] text-gray-500"
            >
              Lorem ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s.
            </p>
          </div>
          <button className="rounded-full bg-[#99B81B] text-white px-8 py-3 text-[14px] font-semibold hover:bg-[#88a318] transition-colors">
            Register Now
          </button>
        </div>

        <div className="mt-[67px] lg:mt-16 grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2 lg:gap-y-10">
          {[left, right].map((col, colIdx) => (
            <ul key={colIdx} className="space-y-6 lg:space-y-8">
              {col.map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                  <Image
                    src="/icon/right-arrow.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="mt-1 shrink-0"
                  />
                  <p
                    className="text-[16px] font-light leading-[23px] text-gray-600"
                  >
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Glimpse Section */}
        <div className="mt-20 lg:mt-32 xl:mt-40 pt-10 border-t border-gray-200/50">
          <div className="flex items-center justify-between">
            <div>
              <h2 
                className="flex items-center gap-3 text-[28px] lg:text-[36px] font-bold text-gray-900 leading-tight"
              >
                A Glimpse of Excellence <span className="w-[10px] h-[10px] rounded-full bg-[#99B81B] inline-block shrink-0 -translate-y-2"></span>
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
              <Image
                src="/images/glimpse-img-1.jpg"
                alt="Glimpse 1"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="relative w-full lg:w-[60%] h-[180px] lg:h-[350px] xl:h-[462px] overflow-hidden rounded-[10px]">
              <Image
                src="/images/glimpse-img-2.jpg"
                alt="Glimpse 2"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
