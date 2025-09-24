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

      {/* Cards Layout - Different for each breakpoint */}
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Single column */}
        <div className="sm:hidden flex flex-col gap-6 items-center">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 items-center justify-center 
                         w-full max-w-[280px] h-[200px]
                         bg-white p-4 border border-[#E9EBEF]
                         transition-shadow duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                <CommonImage
                  src={card.icon.src || card.icon}
                  height={36}
                  width={36}
                  alt={card.alt}
                  className="w-9 h-9"
                />
              </div>

              <div className="flex flex-col gap-2 text-center flex-1">
                <p className="font-bold text-base text-primary leading-tight">
                  {card.title}
                </p>
                <p className="text-[#4B5563] text-xs leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet: 2-2-1 layout */}
        <div className="hidden sm:block lg:hidden">
          {/* First row - 2 cards */}
          <div className="flex justify-center">
            {cards.slice(0, 2).map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 items-center justify-center 
                           w-full max-w-[300px] h-[220px]
                           bg-white p-4 border border-[#E9EBEF]
                         transition-shadow duration-300"
              >
                <div className="w-16 h-16  flex items-center justify-center flex-shrink-0">
                  <CommonImage
                    src={card.icon.src || card.icon}
                    height={36}
                    width={36}
                    alt={card.alt}
                    className="w-9 h-9"
                  />
                </div>

                <div className="flex flex-col gap-2 text-center flex-1">
                  <p className="font-bold text-base md:text-lg text-primary leading-tight">
                    {card.title}
                  </p>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 2 cards */}
          <div className="flex justify-center">
            {cards.slice(2, 4).map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 items-center justify-center 
                           w-full max-w-[300px] h-[220px]
                           bg-white p-4 border border-[#E9EBEF]
                            transition-shadow duration-300"
              >
                <div className="w-16 h-16  flex items-center justify-center flex-shrink-0">
                  <CommonImage
                    src={card.icon.src || card.icon}
                    height={36}
                    width={36}
                    alt={card.alt}
                    className="w-9 h-9"
                  />
                </div>

                <div className="flex flex-col gap-2 text-center flex-1">
                  <p className="font-bold text-base md:text-lg text-primary leading-tight">
                    {card.title}
                  </p>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Third row - 1 card centered */}
          <div className="flex justify-center">
            <div
              className="flex flex-col items-center justify-center 
                           w-full max-w-[300px] h-[220px]
                           bg-white p-4 border border-[#E9EBEF]
                            transition-shadow duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                <CommonImage
                  src={cards[4].icon.src || cards[4].icon}
                  height={36}
                  width={36}
                  alt={cards[4].alt}
                  className="w-9 h-9"
                />
              </div>

              <div className="flex flex-col gap-2 text-center flex-1">
                <p className="font-bold text-base md:text-lg text-primary leading-tight">
                  {cards[4].title}
                </p>
                <p className="text-[#4B5563] text-sm leading-relaxed">
                  {cards[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: 3 top, 2 bottom */}
        <div className="hidden lg:flex flex-col items-center gap-0">
          {/* First row - 3 cards centered */}
          <div className="flex justify-center">
            {cards.slice(0, 3).map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 items-center justify-center 
                           w-[280px] h-[200px]
                           bg-white p-4 border border-[#E9EBEF] border-r-0 last:border-r
                            transition-shadow duration-300"
              >
                <div className="w-16 h-16  flex items-center justify-center flex-shrink-0">
                  <CommonImage
                    src={card.icon.src || card.icon}
                    height={36}
                    width={36}
                    alt={card.alt}
                    className="w-9 h-9"
                  />
                </div>

                <div className="flex flex-col gap-2 text-center flex-1">
                  <p className="font-bold text-lg text-primary leading-tight">
                    {card.title}
                  </p>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="flex justify-center">
            {cards.slice(3).map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 items-center justify-center 
                           w-[280px] h-[200px]
                           bg-white p-4 border border-[#E9EBEF] border-r-0 border-t-0 last:border-r
                            transition-shadow duration-300"
              >
                <div className="w-16 h-16  flex items-center justify-center flex-shrink-0">
                  <CommonImage
                    src={card.icon.src || card.icon}
                    height={36}
                    width={36}
                    alt={card.alt}
                    className="w-9 h-9"
                  />
                </div>

                <div className="flex flex-col gap-2 text-center flex-1">
                  <p className="font-bold text-lg text-primary leading-tight">
                    {card.title}
                  </p>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alternative Layout for tablets if you prefer 3-2 split */}
        <div className="hidden">
          {/* First row - 3 cards */}
          <div className="flex flex-wrap justify-center mb-6">
            {cards.slice(0, 3).map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 items-center justify-center 
                           w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] 
                           h-[200px] sm:h-[220px]
                           bg-white p-4 border border-[#E9EBEF] 
                            transition-shadow duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <CommonImage
                    src={card.icon.src || card.icon}
                    height={36}
                    width={36}
                    alt={card.alt}
                    className="w-9 h-9"
                  />
                </div>

                <div className="flex flex-col gap-2 text-center flex-1">
                  <p className="font-bold text-base md:text-lg text-primary leading-tight">
                    {card.title}
                  </p>
                  <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="flex flex-wrap justify-center ">
            {cards.slice(3).map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 items-center justify-center 
                           w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] 
                           h-[200px] sm:h-[220px]
                           bg-white p-4 border border-[#E9EBEF]  
                            transition-shadow duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <CommonImage
                    src={card.icon.src || card.icon}
                    height={36}
                    width={36}
                    alt={card.alt}
                    className="w-9 h-9"
                  />
                </div>

                <div className="flex flex-col gap-2 text-center flex-1">
                  <p className="font-bold text-base md:text-lg text-primary leading-tight">
                    {card.title}
                  </p>
                  <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACNPartner;
