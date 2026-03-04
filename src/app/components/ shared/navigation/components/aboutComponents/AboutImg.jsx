import Image from "next/image";
import React from "react";

const AboutImg = () => {
  return (
    <div className="relative w-[95%] mx-auto md:max-w-[1620px] h-auto  rounded-[2px]">
      {/* <Image fill src="/AboutSecondImg.jpg" alt="About Secound Img" /> */}
            <img src="/AboutSecondImg.jpg" alt="About Secound Img" />

      <div className="absolute top-[40%] md:top-[50%] left-[45%] md:left-[50%]">
        <svg
          width="64"
          height="71"
          viewBox="0 0 64 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="32" cy="35.1599" rx="32" ry="35.1599" fill="white" />
          <path
            d="M25.1187 29.859V39.993C25.1187 42.9471 25.1187 44.4242 26.0771 44.9734C27.0356 45.5227 28.31 44.7759 30.8587 43.2823L39.5054 38.2153C42.0048 36.7507 43.2545 36.0184 43.2545 34.926C43.2545 33.8336 42.0048 33.1013 39.5054 31.6367L30.8587 26.5697C28.31 25.0761 27.0356 24.3294 26.0771 24.8786C25.1187 25.4279 25.1187 26.9049 25.1187 29.859Z"
            fill="#155DFC"
          />
        </svg>
      </div>
    </div>
  );
};

export default AboutImg;
