import React from "react";
import AppleWorkGridImg1 from "@/public/assets/apple-work-grid-img-1.svg";
import AppleWorkGridImg2 from "@/public/assets/apple-work-grid-img-2.svg";
import AppleWorkGridIcon1 from "@/public/assets/apple-work-grid-1.svg";
import AppleWorkGridIcon2 from "@/public/assets/apple-work-grid-2.svg";
import CommonImage from "../common/CommonImage";

const AppleWorkGrid = () => {
  return (
    <div className="mt-12 sm:mt-16 md:mt-20 bg-white">
      {/* Header Section */}
      <div className="flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8">
        <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold">
          Built for Every Team, Trusted by IT
        </h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 gap-6 sm:gap-8 lg:gap-10">
        {/* First Large Card - Seamless Integration */}
        <div className="lg:col-span-2 flex flex-col lg:flex-row justify-between bg-[#F5F5F7] gap-0 rounded-2xl overflow-hidden">
          <div className="flex justify-center lg:justify-start h-64 lg:h-auto lg:w-1/2 mt-6 lg:mt-0">
            <CommonImage
              src={AppleWorkGridImg1.src || AppleWorkGridImg1}
              alt="apple-grid-img-1"
              className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
            />
          </div>
          <div className="flex items-center justify-center flex-1 py-6 px-6 sm:px-8 lg:px-10">
            <div className="text-center lg:text-left max-w-[400px] text-lg sm:text-xl font-bold tracking-[0.23px]">
              <span className="text-primary mb-2 sm:mb-3">CXOs</span>
              <span className="text-[#4B5563] ml-2">
                Seamless remote work, top-tier performance.
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Security Card */}
        <div className="py-6 sm:py-8 lg:py-10 px-6 sm:px-10 lg:px-14 bg-[#F5F5F7] flex flex-col sm:flex-row items-start gap-4 sm:gap-6 rounded-2xl">
          <div className="flex-shrink-0 flex justify-center sm:justify-start w-full sm:w-auto">
            <CommonImage
              src={AppleWorkGridIcon1.src || AppleWorkGridIcon1}
              alt="apple-key"
              width={80}
              height={80}
              className="w-12 sm:w-12 lg:w-16 h-12 sm:h-12 lg:h-16 object-contain"
            />
          </div>
          <div className="flex-1 text-lg sm:text-xl text-left font-bold tracking-[0.23px]">
            <span className="text-[#1D1D1F] mb-2 sm:mb-3">IT Heads.</span>
            <span className="text-[#4B5563] ml-2">
              Zero-trust security, scalable deployment
            </span>
          </div>
        </div>

        {/* Enterprise Mobility Card */}
        <div className="py-6 sm:py-8 lg:py-10 px-6 sm:px-10 lg:px-14 bg-[#F5F5F7] flex flex-col sm:flex-row items-start gap-4 sm:gap-6 rounded-2xl">
          <div className="flex-shrink-0 flex justify-center sm:justify-start w-full sm:w-auto">
            <CommonImage
              src={AppleWorkGridIcon2.src || AppleWorkGridIcon2}
              alt="apple-book"
              width={80}
              height={80}
              className="w-12 sm:w-12 lg:w-16 h-12 sm:h-12 lg:h-16 object-contain"
            />
          </div>
          <div className="flex-1 text-lg sm:text-xl text-left font-bold tracking-[0.23px]">
            <span className="text-primary mb-2 sm:mb-3">Finance.</span>
            <span className="text-[#4B5563] ml-2">
              Lower TCO, longer product lifecycle, high resale value
            </span>
          </div>
        </div>

        {/* Second Large Card - Right Image */}
        <div className="lg:col-span-2 flex flex-col lg:flex-row-reverse justify-between bg-[#F5F5F7] gap-0 rounded-2xl overflow-hidden">
          <div className="flex justify-center lg:justify-end h-64 lg:h-auto lg:w-1/2 mt-6 lg:mt-0">
            <CommonImage
              src={AppleWorkGridImg2.src || AppleWorkGridImg2}
              alt="apple-grid-img-2"
              className="w-full h-full object-cover rounded-t-2xl lg:rounded-r-2xl lg:rounded-tl-none"
            />
          </div>
          <div className="flex items-center justify-center flex-1 py-6 px-6 sm:px-8 lg:px-10">
            <div className="text-lg sm:text-xl text-center lg:text-left max-w-[400px] font-bold tracking-[0.23px]">
              <span className="text-primary mb-2 sm:mb-3">Employees.</span>
              <span className="text-[#4B5563] ml-2">
                Familiar, intuitive interfaces with powerful capabilities
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleWorkGrid;