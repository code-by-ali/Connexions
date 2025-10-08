import WatchBanner from "@/components/apple-watch/WatchBanner";
import WatchFeatures from "@/components/apple-watch/WatchFeatures";
import WatchHighlights from "@/components/apple-watch/WatchHighlights";
import WatchHealthSection from "@/components/apple-watch/WatchHealthSection";
import React from "react";
import BestPlaceToBuy from "@/components/product-common/BestPlaceToBuy";
import KeepExploringWatch from "@/components/apple-watch/KeepExploringWatch";
import EnvironmentWatch from "@/components/apple-watch/EnvironmentWatch";
import OurValuesWatch from "@/components/apple-watch/OurValuesWatch";
import WatchLinks from "@/components/apple-watch/WatchLinks";
import AppleLinks from "@/components/product-common/AppleLinks";

const page = () => {
  return (
    <div className="font-sfpro">
      <WatchBanner />
      <WatchHighlights />
      <WatchFeatures />
      <WatchHealthSection />
      <BestPlaceToBuy />
      <KeepExploringWatch />
      <EnvironmentWatch />
      <OurValuesWatch />
      {/* <WatchLinks /> */}
      <AppleLinks />
    </div>
  );
};

export default page;
