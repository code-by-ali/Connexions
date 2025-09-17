import React from "react";
import AppleGrid1 from "@/public/assets/apple-grid-1.svg";
import AppleGridKey from "@/public/assets/apple-grid-key.svg";
import AppleGridBook from "@/public/assets/apple-grid-book.svg";
import AppleGrid2 from "@/public/assets/apple-grid-2.svg";
import AppleGrid3 from "@/public/assets/apple-grid-3.svg";

import Image from "next/image";

const AppleWorkGrid = () => {
  return (
    <div className="mt-12 sm:mt-16 md:mt-20">
      {/* Header Section */}
      <div className="flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8">
        <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold">
          Built for Every Team, Trusted by IT
        </h2>
        {/* <p className="text-[#4B5563] text-sm sm:text-base md:text-xl text-center max-w-4xl mx-auto">
          Discover the advantages that make Apple the preferred choice for
          forward-thinking businesses worldwide.
        </p> */}
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 gap-6 sm:gap-8 lg:gap-10">
        {/* First Large Card - Seamless Integration */}
        <div className="lg:col-span-2 flex flex-col lg:flex-row justify-between bg-[#F5F5F7] py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-0 gap-6 sm:gap-10 lg:gap-20 rounded-2xl">
          <div className="flex justify-center lg:justify-start">
            <Image
              src={AppleGrid1}
              height={400}
              width={550}
              unoptimized
              alt="apple-grid-img-1"
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[550px] h-auto"
            />
          </div>
          <div className="flex items-center justify-center flex-1 lg:pr-10">
            <div className="text-center lg:text-left max-w-[400px] text-lg sm:text-xl font-bold">
              <span className="text-primary mb-2 sm:mb-3">CXOs</span>
              <span className="text-[#4B5563] ml-2">
                Seamless remote work, top-tier performance.
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Security Card */}
        <div className="py-6 sm:py-8 lg:py-10 px-6 sm:px-10 lg:px-14 bg-[#F5F5F7] flex flex-col sm:flex-row items-start gap-4 sm:gap-6 rounded-2xl">
          <div className="flex-shrink-0 flex justify-center sm:justify-start w-full sm:w-auto">
            <Image
              unoptimized
              src={AppleGridKey}
              alt="apple-key"
              width={80}
              height={80}
              className="w-12 sm:w-12 lg:w-16 h-12 sm:h-12 lg:h-16 object-contain"
            />
          </div>
          <div className="flex-1 text-lg sm:text-xl text-left font-bold">
            <span className="text-[#1D1D1F] mb-2 sm:mb-3 block">IT Heads.</span>
            <span className="text-[#4B5563] block">
              Zero-trust security, scalable deployment
            </span>
          </div>
        </div>

        {/* Enterprise Mobility Card */}
        <div className="py-6 sm:py-8 lg:py-10 px-6 sm:px-10 lg:px-14 bg-[#F5F5F7] flex flex-col sm:flex-row items-start gap-4 sm:gap-6 rounded-2xl">
          <div className="flex-shrink-0 flex justify-center sm:justify-start w-full sm:w-auto">
            <Image
              unoptimized
              src={AppleGridBook}
              alt="apple-book"
              width={80}
              height={80}
              className="w-12 sm:w-12 lg:w-16 h-12 sm:h-12 lg:h-16 object-contain"
            />
          </div>
          <div className="flex-1 text-lg sm:text-xl text-left font-bold">
            <span className="text-primary mb-2 sm:mb-3 block">Finance.</span>
            <span className="text-[#4B5563] block">
              Lower TCO, longer product lifecycle, high resale value
            </span>
          </div>
        </div>

        {/* Second Large Card - Right Image */}
        <div className="lg:col-span-2 flex flex-col lg:flex-row-reverse justify-between bg-[#F5F5F7] py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-0 gap-6 sm:gap-10 lg:gap-20 rounded-2xl">
          <div className="flex justify-center lg:justify-end">
            <Image
              className="rounded-2xl lg:rounded-tr-2xl lg:rounded-br-2xl lg:rounded-tl-none lg:rounded-bl-none w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[550px] h-auto"
              src={AppleGrid3}
              height={400}
              width={550}
              unoptimized
              alt="apple-grid-img-2"
            />
          </div>
          <div className="flex items-center justify-center flex-1 lg:pl-10">
            <div className="text-lg sm:text-xl text-center lg:text-left max-w-[400px] font-bold">
              <span className="text-primary mb-2 sm:mb-3">Employees.</span>
              <span className="text-[#4B5563] ml-2">
                Familiar, intuitive interfaces with powerful capabilities
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleWorkGrid;
