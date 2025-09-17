import Image from "next/image";
import React from "react";
import RefreshEnterpriseIcon1 from "@/public/assets/refresh-enterprise-icon-1.svg";
import RefreshEnterpriseIcon2 from "@/public/assets/refresh-enterprise-icon-2.svg";

const RefreshEnterprise = () => {
  const cards = [
    {
      title: "Early Access",
      icon: RefreshEnterpriseIcon1,
      alt: "refresh-enterprise-icon-1",
      description: "First access to new Apple launches",
    },
    {
      title: "Configurable Fleets",
      icon: RefreshEnterpriseIcon2,
      alt: "refresh-enterprise-icon-2",
      description: "Customized device configurations",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 items-center justify-center w-full sm:w-[300px] md:w-[340px] lg:w-[400px] min-h-[140px] lg:min-h-[160px] shadow-lg rounded-xl bg-white p-4"
          >
            <Image
              src={card.icon}
              height={36}
              width={36}
              unoptimized
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

export default RefreshEnterprise;
