"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import Logo1 from "@/public/assets/apple-work-section-logo-1.svg";
import Logo2 from "@/public/assets/apple-work-section-logo-2.svg";
import Logo3 from "@/public/assets/apple-work-section-logo-3.svg";
import Logo4 from "@/public/assets/apple-work-section-logo-4.svg";

import Img1 from "@/public/assets/apple-work-section-card-1.svg";
import Img2 from "@/public/assets/apple-work-section-card-2.svg";
import Img3 from "@/public/assets/apple-work-section-card-3.svg";
import Img4 from "@/public/assets/apple-work-section-card-4.svg";
import Marquee from "react-fast-marquee";

const AppleWorkSection = () => {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo1, Logo2, Logo3, Logo4];
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
      <div className="relative mb-16">
        {/* Fade effect left */}
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
        {/* Fade effect right */}
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>

        <Marquee>
          {logos.map((logo, index) => (
            <Image
              src={logo}
              alt={`Logo ${index}`}
              className="h-8 mx-5 w-auto object-contain"
            />
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
              <button className="text-sm text-[#6E6E73] tracking-[-0.22px] font-medium hover:underline">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppleWorkSection;
