import React from "react";
import Btn from "../../reusable/Btn";
import HeaderNavigationForMobile from "./HeaderNavigationForMobile";

const HeaderForMobile = () => {
  return (
    <div className="md:hidden flex justify-around items-center">
      <HeaderNavigationForMobile />
      {/* signOrProfile */}
      <Btn
        label={"Sign Up"}
        className={
          "h-10 w-30 bg-primary-color rounded-xl font-urbanist font-semibold"
        }
      />
    </div>
  );
};

export default HeaderForMobile;
