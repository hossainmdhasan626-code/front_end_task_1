import React from "react";
import HomePageAboutUs from "../components/homeComponents/homeAboutUs/HomePageAboutUs";
import AboutSecond from "../components/aboutComponents/AboutSecond";
import AboutStory from "../components/aboutComponents/AboutStory/AboutStory";
import HomeContactUs from "../components/homeComponents/contactUs/HomeContactUs";

const AboutPage = () => {
  return (
    <div className="">
      {/* aboutUsPage */}
      <HomePageAboutUs />

      {/* 2ndImg */}
      <AboutSecond />

      {/* outStory */}
      <AboutStory />

      {/* contactUs */}
      <HomeContactUs />
    </div>
  );
};

export default AboutPage;
