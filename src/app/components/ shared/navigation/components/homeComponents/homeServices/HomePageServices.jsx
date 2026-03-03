import React from "react";
import HomePageServicesText from "./HomePageServicesText";
import HomeServicesCarts from "./HomeServicesCarts";
import HomeServicesPageDegine from "./HomeServicesPageDegine";

const HomePageServices = () => {
  return (
    <div
      className="w-full h-auto md:max-w-[1920px] md:max-h-[1016px]
    flex gap-10 md:gap-0 flex-col justify-center items-center my-[160px] relative"
    >
      {/* homeServicesDegine1st */}
      <HomeServicesPageDegine rote={"true"}/>

      {/* textSection */}
      <HomePageServicesText />

      {/* homeServicesCarts */}
      <HomeServicesCarts />

      {/* homeServicesDegine2nd */}
      <HomeServicesPageDegine />
    </div>
  );
};

export default HomePageServices;
