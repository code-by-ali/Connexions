import Image from "next/image";
import FAQ from "./components/home/FAQ";
import ClientsSection from "./components/home/ClientsSection";
import ServicesSection from "./components/home/ServicesSection";
import FeaturesSlider from "./components/home/FeaturesSlider";
import AboutUsShowcase from "./components/home/AboutUsShowcase";

export default function Home() {
  return (
    <div>
      <FeaturesSlider />
      {/* <AboutUsShowcase /> */}
      <ServicesSection />
      <ClientsSection />
      <FAQ />
    </div>
  );
}
