import Logo from "../../reusable/Logo";
import HeaderNavigationTabSection from "./HeaderNavigationTabSection";
import Btn from "../../reusable/Btn";
import HeaderForMobile from "./HeaderForMobile";
import Link from "next/link";

const Header = () => {
  return (
    // applicationHeader
    <header className="  max-w-[1620px] w-full mx-auto h-[150px] md:flex items-center justify-between">
      {/* applicationLogo */}
      <Logo />
      {/* navigationTabSection */}
      <HeaderNavigationTabSection />
      {/*  */}
      <HeaderForMobile />
      {/* signOrProfile */}
      <Link href={"/signIn"}>
        <Btn
          className={
            "h-12 w-32 bg-primary-color rounded-xl font-urbanist font-semibold hidden md:block"
          }
        >
          Sign In
        </Btn>
      </Link>
    </header>
  );
};

export default Header;
