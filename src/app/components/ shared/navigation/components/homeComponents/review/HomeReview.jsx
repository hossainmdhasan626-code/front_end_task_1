import React from "react";
import HomeReviewText from "./HomeReviewText";
import InfiniteMarquee from "./InfiniteMarquee";
import infiniteMarqueeData from "@/app/data/InfiniteMarquee";

const HomeReview = () => {

    const data = infiniteMarqueeData;

    if (!data) {
        alert("Reviews data wasn't found")
    }
  return (
    <div className="max-w-[1920px] h-[823px] flex flex-col justify-center items-center">
      {/* textSection */}
      <HomeReviewText />

      {/* infiniteMarquee */}
      <InfiniteMarquee data={data} speed={50}/>
    </div>
  );
};

export default HomeReview;
