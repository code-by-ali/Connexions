import React from "react";
import CameraImg from "@/public/assets/iphone-17-camera-img.svg";
import CommonImage from "../common/CommonImage";

const CameraSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20 flex flex-col items-center gap-8">
      {/* Text Section */}
      <div className="flex flex-col gap-4 items-center self-center text-center">
        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold tracking-[0.2px] leading-tight text-primary">
          Cameras.
        </p>

        {/* Gradient Text */}
        <p className="max-w-3xl text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-1.2px] leading-tight text-gradient">
          18MP Center Stage front camera. It’s a total frame changer.
        </p>
      </div>

      {/* Image */}
      <div className="flex items-center justify-center">
        <CommonImage src={CameraImg.src || CameraImg} alt="camera-img" />
      </div>
    </div>
  );
};

export default CameraSection;
