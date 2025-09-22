"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Smartphone, ChevronLeft, ChevronRight, Rocket } from "lucide-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Iphone17Pro from "@/public/assets/apple-lineup-iphone17pro.svg";
import Iphone17 from "@/public/assets/apple-lineup-iphone17.svg";
import Iphone17Air from "@/public/assets/apple-lineup-iphone17air.svg";
import AppleWatch from "@/public/assets/apple-lineup-watch.svg";
import CommonImage from "../common/CommonImage";

const AppleLineup = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const productCards = [
    {
      title: "iPhone 17 Pro",
      description:
        "Keep an eye on what matters most with cameras, doorbells, and more.",
      linkText: "Shop Cameras and Sensors",
      image: Iphone17Pro,
      backgroundColor: "bg-gray-900",
    },
    {
      title: "iPhone 17",
      description:
        "Keep an eye on what matters most with cameras, doorbells, and more.",
      linkText: "Shop Cameras and Sensors",
      image: Iphone17,
      backgroundColor: "bg-purple-100",
    },
    {
      title: "iPhone 17 Air",
      description:
        "Keep an eye on what matters most with cameras, doorbells, and more.",
      linkText: "Shop Cameras and Sensors",
      image: Iphone17Air,
      backgroundColor: "bg-gray-50",
    },
    {
      title: "iPhone 17 Plus",
      description:
        "Keep an eye on what matters most with cameras, doorbells, and more.",
      linkText: "Shop Cameras and Sensors",
      image: AppleWatch,
      backgroundColor: "bg-blue-100",
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
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-[#0F0F0F] rounded-full flex items-center justify-center">
              <Rocket className="w-4 h-4 text-white" />
            </div>
            <span className="ml-3 text-base font-medium text-[#0F0F0F]">
              New Launch
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-4">
            Apple Line-up
          </h2>
          <p className="text-lg text-[#535862]">
            New devices from apple this year
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative mb-8">
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
            className="lineup-swiper"
          >
            {productCards.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                  {/* Product Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1D1D1F] mb-3">
                      {product.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#6E6E73] mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <a
                      href="#"
                      className="text-[#0066CC] text-sm md:text-base font-medium hover:text-blue-700 transition-colors inline-block mb-6"
                    >
                      {product.linkText}
                    </a>
                  </div>

                  {/* Product Image */}
                  <div
                    className={`${product.backgroundColor} h-64 flex items-center justify-center overflow-hidden`}
                  >
                    <CommonImage
                      src={product.image.src || product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={slidePrev}
            disabled={isBeginning}
            className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-all border border-primary ${
              isBeginning
                ? "opacity-50 cursor-not-allowed"
                : "hover:shadow-xl hover:bg-gray-50"
            }`}
          >
            <ChevronLeft
              className={`w-5 h-5 ${
                isBeginning ? "text-gray-400" : "text-primary"
              }`}
            />
          </button>
          <button
            onClick={slideNext}
            disabled={isEnd}
            className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-all border border-primary ${
              isEnd
                ? "opacity-50 cursor-not-allowed"
                : "hover:shadow-xl hover:bg-gray-50"
            }`}
          >
            <ChevronRight
              className={`w-5 h-5 ${isEnd ? "text-gray-400" : "text-primary"}`}
            />
          </button>
        </div>
      </div>

      <style jsx>{`
        .lineup-swiper {
          padding-bottom: 20px;
        }
        .lineup-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default AppleLineup;
