import React from "react";

const HomeContactUsImg = () => {
  return (
    <div className="w-[396px] h-[591px]  relative">
      <div>
        <img src="/HomeContactUsBg.png" alt="" />
        <img
          src="/HomeContactUsDr.png"
          alt="Contact Us"
          className="absolute top-20 left-0 bottom-0 right-0"
        />
      </div>
    </div>
  );
};

export default HomeContactUsImg;
