"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Smartphone, Chrome } from "lucide-react";
import HomeBannerImg1 from "@/public/assets/home-banner-img-1.svg";
import HomeBannerImg2 from "@/public/assets/home-banner-img-2.svg";
import HomeBannerImg3 from "@/public/assets/home-banner-img-3.svg";
import HomeBannerImg4 from "@/public/assets/home-banner-img-4.svg";
import HomeBannerImg5 from "@/public/assets/home-banner-img-5.svg";
import HomeBannerImg6 from "@/public/assets/home-banner-img-6.svg";

import HomeBannerLogo1 from "@/public/assets/home-banner-logo-1.svg";
import HomeBannerLogo2 from "@/public/assets/home-banner-logo-2.svg";
import HomeBannerLogo3 from "@/public/assets/home-banner-logo-3.svg";
import HomeBannerLogo4 from "@/public/assets/home-banner-logo-4.svg";
import HomeBannerLogo5 from "@/public/assets/home-banner-logo-5.svg";
import HomeBannerLogo6 from "@/public/assets/home-banner-logo-6.svg";
import HomeBannerLogo7 from "@/public/assets/home-banner-logo-7.svg";
import HomeBannerLogo8 from "@/public/assets/home-banner-logo-8.svg";

import AppleLogoBlack from "@/public/assets/apple-logo-black.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import CommonImage from "../common/CommonImage";
import Marquee from "react-fast-marquee";
import Link from "next/link";

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
    {
      bannerImg: HomeBannerImg4,
    },
    {
      bannerImg: HomeBannerImg5,
    },
    {
      bannerImg: HomeBannerImg6,
    },
  ];

  const partners = [
    { name: "Apple Authorized Provider", logo: HomeBannerLogo1 },
    { name: "Apple Business Partner", logo: HomeBannerLogo2 },
    { name: "Samsung", logo: HomeBannerLogo3 },
    { name: "Canon", logo: HomeBannerLogo4 },
    { name: "Logitech", logo: HomeBannerLogo5 },
    { name: "Microsoft", logo: HomeBannerLogo6 },
    { name: "Asus", logo: HomeBannerLogo7 },
    { name: "Phillips", logo: HomeBannerLogo8 },

    { name: "Apple Authorized Provider", logo: HomeBannerLogo1 },
    { name: "Apple Business Partner", logo: HomeBannerLogo2 },
    { name: "Samsung", logo: HomeBannerLogo3 },
    { name: "Canon", logo: HomeBannerLogo4 },
    { name: "Logitech", logo: HomeBannerLogo5 },
    { name: "Microsoft", logo: HomeBannerLogo6 },
    { name: "Asus", logo: HomeBannerLogo7 },
    { name: "Phillips", logo: HomeBannerLogo8 },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 py-2 mb-6 w-fit">
              <div className="flex gap-3 items-center text-black font-medium text-sm md:text-base">
                <CommonImage
                  src={AppleLogoBlack.src || AppleLogoBlack}
                  alt={"apple logo"}
                  className="w-10 h-10"
                />{" "}
                <span>
                  Premium <br /> Buisness Partner
                </span>
                <span>
                  Authorized <br /> Service Provider
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary leading-tight mb-6">
              The all-new iPhone 17 is finally here!!
            </h1>

            {/* Description */}
            <p className="text-[#7C7C7C] tracking-tight mb-8 font-normal text-base md:text-lg">
              The most advanced iPhone ever, Designed for work, built for life.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm font-normal">
              {/* <button className="bg-[#A6CE39] text-white px-8 py-3 rounded-full transition-colors">
                Explore Now
              </button> */}
              <Link href={"/contact-us"}>
                <button className="bg-primary text-white px-8 py-3 rounded-full transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Phone Showcase Swiper */}
          <div className="relative overflow-hidden">
            {/* Fade overlay for left and right edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <Marquee>
              {phoneCards.map((phone, index) => (
                <div className="grid grid-cols-2 w-full max-w-md px-6 mx-4">
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
              <div className="flex items-center justify-center w-40 h-18 bg-[#F2F4F6] rounded-2xl border border-[#E1E4EB] mx-4">
                <div className="w-32 h-14 object-contain px-4 bg-white border border-[#E6E9EE] rounded-xl flex items-center justify-center">
                  <CommonImage
                    src={partner.logo.src || partner.logo}
                    alt={partner.name}
                    className="w-auto h-14 object-contain rounded-2xl"
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
