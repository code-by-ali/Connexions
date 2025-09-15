import React from "react";
import GetHelp from "../components/contact-us/GetHelp";
import Stats from "../components/contact-us/Stats";
import FormSection from "../components/contact-us/FormSection";
import ContactTimeline from "../components/contact-us/ContactTimeline";
import AboutUs from "../components/contact-us/AboutUs";

const Page = () => {
  return (
    <div>
      <GetHelp />
      <Stats />
      <FormSection />
      <ContactTimeline />
      <AboutUs />
    </div>
  );
};

export default Page;
