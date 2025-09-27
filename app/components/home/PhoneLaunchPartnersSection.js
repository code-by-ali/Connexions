"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Smartphone, Chrome } from "lucide-react";
import HomeBannerImg1 from "@/public/assets/home-banner-img-1.svg";
import HomeBannerImg2 from "@/public/assets/home-banner-img-2.svg";
import HomeBannerImg3 from "@/public/assets/home-banner-img-3.svg";

import HomeBannerLogo1 from "@/public/assets/abm-industries-logo-1.svg";
import HomeBannerLogo2 from "@/public/assets/abm-industries-logo-2.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import CommonImage from "../common/CommonImage";
import Marquee from "react-fast-marquee";

const PhoneLaunchPartnersSection = () => {
  const phoneCards = [
    {
      bannerImg: HomeBannerImg2,
    },
    {
      bannerImg: HomeBannerImg1,
    },
    {
      bannerImg: HomeBannerImg3,
    },
  ];

  const partners = [
    { name: "Google", logo: HomeBannerLogo1 },
    { name: "Microsoft", logo: HomeBannerLogo2 },
    { name: "Apple", logo: HomeBannerLogo1 },
    { name: "Samsung", logo: HomeBannerLogo2 },
    { name: "Amazon", logo: HomeBannerLogo1 },
    { name: "Meta", logo: HomeBannerLogo2 },
    { name: "Netflix", logo: HomeBannerLogo1 },
    { name: "Spotify", logo: HomeBannerLogo2 },
    { name: "Adobe", logo: HomeBannerLogo1 },
    { name: "Tesla", logo: HomeBannerLogo2 },
    { name: "Google", logo: HomeBannerLogo1 },
    { name: "Microsoft", logo: HomeBannerLogo2 },
    { name: "Apple", logo: HomeBannerLogo1 },
    { name: "Samsung", logo: HomeBannerLogo2 },
    { name: "Amazon", logo: HomeBannerLogo1 },
    { name: "Meta", logo: HomeBannerLogo2 },
    { name: "Netflix", logo: HomeBannerLogo1 },
    { name: "Spotify", logo: HomeBannerLogo2 },
    { name: "Adobe", logo: HomeBannerLogo1 },
    { name: "Tesla", logo: HomeBannerLogo2 },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 pl-1 pr-3 py-1 font-normal bg-[#F0F0F0] text-primary rounded-full text-sm mb-6 w-fit">
              <span className="bg-[#A6CE39] text-white rounded-full px-2 py-1">
                New
              </span>
              <span>Registrations are now open!</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary leading-tight mb-6">
              THE NEW PHONES ARE HERE TAKE A LOOK
            </h1>

            {/* Description */}
            <p className="text-[#7C7C7C] tracking-tight mb-8 font-normal text-base md:text-lg">
              iPhone’s new line-up is going to be live on Sept 7th, Make your
              move now and register with us for new device setup.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm font-normal">
              <button className="bg-[#A6CE39] text-white px-8 py-3 rounded-full transition-colors">
                Explore Now
              </button>
              <button className="bg-primary text-white px-8 py-3 rounded-full transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Side - Phone Showcase Swiper */}
          <div className="relative overflow-hidden">
            {/* Fade overlay for left and right edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <Marquee>
              {phoneCards.map((phone, index) => (
                <div className="grid grid-cols-2 w-full max-w-md mx-auto px-6 mx-4">
                  {/* Phone Image Placeholder */}
                  <div className="bg-gray-100 rounded-2xl  flex items-center justify-center col-span-2 mt-4">
                    {/* Replace with actual iPhone image */}
                    <CommonImage
                      src={phone.bannerImg.src || phone.bannerImg}
                      alt={phone.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Partners Section with Auto-scrolling */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
          {/* Heading */}
          <h2 className="text-lg md:text-2xl font-normal text-primary whitespace-nowrap mb-4 lg:mb-0">
            Our Partners
          </h2>

          {/* Partners Auto-scrolling Swiper */}
          <Marquee>
            {partners.map((partner, index) => (
              <div className="flex items-center justify-center w-20 h-20 bg-[#F2F4F6] rounded-2xl border border-[#E1E4EB] mx-4">
                <div className="w-16 h-16 object-contain bg-white border border-[#E6E9EE] rounded-2xl flex items-center justify-center">
                  <CommonImage
                    src={partner.logo.src || partner.logo}
                    alt={partner.name}
                    className="w-10 h-10 object-contain rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <style jsx>{`
          .phone-showcase-swiper {
            overflow: visible;
          }

          .partners-swiper {
            overflow: visible;
          }
        `}</style>
      </div>
    </div>
  );
};

export default PhoneLaunchPartnersSection;
