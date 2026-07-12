import Image from 'next/image';

const PEOPLE = [
  { name: "Craig Tiley", role: "CEO Tennis Australia & Australian Open", img: "/images/professional-img-1.jpg" },
  { name: "Stephen Farrow", role: "Director - Tournament, Players & International Relations", img: "/images/professional-img-2.jpg" },
  { name: "Cameron Pearson", role: "Head Major Events - Tennis Australia", img: "/images/professional-img-3.jpg" },
];

export default function Professionals() {
  return (
    <section id="coaches" className="px-6 py-16 lg:px-8 xl:px-[135px] lg:py-20 xl:py-24">
      <div className="flex items-center justify-between">
        <div>
          <h2 
            className="flex items-center gap-3 text-[32px] lg:text-[36px] font-bold text-gray-900 leading-none"
          >
            Meet our professionals <span className="inline-block w-[10px] h-[10px] rounded-full bg-[#99B81B] -translate-y-2"></span>
          </h2>
          <p 
            className="mt-4 max-w-[500px] text-[16px] font-light leading-[23px] text-gray-500"
          >
            Lorem ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s.
          </p>
        </div>
        <button className="hidden rounded-full bg-[#99B81B] text-white px-8 py-3 text-[14px] font-semibold lg:block hover:bg-[#88a318] transition-colors">
          View All
        </button>
      </div>

      <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center xl:justify-items-center gap-8 w-full">
        {PEOPLE.map((person) => (
          <div key={person.name} className="flex flex-col items-center text-center xl:items-start xl:text-left w-full max-w-[349px]">
            <div className="relative w-full h-[280px] md:h-[300px] lg:h-[320px] xl:h-[335px] shrink-0 overflow-hidden rounded-[10px]">
              <Image
                src={person.img}
                alt={person.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <h3 
              className="mt-6 text-[25px] font-medium leading-none"
            >
              {person.name}
            </h3>
            <i 
              className="mt-4 text-[16px] block w-full max-w-[250px] font-light italic leading-[23px]"
            >
              {person.role}
            </i>
          </div>
        ))}
      </div>
    </section>
  );
}

