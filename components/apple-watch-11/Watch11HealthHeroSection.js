import Watch11HealthHeroSectionImg from "@/public/assets/watch-11-health-section.svg";
import CommonImage from "../common/CommonImage";

export default function Watch11HealthHeroSection() {
  return (
    <section className="relative w-full h-full md:min-h-[600px] overflow-hidden">
      {/* Background Image with Text */}
      <CommonImage
        src={Watch11HealthHeroSectionImg.src || Watch11HealthHeroSectionImg}
        alt="Know your body by heart - Apple Watch Health"
        fill
        className="object-contain"
      />
    </section>
  );
}
