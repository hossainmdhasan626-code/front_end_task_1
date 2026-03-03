import HomeConten from "../components/homeComponents/HomeConten";
import HomeAppointment from "../components/homeComponents/appointment/HomeAppointment";
import HomePageAboutUs from "../components/homeComponents/homeAboutUs/HomePageAboutUs";
import HomePageServices from "../components/homeComponents/homeServices/HomePageServices";
import HomeQuestions from "../components/homeComponents/questions/HomeQuestions";
import HomeReview from "../components/homeComponents/review/HomeReview";

const HomePage = () => {
  return (
    <section>
      {/* home */}
      <section className="">
        <HomeConten />
      </section>

      {/* homeAboutUs */}
      <section>
        <HomePageAboutUs />
      </section>

      {/* homeServices */}
      <section>
        <HomePageServices />
      </section>

      {/* appointment */}
      <section>
        <HomeAppointment />
      </section>

      {/* review */}
      <HomeReview />

      {/* question */}
      <HomeQuestions/>
    </section>
  );
};

export default HomePage;
