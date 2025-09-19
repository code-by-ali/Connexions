import React from "react";
import AppleWorkGrid1 from "@/public/assets/apple-grid-1.svg";
import AppleWorkGridIcon1 from "@/public/assets/apple-work-grid-1.svg";
import AppleWorkGridIcon2 from "@/public/assets/apple-work-grid-2.svg";
import AppleWorkGrid2 from "@/public/assets/apple-grid-2.svg";
import CommonImage from "../common/CommonImage";
import { Check } from "lucide-react";

const AppleBusinessGrid = () => {
  return (
    <div className="mt-12 sm:mt-16 md:mt-20">
      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 gap-6 sm:gap-8 lg:gap-10">
        {/* First Large Card - Seamless Integration */}
        <div className="lg:col-span-2 flex flex-col lg:flex-row bg-[#F5F5F7] py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-0 gap-6 sm:gap-10 lg:gap-20 rounded-2xl">
          <div className="flex justify-center lg:justify-start">
            <CommonImage
              src={AppleWorkGrid1.src || AppleWorkGrid1}
              height={400}
              width={550}
              alt="apple-grid-img-1"
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[550px] h-auto"
            />
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-[600px] text-center lg:text-left">
            <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Seamless MDM Integartion
            </h2>
            <p className="text-[#4B5563] text-sm sm:text-base md:text-lg leading-relaxed">
              Apple Business Manager works hand-in-hand with your existing MDM
              solution
            </p>

            {/* Feature List */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="text-base md:text-lg lg:text-xl text-[#A6CE39]">
                Hands-free Setup & Control
              </p>
              <div className="flex flex-row gap-2 sm:gap-3 items-center justify-center lg:justify-start">
                <span className="text-[#A6CE39] flex-shrink-0">
                  <Check size={16} className="sm:w-4 sm:h-4" />
                </span>
                <span className="text-sm sm:text-base text-[#4B5563]">
                  Automatic device assignment upon purchase{" "}
                </span>
              </div>
              <div className="flex flex-row gap-2 sm:gap-3 items-center justify-center lg:justify-start">
                <span className="text-[#A6CE39] flex-shrink-0">
                  <Check size={16} className="sm:w-4 sm:h-4" />
                </span>
                <span className="text-sm sm:text-base text-[#4B5563]">
                  Zero touch MDM enrollment{" "}
                </span>
              </div>
              <div className="flex flex-row gap-2 sm:gap-3 items-center justify-center lg:justify-start">
                <span className="text-[#A6CE39] flex-shrink-0">
                  <Check size={16} className="sm:w-4 sm:h-4" />
                </span>
                <span className="text-sm sm:text-base text-[#4B5563]">
                  Automated policy application{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleBusinessGrid;
