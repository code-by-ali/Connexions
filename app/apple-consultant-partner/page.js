import React from "react";
import ConsultantBanner from "../components/apple-consultant-partner/ConsultantBanner";
import ACNPartner from "../components/apple-consultant-partner/ACNPartner";
import ProcessSteps from "../components/apple-consultant-partner/ProcessSteps";
import WhatACN from "../components/apple-consultant-partner/WhatACN";
import WhatClientsSayConsultant from "../components/apple-consultant-partner/WhatClientsSayConsultant";
import Rating from "../components/common/Rating";
import StillHaveQuestionsConsultant from "../components/apple-consultant-partner/StillHaveQuestionsConsultant";
import IndustriesWeServe from "../components/apple-consultant-partner/IndustriesWeServe";
import ServicesWeOffer from "../components/apple-consultant-partner/ServicesWeOffer";

const page = () => {
  return (
    <div className="font-sfpro">
      <ConsultantBanner />
      <WhatACN />
      <ACNPartner />
      <ServicesWeOffer />
      <IndustriesWeServe />
      <ProcessSteps />
      <WhatClientsSayConsultant />
      <Rating />
      <StillHaveQuestionsConsultant />
    </div>
  );
};

export default page;
