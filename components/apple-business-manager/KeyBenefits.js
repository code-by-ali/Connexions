import React from "react";
import RefreshEnterpriseIcon1 from "@/public/assets/refresh-enterprise-icon-1.svg";
import RefreshEnterpriseIcon2 from "@/public/assets/refresh-enterprise-icon-2.svg";
import CommonImage from "../common/CommonImage";

const KeyBenefits = () => {
  const cards = [
    {
      title: "Zero Touch Deployment",
      icon: RefreshEnterpriseIcon1,
      description:
        "Automatically configure and deploy devices straight out of the box without manual intervention.",
      alt: "key-benfits-icon-1",
    },
    {
      title: "Management",
      icon: RefreshEnterpriseIcon2,
      description: "Customized device configurations",
      alt: "key-benfits-icon-2",
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 flex flex-col gap-8">
      {/* Title */}
      <div className="flex flex-col gap-4 items-center text-center">
        <p className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Refresh Your Enterprise, Stay Future-Ready
        </p>
        <p className="text-[#4B5563] text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">
          Upgrade plans and rollout management with early Apple launch access
          and configurable fleets
        </p>
      </div>

      {/* Cards */}
      {/* Cards */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 items-center justify-center w-full sm:w-[300px] md:w-[340px] lg:w-[400px] min-h-[140px] lg:min-h-[160px] shadow-lg rounded-xl bg-white p-4"
          >
            <CommonImage
              src={card.icon.src || card.icon}
              height={36}
              width={36}
              alt={card.alt}
            />
            <p className="text-base sm:text-lg md:text-xl text-primary font-bold text-center">
              {card.title}
            </p>
            <p className="text-xs sm:text-sm md:text-base text-[#4B5563] text-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyBenefits;
