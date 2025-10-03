import React from "react";
import EnvironmentIcon1 from "@/public/assets/iphone-17-environment-icon-1.svg";
import EnvironmentIcon2 from "@/public/assets/iphone-17-environment-icon-2.svg";
import EnvironmentIcon3 from "@/public/assets/iphone-17-environment-icon-3.svg";
import CommonImage from "../common/CommonImage";

const Environment = () => {
  const cards = [
    {
      icon: EnvironmentIcon1,
      text: (
        <span className="font-bold text-lg md:text-xl lg:text-2xl tracking-[0.2px]">
          Made with{" "}
          <span className="text-[#8668FF]">30% recycled material</span> by
          weight.
        </span>
      ),
    },
    {
      icon: EnvironmentIcon2,
      text: (
        <span className="font-bold text-lg md:text-xl lg:text-2xl tracking-[0.2px]">
          Manufactured with{" "}
          <span className="text-[#ED6300]">35% renewable electricity.</span>
        </span>
      ),
    },
    {
      icon: EnvironmentIcon3,
      text: (
        <span className="font-bold text-lg md:text-xl lg:text-2xl tracking-[0.2px]">
          Ships in compact packaging for{" "}
          <span className="text-[#00A1B3]">35% more units</span> per trip.
        </span>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-30">
      {/* Section Heading */}
      <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold text-lleft mb-12">
        iPhone 17 and the environment.
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start gap-4 px-4"
          >
            <CommonImage
              src={card.icon.src || card.icon}
              alt="card-icon"
              className="h-[56px] w-auto"
            />
            <div className="text-left">{card.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Environment;
