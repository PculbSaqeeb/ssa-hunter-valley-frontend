"use client";

import { useState } from "react";
import Image from 'next/image';

const TABS = ["About Us", "Coaches", "Vision", "Mission"];

const STATS = [
  { value: "20", label: "courts" },
  { value: "12", label: "coaches" },
  { value: "17", label: "years" },
  { value: "10", label: "clubs" },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("About Us");

  return (
    <section id="about" className="relative overflow-hidden px-4 lg:px-6 xl:px-[135px] py-16 lg:py-[120px] w-full max-w-[1920px] mx-auto">
      <Image
        src="/images/about-bg.svg"
        alt="About Background"
        width={350}
        height={300}
        className="absolute top-6 left-0 object-cover z-0 pointer-events-none opacity-50 lg:opacity-100"
      />
      <span className="pointer-events-none absolute -left-4 lg:-left-[10vw] top-0 -z-10 text-[180px] lg:text-[20vw] font-black leading-none text-lime-100/70">
        A
      </span>

      <p 
        className="mx-auto max-w-[800px] text-center text-[18px] lg:text-[24px] font-normal tracking-normal text-gray-700 leading-7"
      >
        To be the first venue in the world to have{" "}
        <span className="font-bold text-[#99B81B]">60 multi surface courts</span>
        at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.
      </p>

      <div className="mt-8 lg:mt-[113px] flex flex-wrap justify-center gap-6 lg:gap-12">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-[14px] lg:text-[16px] font-medium pb-2 border-b-2 transition-colors ${
              activeTab === tab
                ? "border-lime-500 text-gray-900"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-12 lg:mt-[120px] grid grid-cols-1 items-center gap-12 xl:gap-16 lg:grid-cols-2">
        {/* Left: text + stats */}
        <div>
          <h2 
            className="flex items-center gap-3 text-[32px] lg:text-[36px] font-bold text-gray-900"
          >
            About Us <span className="w-[10px] h-[10px] rounded-full bg-[#99B81B] inline-block shrink-0 -translate-y-2"></span>
          </h2>
          <p 
            className="mt-4 lg:mt-6 text-[16px] font-light leading-[23px] text-gray-500 max-w-[600px]"
          >
            To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.
          </p>

          <div className="mt-[37px] lg:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <p 
                  className="text-[36px] font-semibold text-[#99B81B]"
                >
                  {stat.value}
                </p>
                <p 
                  className="text-[20px] font-light leading-[23px] text-gray-500 capitalize"
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-8 lg:mt-[45px] rounded-full bg-[#99B81B] text-white px-8 py-3 lg:px-10 lg:py-3.5 text-sm lg:text-base font-semibold transition-transform hover:scale-105">
            Read More
          </button>
        </div>

        {/* Right: image grid */}
        <div className="flex flex-col gap-[11px] w-full">
          {/* Top Row: 210px height */}
          <div className="flex gap-[11px] h-[210px] w-full">
            <div className="relative w-[65%] h-full">
              <Image
                src="/images/about-img-1.jpg"
                alt="About image 1"
                fill
                sizes="(max-width: 1024px) 65vw, 35vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative w-[35%] h-full">
              <Image
                src="/images/about-img-2.jpg"
                alt="About image 2"
                fill
                sizes="(max-width: 1024px) 35vw, 20vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* Bottom Row: 231px height */}
          <div className="flex gap-[11px] h-[231px] w-full">
            <div className="relative w-[45%] h-full">
              <Image
                src="/images/about-img-3.jpg"
                alt="About image 3"
                fill
                sizes="(max-width: 1024px) 45vw, 25vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative w-[55%] h-full">
              <Image
                src="/images/about-img-4.jpg"
                alt="About image 4"
                fill
                sizes="(max-width: 1024px) 55vw, 30vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


