import React from "react";
import CommonImage from "../common/CommonImage";
import VideoImg from "@/public/assets/iphone-17-pro-video-img.svg";

const ProVideo = () => {
  return (
    <div className="flex flex-col gap-10 items-center py-10">
      <div className="flex flex-col gap-4 max-w-2xl items-center">
        <p className="text-[#FF791B] font-bold text-lg md:text-xl lg:text-2xl tracking-[0.22px]">
          Pro video
        </p>
        <p className="text-primary text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-1.2px] text-center">
          Any more pro and it need an agent.
        </p>
      </div>
      <div>
        <CommonImage src={VideoImg.src || VideoImg} alt="phone-image" />
      </div>
    </div>
  );
};

export default ProVideo;
