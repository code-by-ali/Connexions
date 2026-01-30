"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import CommonImage from "../common/CommonImage";
import HighlightsImg1 from "@/public/assets/iphone-17-highlight-img-1.svg";
import HighlightsImg2 from "@/public/assets/iphone-17-highlight-img-2.svg";
import HighlightsImg3 from "@/public/assets/iphone-17-highlight-img-3.svg";
import HighlightsImg4 from "@/public/assets/iphone-17-highlight-img-4.svg";
import HighlightsImg5 from "@/public/assets/iphone-17-highlight-img-5.svg";
import HighlightsImg6 from "@/public/assets/iphone-17-highlight-img-6.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GetHighlightsSection = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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

 const highlightSlides = [
  {
    image: HighlightsImg1,
    text: "Brighter display, now with ProMotion up to 120Hz. Durable Ceramic Shield 2 front with 3x better scratch resistance."
  },
  {
    image: HighlightsImg2,
    text: "New Center Stage front camera. Flexible ways to frame your shot. Smarter group selfies. And so much more."
  },
  {
    image: HighlightsImg3,
    text: "48MP Dual Fusion camera system. Super-stunning shots up close and far away."
  },
  {
    image: HighlightsImg4,
    text: "A19 chip. All-day battery life. Powers everything you love about iPhone."
  },
  {
    image: HighlightsImg5,
    text: "iOS 26. New look. Even more magic."
  },
  {
    image: HighlightsImg6,
    text: "Apple Intelligence. Effortlessly helpful features — from image"
  },
];


  return (
    <div className="bg-[#F5F5F7] py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Get the highlights.
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
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2.25,
                spaceBetween: 8,
              },
              1280: {
                slidesPerView: 2.35,
                spaceBetween: 8,
              },
            }}
            className="highlights-swiper"
          >
            {highlightSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className={`rounded-3xl overflow-hidden relative`}>
                  {/* iPhone Image */}
                  <div className="flex justify-center items-center px-8 pb-8">
                    <div className="relative w-full max-w-4xl">
                      {/* Uncomment when you have actual images */}
                       <CommonImage
            src={slide.image.src || slide.image}
            alt={`iPhone highlight ${index + 1}`}
            className="w-full h-auto object-contain"
          />

          <div className="bg-white  px-10 mt-2 rounded-xl min-h-[160px] xl:py-0 lg:py-0 py-6 flex items-center">
            <p className="text-[#222222E0] font-bold md:text-lg">
              {slide.text}
            </p>
          </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={slidePrev}
            disabled={isBeginning}
            className={`w-10 h-0 bg-[#D2D2D7A3] rounded-full flex items-center justify-center border border-gray-200 ${
              isBeginning ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft
              className={`w-7 h-7 ${
                isBeginning ? "text-gray-400" : "text-gray-600"
              }`}
            />
          </button>
          <button
            onClick={slideNext}
            disabled={isEnd}
            className={`w-10 h-10 bg-[#D2D2D7A3] rounded-full flex items-center justify-center border border-gray-200 ${
              isEnd ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronRight
              className={`w-7 h-7 ${isEnd ? "text-gray-400" : "text-gray-600"}`}
            />
          </button>
        </div>
      </div>

      <style jsx>{`
        .security-swiper {
          padding-bottom: 20px;
        }
        .security-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default GetHighlightsSection;
