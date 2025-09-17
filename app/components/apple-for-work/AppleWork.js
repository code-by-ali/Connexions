import Image from "next/image";
import React from "react";
import AppleWorkIcon1 from "@/public/assets/apple-work-icon-1.svg";
import AppleWorkIcon2 from "@/public/assets/apple-work-icon-2.svg";
import AppleWorkIcon3 from "@/public/assets/apple-work-icon-3.svg";
import AppleWorkIcon4 from "@/public/assets/apple-work-icon-4.svg";
import AppleWorkIcon5 from "@/public/assets/apple-work-icon-5.svg";
import AppleWorkIcon6 from "@/public/assets/apple-work-icon-6.svg";

const AppleWork = () => {
  const cards = [
    { title: "CTO Device Procurement", icon: AppleWorkIcon1, alt: "apple-work-icon-1" },
    { title: "Onboarding Kits", icon: AppleWorkIcon2, alt: "apple-work-icon-2" },
    { title: "Trade-In & Recycling", icon: AppleWorkIcon3, alt: "apple-work-icon-3" },
    { title: "Extended Warranty", icon: AppleWorkIcon4, alt: "apple-work-icon-4" },
    { title: "Apple Care", icon: AppleWorkIcon5, alt: "apple-work-icon-5" },
    { title: "Apple Silicon Training", icon: AppleWorkIcon6, alt: "apple-work-icon-6" },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 flex flex-col gap-8">
      {/* Title */}
      <div className="flex flex-col gap-4 items-center text-center">
        <p className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          What Apple Offers for Work
        </p>
        <p className="text-[#4B5563] text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
          Enterprise grade solutions designed for modern businesses
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 items-center justify-center w-full sm:w-[250px] md:w-[280px] lg:w-[300px] min-h-[160px] lg:h-[180px] shadow-lg rounded-xl bg-white p-4"
          >
            <Image src={card.icon} height={36} width={36} unoptimized alt={card.alt} />
            <p className="font-bold text-sm sm:text-base md:text-lg text-primary text-center">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppleWork;
