import React from "react";

const Stats = () => {
  const commonClassWrapper =
    "flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4";

  const commonClassHeader =
    "text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold";
  const commonClassSubtitle =
    "text-[#4E5B6D] text-sm sm:text-base md:text-lg text-center md:text-left";

  return (
    <div className="w-full px-6 md:px-20 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className={commonClassWrapper}>
        <span className={commonClassHeader}>1M+</span>
        <span className={commonClassSubtitle}>
          Customers visit connexions <br /> every month.
        </span>
      </div>
      <div className={commonClassWrapper}>
        <span className={commonClassHeader}>93%</span>
        <span className={commonClassSubtitle}>
          Satisfaction rate from our <br /> customers.
        </span>
      </div>
      <div className={commonClassWrapper}>
        <span className={commonClassHeader}>4.9</span>
        <span className={commonClassSubtitle}>
          Average customer ratings <br /> out of 5.00!
        </span>
      </div>
    </div>
  );
};

export default Stats;
