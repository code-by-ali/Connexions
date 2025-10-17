import React from "react";
import TradeInImg from "@/public/assets/apple-macbook-tradein-img.svg";
import CommonImage from "../common/CommonImage";

const MacBookAppleTradeIn = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-20 bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-none">
            Apple Trade In
          </h2>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-20 items-center justify-center py-10 px-0 md:px-8">
          <div className="max-w-md flex flex-col gap-6">
            <p className="font-bold text-xl md:text-2xl lg:text-3xl text-primary tracking-[0.13px]">
              Give us the old.Save on the new.
            </p>
            <p className="font-normal text-sm md:base lg:text-lg text-primary tracking-[-0.37px]">
              With Apple Trade In, you can get a great value for your current
              device and apply it toward a new one. If your device isn't
              eligible for credit, we' ll recycle it for free.
            </p>
            <button className="bg-[#A6CE39] border border-[#DEDEDE] text-white rounded-full px-6 py-3 text-sm md:text-base tracking-[-0.5px] font-normal max-w-fit">
              Explore Service
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center min-w-[300px]">
            <CommonImage
              src={TradeInImg.src || TradeInImg}
              alt="trade in image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookAppleTradeIn;
