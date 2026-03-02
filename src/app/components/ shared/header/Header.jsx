import Logo from "../../reusable/Logo";
import HeaderNavigationTabSection from "./HeaderNavigationTabSection";
import Btn from "../../reusable/Btn";

const Header = () => {
  return (
    // applicationHeader
    <header className=" max-w-[1620px] w-full mx-auto h-[150px] flex items-center justify-between">
      {/* applicationLogo */}
      <Logo />
      {/* navigationTabSection */}
      <HeaderNavigationTabSection />
      {/* signOrProfile */}
      <Btn label={"Sign Up"} className={"h-12 w-32 bg-primary-color rounded-xl"} />
    </header>
  );
};

export default Header;
