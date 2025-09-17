import React from "react";
import { Check } from "lucide-react";
import EnterpriseGridImg from "@/public/assets/enterprise-grid-image.svg";
import Image from "next/image";

const EnterpriseGrid = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 py-8 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30 bg-[#F5F5F7] mb-10">
      
      {/* First Section - Enterprise Mobility */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-12">
        {/* Image */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          <Image
            src={EnterpriseGridImg}
            width={600}
            height={400}
            unoptimized
            alt="enterprise mobility"
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto"
          />
        </div>
        
        {/* Content */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-[600px] text-center lg:text-left">
          <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Enterprise Mobility
          </h2>
          <p className="text-primary text-sm sm:text-base md:text-lg leading-relaxed">
            Empower your workforce with secure, flexible mobile solutions that
            enable productivity from anywhere.
          </p>
          
          {/* Feature List */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <div className="flex flex-row gap-2 sm:gap-3 items-center justify-center lg:justify-start">
              <span className="text-green-500 flex-shrink-0">
                <Check size={16} className="sm:w-4 sm:h-4" />
              </span>
              <span className="text-sm sm:text-base text-[#4B5563]">
                Remote work capabilities
              </span>
            </div>
            <div className="flex flex-row gap-2 sm:gap-3 items-center justify-center lg:justify-start">
              <span className="text-green-500 flex-shrink-0">
                <Check size={16} className="sm:w-4 sm:h-4" />
              </span>
              <span className="text-sm sm:text-base text-[#4B5563]">
                Secure data access
              </span>
            </div>
            <div className="flex flex-row gap-2 sm:gap-3 items-center justify-center lg:justify-start">
              <span className="text-green-500 flex-shrink-0">
                <Check size={16} className="sm:w-4 sm:h-4" />
              </span>
              <span className="text-sm sm:text-base text-[#4B5563]">
                Real-time collaboration
              </span>
            </div>
          </div>
          
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
          <Image
            src={EnterpriseGridImg}
            width={600}
            height={400}
            unoptimized
            alt="zero-touch deployment"
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto"
          />
        </div>
        
        {/* Content */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-[600px] text-center lg:text-left">
          <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Zero-Touch Deployment
          </h2>
          <p className="text-primary text-sm sm:text-base md:text-lg leading-relaxed">
            Streamline device management with automated deployment and
            configuration solutions.
          </p>
          
          {/* Feature List */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <div className="flex flex-row gap-2 sm:gap-3 items-center justify-center lg:justify-start">
              <span className="text-green-500 flex-shrink-0">
                <Check size={16} className="sm:w-4 sm:h-4" />
              </span>
              <span className="text-sm sm:text-base text-[#4B5563]">
                Automated Setup
              </span>
            </div>
            <div className="flex flex-row gap-2 sm:gap-3 items-center justify-center lg:justify-start">
              <span className="text-green-500 flex-shrink-0">
                <Check size={16} className="sm:w-4 sm:h-4" />
              </span>
              <span className="text-sm sm:text-base text-[#4B5563]">
                Centralized management
              </span>
            </div>
            <div className="flex flex-row gap-2 sm:gap-3 items-center justify-center lg:justify-start">
              <span className="text-green-500 flex-shrink-0">
                <Check size={16} className="sm:w-4 sm:h-4" />
              </span>
              <span className="text-sm sm:text-base text-[#4B5563]">
                Reduced IT overhead
              </span>
            </div>
          </div>
          
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

export default EnterpriseGrid;