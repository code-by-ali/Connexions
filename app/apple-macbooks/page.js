import BestPlaceToBuyMac from "@/components/apple-macbooks/BestPlaceToBuyMac";
import GetToKnowMac from "@/components/apple-macbooks/GetToKnowMac";
import MacBookAppleTradeIn from "@/components/apple-macbooks/MacBookAppleTradeIn";
import MacBookBanner from "@/components/apple-macbooks/MacBookBanner";
import MacBookProductList from "@/components/apple-macbooks/MacBookProductList";
import MacBookProductsSlider from "@/components/apple-macbooks/MacBookProductsSlider";
import SetupAndSupport from "@/components/apple-macbooks/SetupAndSupport";
import TheMacExperience from "@/components/apple-macbooks/TheMacExperience";
import React from "react";

const page = () => {
  return (
    <div className="font-sfpro">
      <MacBookBanner />
      <MacBookProductList />
      <MacBookProductsSlider />
      <GetToKnowMac />
      <SetupAndSupport />
      <TheMacExperience />
      <BestPlaceToBuyMac />
      <MacBookAppleTradeIn />
    </div>
  );
};

export default page;
