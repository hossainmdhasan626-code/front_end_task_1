import Btn from "@/app/components/reusable/Btn";
import React from "react";

const HomeContactUsText = () => {
  return (
    // textSection
    <div
      className="w-[337px] md:w-[679px] h-auto md:h-[238px] flex flex-col gap-14 mx-auto
    md:mx-0"
    >
      {/* rawTextSection */}
      <div className="w-full h-[122px] flex flex-col gap-[16px]">
        <p className="font-cabin font-semibold md:font-bold text-3xl md:text-5xl text-contact-us-text">
          Start Your Wellness Journey Now
        </p>
        <p className="font-cabin font-normal text-[18px] text-contact-us-text">
          Whether you need to schedule an appointment , ask a medical question,
          or get immediate support we're always here to help
        </p>
      </div>

      {/* btn */}
      <div className="mt-10 md:mt-0">
        <Btn
          className={
            "w-[187px] h-[50px] md:h-[60px] rounded-[10px] py-3 md:py-4 px-8 flex gap-[10px] font-urbanist font-semibold text-[18px] bg-primary-color"
          }
        >
          {" "}
          Contact Us{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5548 16.0043L17.1252 14.3067C16.9233 14.1657 16.6955 14.0658 16.455 14.0128C16.2145 13.9599 15.9659 13.9548 15.7234 13.9979C15.481 14.041 15.2494 14.1315 15.0419 14.2641C14.8343 14.3967 14.655 14.569 14.5141 14.7709L13.9501 15.5794C13.0051 14.9457 11.9502 14.0607 10.9448 13.0549C9.9398 12.0499 9.0548 10.995 8.42105 10.05L9.2288 9.48604C9.43152 9.3458 9.60433 9.16667 9.73721 8.95905C9.87008 8.75143 9.96036 8.51948 10.0028 8.27666C10.0462 8.03407 10.0412 7.78529 9.98808 7.54464C9.93491 7.304 9.83465 7.07625 9.69305 6.87454L7.99618 4.44529C7.64105 3.93754 7.06805 3.63379 6.4643 3.63379C6.25595 3.63371 6.04923 3.67066 5.8538 3.74291C5.6329 3.82403 5.42111 3.9281 5.22193 4.05341L4.8863 4.28966C4.80324 4.35506 4.72434 4.42557 4.65005 4.50079C4.24055 4.90954 3.9503 5.42779 3.78643 6.03979C3.08705 8.66104 4.81918 12.6252 8.09705 15.9027C10.8496 18.6552 14.1559 20.3652 16.7262 20.3652C17.1668 20.3652 17.5816 20.3142 17.9599 20.2129C18.5723 20.0494 19.0902 19.7592 19.4993 19.3497C19.5739 19.275 19.6448 19.197 19.7209 19.0984L19.9572 18.7613C20.0775 18.5669 20.1777 18.3609 20.2564 18.1463C20.5426 17.3738 20.2538 16.4925 19.5548 16.0039V16.0043Z"
              fill="white"
            />
          </svg>
        </Btn>
      </div>
    </div>
  );
};

export default HomeContactUsText;
