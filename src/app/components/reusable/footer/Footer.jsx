import React from "react";
import FooterContant from "./FooterContant";
import FooterWaterMark from "./FooterWaterMark";

const Footer = () => {
  return (
    <div
      className="w-full md:max-w-[1920px] h-auto md:h-[436px] border relative
    md:flex justify-between items-center bg-footer-bg mx-auto px-3 md:px-0"
    >
      {/* footerText */}
      <div className="relative z-10 w-full">
        <FooterContant />
      </div>

      {/* waterMark */}
      <FooterWaterMark />
    </div>
  );
};

export default Footer;
