import React from "react";
import BannerIpad from "@/public/assets/apple-banner-ipad.svg";
import BannerIphone from "@/public/assets/apple-banner-iphone.svg";
import BannerMac from "@/public/assets/apple-banner-mac.svg";
import BannerWatch from "@/public/assets/apple-banner-watch.svg";
import Image from "next/image";

const AppleBanner = () => {
  return (
    <div className="bg-[#E5E7EB] px-4 sm:px-8 md:px-20 py-8 sm:py-12 md:py-20 flex items-center justify-center relative">
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-center justify-center h-auto lg:h-[400px] w-full max-w-[600px]">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary text-center">
          Apple devices for Enterprise
        </p>
        <p className="text-base sm:text-lg md:text-xl text-[#4B5563] text-center">
          Transform your business with Apple's powerful ecosystem. Boost
          productivity, enhance security, and empower your workforce with
          seamless integration.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <button className="w-full sm:w-auto cursor-pointer border-2 border-[#E5E7EB] rounded-full text-white bg-[#A6CE39] px-5 py-3">
            Get Started
          </button>
          <button className="w-full sm:w-auto cursor-pointer border-2 border-primary rounded-full text-primary bg-white px-5 py-3">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Hide images on screens smaller than lg (1024px) */}
      <Image
        className="absolute bottom-[0px] right-[0px] hidden lg:block"
        src={BannerIpad}
        objectFit="contain"
        unoptimized
        alt="ipad-img"
      />
      <Image
        className="absolute top-[0px] right-[0px] hidden lg:block"
        src={BannerMac}
        objectFit="contain"
        unoptimized
        alt="mac-img"
      />
      <Image
        className="absolute top-[0px] left-[80px] hidden lg:block"
        src={BannerWatch}
        objectFit="contain"
        unoptimized
        alt="watch-img"
      />
      <Image
        className="absolute bottom-[0px] left-[0px] hidden lg:block"
        src={BannerIphone}
        objectFit="contain"
        unoptimized
        alt="iphone-img"
      />
    </div>
  );
};

export default AppleBanner;