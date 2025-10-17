"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import GetToKnowMacImg1 from "@/public/assets/apple-macbook-get-to-know-img-1.svg";
import GetToKnowMacImg2 from "@/public/assets/apple-macbook-get-to-know-img-2.svg";
import GetToKnowMacImg3 from "@/public/assets/apple-macbook-get-to-know-img-3.svg";
import GetToKnowMacImg4 from "@/public/assets/apple-macbook-get-to-know-img-4.svg";
import GetToKnowMacImg5 from "@/public/assets/apple-macbook-get-to-know-img-5.svg";
import GetToKnowMacImg6 from "@/public/assets/apple-macbook-get-to-know-img-6.svg";
import GetToKnowMacImg7 from "@/public/assets/apple-macbook-get-to-know-img-7.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CommonImage from "../common/CommonImage";

// Card Component
const GetToKnowCard = ({ image, alt }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden h-full">
      <div className="aspect-video sm:aspect-square w-full">
        <CommonImage src={image.src || image} alt={alt} />
      </div>
    </div>
  );
};

// Main Component
const GetToKnowMac = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const cardsData = [
    {
      image: GetToKnowMacImg1,
      alt: "Hello, Apple Intelligence",
    },
    {
      image: GetToKnowMacImg2,
      alt: "Performance and efficiency Life - Go fast. Go far.",
    },
    {
      image: GetToKnowMacImg3,
      alt: "Mac and iPhone - Dream team.",
    },
    {
      image: GetToKnowMacImg4,
      alt: "Compatibility",
    },
    {
      image: GetToKnowMacImg5,
      alt: "Get to know Mac",
    },
    {
      image: GetToKnowMacImg6,
      alt: "Get to know Mac",
    },
    {
      image: GetToKnowMacImg7,
      alt: "Get to know Mac",
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
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight tracking-tight">
            Get to know Mac.
          </h2>
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
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
            }}
            className="get-to-know-swiper"
          >
            {cardsData.map((card, index) => (
              <SwiperSlide key={index} className="h-auto flex">
                <GetToKnowCard image={card.image} alt={card.alt} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
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
        .get-to-know-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .get-to-know-swiper .swiper-slide {
          display: flex;
          align-items: stretch;
        }
        .get-to-know-swiper .swiper-slide > div {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default GetToKnowMac;
