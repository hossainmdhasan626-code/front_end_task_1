import React from "react";
import HomePageAboutImg from "./HomePageAboutImg";
import HomePageAboutTaxt from "./HomePageAboutTaxt";

const HomePageAboutUs = () => {
  return (
    <div className="max-w-[1920px] max-h-[895px] flex 
    justify-around items-center flex-col md:flex-row my-30">
      {/* homePageAboutImg */}
      <HomePageAboutImg />

      {/* homePageAboutTaxt */}
      <HomePageAboutTaxt />

      {/* homePageServices */}
    </div>
  );
};

export default HomePageAboutUs;
