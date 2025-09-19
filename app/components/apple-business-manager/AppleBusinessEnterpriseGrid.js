import React from "react";
import { Check } from "lucide-react";
import EnterpriseGridImg from "@/public/assets/enterprise-grid-image.svg";
import CommonImage from "../common/CommonImage";

const AppleBusinessEnterpriseGrid = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 py-8 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30 bg-[#F5F5F7] mb-10">
      {/* First Section - Enterprise Mobility */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-12">
        {/* Image */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          <CommonImage
            src={EnterpriseGridImg.src || EnterpriseGridImg}
            width={600}
            height={400}
            alt="enterprise mobility"
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-[600px] text-center lg:text-left">
          <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Device Enrollment
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base md:text-lg leading-relaxed">
            Automatically enrol new devices into your MDM solution the moment
            they're unboxed, ensuring immediate compliance and security.
          </p>

          {/* Button */}
          <div className="flex justify-center lg:justify-start mt-2">
            <button className="border border-[#DEDEDE] bg-[#A6CE39] hover:bg-[#95B832] transition-colors rounded-full text-sm sm:text-base text-white py-2 sm:py-3 px-4 sm:px-6 font-medium">
              Explore Service
            </button>
          </div>
        </div>
      </div>

      {/* Second Section - Zero-Touch Deployment */}
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-6 sm:gap-8 lg:gap-12">
        {/* Image */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <CommonImage
            src={EnterpriseGridImg.src || EnterpriseGridImg}
            width={600}
            height={400}
            alt="zero-touch deployment"
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-[600px] text-center lg:text-left">
          <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Role Based Access Control
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base md:text-lg leading-relaxed">
            Define specific permissions and access levels for different team
            members, ensuring the right people have the right access.
          </p>

          {/* Button */}
          <div className="flex justify-center lg:justify-start mt-2">
            <button className="border border-[#DEDEDE] bg-[#A6CE39] hover:bg-[#95B832] transition-colors rounded-full text-sm sm:text-base text-white py-2 sm:py-3 px-4 sm:px-6 font-medium">
              Explore Service
            </button>
          </div>
        </div>
      </div>

      {/* Third    Section - Enterprise Mobility */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-12">
        {/* Image */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          <CommonImage
            src={EnterpriseGridImg.src || EnterpriseGridImg}
            width={600}
            height={400}
            alt="enterprise mobility"
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-[600px] text-center lg:text-left">
          <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            App & Book Distribution
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base md:text-lg leading-relaxed">
            Deploy custom apps, distribute volume-purchased apps, and manage
            educational content across all enrolled devices efficiently.
          </p>

          {/* Button */}
          <div className="flex justify-center lg:justify-start mt-2">
            <button className="border border-[#DEDEDE] bg-[#A6CE39] hover:bg-[#95B832] transition-colors rounded-full text-sm sm:text-base text-white py-2 sm:py-3 px-4 sm:px-6 font-medium">
              Explore Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleBusinessEnterpriseGrid;
