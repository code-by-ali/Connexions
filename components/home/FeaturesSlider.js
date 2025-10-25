"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import FAQIcon from "@/public/assets/faq-icon.svg";
import FeatureIcon1 from "@/public/assets/home-features-icon-1.svg";
import FeatureIcon2 from "@/public/assets/home-features-icon-2.svg";
import FeatureIcon3 from "@/public/assets/home-features-icon-3.svg";
import FeatureIcon4 from "@/public/assets/home-features-icon-4.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CommonImage from "../common/CommonImage";

// ServiceCard Component — NOTE: uses h-full and flex so it will fill slide height
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-3xl min-h-[310px] flex flex-col justify-between border border-[#F6F6F6]">
      <div>
        <div className="mb-6">
          <div className="w-12 h-12">
            <CommonImage
              height={40}
              width={40}
              src={icon.src || icon}
              alt={title}
            />
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
const FeaturesSlider = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const servicesData = [
    {
      icon: FeatureIcon1,
      title: "Strategic Consultancy",
      description:
        "Guiding enterprises with future-ready strategies. From IT planning to mobility adoption, we align tech with growth.",
    },
    {
      icon: FeatureIcon2,
      title: "Authorized Reseller Partner",
      description:
        "Trusted Apple & Samsung enterprise partner. Direct access to devices, tools, and certified support.",
    },
    {
      icon: FeatureIcon3,
      title: "Seamless Deployment",
      description:
        "Zero-touch configuration and managed rollouts. From setup to delivery, your teams are ready instantly.",
    },
    {
      icon: FeatureIcon4,
      title: "Training & Enablement",
      description:
        "Empowering people, not just devices. Hands-on workshops ensure your workforce unlocks innovation.",
    },
    {
      icon: FeatureIcon1,
      title: "Enterprise Support",
      description:
        "24/7 technical care for your business. Proactive monitoring keeps systems secure, stable, and scalable.",
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
        <div className="mb-12 relative">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
              <CommonImage
                height={16}
                width={16}
                alt="faq-icon"
                src={FAQIcon.src || FAQIcon}
              />
            </div>
            <span className="text-base font-medium text-primary tracking-tight">
              Key Features
            </span>
          </div>

          <div className="flex items-start justify-between">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary leading-tight max-w-2xl tracking-tight">
              Empowering Enterprises with End-to-End IT Solutions
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

export default FeaturesSlider;
