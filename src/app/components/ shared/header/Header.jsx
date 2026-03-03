import Logo from "../../reusable/Logo";
import HeaderNavigationTabSection from "./HeaderNavigationTabSection";
import Btn from "../../reusable/Btn";
import HeaderForMobile from "./HeaderForMobile";

const Header = () => {
  return (
    // applicationHeader
    <header className="  max-w-[1620px] w-full mx-auto h-[150px] md:flex items-center justify-between">
      {/* applicationLogo */}
      <Logo />
      {/* navigationTabSection */}
      <HeaderNavigationTabSection />
      {/*  */}
      <HeaderForMobile/>
      {/* signOrProfile */}
      <Btn
        label={"Sign Up"}
        className={
          "h-12 w-32 bg-primary-color rounded-xl font-urbanist font-semibold hidden md:block"
        }
      />
    </header>
  );
};

export default Header;
