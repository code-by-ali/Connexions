import React from "react";

const Stats = () => {
  const commonClassWrapper =
    "flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 h-full";

  const commonClassHeader =
    "text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold";
  const commonClassSubtitle =
    "text-[#4E5B6D] text-sm sm:text-base md:text-lg text-center md:text-left";

  return (
    <div className="w-full px-6 md:px-20 py-10 flex flex-col md:flex-row justify-between items-stretch gap-8">
      <div className={commonClassWrapper}>
        <span className={commonClassHeader}>10K+</span>
        <span className={commonClassSubtitle}>
          Enterprises empowered with <br /> tailored IT solutions.
        </span>
      </div>
      <div className={commonClassWrapper}>
        <span className={commonClassHeader}>95%</span>
        <span className={commonClassSubtitle}>
          Client retention rate across<br /> industries.
        </span>
      </div>
      <div className={commonClassWrapper}>
        <span className={commonClassHeader}>500+</span>
        <span className={commonClassSubtitle}>
          Enterprise deployments completed <br /> successfully
        </span>
      </div>
    </div>
  );
};

export default Stats;