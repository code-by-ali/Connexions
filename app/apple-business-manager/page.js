import ABMAction from "@/components/apple-business-manager/ABMAction";
import ABMHelp from "@/components/apple-business-manager/ABMHelp";
import ABMIndustries from "@/components/apple-business-manager/ABMIndustries";
import AppleBusinessBanner from "@/components/apple-business-manager/AppleBusinessBanner";
import AppleBusinessEnterpriseGrid from "@/components/apple-business-manager/AppleBusinessEnterpriseGrid";
import AppleBusinessGrid from "@/components/apple-business-manager/AppleBusinessGrid";
import AppleBusinessManager from "@/components/apple-business-manager/AppleBusinessManager";
import React from "react";

const page = () => {
  return (
    <div className="font-sfpro">
      <AppleBusinessBanner />
      <AppleBusinessManager />
      <AppleBusinessEnterpriseGrid />
      <AppleBusinessGrid />
      <ABMAction />
      <ABMHelp />
      <ABMIndustries />
    </div>
  );
};

export default page;
