"use client";
import React from "react";
import ACNPartnerIcon1 from "@/public/assets/acn-partner-icon-1.svg";
import CommonImage from "../common/CommonImage";

const ACNPartner = () => {
  const cards = [
    {
      title: "Apple-Certified Expertise",
      icon: ACNPartnerIcon1,
      alt: "acn-partner-icon-1",
      description:
        "Certified by Apple and trained on the latest tech. Expert guidance you can trust",
    },
    {
      title: "End-to-End Consulting",
      icon: ACNPartnerIcon1,
      alt: "acn-partner-icon-2",
      description:
        "Complete Apple ecosystem consulting. From planning to execution.",
    },
    {
      title: "Seamless Deployment",
      icon: ACNPartnerIcon1,
      alt: "acn-partner-icon-3",
      description:
        "Smooth deployment with easy integration. Minimize downtime, boost efficiency.",
    },
    {
      title: "Global Support, Local Presence",
      icon: ACNPartnerIcon1,
      alt: "acn-partner-icon-4",
      description:
        "Local presence with global standards. Reliable support, always available.",
    },
    {
      title: "Trusted Enterprise Partner",
      icon: ACNPartnerIcon1,
      alt: "acn-partner-icon-5",
      description:
        "Trusted by leading enterprises. Secure and scalable Apple solutions.",
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 flex flex-col gap-8">
      {/* Title */}
      <div className="flex flex-col gap-4 items-center text-center">
        <p className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Why Choose Connexions as your ACN Partner.
        </p>
        <p className="text-[#4B5563] text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
          Transform your Apple device management with powerful enterprise grade
          capabilities
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto flex flex-col items-center ">
        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full justify-items-center ">
          {cards.slice(0, 3).map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 items-center justify-center 
                         w-full sm:w-[280px] md:w-[300px] lg:w-[320px] h-[200px] 
                         bg-white p-4 border border-[#E9EBEF]"
            >
              <CommonImage
                src={card.icon.src || card.icon}
                height={36}
                width={36}
                alt={card.alt}
              />
              <p className="font-bold text-base md:text-lg text-primary text-center">
                {card.title}
              </p>
              <p className="text-[#4B5563] text-xs sm:text-sm text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center ">
          {cards.slice(3).map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 items-center justify-center 
                         w-full sm:w-[280px] md:w-[300px] lg:w-[320px] h-[200px] 
                         bg-white p-4 border border-[#E9EBEF]"
            >
              <CommonImage
                src={card.icon.src || card.icon}
                height={36}
                width={36}
                alt={card.alt}
              />
              <p className="font-bold text-base md:text-lg text-primary text-center">
                {card.title}
              </p>
              <p className="text-[#4B5563] text-xs sm:text-sm text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ACNPartner;
