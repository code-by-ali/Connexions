import Image from "next/image";
import React from "react";
import AppleLogo from "@/public/assets/apple-logo.svg";
import AppleSecurity from "@/public/assets/apple-security.svg";
import AppleSupport from "@/public/assets/apple-support.svg";

const AppleAuthorised = () => {
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-center text-gray-800">
        Apple Authorised Enterprise Reseller
      </h2>
      
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 items-center justify-center w-full max-w-6xl">
        {/* Certified Partner Card */}
        <div className="w-full sm:w-[270px] h-[140px] sm:h-[150px] rounded-2xl flex flex-col gap-3 sm:gap-4 justify-center items-center bg-white shadow-[2px_4px_12px_0px_rgba(0,0,0,0.08)] hover:shadow-[2px_8px_20px_0px_rgba(0,0,0,0.12)] transition-shadow duration-300">
          <Image
            unoptimized
            alt="apple-logo"
            width={46}
            height={55}
            src={AppleLogo}
            className="w-10 h-12 sm:w-[46px] sm:h-[55px]"
          />
          <span className="text-sm sm:text-sm md:text-base text-[#0066CC] font-medium">
            Certified Partner
          </span>
        </div>

        {/* Enterprise Security Card */}
        <div className="w-full sm:w-[240px] h-[140px] sm:h-[150px] rounded-2xl flex flex-col gap-3 sm:gap-4 justify-center items-center bg-white shadow-[2px_4px_12px_0px_rgba(0,0,0,0.08)] hover:shadow-[2px_8px_20px_0px_rgba(0,0,0,0.12)] transition-shadow duration-300">
          <Image
            unoptimized
            alt="apple-security"
            width={46}
            height={46}
            src={AppleSecurity}
            className="w-10 h-10 sm:w-[46px] sm:h-[46px]"
          />
          <span className="text-sm sm:text-sm md:text-base text-[#0066CC] font-medium">
            Enterprise Security
          </span>
        </div>

        {/* 24/7 Support Card */}
        <div className="w-full sm:w-[240px] h-[140px] sm:h-[150px] rounded-2xl flex flex-col gap-3 sm:gap-4 justify-center items-center bg-white shadow-[2px_4px_12px_0px_rgba(0,0,0,0.08)] hover:shadow-[2px_8px_20px_0px_rgba(0,0,0,0.12)] transition-shadow duration-300">
          <Image
            unoptimized
            alt="apple-support"
            width={60}
            height={60}
            src={AppleSupport}
            className="w-12 h-12 sm:w-[60px] sm:h-[60px]"
          />
          <span className="text-sm sm:text-sm md:text-base text-[#0066CC] font-medium">
            24/7 Support
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppleAuthorised;