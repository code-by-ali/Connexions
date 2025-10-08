import AppleAuthorised from "@/components/apple-for-enterprise/AppleAuthorised";
import AppleBanner from "@/components/apple-for-enterprise/AppleBanner";
import AppleGrid from "@/components/apple-for-enterprise/AppleGrid";
import EnterpriseGrid from "@/components/apple-for-enterprise/EnterpriseGrid";
import EnterpriseSolutions from "@/components/apple-for-enterprise/EnterpriseSolutions";
import WhatClientsSay from "@/components/apple-for-enterprise/WhatClientsSay";
import Rating from "@/components/common/Rating";
import React from "react";

const page = () => {
  return (
    <div className="font-sfpro">
      <AppleBanner />
      <AppleAuthorised />
      <AppleGrid />
      <EnterpriseSolutions />
      <EnterpriseGrid />
      {/* <WhatClientsSay /> */}
      <Rating />
    </div>
  );
};

export default page;
