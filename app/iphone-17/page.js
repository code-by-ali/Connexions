import Accessories from "@/components/iphone-17/Accessories";
import AllInFamily from "@/components/iphone-17/AllInFamily";
import AppleIntelligenceFeatures from "@/components/iphone-17/AppleIntelligenceFeatures";
import AppleLinks from "@/components/iphone-17/AppleLinks";
import Banner from "@/components/iphone-17/Banner";
import BestPlaceToBuy from "@/components/iphone-17/BestPlaceToBuy";
import CameraSection from "@/components/iphone-17/CameraSection";
import CameraSliderSection from "@/components/iphone-17/CameraSliderSection";
import Environment from "@/components/iphone-17/Environment";
import GetHighlightsSection from "@/components/iphone-17/GetHighlightsSection";
import HelpfulFeatures from "@/components/iphone-17/HelpfulFeatures";
import IosFeatureSlider from "@/components/iphone-17/IosFeatureSlider";
import OurValues from "@/components/iphone-17/OurValues";
import React from "react";

const page = () => {
  return (
    <div className="font-sfpro">
      <Banner />
      <GetHighlightsSection />
      <CameraSection />
      <CameraSliderSection />
      <AllInFamily />
      <IosFeatureSlider />
      <AppleIntelligenceFeatures />
      <HelpfulFeatures />
      <Accessories />
      <BestPlaceToBuy />
      <Environment />
      <OurValues />
      <AppleLinks />
    </div>
  );
};

export default page;
