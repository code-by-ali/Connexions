import React from "react";
import Watch11Banner from "@/components/apple-watch-11/Watch11Banner";
import Watch11Highlights from "@/components/apple-watch-11/Watch11Highlights";
import Watch11HealthHeroSection from "@/components/apple-watch-11/Watch11HealthHeroSection";
import WatchFeatures from "@/components/apple-watch/WatchFeatures";
import BestPlaceToBuy from "@/components/product-common/BestPlaceToBuy";
import KeepExploringWatch from "@/components/apple-watch/KeepExploringWatch";
import OurValuesWatch from "@/components/apple-watch/OurValuesWatch";
import WatchLinks from "@/components/apple-watch/WatchLinks";
import AppleLinks from "@/components/product-common/AppleLinks";
import EnvironmentWatch11 from "@/components/apple-watch-11/EnvironmentWatch11";
import Watch11Safety from "@/components/apple-watch-11/Watch11Safety";

const page = () => {
  return (
    <div className="font-sfpro">
      <Watch11Banner />
      <Watch11Highlights />
      <Watch11HealthHeroSection />
      <Watch11Safety />
      <BestPlaceToBuy />
      <EnvironmentWatch11 />
      <OurValuesWatch />
      <AppleLinks />
    </div>
  );
};

export default page;
