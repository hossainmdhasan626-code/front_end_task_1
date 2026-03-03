import React from "react";

const AppointmentCart = ({ svg, title, description, id }) => {
  return (
    <div
      className="w-[90%] h-auto md:w-[381px] md:h-[300px] rounded-xs bg-background
    flex items-center justify-center p-6 mx-auto"
    >
      <div  className="flex flex-col gap-[16px]">
        {/* svgOrIcon */}
        <div dangerouslySetInnerHTML={{ __html: svg }} />

        {/* title */}
        <div className="w-full md:w-[278px] h-auto h-[29px] font-inter font-medium text-2xl text-appointment-cart-title">
          {title}
        </div>

        {/* description */}
        <div className="w-full md:w-[278px] h-auto h-[78px] font-outfit font-normal text-[16px] text-appointment-cart-description">
          {description}
        </div>
      </div>
      <div>
        <div className="text-[100px] text-appointment-section-bg font-black">{id}</div>
      </div>
    </div>
  );
};

export default AppointmentCart;
