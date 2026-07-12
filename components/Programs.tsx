import Image from 'next/image';

const PROGRAMS = [
  {
    title: "Academy",
    tag: "Live and train with us",
    img: "/images/program-img-1.jpg",
  },
  {
    title: "Camps",
    tag: "Fun-filled training weeks",
    img: "/images/program-img-2.png",
  },
  {
    title: "Performance",
    tag: "Elevate your game with us",
    img: "/images/program-img-3.jpg",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="px-4 py-8 lg:px-6 lg:py-12 xl:px-[135px] xl:py-24"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="flex items-center gap-3 text-[28px] lg:text-[36px] font-bold text-gray-900 leading-tight">
            Programs{" "}
            <span className="w-[10px] h-[10px] rounded-full bg-[#99B81B] inline-block shrink-0 -translate-y-2"></span>
          </h2>
          <p
            className="mt-5 lg:mt-6 max-w-[500px] text-[16px] font-light leading-[23px] text-gray-500"
          >
            Lorem ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <button className="hidden rounded-full bg-[#99B81B] text-white px-8 py-3 text-[14px] font-semibold lg:block hover:bg-[#88a318] transition-colors">
          Register Now
        </button>
      </div>

      <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 w-full">
        {PROGRAMS.map((program) => (
          <div
            key={program.title}
            className="relative w-full lg:flex-1 shrink-0 mx-auto h-[380px] md:h-[400px] lg:h-[430px] xl:h-[462px] overflow-hidden rounded-[20px]"
          >
            <Image
              src={program.img}
              alt={program.title}
              fill
              className="object-cover"
            />
            
            <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center text-center px-6">
              <h3
                className="text-[20px] lg:text-[24px] xl:text-[28px] font-medium text-white leading-tight"
              >
                {program.title}
              </h3>
              <p
                className="text-[13px] lg:text-[14px] xl:text-[16px] font-light leading-[23px] text-white/80 mt-1"
              >
                {program.tag}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
