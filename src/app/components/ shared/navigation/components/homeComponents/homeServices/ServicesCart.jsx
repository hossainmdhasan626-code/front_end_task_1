import React from "react";

const ServicesCart = ({svg,title,description}) => {
  return (
    // servicesCart
    <div className=" w-[90%] h-auto md:w-[458.67px] h-[236px] rounded-[14px] bg-services-cart-Bg
    border border-services-cart-Border p-6 flex flex-col mx-auto gap-[16] justify-center items-start">
        {/* iconOrSvg */}
        <div>
            <div dangerouslySetInnerHTML={{__html:svg}}/>
        </div>

        <div className="w-full h-auto md:w-[410.67px] md:h-[108px] flex flex-col gap-[12px]
        text-dark-blue-color font-medium">
            {/* title */}
        <div>
            {title}
        </div>

        {/* description */}
        <div className="font-normal text-[16px] text-muted-blue-grey">
            {description}
        </div>
        </div>
     </div>
  );
};

export default ServicesCart;
