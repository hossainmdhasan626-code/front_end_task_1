import HomeServicesPageDegineCircle from "./HomeServicesPageDegineCircle";
import HomeServicesPageDegineSlice from "./HomeServicesPageDegineSlice";

const HomeServicesPageDegine = ({ rote = false }) => {
  return (
    <div className={`w-full ${rote ? "rotate-180" : "rotate-0"}`}>
      <div className="w-[245.25px] h-[181px] relative  hidden md:block">
        {/* circle */}
        <HomeServicesPageDegineCircle />

        {/* slice */}
        <HomeServicesPageDegineSlice />
      </div>
    </div>
  );
};

export default HomeServicesPageDegine;
