import React from "react";
import OurValuesIcon1 from "@/public/assets/iphone-our-values-icon-1.svg";
import OurValuesIcon2 from "@/public/assets/iphone-our-values-icon-2.svg";
import OurValuesIcon3 from "@/public/assets/iphone-our-values-icon-3.svg";

import CommonImage from "../common/CommonImage";
import { ChevronRight } from "lucide-react";

const OurValues = () => {
  const cards = [
    {
      icon: OurValuesIcon1,
      title: "A plan as innovative as our products",
      description:
        "We’re committed to bringing net emissions to zero across our entire carbon footprint by 2030.",
      extras: "Learn more about environment",
    },
    {
      icon: OurValuesIcon2,
      title: "Privacy. That’s Apple.",
      description:
        "Privacy is a fundamental human right. Every product and service is designed to help keep your data safe and secure.",
      extras: "Learn more about environment",
    },
    {
      icon: OurValuesIcon3,
      title: "Innovation that’s accessible by design.",
      description:
        "Our products and services are designed for everyone, with built-in features to help you do what you love, your way.",
      extras: "Learn more about environment",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-30">
      {/* Section Heading */}
      <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-12">
        Our values lead the way.
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-6xl mx-auto">
        {cards.map((card, idx) => (
          <div key={idx} className="flex flex-col items-start gap-4 px-4">
            <CommonImage
              src={card.icon.src || card.icon}
              alt="card-icon"
              className="h-[56px] w-auto"
            />
            <div className="text-left">
              <p className="text-primary text-lg md:text-xl lg:text-2xl font-bold tracking-[0.2px]">
                {card.title}
              </p>
              <p className="text-primary text-sm md:text-base font-normal tracking-[-0.37px]">
                {card.description}
              </p>
              <p className="flex gap-4 items-center text-[#0066CC] text-sm md:text-base font-normal tracking-[-0.37px]">
                {card.extras}
                <span>
                  <ChevronRight />
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
