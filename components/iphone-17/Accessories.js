"use client";
import React from "react";
import CommonImage from "../common/CommonImage";

import Accessory1 from "@/public/assets/iphone-17-accessories-img-1.svg";
import Accessory2 from "@/public/assets/iphone-17-accessories-img-2.svg";
import Accessory3 from "@/public/assets/iphone-17-accessories-img-3.svg";

const Accessories = () => {
  const cards = [
    {
      img: Accessory1,
      title: "Get carried away.",
      desc: "Pair the new Crossbody Strap with Apple Silicone Cases and wear your iPhone everywhere you go, hands-free.",
    },
    {
      img: Accessory2,
      title: "Deck it out.",
      desc: "Protect your iPhone by snapping on a Silicone Case with MagSafe in a beautiful colour.",
    },
    {
      img: Accessory3,
      title: "Show your true colours.",
      desc: "Pop on a Clear Case with MagSafe and let the gorgeous colour of your iPhone shine through.",
    },
  ];

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-20 py-16">
      {/* Heading + Link */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
        <h2 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gradient">
          <span className="">Snap it on.</span>{" "}
          <span className="">Show it off.</span>
        </h2>
        <a
          href="#"
          className="mt-4 sm:mt-0 text-[#0066CC] text-sm md:text-base font-normal hover:underline"
        >
          Shop iPhone accessories &gt;
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <CommonImage
              src={card.img.src || card.img}
              alt={card.title}
              className="w-full rounded-3xl"
            />
            <div className="mt-4 font-normal text-[#6E6E73] tracking-[-0.37px] text-left">
              <span className="text-primary font-bold">{card.title}</span>
              <span className=""> {card.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accessories;
