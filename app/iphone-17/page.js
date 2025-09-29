import Accessories from "@/components/iphone-17/Accessories";
import AllInFamily from "@/components/iphone-17/AllInFamily";
import AppleLinks from "@/components/iphone-17/AppleLinks";
import Banner from "@/components/iphone-17/Banner";
import CameraSection from "@/components/iphone-17/CameraSection";
import Environment from "@/components/iphone-17/Environment";
import GetHighlightsSection from "@/components/iphone-17/GetHighlightsSection";
import OurValues from "@/components/iphone-17/OurValues";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <GetHighlightsSection />
      <CameraSection />
      <AllInFamily />
      <Accessories />
      <Environment />
      <OurValues />
      <AppleLinks />
    </div>
  );
};

export default page;
