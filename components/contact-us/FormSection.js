import { Users } from "lucide-react";
import React from "react";

const FormSection = () => {
  const formInputWrapper = "flex flex-col gap-2";
  const formInputWrapperColSpan = "flex flex-col gap-2 col-span-1 sm:col-span-2";

  const formLabel = "text-lg text-primary";
  const formTextInput =
    "border border-[#E9EBEF] bg-[#F8F9FA] rounded-lg py-2 px-4 text-sm outline-none w-full";

  return (
    <div className="flex flex-col justify-start items-center py-8 px-4 sm:px-6 md:px-10 lg:px-20 gap-10">
      {/* Header Icon + Title */}
      <div className="flex items-center gap-4">
        <div className="p-3 bg-primary text-white rounded-full">
          <Users size={14} />
        </div>
        <span className="text-lg">Contact Us</span>
      </div>

      {/* Heading */}
      <div className="text-center flex flex-col gap-4 max-w-2xl">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          We'd love to hear from you
        </span>
        <span className="text-[#4E5B6D] text-sm sm:text-base md:text-lg">
          Embrace a realm of possibilities and take charge of your destiny by
          honing new skills that again to there help you fulfill your ambitions.
        </span>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
        {/* Name */}
        <div className={formInputWrapper}>
          <label className={formLabel}>Name</label>
          <input className={formTextInput} placeholder="Cagatayhan Kurt" />
        </div>

        {/* Email */}
        <div className={formInputWrapper}>
          <label className={formLabel}>Email</label>
          <input
            className={formTextInput}
            placeholder="cagatayhankurt@gmail.com"
          />
        </div>

        {/* Purpose */}
        <div className={formInputWrapperColSpan}>
          <label className={formLabel}>What is your contact purpose?</label>
          <div className="flex flex-wrap gap-4">
            {[
              "General",
              "Sales Enquiry",
              "Setting Up",
              "Demo Request",
              "Feedback",
            ].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="purpose"
                  value={option}
                  className="appearance-none w-5 h-5 border border-gray-400 rounded-full checked:bg-[#1CD3A3] checked:border-[#1CD3A3] relative
                           checked:after:content-[''] checked:after:block checked:after:w-2 checked:after:h-2 checked:after:rounded-full checked:after:bg-white checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                />
                <span className="text-base">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className={formInputWrapperColSpan}>
          <label className={formLabel}>Message</label>
          <textarea
            className={formTextInput + " h-[100px]"}
            placeholder="Enter your message"
          />
        </div>

        {/* Checkbox */}
        <div className="col-span-1 sm:col-span-2 flex gap-2 items-center text-sm">
          <input type="checkbox" id="agree" name="Agree" value="true" />
          <label htmlFor="agree">I agree to be contacted via email.</label>
        </div>

        {/* Button */}
        <button className="col-span-1 sm:col-span-2 bg-gray-500 text-white text-lg rounded-lg py-2 hover:bg-gray-600 transition">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default FormSection;
