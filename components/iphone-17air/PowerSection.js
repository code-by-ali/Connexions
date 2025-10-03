import PowerImg from "@/public/assets/iphone-17-air-power-section-img.svg";
import CommonImage from "../common/CommonImage";

export default function PowerSection() {
  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-left mb-12 max-w-2xl">
          <p className="text-[#495861] text-base md:text-lg lg:text-xl font-normal tracking-[0.23px] mb-2">
            Performance and battery life
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-[-0.14px] product-gradient-text">
            Power in a new light.
          </h2>
        </div>

        {/* iPhone Image */}
        <div className="mb-16">
          <div className="relative max-w-6xl mx-auto">
            <CommonImage
              src={PowerImg.src || PowerImg}
              alt="Power Section Image"
            />
          </div>
        </div>

        <div className="max-w-2xl flex flex-col justify-start items-start">
          <div className="flex flex-row gap-20 mb-12 w-full mx-auto">
            <div className="text-left">
              <p className="text-base md:text-lg lg:text-xl font-medium text-primary tracking-[0.23px] mb-2">
                A19 Pro
              </p>
              <p className="text-sm md:text-base lg:text-lg font-normal text-[#606F7F] tracking-[-0.37px]">
                chip
              </p>
            </div>
            <div className="text-left">
              <p className="text-base md:text-lg lg:text-xl font-medium text-primary tracking-[0.23px] mb-2">
                N1
              </p>
              <p className="text-sm md:text-base lg:text-lg font-normal text-[#606F7F] tracking-[-0.37px]">
                chip
              </p>
            </div>
            <div className="text-left">
              <p className="text-base md:text-lg lg:text-xl font-medium text-primary tracking-[0.23px] mb-2">
                C1X
              </p>
              <p className="text-sm md:text-base lg:text-lg font-normal text-[#606F7F] tracking-[-0.37px]">
                modem
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-base md:text-lg lg:text-xl font-normal text-[#606F7F] tracking-[0.23px] text-left">
              iPhone Air was designed to deliver{" "}
              <span className="text-primary">
                pro performance in the thinnest iPhone ever.
              </span>
              Bringing together the power of our latest-generation Apple silicon
              and the efficiency of the A19 Pro chip, advanced features like
              Clean Up in Photos, Apple Intelligence or graphics-intensive
              gaming happen smoothly and effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
