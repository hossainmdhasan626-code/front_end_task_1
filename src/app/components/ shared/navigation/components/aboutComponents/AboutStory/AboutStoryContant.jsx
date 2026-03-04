import React from "react";
import AboutStoryImg from "./AboutStoryImg";
import AboutStoryDescription from "./AboutStoryDescription";

const AboutStoryContant = () => {
  return (
    <div className="w-full md:max-w-[1208px] h-full md:h-[523px] 
    md:flex items-center gap-[50px]">
      {/* ourStoryImg */}
      <AboutStoryImg />

      {/* outStoryDescription */}
      <AboutStoryDescription />
    </div>
  );
};

export default AboutStoryContant;
