import React from "react";
import CommonImage from "../common/CommonImage";
import ABMImg1 from "@/public/assets/apple-business-manager-1.svg";
import ABMImg2 from "@/public/assets/apple-business-manager-2.svg";
import { ChevronRight } from "lucide-react";

const AppleBusinessManager = () => {
  return (
    <div className="flex flex-col items-center gap-8 px-4 sm:px-6 md:px-12 lg:px-20 py-5 md:py-10 lg:py-20">
      {/* Title */}
      <p className="text-[#1D1D1F] text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-bold">
        Apple Business Manager
      </p>
      <p className="text-[#1D1D1F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Work as one. <br />
        Or one thousand.
      </p>
      <p className="text-[#4B5563] text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-3xl">
        With seamless integration to Mobile Device Management (MDM) solutions,
        ABM enables zero-touch deployment and automated device configuration,
        making enterprise Apple deployment effortless.
      </p>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center w-full">
        {/* Card 1 */}
        <div className="rounded-3xl bg-[#1D1D1F] w-full sm:w-[380px] md:w-[400px] h-[440px]">
          <CommonImage
            src={ABMImg1.src || ABMImg1}
            className="w-full h-auto rounded-t-3xl"
            alt="apple-business-manager-img-1"
          />
          <div className="flex flex-col gap-4 mt-4 px-4">
            <p className="text-sm md:text-base text-white font-semibold text-center">
              Small Business
            </p>
            <p className="text-base md:text-lg lg:text-xl text-white font-bold text-center">
              Small Business.
              <br /> Super powered.
            </p>
            <p className="text-sm md:text-base flex items-center justify-center gap-1 text-[#2997FF] cursor-pointer hover:underline">
              Learn more
              <ChevronRight size={14} className="mt-1" />
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-3xl bg-[#1D1D1F] w-full sm:w-[380px] md:w-[400px] h-[440px]">
          <CommonImage
            src={ABMImg2.src || ABMImg2}
            className="w-full h-auto rounded-t-3xl"
            alt="apple-business-manager-img-2"
          />
          <div className="flex flex-col gap-4 mt-4 px-4">
            <p className="text-sm md:text-base text-white font-semibold text-center">
              Enterprise
            </p>
            <p className="text-base md:text-lg lg:text-xl text-white font-bold text-center">
              Work.
              <br /> Like never before.
            </p>
            <p className="text-sm md:text-base flex items-center justify-center gap-1 text-[#2997FF] cursor-pointer hover:underline">
              Learn more
              <ChevronRight size={14} className="mt-1" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleBusinessManager;
