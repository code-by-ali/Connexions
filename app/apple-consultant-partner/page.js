import ACNPartner from "@/components/apple-consultant-partner/ACNPartner";
import ConsultantBanner from "@/components/apple-consultant-partner/ConsultantBanner";
import IndustriesWeServe from "@/components/apple-consultant-partner/IndustriesWeServe";
import ProcessSteps from "@/components/apple-consultant-partner/ProcessSteps";
import ServicesWeOffer from "@/components/apple-consultant-partner/ServicesWeOffer";
import StillHaveQuestionsConsultant from "@/components/apple-consultant-partner/StillHaveQuestionsConsultant";
import WhatACN from "@/components/apple-consultant-partner/WhatACN";
import WhatClientsSayConsultant from "@/components/apple-consultant-partner/WhatClientsSayConsultant";
import Rating from "@/components/common/Rating";
import React from "react";

const page = () => {
  return (
    <div className="font-sfpro">
      <ConsultantBanner />
      <WhatACN />
      <ACNPartner />
      <ServicesWeOffer />
      <IndustriesWeServe />
      <ProcessSteps />
      {/* <WhatClientsSayConsultant /> */}
      <Rating />
      <StillHaveQuestionsConsultant />
    </div>
  );
};

export default page;
