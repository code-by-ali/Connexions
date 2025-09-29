import AppleCareSupport from "@/components/apple-solutions.js/AppleCareSupport";
import AppleCTA from "@/components/apple-solutions.js/AppleCTA";
import AppleEcosystem from "@/components/apple-solutions.js/AppleEcosystem";
import AppleLineup from "@/components/apple-solutions.js/AppleLineup";
import AppleTeamSection from "@/components/apple-solutions.js/AppleTeamSection";
import AppleWorkSection from "@/components/apple-solutions.js/AppleWorkSection";
import SecurityMDMIntegration from "@/components/apple-solutions.js/SecurityMDMIntegration ";
import StartClosing from "@/components/apple-solutions.js/StartClosing";
import StillHaveQuestions from "@/components/apple-solutions.js/StillHaveQuestions";
import React from "react";

const page = () => {
  return (
    <div className="font-sfpro">
      <AppleCTA />
      <AppleWorkSection />
      <AppleEcosystem />
      <SecurityMDMIntegration />
      <AppleTeamSection />
      <AppleLineup />
      <AppleCareSupport />
      <StillHaveQuestions />
      <StartClosing />
    </div>
  );
};

export default page;
