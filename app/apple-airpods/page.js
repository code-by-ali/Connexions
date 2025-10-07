import AirpodsBanner from "@/components/apple-airpods/AirpodsBanner";
import AirpodsHighlights from "@/components/apple-airpods/AirpodsHighlights";
import BestBuyAirpods from "@/components/apple-airpods/BestBuyAirpods";
import EnvironmentAirpods from "@/components/apple-airpods/EnvironmentAirpods";
import KeepExploringAirpods from "@/components/apple-airpods/KeepExploringAirpods";
import MagicToYourEars from "@/components/apple-airpods/MagicToYourEars";
import OurValuesAirpods from "@/components/apple-airpods/OurValuesAirpods";
import React from "react";

const page = () => {
  return (
    <div className="font-sfpro">
      <AirpodsBanner />
      <AirpodsHighlights />
      <BestBuyAirpods />
      <MagicToYourEars />
      <KeepExploringAirpods />
      <EnvironmentAirpods />
      <OurValuesAirpods />
    </div>
  );
};

export default page;
