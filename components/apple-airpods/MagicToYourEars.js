"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AirpodsImg1 from "@/public/assets/apple-airpods-magic-ears-img-1.svg";
import AirpodsImg2 from "@/public/assets/apple-airpods-magic-ears-img-2.svg";
import AirpodsImg3 from "@/public/assets/apple-airpods-magic-ears-img-3.svg";

const MagicToYourEars = () => {
  const images = [AirpodsImg1, AirpodsImg2, AirpodsImg3];
  const [current, setCurrent] = useState(0);

  // Auto change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-[#f5f5f7] py-16 px-4 md:px-8 text-center overflow-hidden">
      {/* Heading Section */}
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-[#1D1D1F] tracking-[0.2px] mb-2">
          Experience
        </p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1D1D1F] mb-4">
          Magic to your ears.
        </h2>
        <p className="text-[#6E6E73] text-base md:text-lg lg:text-xl tracking-[0.22px] mt-6 leading-snug">
          AirPods Pro 3 are packed with features that make even the simplest
          moments seem extraordinary. From the all-new Live Translation feature
          to super-convenient camera control, there's so much more to AirPods
          than meets the ear.
        </p>
      </div>

      {/* Auto-Changing Image Section */}
      <div className="flex justify-center items-center">
        <div className="w-full flex justify-center transition-all duration-700 ease-in-out">
          <Image
            key={current}
            src={images[current]}
            alt={`AirPods and iPhone image ${current + 1}`}
            className="w-[90%] sm:w-[80%] md:w-[70%] h-auto transition-transform duration-700 ease-in-out transform hover:scale-[1.02]"
            priority
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-3xl mx-auto mt-16">
        <p className="text-[#6E6E73] text-base md:text-lg lg:text-xl tracking-[0.23px]">
          <span className="text-[#1D1D1F]">With Live Translation</span>, powered
          by Apple Intelligence, you can listen to people speaking in different
          languages and hear translations through your AirPods Pro 3. To
          respond, just speak naturally and your words will appear in the other
          person's language on your iPhone screen. To make the experience even
          more magical, if you both have AirPods Pro 3, you can each speak in
          your own language and hear translations through your AirPods.
        </p>
      </div>
    </section>
  );
};

export default MagicToYourEars;
