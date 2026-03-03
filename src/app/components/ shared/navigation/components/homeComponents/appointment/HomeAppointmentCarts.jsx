import HomeAppointmentCartData from "@/app/data/HomeAppointmentCartData";
import React from "react";
import AppointmentCart from "./AppointmentCart";

const HomeAppointmentCarts = () => {
  const data = HomeAppointmentCartData;
  if (!data) {
    alert("Appointment data wasn't found");
  }

  return (
    <div
      className=" my-20 md:w-[1620px] md:h-[300px] grid grid-cols-1 md:grid-cols-4 
    gap-8"
    >
      {data.map((item) => (
        // appointmnetCart
        <AppointmentCart
          key={item?.id}
          svg={item?.icon}
          title={item?.title}
          description={item?.description}
          id={item?.id}
        />
      ))}
    </div>
  );
};

export default HomeAppointmentCarts;
