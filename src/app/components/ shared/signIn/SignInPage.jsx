import React from "react";
import Link from "next/link";
import Logo from "../../reusable/Logo";

const SignInPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F4F7FF] py-6 md:py-10 font-['Urbanist'] px-4">
      <div className="w-full max-w-[824px] md:min-h-[836px] bg-white rounded-[16px] shadow-sm p-6 md:p-[40px] flex flex-col items-center gap-10 md:gap-[80px]">
        <div className="w-full flex justify-start">
          <Logo />
        </div>

        <div className="w-full md:w-[744px] flex flex-col gap-8 md:gap-[48px]">
          <div className="flex flex-col gap-3">
            <h1 className="text-[24px] md:text-[32px] font-bold text-[#141414]">
              Welcome Back, ProHealth
            </h1>
            <p className="text-[14px] md:text-[16px] text-[#747474] leading-[22px] md:leading-[24px]">
              Sign in to manage your appointments, view reports, and access your
              health services anytime.
            </p>
          </div>

          <div className="flex flex-col gap-5 md:gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] md:text-[16px] font-semibold text-[#141414]">
                Email
              </label>
              <div className="relative w-full h-[52px] md:h-[60px] border border-[#E8E8E8] bg-[#F9FBFF] rounded-[10px] px-4 md:px-[20px] py-3 md:py-[16px] flex items-center gap-[10px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.7758 13.4647C11.1068 13.4647 10.4398 13.2437 9.88176 12.8017L5.39676 9.18571C5.07376 8.92571 5.02376 8.45271 5.28276 8.13071C5.54376 7.80971 6.01576 7.75871 6.33776 8.01771L10.8188 11.6297C11.3818 12.0757 12.1748 12.0757 12.7418 11.6257L17.1778 8.01971C17.4998 7.75671 17.9718 7.80671 18.2338 8.12871C18.4948 8.44971 18.4458 8.92171 18.1248 9.18371L13.6808 12.7957C13.1188 13.2417 12.4468 13.4647 11.7758 13.4647Z"
                    fill="#747474"
                  />
                </svg>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-full focus:outline-none text-[14px] md:text-[16px] text-[#141414] bg-transparent"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] md:text-[16px] font-semibold text-[#141414]">
                Password
              </label>
              <div className="relative w-full h-[52px] md:h-[60px] border border-[#E8E8E8] bg-[#F9FBFF] rounded-[10px] px-4 md:px-[20px] py-3 md:py-[16px] flex items-center justify-between">
                <div className="flex items-center gap-[10px] flex-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z"
                      stroke="#747474"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full h-full focus:outline-none text-[14px] md:text-[16px] text-[#141414] bg-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] accent-[#2563EB] rounded"
                />
                <span className="text-[13px] md:text-[14px] text-[#141414] font-medium">
                  Remember me
                </span>
              </label>
              <button className="text-[13px] md:text-[14px] text-[#2563EB] font-bold">
                Forgot Password
              </button>
            </div>
          </div>

          <button className="w-full md:w-[744px] h-[52px] md:h-[60px] bg-[#2563EB] text-white rounded-[10px] font-bold text-[16px] md:text-[18px] flex items-center justify-center shadow-md hover:bg-[#1d4ed8] transition-all">
            Sign In
          </button>

          <div className="flex flex-col items-center gap-5 md:gap-[24px]">
            <div className="w-full flex items-center gap-4">
              <div className="flex-1 h-[1px] bg-[#E8E8E8]"></div>
              <span className="text-[#747474] text-[13px] md:text-[14px]">
                Or
              </span>
              <div className="flex-1 h-[1px] bg-[#E8E8E8]"></div>
            </div>

            <p className="text-[#141414] text-[14px] md:text-[16px] text-center">
              Don't have an account?{" "}
              <Link
                href="/signUp"
                className="text-[#2563EB] font-bold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;