import React from "react";
import ServicesPageHeader from "../components/servicesComponents/ServicesPageHeader";
import ServicesMainContaint from "../components/servicesComponents/ServicesMainContaint";
import Pagination from "../components/servicesComponents/Pagination";

const ServicesPage = () => {
  return (
    <div>
      {/* ServicesPageHeader */}
      <ServicesPageHeader />

      {/* mainContant */}
      <ServicesMainContaint />

      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default ServicesPage;
