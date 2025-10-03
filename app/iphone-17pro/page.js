import Banner from "@/components/iphone-17pro/Banner";
import BatterySection from "@/components/iphone-17pro/BatterySection";
import Design from "@/components/iphone-17pro/Design";
import KeepExploringPro from "@/components/iphone-17pro/KeepExploringPro";
import PerformanceSection from "@/components/iphone-17pro/PerformanceSection";
import ProCamera from "@/components/iphone-17pro/ProCamera";
import ProVideo from "@/components/iphone-17pro/ProVideo";
import Accessories from "@/components/product-common/Accessories";
import AllInFamily from "@/components/product-common/AllInFamily";
import AppleIntelligenceFeatures from "@/components/product-common/AppleIntelligenceFeatures";
import AppleLinks from "@/components/product-common/AppleLinks";
import BestPlaceToBuy from "@/components/product-common/BestPlaceToBuy";
import Environment from "@/components/product-common/Environment";
import HelpfulFeatures from "@/components/product-common/HelpfulFeatures";
import IosFeatureSlider from "@/components/product-common/IosFeatureSlider";
import OurValues from "@/components/product-common/OurValues";
import React from "react";

const page = () => {
  return (
    <div className="font-sfpro">
      <Banner />
      <Design />
      <ProCamera />
      <ProVideo />
      <PerformanceSection />
      <BatterySection />
      <AllInFamily />
      <IosFeatureSlider />
      <AppleIntelligenceFeatures />
      <HelpfulFeatures />
      <Accessories />
      <BestPlaceToBuy />
      <KeepExploringPro />
      <Environment />
      <OurValues />
      <AppleLinks />
    </div>
  );
};

export default page;
