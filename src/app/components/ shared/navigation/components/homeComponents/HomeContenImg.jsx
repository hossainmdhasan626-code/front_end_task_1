import React from "react";

const HomeContenImg = () => {
  return (
    <div
      className=" pt-[200px] md:pt-[123px] relative mt-25 md:mt-0 [clip-path:inset(-200%_-200%_0px_-200%)]"
    >
      <div
        className="bg-blur-color blur-[300px] border border-2 border-red-500 
        absolute top-0 left-0
         w-full h-full mx-auto -translate-x-[150px]"
      ></div>
      {/* homePageErImg */}
      <div className="w-[335px] h-[384px] md:w-full max-w-[673.66px] md:h-full 
      max-h-[768.36px] -translate-y-[150px] ">
        {/* homePageErBgImg1st */}
        <img
          className="rotate-90 absolute top-0 left-0 -translate-y-[55px] translate-x-[50px] md:-translate-y-0 
          md:-translate-x-[250px] "
          src="/HomeImgBg.png"
          alt=""
        />
        {/* homePageErBgDrd2nd */}
        <img
          className="-rotate-80 top-0 left-0 translate-x-[90px] md:translate-x-0 
          -translate-y-[40px]"
          src="/HomeImgBg.png"
          alt=""
        />
        {/* homePageDrImg */}
        <img
          src="/HomePageDr.png"
          alt="Home Page Dr."
          className="absolute top-0 left-0 -translate-[70px] md:-translate-0 
          md:-translate-x-[300px] w-[524px] md:w-[1148px] h-[670px] md:h-[1345px] 
          max-w-none"
        />
      </div>
    </div>
  );
};

export default HomeContenImg;
