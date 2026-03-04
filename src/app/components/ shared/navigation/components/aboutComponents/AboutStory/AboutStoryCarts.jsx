import React from "react";
import StoryCart from "./StoryCart";
import storCartData from "@/app/data/StoryCartData";

const AboutStoryCarts = () => {
  const data = storCartData;

  if (!data) {
    alert("Story's data was'nt found");
  }

  return (
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex gap-5 bg-background p-15">
      {data.map((item) => (
        // storyCarts
        <StoryCart
          key={item?.id}
          icon={item?.icon_svg}
          count={item?.count}
          title={item?.title}
        />
      ))}
    </div>
  );
};

export default AboutStoryCarts;
