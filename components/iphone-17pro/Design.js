import React from "react";
import DesignImg from "@/public/assets/iphone-17-pro-design-img.svg";
import CommonImage from "../common/CommonImage";

const Design = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-20 bg-[#F5F5F7] py-6 sm:py-8 lg:py-12 flex flex-col gap-10 items-center">
      <p className="text-[#FF791B] text-lg md:text-xl lg:text-2xl font-bold tracking-[0.22px] text-center">
        Design
      </p>
      <p className="text-primary text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-1.2px] text-center leading-tight">
        Unibody enclosure.
        <br /> Makes a strong case for itself.
      </p>
      <p className="text-[#86868B] text-base md:text-lg lg:text-xl font-bold tracking-[0.23px] max-w-3xl text-center">
        Introducing iPhone 17 Pro and iPhone 17 Pro Max, designed from the
        inside out to be the most powerful iPhone models ever made. At the core
        of the new design is a heat-forged aluminium unibody enclosure that
        maximises performance, battery capacity and durability.
      </p>
      <CommonImage src={DesignImg.src || DesignImg} alt={"design-img"} />
    </div>
  );
};

export default Design;
