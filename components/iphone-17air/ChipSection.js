import CommonImage from "../common/CommonImage";
import ChipImage from "@/public/assets/iphone-17-air-chip-section-img.svg";
export default function ChipSection() {
  return (
    <div className="w-full bg-white mt-5 md:mt-10 lg:mt-20">
      {/* Chip Image - Full Width */}
      <CommonImage
        src={ChipImage.src || ChipImage}
        alt="Chip Image"
        className="w-full h-auto object-contain rounded-3xl"
      />

      {/* Text Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-2 product-gradient-text">
            A19 Pro chip and C1X modem.
            <br />
            Hyper speed. Hyper efficient.
          </h2>

          <div className="text-[#606F7F] text-base md:text-lg lg:text-xl font-normal tracking-[0.23px] leading-normal mt-5">
            <p>
              A19 Pro delivers{" "}
              <span className="text-primary">
                the fastest CPU in any smartphone and introduces our most
                advanced GPU yet,
              </span>{" "}
              so you can enjoy even the most demanding AAA games. Each of the
              GPU cores has a built-in Neural Accelerator, providing new levels
              of capability for your daily tasks — like searches in Photos and
              Priority Notifications on iPhone 16 Pro. And with C1X, the new
              version of the Apple-designed modem, iPhone Air is the most
              power-efficient iPhone ever made.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
