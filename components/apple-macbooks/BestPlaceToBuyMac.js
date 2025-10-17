"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import BestBuyMacbookImg1 from "@/public/assets/apple-macbook-best-buy-img-1.svg";
import BestBuyMacbookImg2 from "@/public/assets/apple-macbook-best-buy-img-2.svg";
import BestBuyMacbookImg3 from "@/public/assets/apple-macbook-best-buy-img-3.svg";
import BestBuyMacbookImg4 from "@/public/assets/apple-macbook-best-buy-img-4.svg";
import BestBuyMacbookImg5 from "@/public/assets/apple-macbook-best-buy-img-5.svg";
import BestBuyMacbookImg6 from "@/public/assets/apple-macbook-best-buy-img-6.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CommonImage from "../common/CommonImage";

// ServiceCard Component — NOTE: uses h-full and flex so it will fill slide height
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-3xl min-h-[340px] flex flex-col justify-between border border-[#F6F6F6]">
      <div>
        <div className="mb-4">
          <div className="w-12 h-12">
            <CommonImage src={icon.src || icon} alt={title} />
          </div>
        </div>

        <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4 tracking-tight leading-tight">
          {title}
        </h3>

        <p className="text-primary text-base font-normal leading-relaxed tracking-[-0.37px] mb-6">
          {description}
        </p>
      </div>
    </div>
  );
};

// Main Features Slider Component
const BestPlaceToBuyMac = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const servicesData = [
    {
      icon: BestBuyMacbookImg1,
      title: "Pay over time, interest free.",
      description:
        "When you choose to check out with Apple Card Monthly Installments.",
    },
    {
      icon: BestBuyMacbookImg2,
      title: "Customize your Mac.",
      description:
        "Trusted Apple & Samsung enterprise partner. Direct access to devices, tools, and certified support.",
    },
    {
      icon: BestBuyMacbookImg3,
      title: "Get flexible delivery and easy pickup.",
      description:
        "Zero-touch configuration and managed rollouts. From setup to delivery, your teams are ready instantly.",
    },
    {
      icon: BestBuyMacbookImg4,
      title: "Shop live with a Specialist.",
      description:
        "Let us guide you live over video and answer all of your questions.",
    },
    {
      icon: BestBuyMacbookImg5,
      title: "Meet your new Max with Personal Setup.",
      description:
        "Jump into online sessions with a specialist to set p your Mac and discover new features.",
    },
    {
      icon: BestBuyMacbookImg6,
      title: "Explore a shopping experience designed around you.",
      description:
        "use the Apple Store app to get a more personal way to shop.",
    },
  ];

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="bg-[#FAFAFA] py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 relative">
          <div className="flex items-start justify-between">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight max-w-lg tracking-tight">
              Why Apple is the best place to buy Mac.
            </h2>
            <button className="bg-[#A6CE39] border border-[#DEDEDE] text-white rounded-full px-6 py-3 text-sm md:text-base tracking-[-0.5px] font-normal max-w-fit">
              Explore Service
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSwiper={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="services-swiper"
          >
            {servicesData.map((service, index) => (
              // IMPORTANT: make slide a flex container so child (ServiceCard) can stretch
              <SwiperSlide key={index} className="h-auto flex">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons - Positioned after cards */}
          <div className="flex items-center justify-end gap-2 mt-8">
            <button
              onClick={slidePrev}
              disabled={isBeginning}
              className={`w-9 h-9 bg-[#D2D2D7A3] rounded-full flex items-center justify-center ${
                isBeginning ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ChevronLeft
                className={`w-5 h-5 ${
                  isBeginning ? "text-gray-400" : "text-gray-600"
                }`}
              />
            </button>
            <button
              onClick={slideNext}
              disabled={isEnd}
              className={`w-9 h-9 bg-[#D2D2D7A3] rounded-full flex items-center justify-center ${
                isEnd ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ChevronRight
                className={`w-5 h-5 ${
                  isEnd ? "text-gray-400" : "text-gray-600"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* make swiper slides stretch to match the tallest slide in the row */
        .services-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .services-swiper .swiper-slide {
          display: flex;
          align-items: stretch;
        }
        /* ensure the direct child of the slide fills the slide */
        .services-swiper .swiper-slide > div {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        /* optional: ensure card content doesn't overflow - keep consistent padding */
        .services-swiper .swiper-slide .rounded-lg {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default BestPlaceToBuyMac;
