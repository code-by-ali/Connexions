import CommonImage from "../common/CommonImage";
import AirpodsBatteryImg1 from "@/public/assets/airpods-battery-section-img-1.svg";
import AirpodsBatteryImg2 from "@/public/assets/airpods-battery-section-img-2.svg";

export default function AirPodsBatterySection() {
  return (
    <section className="bg-[#F5F5F7] py-16 px-4 sm:px-6 lg:px-8">
      {/* First Section - Battery Life */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        {/* Top Text */}
        <div className="mb-8">
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-[#1D1D1F] mb-2">
            All-day battery life
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1D1D1F] mb-6">
            They're workin'
            <br />9 to 5.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#6E6E73] max-w-2xl mx-auto leading-tight">
            The MagSafe Charging Case is full of helpful features — like a
            built-in speaker and more powerful Precision Finding — that let you
            keep track of your AirPods Pro 3 no matter where they are. And now
            just a single charge will take you all the way through the workday.
            Plus overtime.
          </p>
        </div>

        {/* AirPods Image */}
        <div className="my-12 relative w-full max-w-md mx-auto">
          <CommonImage
            src={AirpodsBatteryImg1.src || AirpodsBatteryImg1}
            alt="AirPods in charging case"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>
        {/* Bottom Feature */}
        <div className="mt-12">
          <p className="text-base md:text-lg font-bold text-[#6E6E73] max-w-xl mx-auto tracking-[0.23px]">
            Up to
          </p>
          <h3 className="text-5xl sm:text-6xl font-bold text-[#1D1D1F] mb-4">
            8 hours
          </h3>
          <p className="text-base md:text-lg font-bold text-[#6E6E73] max-w-xl mx-auto tracking-[0.23px]">
            of battery life with Active Noise
            <br />
            Cancellation on a single charge
          </p>
          <div class="flex justify-center">
            <hr class="w-1/2 border border-[#00C866] my-4" />
          </div>
          <p className="text-base md:text-lg lg:text-xl text-[#6E6E73] mt-2 font-bold tracking-[0.23px] text-center">
            <span className="text-primary">2 hours more</span> than
            <br />
            AirPods Pro 2
          </p>
        </div>
      </div>

      {/* Second Section - Precision Finding */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden p-6 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-[0.13px] mb-4">
                Find My, with
                <br />
                Precision Finding
              </h2>
              <p className="text-base md:text-lg text-[#6E6E73] mb-6 leading-relaxed tracking-tight md:tracking-[0.23px]">
                Lost one or the AirPods case? Just ping it with your iPhone and
                use Find My to locate it. If it's nearby, Precision Finding will
                help you track down its exact whereabouts via distance and
                direction by using your iPhone or iPad in seconds in the same
                way the case alerts and plays a sound to help you find it.
              </p>
              <div className="space-y-1">
                <p className="text-base md:text-lg text-[#6E6E73] font-bold">
                  <span className="text-[#1D1D1F]">1.5x increase with</span>
                  <br />
                  AirPods Pro 3
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-64 lg:h-full min-h-[300px]">
              <CommonImage
                src={AirpodsBatteryImg2.src || AirpodsBatteryImg2}
                alt="Precision Finding on iPhone"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
