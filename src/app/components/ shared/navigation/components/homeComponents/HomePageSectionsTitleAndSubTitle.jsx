import React from "react";

const HomePageSectionsTitleAndSubTitle = ({ title, subTitle, gap = 24 }) => {
  return (
    <div
      className={`w-full md:w-[1069px] h-auto md:h-[124px] flex flex-col gap-${gap} md:space-y-6`}
    >
      {/* title */}
      <p
        className="font-urbanist font-semibold md:font-bold text-dark-blue-color md:text-[40px]
        text-[32px] 
        text-center"
      >
        {title}
      </p>
      <p
        className="font-medium font-urbanist text-[20px] md:text-2xl text-primary-color 
      text-center px-1 md:px-0"
      >
        {subTitle}
      </p>
    </div>
  );
};

export default HomePageSectionsTitleAndSubTitle;
