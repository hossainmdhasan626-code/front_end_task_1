import HomeConten from "../components/homeComponents/HomeConten";
import HomePageAboutUs from "../components/homeComponents/homeAboutUs/HomePageAboutUs";
import HomePageServices from "../components/homeComponents/homeServices/HomePageServices";

const HomePage = () => {
  return (
    <section>
      {/* home */}
      <section className="">
        <HomeConten />
      </section>
      {/* homeAboutUs */}
      <section>
        <HomePageAboutUs/>
      </section>
      {/* homeServices */}
      <section>
        <HomePageServices/>
      </section>
    </section>
  );
};

export default HomePage;
