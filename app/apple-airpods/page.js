import AirpodsBanner from "@/components/apple-airpods/AirpodsBanner";
import AirpodsHighlights from "@/components/apple-airpods/AirpodsHighlights";
import React from "react";

const page = () => {
  return (
    <div className="font-sfpro">
      <AirpodsBanner />
      <AirpodsHighlights />
    </div>
  );
};

export default page;
