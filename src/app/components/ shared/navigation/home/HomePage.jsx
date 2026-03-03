import HomeConten from "../components/homeComponents/HomeConten";
import HomePageAboutUs from "../components/homeComponents/HomePageAboutUs";

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
    </section>
  );
};

export default HomePage;
