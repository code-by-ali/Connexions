import React from "react";
import BannerIpad from "@/public/assets/apple-banner-ipad.svg";
import BannerIphone from "@/public/assets/apple-banner-iphone.svg";
import BannerMac from "@/public/assets/apple-banner-mac.svg";
import BannerWatch from "@/public/assets/apple-banner-watch.svg";
import CommonImage from "../common/CommonImage";

const ConsultantBanner = () => {
  return (
    <div
      className="
        bg-[#E5E7EB] 
        px-4 sm:px-8 md:px-20 
        py-20 sm:py-12 md:py-20  /* extra padding on mobile */
        flex items-center justify-center relative
        min-h-[500px] sm:min-h-[auto]  /* force taller height only on mobile */
      "
    >
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-center justify-center h-auto lg:h-[400px] w-full max-w-[600px] z-10">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary text-center font-bold">
          Certified Apple <br /> Consultant Partner
        </p>
        <p className="text-base sm:text-lg md:text-xl text-[#4B5563] text-center">
          Unlock full power of Apple in your business with Connexions - an
          official member of the Apple Consultant Network
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <button className="w-full sm:w-auto cursor-pointer border-2 border-[#E5E7EB] rounded-full text-white bg-[#A6CE39] px-5 py-3">
            Talk to an Expert
          </button>
          <button className="w-full sm:w-auto cursor-pointer border-2 border-primary rounded-full text-primary bg-white px-5 py-3">
            Learn More
          </button>
        </div>
      </div>

      {/* Images positioned responsively */}
      <CommonImage
        className="absolute bottom-0 right-0 w-32 sm:w-32 md:w-36 lg:w-auto"
        src={BannerIpad.src || BannerIpad}
        alt="ipad-img"
      />
      <CommonImage
        className="absolute top-0 right-0 w-36 sm:w-36 md:w-40 lg:w-auto"
        src={BannerMac.src || BannerMac}
        alt="mac-img"
      />
      <CommonImage
        className="absolute top-0 left-[0px] sm:left-[60px] md:left-[20px] w-24 sm:w-32 md:w-32 lg:w-auto"
        src={BannerWatch.src || BannerWatch}
        alt="watch-img"
      />
      <CommonImage
        className="absolute bottom-0 left-0 w-40 sm:w-40 md:w-40 lg:w-auto"
        src={BannerIphone.src || BannerIphone}
        alt="iphone-img"
      />
    </div>
  );
};

export default ConsultantBanner;
