// components/CameraSection.jsx
import CameraImage from "@/public/assets/iphone-17-pro-camera-img.svg";
import CommonImage from "../common/CommonImage";

const ProCamera = () => {
  return (
    <section className="px-0 py-16 flex flex-col gap-5 md:gap-10 lg:gap-20 items-center">
      <div className="flex flex-col gap-4 items-center">
        <p className="text-[#FF791B] font-bold tracking-[0.22px] text-lg md:text-xl lg:text-2xl">
          Cameras
        </p>
        <h2 className="text-primary text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-1.2px]">
          A big zoom forward.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 w-full">
        <div className="flex-2">
          <CommonImage
            src={CameraImage.src || CameraImage}
            alt="iPhone Camera"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-0">
              <p className="text-[#86868B] font-bold text-base md:text-lg lg:text-xl tracking-[0.23px]">
                Up to
              </p>
              <p className="text-[#FF791B] font-bold text-3xl md:text-4xl lg:text-5xl tracking-[-0.14px]">
                8x
              </p>
              <p className="text-[#86868B] font-bold text-base md:text-lg lg:text-xl tracking-[0.23px]">
                optical-quality zoom
              </p>
            </div>
            <div className="flex flex-col gap-0">
              <p className="text-[#86868B] font-bold text-base md:text-lg lg:text-xl tracking-[0.23px]">
                All
              </p>
              <p className="text-[#FF791B] font-bold text-3xl md:text-4xl lg:text-5xl tracking-[-0.14px]">
                48MP
              </p>
              <p className="text-[#86868B] font-bold text-base md:text-lg lg:text-xl tracking-[0.23px]">
                rear cameras
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl px-4">
        <p className="text-[#86868B] text-sm md:text-base lg:text-lg text-center font-bold tracking-[0.23px]">
          Across the iPhone 17 Pro camera system, you'll find innovation that
          goes to great lengths. This includes{" "}
          <span className="text-[#FF791B]">
            the longest iPhone Telephoto ever
          </span>
          , up to an equivalent 200-millimetre focal length, with the next
          generation of our tetraprism design and 56% larger sensor. So you can
          explore an even wider range of creative choices and add a longer reach
          to your compositions with 16x optical zoom range. And capture stunning
          low-light photographs and incredible video.
        </p>
      </div>
    </section>
  );
};

export default ProCamera;
