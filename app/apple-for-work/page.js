import React from "react";
import AppleWorkBanner from "../components/apple-for-work/AppleWorkBanner";
import AppleOffers from "../components/apple-for-work/AppleOffers";
import AppleWork from "../components/apple-for-work/AppleWork";
import RefreshEnterprise from "../components/apple-for-work/RefreshEnterprise";
import AppleWorkEnterpriseGrid from "../components/apple-for-work/AppleWorkEnterpriseGrid";
import AppleWorkGrid from "../components/apple-for-work/AppleWorkGrid";

const page = () => {
  return (
    <div className="font-sfpro">
      <AppleWorkBanner />
      <AppleOffers />
      <AppleWorkGrid />
      <AppleWork />
      <AppleWorkEnterpriseGrid />
      <RefreshEnterprise />
    </div>
  );
};

export default page;
