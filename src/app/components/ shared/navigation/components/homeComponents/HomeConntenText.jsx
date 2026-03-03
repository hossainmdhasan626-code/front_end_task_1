import Btn from "@/app/components/reusable/Btn";

const HomeConntenText = () => {
  return (
    <div
      className="max-w-[635px] max-h-[530px] flex pl-5 md:pl-0
    flex-col gap-6 md:gap-12 pt-[50px] md:pt-[100px]"
    >
      {/* textContenUpperText */}
      <div className="max-h-[312px]">
        <p
          className="font-bold font-figtree text-dark-blue-color text-[40px]
      md:text-[80px] leading-[52px] md:leading-[104px]"
        >
          Reliable Medical Tests & Health Check Ups
        </p>
      </div>

      {/* textContenLower */}
      <div className="max-w-[502px] max-h-[90px]">
        <p
          className="font-normal font-poppins text-[20px] leading-[30px]
        text-dark-blue-color"
        >
          Accurate blood tests and comprehensive body check-ups with
          professional care and modern facilities.
        </p>
      </div>

      {/* btnForBookAppointment */}
      <Btn
        label={
          <>
            Book Appointment{" "}
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1673 20.9995L22.1673 13.9995L15.1673 6.99951M21.584 13.9995H5.83398"
                stroke="white"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        }
        className={
          "bg-primary-color  flex gap-[10px] items-center justify-between h-15 w-[256px] rounded-[10px] py-4 px-8 font-urbanist font-semibold"
        }
      />
    </div>
  );
};

export default HomeConntenText;


