import React from "react";
import Logo from "../Logo";

const FooterText = () => {
  return (
    <div className="text-left">
      {/* logo */}
      <Logo />

      {/* text */}
      <p className="font-urbanist font-normal text-[14px]">
        ProHealth is a trusted diagnostice service platform where patients can
        Book medical tests and health check-ups with confidence. Our mission is
        to make healthcare access simple , reliable , and transparent for
        everyone.
      </p>
    </div>
  );
};

export default FooterText;
