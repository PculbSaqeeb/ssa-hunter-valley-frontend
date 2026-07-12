"use client";
import React from 'react';

export default function Marquee() {
  const words = ["ADOPT", "NURTURE", "DELIVER"];
  const repeated = Array(12).fill(words).flat();

  return (
    <section className="overflow-hidden bg-white py-8 lg:pt-24 lg:pb-40">
      <div className="flex animate-[scroll_15s_linear_infinite] whitespace-nowrap items-center">
        {repeated.map((word, i) => (
          <React.Fragment key={i}>
            <span
              className={`text-[36px] lg:text-[50px] xl:text-[60px] font-extrabold px-6 lg:px-12 ${
                i % 2 === 0
                  ? "text-[#99B81B]"
                  : "text-transparent [-webkit-text-stroke:1px_#99B81B]"
              }`}
            >
              {word}
            </span>
            <span className="inline-block w-2 h-2 bg-[#99B81B] rounded-full shrink-0"></span>
          </React.Fragment>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}


