"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import TheMacExperienceImg1 from "@/public/assets/apple-macbook-mac-experience-img-1.svg";
import TheMacExperienceImg2 from "@/public/assets/apple-macbook-mac-experience-img-2.svg";
import TheMacExperienceImg3 from "@/public/assets/apple-macbook-mac-experience-img-3.svg";
import TheMacExperienceImg4 from "@/public/assets/apple-macbook-mac-experience-img-4.svg";
import TheMacExperienceImg5 from "@/public/assets/apple-macbook-mac-experience-img-5.svg";
import TheMacExperienceImg6 from "@/public/assets/apple-macbook-mac-experience-img-6.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CommonImage from "../common/CommonImage";

// Card Component
const TheMacExperienceCard = ({ image, alt }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden h-full">
      <div className="w-full aspect-square">
        <CommonImage src={image.src || image} alt={alt} />
      </div>
    </div>
  );
};

// Main Component
const TheMacExperience = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const cardsData = [
    {
      image: TheMacExperienceImg1,
      alt: "Easy transfer - New Mac? See how easy it is to move your content over.",
    },
    {
      image: TheMacExperienceImg2,
      alt: "AppleCare+ - Get accidental damage protection and expert technical support from Apple.",
    },
    {
      image: TheMacExperienceImg3,
      alt: "Support - Need support? Our team here for you.",
    },
    {
      image: TheMacExperienceImg4,
      alt: "Easy transfer - New Mac? See how easy it is to move your content over.",
    },
    {
      image: TheMacExperienceImg5,
      alt: "AppleCare+ - Get accidental damage protection and expert technical support from Apple.",
    },
    {
      image: TheMacExperienceImg6,
      alt: "Support - Need support? Our team here for you.",
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
        <div className="mb-12 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          <h2 className="macbook-gradient-text">The Mac experience.</h2>
          <p className="text-[#6A696D] mt-2 max-w-4xl">
            Apple products and services to light up every moment.
          </p>
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
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
            }}
            className="setup-support-swiper"
          >
            {cardsData.map((card, index) => (
              <SwiperSlide key={index} className="h-auto flex">
                <TheMacExperienceCard image={card.image} alt={card.alt} />
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
        .setup-support-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .setup-support-swiper .swiper-slide {
          display: flex;
          align-items: stretch;
        }
        .setup-support-swiper .swiper-slide > div {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default TheMacExperience;
