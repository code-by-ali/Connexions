"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
  CreditCard,
  Smartphone,
  Truck,
  Smile,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import FAQIcon from "@/public/assets/faq-icon.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CommonImage from "../common/CommonImage";

// ServiceCard Component
const ServiceCard = ({ icon, title, description, buttonText = "+" }) => {
  return (
    <div className="bg-white p-6 rounded-lg h-full flex flex-col justify-between min-h-[280px]">
      <div>
        <div className="mb-6">
          <div className="w-12 h-12 text-gray-700">{icon}</div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex justify-start">
        <button className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
          <Plus className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};

// Main ServicesSlider Component
const ServicesSlider = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const servicesData = [
    {
      icon: <CreditCard size={48} />,
      title: "Pay over time, interest-free.",
      description:
        "When you choose to check out with Apple Card Monthly Installments.",
    },
    {
      icon: <Smartphone size={48} />,
      title: "Save up to $520 with Apple Trade In.",
      description:
        "Get credit toward your next iPad when you trade in an eligible device.",
    },
    {
      icon: <Truck size={48} />,
      title: "Get flexible delivery and easy pickup.",
      description:
        "Choose two-hour delivery from an Apple Store, free delivery, or easy pickup options.",
    },
    {
      icon: <Smile size={48} />,
      title: "Personalize your iPad for free.",
      description:
        "Engrave your new iPad with a mix of emoji, names, initials, and numbers.",
    },
    // Add more cards for demonstration
    {
      icon: <CreditCard size={48} />,
      title: "Extended Warranty Options",
      description:
        "Protect your investment with comprehensive coverage and support services.",
    },
    {
      icon: <Smartphone size={48} />,
      title: "Expert Setup Service",
      description:
        "Professional setup and configuration to get you started right away.",
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
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 relative">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mr-3">
              <CommonImage
                height={16}
                width={16}
                alt="faq-icon"
                src={FAQIcon.src || FAQIcon}
              />
            </div>
            <span className="text-sm font-medium text-gray-700">Services</span>
          </div>

          <div className="flex items-start justify-between">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
              Why Connexions is the best place to IT Solutions
            </h2>
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
              <SwiperSlide key={index}>
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
              className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all border border-gray-200 ${
                isBeginning
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:shadow-xl hover:bg-gray-50"
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
              className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all border border-gray-200 ${
                isEnd
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:shadow-xl hover:bg-gray-50"
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

      <style jsx>{`
        .services-swiper {
          padding-bottom: 20px;
        }
        .services-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default ServicesSlider;
