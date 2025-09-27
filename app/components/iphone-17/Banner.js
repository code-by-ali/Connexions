import { ChevronRight } from "lucide-react";
import React from "react";
import BannerImg from "@/public/assets/iphone-17-banner-img.svg";
import CommonImage from "../common/CommonImage";

const Banner = () => {
  return (
    <div>
      {/* Top notification bar */}
      <div className="bg-[#F5F5F7] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 p-3 sm:p-2">
        <span className="font-normal text-xs sm:text-sm tracking-[-0.22px] text-primary text-center">
          Last chance to find something special for your special someone this Diwali
        </span>
        <span className="font-normal text-xs sm:text-sm tracking-[-0.22px] text-[#A6CE39] flex items-center gap-2 cursor-pointer hover:underline">
          Shop <ChevronRight size={16} />
        </span>
      </div>

      {/* Main banner content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-20 bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Title section - responsive layout */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 lg:gap-8 mb-8 lg:mb-12 text-primary">
            
            {/* iPhone 17 title */}
            <div className="flex-shrink-0">
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-1.2px] leading-none">
                iPhone 17
              </h1>
            </div>
            
            {/* Description */}
            <div className="lg:flex lg:items-end lg:pb-2">
              <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold tracking-[0.2px] leading-tight lg:text-right">
                Designed to be loved.
              </p>
            </div>
          </div>

          {/* Image section */}
          <div className="flex justify-center">
            <div className="w-full">
              <CommonImage 
                src={BannerImg.src || BannerImg} 
                alt="iPhone 17 banner image" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;