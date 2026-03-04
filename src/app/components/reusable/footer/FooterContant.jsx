import React from "react";
import FooterContantUpperContant from "./FooterContantUpperContant";
import FooterContantLowerContant from "./FooterContantLowerContant";

const FooterContant = () => {
  return (
    <div className="w-full md:w-[1440px] h-auto md:h-[236px] 
    flex flex-col justify-center mx-auto gap-[40px]">
      {/* upperContant */}
      <FooterContantUpperContant />

      {/* lowerContant */}
      <FooterContantLowerContant />
    </div>
  );
};

export default FooterContant;
