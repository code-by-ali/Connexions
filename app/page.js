import FAQ from "./components/home/FAQ";
import ClientsSection from "./components/home/ClientsSection";
import ServicesSection from "./components/home/ServicesSection";
import FeaturesSlider from "./components/home/FeaturesSlider";
import AboutUsShowcase from "./components/home/AboutUsShowcase";
import WhatYouGet from "./components/home/WhatYouGet";
import ConnectBanner from "./components/common/ConnectBanner";
import PhoneLaunchPartnersSection from "./components/home/PhoneLaunchPartnersSection";

export default function Home() {
  return (
    <div>
      <PhoneLaunchPartnersSection />
      <WhatYouGet />
      <FeaturesSlider />
      <AboutUsShowcase />
      <ServicesSection />
      <ClientsSection />
      <FAQ />
      <ConnectBanner />
    </div>
  );
}
