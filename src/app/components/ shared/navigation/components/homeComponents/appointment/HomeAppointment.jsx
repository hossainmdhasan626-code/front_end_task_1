import React from "react";
import HomeAppointmentText from "./HomeAppointmentText";
import HomeAppointmentCarts from "./HomeAppointmentCarts";

const HomeAppointment = () => {
  return (
    <div
      className="w-full md:max-w-[1920px] md:-h-[640px] my-10 
      flex flex-col justify-center items-center gap-[10px] 
      bg-appointment-section-bg pt-10"
    >
      {/* textSection */}
      <HomeAppointmentText />

      {/* homeAppointmentCarts */}
      <HomeAppointmentCarts />
    </div>
  );
};

export default HomeAppointment;
