import React from "react";
import HomeQuestionsText from "./HomeQuestionsText";
import HomeAccordion from "./HomeAccordion";

const HomeQuestions = () => {
  return (
    <div
      className="w-[90%] md:max-w-[1920px] h-full md:h-[916px] flex flex-col justify-center items-center mx-auto"
    >
      {/* textSection */}
      <HomeQuestionsText />

      {/* accordion */}
      <HomeAccordion />
    </div>
  );
};

export default HomeQuestions;
