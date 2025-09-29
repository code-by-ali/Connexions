import React from "react";
import AppleWorkIcon1 from "@/public/assets/apple-work-icon-1.svg";
import AppleWorkIcon2 from "@/public/assets/apple-work-icon-2.svg";
import AppleWorkIcon3 from "@/public/assets/apple-work-icon-3.svg";
import AppleWorkIcon4 from "@/public/assets/apple-work-icon-4.svg";
import AppleWorkIcon5 from "@/public/assets/apple-work-icon-5.svg";
import AppleWorkIcon6 from "@/public/assets/apple-work-icon-6.svg";
import CommonImage from "../common/CommonImage";

const AppleWork = () => {
  const cards = [
    {
      title: "CTO Device Procurement",
      icon: AppleWorkIcon1,
      alt: "apple-work-icon-1",
    },
    {
      title: "Onboarding Kits",
      icon: AppleWorkIcon2,
      alt: "apple-work-icon-2",
    },
    {
      title: "Trade-In & Recycling",
      icon: AppleWorkIcon3,
      alt: "apple-work-icon-3",
    },
    {
      title: "Extended Warranty",
      icon: AppleWorkIcon4,
      alt: "apple-work-icon-4",
    },
    {
      title: "Apple Care",
      icon: AppleWorkIcon5,
      alt: "apple-work-icon-5",
    },
    {
      title: "Apple Silicon Training",
      icon: AppleWorkIcon6,
      alt: "apple-work-icon-6",
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 flex flex-col gap-8 bg-white">
      {/* Title */}
      <div className="flex flex-col gap-4 items-center text-center">
        <p className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          What Apple Offers for Work
        </p>
        <p className="text-[#4B5563] text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl font-normal">
          Enterprise grade solutions designed for modern businesses
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-4xl mx-auto">
        {/* Mobile Grid - with gaps and shadows */}
        <div className="grid grid-cols-1 gap-6 sm:hidden">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 items-center justify-center 
                         w-full min-h-[160px] shadow-lg bg-white p-4 border-2 border-[#E9EBEF]"
            >
              <CommonImage
                src={card.icon.src || card.icon}
                height={36}
                width={36}
                alt={card.alt}
              />
              <p className="font-bold text-sm md:text-base lg:text-lg text-primary text-center">
                {card.title}
              </p>
            </div>
          ))}
        </div>

        {/* Small screens (2 columns) - with visible dividers */}
        <div className="hidden sm:grid lg:hidden grid-cols-2">
          {cards.map((card, idx) => (
            <div key={idx} className="relative">
              <div
                className="flex flex-col gap-2 items-center justify-center 
                             w-[300px] h-[180px] bg-white p-4"
              >
                <CommonImage
                  src={card.icon.src || card.icon}
                  height={36}
                  width={36}
                  alt={card.alt}
                />
                <p className="font-bold text-base text-primary text-center">
                  {card.title}
                </p>
              </div>

              {/* Right divider for cards 0,2,4 (left column) */}
              {idx % 2 === 0 && (
                <div className="absolute top-0 right-0 w-[2px] h-full bg-[#E9EBEF]"></div>
              )}

              {/* Bottom divider for top and middle rows (cards 0,1,2,3) */}
              {idx < 4 && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E9EBEF]"></div>
              )}
            </div>
          ))}
        </div>

        {/* Large screens (3 columns) - with visible dividers */}
        <div className="hidden lg:grid grid-cols-3">
          {cards.map((card, idx) => (
            <div key={idx} className="relative">
              <div
                className="flex flex-col gap-2 items-center justify-center 
                             w-[320px] h-[180px] bg-white p-4"
              >
                <CommonImage
                  src={card.icon.src || card.icon}
                  height={36}
                  width={36}
                  alt={card.alt}
                />
                <p className="font-bold text-lg text-primary text-center">
                  {card.title}
                </p>
              </div>

              {/* Right divider for cards 0,1,3,4 (first and second columns) */}
              {idx % 3 !== 2 && (
                <div className="absolute top-0 right-0 w-[2px] h-full bg-[#E9EBEF]"></div>
              )}

              {/* Bottom divider for top row (cards 0,1,2) */}
              {idx < 3 && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E9EBEF]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppleWork;
