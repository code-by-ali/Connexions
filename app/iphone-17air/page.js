import Banner from "@/components/iphone-17air/Banner";
import CameraAirSection from "@/components/iphone-17air/CameraAirSection";
import ChipSection from "@/components/iphone-17air/ChipSection";
import GetHighlightsAir from "@/components/iphone-17air/GetHighlightsAir";
import KeepExploringAir from "@/components/iphone-17air/KeepExploringAir";
import PowerSection from "@/components/iphone-17air/PowerSection";
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
      <GetHighlightsAir />
      <CameraAirSection />
      <PowerSection />
      <ChipSection />
      <AllInFamily />
      <IosFeatureSlider />
      <AppleIntelligenceFeatures />
      <HelpfulFeatures />
      <Accessories />
      <BestPlaceToBuy />
      <KeepExploringAir />
      <Environment />
      <OurValues />
      <AppleLinks />
    </div>
  );
};

export default page;
