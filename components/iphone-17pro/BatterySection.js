import CommonImage from "../common/CommonImage";
import BatterySectionImg from "@/public/assets/iphone-17-pro-battery-img.svg";

export default function BatterySection() {
  return (
    <div className="w-full">
      {/* Top Stats Section */}
      <div className="bg-[#F5F5F7] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-[-0.28px] leading-tight">
                Battery life.
                <br />
                All-time high.
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* 31 hours */}
              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base font-bold tracking-[-0.37px] text-[#86868B]">
                  Up to
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF791B] tracking-[0.2px]">
                  31 hours
                </p>
                <p className="text-sm md:text-base font-bold tracking-[-0.37px] text-[#86868B]">
                  video playback on
                  <br />
                  iPhone 17 Pro
                </p>
              </div>

              {/* 37 hours */}
              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base font-bold tracking-[-0.37px] text-[#86868B]">
                  Up to
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF791B] tracking-[0.2px]">
                  37 hours
                </p>
                <p className="text-sm md:text-base font-bold tracking-[-0.37px] text-[#86868B]">
                  video playback on
                  <br />
                  iPhone 17 Pro Max{" "}
                </p>
              </div>

              {/* 50% charge */}
              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base font-bold tracking-[-0.37px] text-[#86868B]">
                  Up to
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF791B] tracking-[0.2px]">
                  50% charge
                </p>
                <p className="text-sm md:text-base font-bold tracking-[-0.37px] text-[#86868B]">
                  in 20 minutes
                  <br />
                  with high-wattage power
                  <br />
                  adapter
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phone Image Section */}
      <CommonImage
        src={BatterySectionImg.src || BatterySectionImg}
        alt="battery-section-image"
        className="w-full h-auto"
      />
    </div>
  );
}
