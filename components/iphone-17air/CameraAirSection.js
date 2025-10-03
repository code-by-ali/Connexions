import React from "react";
import CommonImage from "../common/CommonImage";
import CameraImg from "@/public/assets/iphone-17-air-camera-img.svg";

const CameraAirSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20 flex flex-col items-center">
      <div className="flex flex-col max-w-3xl w-full">
        <p className="product-gradient-text w-full text-2xl md:text-3xl lg:text-4xl font-normal z-10">
          Smile.
          <br />
          It's the world's
          <br />
          favourite camera.
        </p>
        <CommonImage
          src={CameraImg.src || CameraImg}
          alt="iPhone Air Camera Image"
          className="mt-[-50px] w-auto h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default CameraAirSection;
