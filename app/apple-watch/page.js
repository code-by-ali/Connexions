import WatchBanner from "@/components/apple-watch/WatchBanner";
import WatchFeatures from "@/components/apple-watch/WatchFeatures";
import WatchHighlights from "@/components/apple-watch/WatchHighlights";
import WatchHealthSection from "@/components/apple-watch/WatchHealthSection";
import React from "react";
import BestPlaceToBuy from "@/components/product-common/BestPlaceToBuy";

const page = () => {
  return (
    <div className="font-sfpro">
      <WatchBanner />
      <WatchHighlights />
      <WatchFeatures />
      <WatchHealthSection />
      <BestPlaceToBuy />
    </div>
  );
};

export default page;
