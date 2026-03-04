import React from "react";
import AboutStoryHeader from "./AboutStoryHeader";
import AboutStoryContant from "./AboutStoryContant";
import HomeServicesPageDegine from "../../homeComponents/homeServices/HomeServicesPageDegine";
import AboutStoryCarts from "./AboutStoryCarts";

const AboutStory = () => {
  return (
    <div className="flex my-15">
      {/* degine1st */}
      <div className="flex flex-col justify-end">
        <HomeServicesPageDegine />
      </div>

      {/* outStory */}
      <div className="w-full md:max-w-[1442px] h-auto md:h-[777px] ">
        {/* titleOrSubTitle */}
        <AboutStoryHeader />

        {/* outStoryContant */}
        <AboutStoryContant />

        {/* storyCarts */}
        <div className="relative hidden md:block">
          <AboutStoryCarts />
        </div>
      </div>

      {/* degine2nd */}
      <div>
        <HomeServicesPageDegine rote={"true"} />
      </div>
    </div>
  );
};

export default AboutStory;
