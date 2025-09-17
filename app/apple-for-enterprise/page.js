import React from "react";
import AppleBanner from "../components/apple-for-enterprise/AppleBanner";
import AppleAuthorised from "../components/apple-for-enterprise/AppleAuthorised";
import AppleGrid from "../components/apple-for-enterprise/AppleGrid";
import EnterpriseSolutions from "../components/apple-for-enterprise/EnterpriseSolutions";
import EnterpriseGrid from "../components/apple-for-enterprise/EnterpriseGrid";
import Rating from "../components/common/Rating";
import WhatClientsSay from "../components/apple-for-enterprise/WhatClientsSay";

const page = () => {
  return (
    <div className="font-sfpro">
      <AppleBanner />
      <AppleAuthorised />
      <AppleGrid />
      <EnterpriseSolutions />
      <EnterpriseGrid />
      <WhatClientsSay />
      <Rating />
    </div>
  );
};

export default page;
