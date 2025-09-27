import React from "react";
import Banner from "../components/iphone-17/Banner";
import GetHighlightsSection from "../components/iphone-17/GetHighlightsSection";
import CameraSection from "../components/iphone-17/CameraSection";
import Environment from "../components/iphone-17/Environment";
import OurValues from "../components/iphone-17/OurValues";
import AllInFamily from "../components/iphone-17/AllInFamily";
import Accessories from "../components/iphone-17/Accessories";
import AppleLinks from "../components/iphone-17/AppleLinks";

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
