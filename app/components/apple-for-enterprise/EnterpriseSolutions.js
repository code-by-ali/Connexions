"use client";

import React from "react";
import EnterpriseMacbook from "@/public/assets/enterprise-macbook.svg";
import EnterpriseSolutionsCard from "./EnterpriseSolutionsCard";
import EnterpriseIpad from "@/public/assets/enterprise-ipad.svg";
import EnterpriseIphone from "@/public/assets/enterprise-iphone.svg";
import EnterpriseWatch from "@/public/assets/enterprise-watch.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const EnterpriseSolutions = () => {
  const cardData = [
    {
      id: 1,
      title: "MacBook",
      description:
        "Powerful and versatile laptop for creative professionals and developers",
      img: EnterpriseMacbook,
      link: "#",
    },
    {
      id: 2,
      title: "iPad",
      description:
        "Versatile tablets perfect for presentations, fields work, and collaboration.",
      img: EnterpriseIpad,
      link: "#",
    },
    {
      id: 3,
      title: "iPhone",
      description:
        "Enterprise-ready smartphone with advanced features and security.",
      img: EnterpriseIphone,
      link: "#",
    },
    {
      id: 4,
      title: "Apple Watch",
      description: "Smartwatch for health, fitness, and seamless connectivity.",
      img: EnterpriseWatch,
      link: "#",
    },

    {
      id: 5,
      title: "iPhone",
      description:
        "Enterprise-ready smartphone with advanced features and security.",
      img: EnterpriseIphone,
      link: "#",
    },
    {
      id: 6,
      title: "Apple Watch",
      description: "Smartwatch for health, fitness, and seamless connectivity.",
      img: EnterpriseWatch,
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col gap-10 p-10 items-center w-full overflow-hidden">
      <div className="flex flex-col gap-4 items-center">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold">
          Enterprise Solutions
        </p>
        <p className="text-base sm:text-lg text-[#4B5563] text-center">
          Comprehensive Apple device solutions tailored for business success.
        </p>
      </div>

      <div className="w-full max-w-7xl">
        <Swiper
          spaceBetween={30}
          className="w-full"
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3.5,
            },
            1540: {
              slidesPerView: 3.5,
            },
          }}
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <EnterpriseSolutionsCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EnterpriseSolutions;
