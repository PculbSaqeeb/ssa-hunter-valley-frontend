import Image from 'next/image';

const CONNECTIVITY = [
  { label: "Hunter Valley Golf And Country Club", dist: "220m" },
  { label: "Rydges Resort Hunter Valley", dist: "500m" },
  { label: "Cessnock Airport", dist: "17km" },
  { label: "Cessnock CBD", dist: "7km" },
  { label: "Nulkaba Public School", dist: "4.6km" },
  { label: "Cessnock Hospital", dist: "7km" },
  { label: "McDonalds, KFC, Oporto", dist: "7km" },
];

export default function SignatureAcademy() {
  return (
    <section id="signature-academy" className="grid grid-cols-1 lg:grid-cols-[60%_40%] xl:grid-cols-[45%_55%] min-h-[750px]">
      <div className="bg-gradient-to-br from-[#003A5D] to-[#99B81B] text-white px-4 py-8 lg:px-6 lg:py-10 xl:pl-[80px] xl:pr-16 flex flex-col justify-center">
        <p 
          className="text-[18px] lg:text-[25px] font-light text-white"
        >
          LAUNCHING
        </p>
        <h2 
          className="mt-2 lg:mt-5 text-[28px] lg:text-[40px] font-bold leading-tight lg:leading-none"
        >
          Signature Slam Academy Hunter Valley
        </h2>

        <p 
          className="mt-6 lg:mt-5 text-[20px] lg:text-[25px] font-medium"
        >
          SSA Connectivity
        </p>
        <ul className="mt-4 lg:mt-[39px] flex flex-col gap-4 lg:gap-6 xl:gap-8">
          {CONNECTIVITY.map((item) => (
            <li
              key={item.label}
              className="flex items-center text-[13px] md:text-[14px] lg:text-[16px] font-semibold leading-snug lg:leading-[23px] w-full"
            >
              <span className="flex items-center gap-2 lg:gap-3 text-white shrink-0">
                <Image src="/icon/flag.svg" alt="flag" width={20} height={20} className="object-contain" />
                <span >{item.label}</span>
              </span>
              <div className="flex-1 border-b-[1px] lg:border-b-2 border-dashed border-white/50 mx-2 lg:mx-4 relative"></div>
              <span className="text-white shrink-0">{item.dist}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-[300px] lg:h-full w-full relative">
        <Image
          src="/images/signature-img.png"
          alt="Aerial render of the Signature Slam Academy site"
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}


