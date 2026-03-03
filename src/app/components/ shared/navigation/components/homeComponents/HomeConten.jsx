import HomeConntenText from "./HomeConntenText";
import HomeContenImg from "./HomeContenImg";

const HomeConten = () => {
  return (
    <div className="md:flex w-full justify-around">
      {/* contenText */}
      <HomeConntenText />
      {/* contenImg */}
      <HomeContenImg />
    </div>
  );
};

export default HomeConten;

