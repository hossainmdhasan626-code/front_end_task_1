import React from "react";
import Btn from "../../reusable/Btn";
import HeaderNavigationForMobile from "./HeaderNavigationForMobile";
import Link from "next/link";

const HeaderForMobile = () => {
  return (
    <div className="md:hidden flex justify-around items-center">
      <HeaderNavigationForMobile />
      {/* signOrProfile */}
      <Link href={"/signIn"}>
        <Btn
          className={
            "h-10 w-30 bg-primary-color rounded-xl font-urbanist font-semibold"
          }
        >
          Sign Ii
        </Btn>
      </Link>
    </div>
  );
};

export default HeaderForMobile;
