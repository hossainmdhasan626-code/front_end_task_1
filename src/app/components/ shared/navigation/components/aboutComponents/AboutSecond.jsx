import React from "react";
import AboutText from "./AboutText";
import AboutImg from "./AboutImg";

const AboutSecond = () => {
  return (
    <div
      className="w-full md:max-w-[1920px] h-auto my-20
    flex flex-col justify-center mx-auto gap-14"
   >
    {/* textSection */}
    <section>
        <AboutText/>
    </section>

    {/* imgSection */}
    <section>
        <AboutImg/>
    </section>
   </div>
  );
};

export default AboutSecond;
