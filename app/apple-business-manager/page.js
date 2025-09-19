import React from "react";
import AppleBusinessBanner from "../components/apple-business-manager/AppleBusinessBanner";
import AppleBusinessManager from "../components/apple-business-manager/AppleBusinessManager";
import ABMHelp from "../components/apple-business-manager/ABMHelp";
import AppleBusinessEnterpriseGrid from "../components/apple-business-manager/AppleBusinessEnterpriseGrid";
import AppleBusinessGrid from "../components/apple-business-manager/AppleBusinessGrid";
import ABMAction from "../components/apple-business-manager/ABMAction";
import ABMIndustries from "../components/apple-business-manager/ABMIndustries";

const page = () => {
  return (
    <div className="font-sfpro">
      <AppleBusinessBanner />
      <AppleBusinessManager />
      <AppleBusinessEnterpriseGrid />
      <AppleBusinessGrid />
      <ABMAction />
      <ABMHelp />
      <ABMIndustries/>
    </div>
  );
};

export default page;
