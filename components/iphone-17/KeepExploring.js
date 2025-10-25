import { ChevronRight } from "lucide-react";
import React from "react";
import KeepExploringBaseCameraIcon from "@/public/assets/iphone-17-keep-exploring-base-camera-icon.svg";
import KeepExploringAirCameraIcon from "@/public/assets/iphone-17-keep-exploring-air-camera-icon.svg";
import KeepExploringChipIcon from "@/public/assets/iphone-17-keep-exploring-chip-icon.svg";
import KeepExploringProChipIcon from "@/public/assets/iphone-17-keep-exploring-pro-chip-icon.svg";
import KeepExploringBatteryIcon from "@/public/assets/iphone-17-keep-exploring-battery-icon.svg";
import KeepExploringAppleIntelligenceIcon from "@/public/assets/iphone-17-keep-exploring-apple-intelligence-icon.svg";

import KeepExploringBaseImage from "@/public/assets/iphone-17-keep-exploring-base-img.png";
import KeepExploringAirImage from "@/public/assets/iphone-17-keep-exploring-air-img.png";

import CommonImage from "../common/CommonImage";
import Link from "next/link";

const KeepExploring = () => {
  return (
    <div className="pt-4 sm:pb-20 md:pb-40 lg:pb-60 bg-[#F5F5F7] flex flex-col gap-6 items-center lg:px-20">
      {/* Compare banner */}
      {/* <div className="bg-[#E8E8EDB8] px-3 py-1 inline-flex gap-4 items-center rounded-full">
        <span>Compare all iPhone models</span>
        <span className="p-1 bg-[#0071E3] rounded-full">
          <ChevronRight className="text-white" />
        </span>
      </div> */}

      {/* Heading row */}
      <div className="w-full flex flex-col gap-4 px-4 md:flex-row justify-between items-start md:items-center ">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-[-0.28px] md:px-0 md:gap-0">
          Keep exploring iPhone.
        </p>
        {/* <div className="flex gap-4 items-center font-normal text-[#0066CC]">
          <span className="text-sm md:text-base">Explore all iPhone</span>
          <ChevronRight />
        </div> */}
      </div>

      {/* Comparison grid */}
      <div className="bg-[#F5F5F7] lg:bg-white w-full rounded-3xl mt-5 md:mt-10 px-4 pb-5 md:pb-10 lg:pb-30">
        <div className="flex flex-row justify-between md:justify-center items-start gap-4 md:gap-10">
          {/* iPhone 17 */}
          <div className="py-5 md:py-10 flex flex-col gap-4 items-start text-left md:items-center md:text-center max-w-[500px]">
            <CommonImage
              src={KeepExploringBaseImage.src || KeepExploringBaseImage}
              className="h-auto w-auto"
            />
            <p className="text-primary text-lg md:text-xl lg:text-2xl font-bold tracking-[0.2px]">
              iPhone 17
            </p>
            <p className="text-primary font-normal text-sm md:text-base tracking-[-0.37px]">
              Even more delightful.
              <br />
              Even more durable.
            </p>
            <p className="text-primary font-bold text-sm md:text-base tracking-[-0.37px]">
              From ₹82900.00 <br /> or ₹6492.00/mo. for 12 mo.
            </p>
            <div className="flex flex-col gap-2 mt-4 items-start md:items-center text-sm md:text-base tracking-[-0.37px] h-[90px] md:h-auto">
              <p className="text-[#424245] px-4 py-2">Currently Viewing</p>
              <Link
                href={"/contact-us"}
                target="_blank"
                className="text-[#0066CC] flex items-center"
              >
                Buy <ChevronRight size={16} className="ml-1 mt-1" />
              </Link>
            </div>

            <hr className="my-4 border-[#D2D2D7] w-full" />

            <div className="flex flex-col gap-4 items-start md:items-center text-xs font-normal tracking-[-0.12px]">
              <div className="flex flex-col gap-2 items-start md:items-center text-primary">
                <p className="text-lg md:text-xl lg:text-2xl font-bold tracking-[0.2px]">
                  15.93 cm
                </p>
                <p>(6.3") Super Retina XDR display</p>
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={46}
                  src={
                    KeepExploringBaseCameraIcon.src ||
                    KeepExploringBaseCameraIcon
                  }
                  alt="icon-1.1"
                />
                <p>48MP Dual Fusion camera system</p>
                <p>48MP Fusion Main</p>
                <p>48MP Fusion Ultra Wide</p>
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={36}
                  src={KeepExploringChipIcon.src || KeepExploringChipIcon}
                  alt="icon-1.2"
                />
                <p>A19 Chip</p>
                <p>5-core GPU with Neural Accelarators</p>
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={46}
                  src={KeepExploringBatteryIcon.src || KeepExploringBatteryIcon}
                  alt="icon-1.3"
                />
                <p>Up to 30 hours video playback</p>
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={42}
                  src={
                    KeepExploringAppleIntelligenceIcon.src ||
                    KeepExploringAppleIntelligenceIcon
                  }
                  alt="icon-1.4"
                />
                <p>Apple Intelligence</p>
              </div>
              <div className="text-left md:text-center max-w-xs">
                iPhone 17 has a beautiful, durable design that's available in
                five refined colours. It features the new 48MP Dual Fusion
                camera system, the new Center Stage front camera for smarter
                group selfies and Dual Capture video. The powerful A19 chip
                delivers advanced performance and all-day battery life. Larger,
                15.93 cm (6.3″) Super Retina XDR display with ProMotion up to
                120Hz. 3x better scratch resistance with Ceramic Shield 2 front.
                Fast charge up to 50% in 20 minutes. Helpful Apple Intelligence
                tools like Clean Up and more.
              </div>
            </div>
          </div>

          {/* iPhone 17 Air */}
          <div className="py-5 md:py-10 flex flex-col gap-4 items-start text-left md:items-center md:text-center max-w-[500px]">
            <CommonImage
              src={KeepExploringAirImage.src || KeepExploringAirImage}
              className="h-auto w-auto"
            />
            <p className="text-primary text-lg md:text-xl lg:text-2xl font-bold tracking-[0.2px]">
              iPhone 17 Air
            </p>
            <p className="text-primary font-normal text-sm md:text-base tracking-[-0.37px]">
              The thinnest iPhone ever.
              <br />
              With the power of pro inside.
            </p>
            <p className="text-primary font-bold text-sm md:text-base tracking-[-0.37px]">
              From ₹119900.00 <br /> or ₹9575.00/mo. for 12 mo.
            </p>
            <div className="flex flex-col gap-2 mt-4 items-start md:items-center text-sm md:text-base tracking-[-0.37px] h-[90px] md:h-auto">
              <Link
                href="/contact-us"
                target="_blank"
                className="text-white bg-[#0066CC] px-4 py-2 rounded-full"
              >
                Learn More
              </Link>
              <Link
                href={"/contact-us"}
                target="_blank"
                className="text-[#0066CC] flex items-center"
              >
                Buy <ChevronRight size={16} className="ml-1 mt-1" />
              </Link>
            </div>

            <hr className="my-4 border-[#D2D2D7] w-full" />

            <div className="flex flex-col gap-4 items-start md:items-center text-xs font-normal tracking-[-0.12px]">
              <div className="flex flex-col gap-2 items-start md:items-center text-primary">
                <p className="text-lg md:text-xl lg:text-2xl font-bold tracking-[0.2px]">
                  16.63 cm
                </p>
                <p>(6.5") Super Retina XDR display</p>
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={46}
                  src={
                    KeepExploringAirCameraIcon.src || KeepExploringAirCameraIcon
                  }
                  alt="icon-2.1"
                />
                <p>48MP Fusion camera system</p>
                <p>48MP Fusion Main</p>
                <p>—</p>
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={36}
                  src={KeepExploringProChipIcon.src || KeepExploringProChipIcon}
                  alt="icon-2.2"
                />
                <p>A19 Pro Chip</p>
                <p>5-core GPU with Neural Accelarators</p>
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={46}
                  src={KeepExploringBatteryIcon.src || KeepExploringBatteryIcon}
                  alt="icon-2.3"
                />
                <p>Up to 27 hours video playback</p>
              </div>
              <div className="flex flex-col gap-2 items-start md:items-center">
                <CommonImage
                  height={56}
                  width={42}
                  src={
                    KeepExploringAppleIntelligenceIcon.src ||
                    KeepExploringAppleIntelligenceIcon
                  }
                  alt="icon-2.4"
                />
                <p>Apple Intelligence</p>
              </div>
              <div className="text-left md:text-center max-w-xs">
                iPhone Air is the thinnest iPhone ever, powered by the A19 Pro
                chip. It's more durable than any previous iPhone, with a
                polished titanium frame, a 3x better scratch-resistant Ceramic
                Shield 2 front and a 4x more crack-resistant Ceramic Shield
                back. Smarter group selfies and Dual Capture video with the new
                Center Stage front camera. The 48MP Fusion Main camera with 2x
                Telephoto supports the latest advanced features like
                next-generation portraits and more. Immersive 16.63 cm (6.5″)
                Super Retina XDR display with ProMotion up to 120Hz. All-day
                battery life. Helpful Apple Intelligence tools like Clean Up and
                more.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeepExploring;
