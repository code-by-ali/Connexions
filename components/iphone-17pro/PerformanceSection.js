import PerformanceImg from "@/public/assets/iphone-17-pro-performance-img.svg";
import CommonImage from "../common/CommonImage";
const PerformanceSection = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center flex flex-col gap-6">
        <p className="text-[#FF791B] font-bold text-lg md:text-xl lg:text-2xl tracking-[0.22px]">
          Performance
        </p>
        <h2 className="text-primary text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-1.2px] text-center">
          New dimensions
          <br />
          in power.
        </h2>
        <p className="text-[#86868B] font-bold text-base md:text-lg lg:text-xl max-w-3xl mx-auto mt-8">
          Whether you're working with intensive graphics or massive media files,
          iPhone 17 Pro offers blazing-fast performance — with advanced cooling
          technology. An Apple- designed laser-welded vapour chamber works with
          the aluminium unibody structure to efficiently move heat away from the
          A19 Pro, allowing for even more powerful performance. This
          breakthrough in thermal management is key to the most powerful iPhone
          ever created.
        </p>
      </div>

      {/* Phone Image Section */}

      <CommonImage
        src={PerformanceImg.src || PerformanceImg}
        alt="iPhone 17 Pro gaming display"
        className="w-full h-auto"
      />

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* A19 Pro chip */}
          <div>
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-primary tracking-[0.23px] mb-4">
              A19 Pro chip
            </h3>
            <p className="border-0 border-t-1 border-[#E9E9E9] pt-4 text-[#86868B] text-sm md:text-base tracking-[-0.37px] font-bold leading-relaxed">
              The Apple silicon powering iPhone 17 Pro delivers the highest
              iPhone performance ever, ideal for advanced gaming and the most
              demanding tasks.
            </p>
          </div>

          {/* Graphics and speed */}
          <div>
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-primary tracking-[0.23px] mb-4">
              Graphics and speed
            </h3>
            <p className="border-0 border-t-1 border-[#E9E9E9] pt-4 text-[#86868B] text-sm md:text-base tracking-[-0.37px] font-bold leading-relaxed">
              Paired with an innovative thermal design, the GPU and CPU deliver
              up to <span className="text-[#FF791B]">40% better</span> sustained
              performance.
            </p>
          </div>

          {/* Neural Accelerators */}
          <div>
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-primary tracking-[0.23px] mb-4">
              Neural Accelerators
            </h3>
            <p className="border-0 border-t-1 border-[#E9E9E9] pt-4 text-[#86868B] text-sm md:text-base tracking-[-0.37px] font-bold leading-relaxed">
              With Neural Accelerators integrated into each GPU core, iPhone 17
              Pro is more powerful than ever when working with local AI models.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
