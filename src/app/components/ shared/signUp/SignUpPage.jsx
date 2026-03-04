import React from "react";
import Link from "next/link";
import Logo from "../../reusable/Logo";

const SignUpPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F4F7FF] py-6 md:py-10 px-4 font-['Urbanist']">
      
      {/* mainContainer */}
      <div className="w-full max-w-[824px] md:min-h-[1044px] bg-white rounded-[16px] shadow-sm p-6 md:p-[40px] flex flex-col items-center gap-10 md:gap-[80px]">

        {/* logoSection */}
        <div className="w-full flex justify-start">
          <Logo />
        </div>

        {/* formContent */}
        <div className="w-full md:w-[744px] flex flex-col gap-8 md:gap-[48px]">

          {/* formHeader */}
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl md:text-[32px] font-bold text-[#141414]">
              Create Your Account
            </h1>
            <p className="text-sm md:text-[16px] text-[#747474] leading-[22px] md:leading-[24px]">
              Create an account to book services, manage appointments, and
              access your health records anytime.
            </p>
          </div>

          {/* inputsSection */}
          <div className="flex flex-col gap-5 md:gap-6">

            {/* All input boxes same height but responsive padding */}
            {/* Just example structure নিচে দিলাম — তুমি তোমার SVG same রাখবে */}

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-[16px] font-semibold text-[#141414]">
                Name
              </label>
              <div className="w-full h-[56px] md:h-[60px] border border-[#E8E8E8] bg-[#F9FBFF] rounded-[10px] px-4 md:px-[20px] flex items-center gap-[10px]">
                {/* SVG same থাকবে */}
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full h-full focus:outline-none text-sm md:text-[16px] text-[#141414] bg-transparent"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-[16px] font-semibold text-[#141414]">
                Email
              </label>
              <div className="w-full h-[56px] md:h-[60px] border border-[#E8E8E8] bg-[#F9FBFF] rounded-[10px] px-4 md:px-[20px] flex items-center gap-[10px]">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-full focus:outline-none text-sm md:text-[16px] text-[#141414] bg-transparent"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-[16px] font-semibold text-[#141414]">
                Password
              </label>
              <div className="w-full h-[56px] md:h-[60px] border border-[#E8E8E8] bg-[#F9FBFF] rounded-[10px] px-4 md:px-[20px] flex items-center justify-between">
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full h-full focus:outline-none text-sm md:text-[16px] text-[#141414] bg-transparent"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-[16px] font-semibold text-[#141414]">
                Confirm Password
              </label>
              <div className="w-full h-[56px] md:h-[60px] border border-[#E8E8E8] bg-[#F9FBFF] rounded-[10px] px-4 md:px-[20px] flex items-center justify-between">
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className="w-full h-full focus:outline-none text-sm md:text-[16px] text-[#141414] bg-transparent"
                />
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start md:items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-[18px] h-[18px] accent-[#2563EB] rounded mt-1 md:mt-0"
              />
              <span className="text-xs md:text-[14px] text-[#141414] font-medium leading-snug">
                I agree to the Terms & Conditions and Privacy Policy
              </span>
            </label>

          </div>

          {/* signUpBtn */}
          <button className="w-full md:w-[744px] h-[56px] md:h-[60px] bg-[#2563EB] text-white rounded-[10px] font-bold text-base md:text-[18px] flex items-center justify-center shadow-md hover:bg-[#1d4ed8] transition-all">
            Sign Up
          </button>

          {/* footer */}
          <div className="flex flex-col items-center gap-[24px]">
            <p className="text-sm md:text-[16px] text-[#141414] text-center">
              Already have an account?{" "}
              <Link
                href="/signIn"
                className="text-[#2563EB] font-bold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUpPage;