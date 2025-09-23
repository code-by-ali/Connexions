import React from "react";
import GetHelp from "../components/contact-us/GetHelp";
import Stats from "../components/contact-us/Stats";
import FormSection from "../components/contact-us/FormSection";
import ContactTimeline from "../components/contact-us/ContactTimeline";
import AboutUs from "../components/contact-us/AboutUs";
import Rating from "../components/common/Rating";
import ConnectBanner from "../components/common/ConnectBanner";

const Page = () => {
  return (
    <div>
      <GetHelp />
      <Stats />
      <FormSection />
      <ContactTimeline />
      <AboutUs />
      <Rating />
      <ConnectBanner />
    </div>
  );
};

export default Page;
