import React from "react";
import ServicesCart from "./ServicesCart";
import HomeServicesCartData from "@/app/data/HomeServicesCartData";

const HomeServicesCarts = () => {
  const data = HomeServicesCartData;

  if (!data) {
    alert("Services Data Was Not Fountd");
  }
  return (
    // servicesErCardGuli
    <div
      className="md:w-[1440px] md:h-[508px]
    grid grid-cols-1 md:grid-cols-3 gap-8 mt-[50]"
    >
      {data.map((item) => (
        // servicesCart
        <ServicesCart
          key={item?.id}
          svg={item?.icon}
          title={item?.title}
          description={item?.description}
        />
      ))}
    </div>
  );
};

export default HomeServicesCarts;
