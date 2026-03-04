import React from "react";

const StoryCart = ({ icon, count, title }) => {
  return (
    <div className="w-[137px] h-[149px] flex flex-col gap-[12px]">
      {/* iconOrSvg */}
      <div dangerouslySetInnerHTML={{ __html: icon }} />

      <div>
        {/* count */}
        <p className="font-inter font-medium text-2xl text-appointment-cart-title">
          {count}
        </p>
        <p className="font-outfit font-normal text-[16px] text-appointment-cart-description">
          {title}
        </p>
      </div>
    </div>
  );
};

export default StoryCart;
