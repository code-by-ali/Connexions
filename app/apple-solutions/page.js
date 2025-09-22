import React from "react";
import StillHaveQuestions from "../components/apple-solutions.js/StillHaveQuestions";
import AppleCareSupport from "../components/apple-solutions.js/AppleCareSupport";
import StartClosing from "../components/apple-solutions.js/StartClosing";
import AppleCTA from "../components/apple-solutions.js/AppleCTA";
import AppleWorkSection from "../components/apple-solutions.js/AppleWorkSection";
import SecurityMDMIntegration from "../components/apple-solutions.js/SecurityMDMIntegration ";
import AppleLineup from "../components/apple-solutions.js/AppleLineup";
import AppleTeamSection from "../components/apple-solutions.js/AppleTeamSection";
import AppleEcosystem from "../components/apple-solutions.js/AppleEcosystem";

const page = () => {
  return (
    <div>
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
