const HomePageAboutImg = () => {
  return (
    <div className="relative">
    {/* bgimgColor */}
      <div className="h-[300px] w-[300px] absolute left-15 md:top-10 md:left-150 z-0 
      bg-[radial-gradient(circle,_#447DFD_0%,_transparent_70%)]
      md:bg-[radial-gradient(circle,_#447DFD_0%,_transparent_80%)]

      flex items-center justify-center 
      translate-x-13 md:translate-x-0 translate-y-10 md:translate-y-0"></div>

     <div
      className="w-[95%] md:w-[865px] h-[400px] 
        md:h-[655px]  mx-auto overflow-hidden"
    >
      
      {/* homePageAboutImg */}
      <div className="max-w-[663px] max-h-[437px] pr-13 md:pr-0 md:absolute z-5">
        <img
          src="/HomePageAbout.jpg"
          alt="Background"
          className="w-[330px] md:w-[663px] h-auto  rounded-[25px] shadow-md"
        />
      </div>

      {/* homePageAboutClipPathImg */}
      <div
        className="absolute top-30 left-30 w-[220px] 
          md:top-[120px] md:left-[300px] md:w-[401px] md:h-[433px] 
          aspect-[401/433] z-10 overflow-hidden
          [clip-path:polygon(50%_0%,_100%_20%,_100%_75%,_50%_100%,_0%_75%,_0%_20%)]
          translate-y-5 md:translate-y-10 translate-x-8 md:translate-x-41"
      >
        <img
          src="/HomePageAboutClipPath.jpg"
          alt="Shield Masked Image"
          className="w-full h-full object-cover transition-transform duration-500 
          hover:scale-105 "
        />
      </div>
    </div>
    </div>
   
  );
};

export default HomePageAboutImg;
