"use client";
import React from "react";
import Image from "next/image";

import Img1 from "@/public/assets/apple-work-section-card-1.svg";
import Img2 from "@/public/assets/apple-work-section-card-2.svg";
import Img3 from "@/public/assets/apple-work-section-card-3.svg";
import Img4 from "@/public/assets/apple-work-section-card-4.svg";
import Marquee from "react-fast-marquee";

import UpdatedClientIcon1 from "@/public/assets/home-clients-section-icon-updated-1.svg";
import UpdatedClientIcon2 from "@/public/assets/home-clients-section-icon-updated-2.svg";
import UpdatedClientIcon3 from "@/public/assets/home-clients-section-icon-updated-3.svg";
import UpdatedClientIcon4 from "@/public/assets/home-clients-section-icon-updated-4.svg";
import UpdatedClientIcon5 from "@/public/assets/home-clients-section-icon-updated-5.svg";
import UpdatedClientIcon6 from "@/public/assets/home-clients-section-icon-updated-6.svg";
import UpdatedClientIcon7 from "@/public/assets/home-clients-section-icon-updated-7.svg";
import UpdatedClientIcon8 from "@/public/assets/home-clients-section-icon-updated-8.svg";
import UpdatedClientIcon9 from "@/public/assets/home-clients-section-icon-updated-9.svg";
import UpdatedClientIcon10 from "@/public/assets/home-clients-section-icon-updated-10.svg";
import UpdatedClientIcon11 from "@/public/assets/home-clients-section-icon-updated-11.svg";
import CommonImage from "../common/CommonImage";

const AppleWorkSection = () => {
  const cards = [
    {
      title: "ENTERPRISE SECURITY",
      desc: "Build in security features protect your data",
      img: Img1,
    },
    {
      title: "SEAMLESS COLLABORATION",
      desc: "Work together effortlessly across devices",
      img: Img2,
    },
    {
      title: "INCREASED PRODUCTIVITY",
      desc: "Intuitive design boosts team efficiency",
      img: Img3,
    },
    {
      title: "EASY MANAGEMENT",
      desc: "Simplified device deployment and control",
      img: Img4,
    },
  ];

  const allClientIcons = [
    UpdatedClientIcon1,
    UpdatedClientIcon2,
    UpdatedClientIcon3,
    UpdatedClientIcon4,
    UpdatedClientIcon5,
    UpdatedClientIcon6,
    UpdatedClientIcon7,
    UpdatedClientIcon8,
    UpdatedClientIcon9,
    UpdatedClientIcon10,
    UpdatedClientIcon11,
  ];

  return (
    <section className="bg-[#FAFAFA] py-16 px-8 md:px-16 lg:px-28">
      {/* Title + Description */}
      <div className="text-center mb-12">
        <h2 className="text-lg font-normal tracking-[-0.3px] text-[#1D1D1F]">
          Why Choose Apple for work?
        </h2>
        <p className="text-lg font-normal tracking-[-0.3px] text-[#535862] mt-2">
          92% of top-performing companies use Apple devices.
        </p>
      </div>

      {/* Logo Carousel */}
      <div className="relative mb-16 max-w-6xl mx-auto">
        {/* Fade effect left */}
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
        {/* Fade effect right */}
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>

        <Marquee speed={40} gradient={false}>
          {allClientIcons.map((client, index) => (
            <div key={index} className="mx-4 sm:mx-6 lg:mx-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer group hover:shadow-md">
                <CommonImage
                  height={48}
                  width={48}
                  src={client.src || client}
                  alt={`client-icon-${index}`}
                  className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-16"></div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl overflow-hidden border border-[#f6f6f6]"
          >
            <Image
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xs font-bold tracking-[-0.12px] text-[#6E6E73] uppercase mb-2">
                {card.title}
              </h3>
              <p className="text-base md:text-lg text-[#1D1D1F] font-bold mb-2">
                {card.desc}
              </p>
              {/* <button className="text-sm text-[#6E6E73] tracking-[-0.22px] font-medium hover:underline">
                Learn more
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppleWorkSection;
