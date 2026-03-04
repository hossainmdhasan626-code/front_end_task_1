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
                {/* nameSvgOrIcon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6489 19.875C20.2211 17.4065 18.0208 15.6365 15.4529 14.7975C16.7231 14.0414 17.7099 12.8892 18.2619 11.5179C18.8139 10.1467 18.9004 8.63211 18.5083 7.20688C18.1162 5.78165 17.2671 4.52454 16.0914 3.6286C14.9156 2.73266 13.4783 2.24744 12.0001 2.24744C10.5219 2.24744 9.08463 2.73266 7.90891 3.6286C6.73318 4.52454 5.88406 5.78165 5.49195 7.20688C5.09984 8.63211 5.18641 10.1467 5.73837 11.5179C6.29033 12.8892 7.27716 14.0414 8.54732 14.7975C5.97951 15.6356 3.77919 17.4056 2.35138 19.875C2.29902 19.9604 2.26429 20.0554 2.24924 20.1544C2.23419 20.2534 2.23912 20.3544 2.26375 20.4515C2.28837 20.5486 2.33219 20.6397 2.39262 20.7196C2.45305 20.7995 2.52887 20.8664 2.61559 20.9165C2.70232 20.9666 2.7982 20.9988 2.89758 21.0113C2.99695 21.0237 3.09782 21.0161 3.19421 20.989C3.29061 20.9618 3.38059 20.9156 3.45884 20.8531C3.53709 20.7906 3.60203 20.713 3.64982 20.625C5.41607 17.5725 8.53794 15.75 12.0001 15.75C15.4623 15.75 18.5842 17.5725 20.3504 20.625C20.3982 20.713 20.4632 20.7906 20.5414 20.8531C20.6197 20.9156 20.7097 20.9618 20.806 20.989C20.9024 21.0161 21.0033 21.0237 21.1027 21.0113C21.2021 20.9988 21.2979 20.9666 21.3847 20.9165C21.4714 20.8664 21.5472 20.7995 21.6076 20.7196C21.6681 20.6397 21.7119 20.5486 21.7365 20.4515C21.7611 20.3544 21.7661 20.2534 21.751 20.1544C21.736 20.0554 21.7012 19.9604 21.6489 19.875ZM6.75013 8.99999C6.75013 7.96164 7.05804 6.9466 7.63492 6.08324C8.21179 5.21989 9.03173 4.54698 9.99104 4.14962C10.9504 3.75226 12.006 3.64829 13.0244 3.85086C14.0428 4.05344 14.9782 4.55345 15.7124 5.28768C16.4467 6.0219 16.9467 6.95736 17.1493 7.97576C17.3518 8.99416 17.2479 10.0498 16.8505 11.0091C16.4531 11.9684 15.7802 12.7883 14.9169 13.3652C14.0535 13.9421 13.0385 14.25 12.0001 14.25C10.6082 14.2485 9.27371 13.6949 8.28947 12.7107C7.30522 11.7264 6.75162 10.3919 6.75013 8.99999Z"
                    fill="#747474"
                  />
                </svg>
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
                {/* EmailSvgOrIcon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.7758 13.4647C11.1068 13.4647 10.4398 13.2437 9.88176 12.8017L5.39676 9.18571C5.07376 8.92571 5.02376 8.45271 5.28276 8.13071C5.54376 7.80971 6.01576 7.75871 6.33776 8.01771L10.8188 11.6297C11.3818 12.0757 12.1748 12.0757 12.7418 11.6257L17.1778 8.01971C17.4998 7.75671 17.9718 7.80671 18.2338 8.12871C18.4948 8.44971 18.4458 8.92171 18.1248 9.18371L13.6808 12.7957C13.1188 13.2417 12.4468 13.4647 11.7758 13.4647Z"
                    fill="#747474"
                  />
                  <mask
                    id="mask0_1_1784"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="1"
                    width="23"
                    height="21"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.995605 1.99969H22.4955V21.4997H0.995605V1.99969Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_1_1784)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.83314 19.9995H16.6531C16.6551 19.9975 16.6631 19.9995 16.6691 19.9995C17.8101 19.9995 18.8221 19.5915 19.5981 18.8165C20.4991 17.9195 20.9941 16.6305 20.9941 15.1875V8.31948C20.9941 5.52648 19.1681 3.49948 16.6531 3.49948H6.83514C4.32014 3.49948 2.49414 5.52648 2.49414 8.31948V15.1875C2.49414 16.6305 2.99014 17.9195 3.89014 18.8165C4.66614 19.5915 5.67914 19.9995 6.81914 19.9995H6.83314ZM6.81614 21.4995C5.27314 21.4995 3.89514 20.9395 2.83114 19.8795C1.64614 18.6975 0.994141 17.0315 0.994141 15.1875V8.31948C0.994141 4.71648 3.50514 1.99948 6.83514 1.99948H16.6531C19.9831 1.99948 22.4941 4.71648 22.4941 8.31948V15.1875C22.4941 17.0315 21.8421 18.6975 20.6571 19.8795C19.5941 20.9385 18.2151 21.4995 16.6691 21.4995H16.6531H6.83514H6.81614Z"
                      fill="#747474"
                    />
                  </g>
                </svg>
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
                {/* locakSvgOrIcon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z"
                    stroke="#747474"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9"
                    stroke="#747474"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full h-full focus:outline-none text-sm md:text-[16px] text-[#141414] bg-transparent"
                />

                {/* eyeSvgOrIcon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.439 15.439C21 14 22 12 22 12C20.5 9 16.6892 5 12 5C11.0922 5 10.2294 5.15476 9.41827 5.41827M17 17.4186C15.5657 18.3368 13.8793 19 12 19C7.31078 19 3.5 15 2 12C2 12 3.5 9 6.5 6.91847"
                  stroke="#747474"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.85786 10C9.32783 10.53 9 11.2623 9 12.0711C9 13.6887 10.3113 15 11.9289 15C12.7377 15 13.47 14.6722 14 14.1421"
                  stroke="#747474"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 3L21 21"
                  stroke="#747474"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-[16px] font-semibold text-[#141414]">
                Confirm Password
              </label>
              <div className="w-full h-[56px] md:h-[60px] border border-[#E8E8E8] bg-[#F9FBFF] rounded-[10px] px-4 md:px-[20px] flex items-center justify-between">
                {/* locakSvgOrIcon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12105 13.2453 4 14.3624 4 15.5C4 16.6376 4.12105 17.7547 4.26781 18.8447Z"
                    stroke="#747474"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9"
                    stroke="#747474"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className="w-full h-full focus:outline-none text-sm md:text-[16px] text-[#141414] bg-transparent"
                />

                {/* eyeSvgOrIcon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.439 15.439C21 14 22 12 22 12C20.5 9 16.6892 5 12 5C11.0922 5 10.2294 5.15476 9.41827 5.41827M17 17.4186C15.5657 18.3368 13.8793 19 12 19C7.31078 19 3.5 15 2 12C2 12 3.5 9 6.5 6.91847"
                    stroke="#747474"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.85786 10C9.32783 10.53 9 11.2623 9 12.0711C9 13.6887 10.3113 15 11.9289 15C12.7377 15 13.47 14.6722 14 14.1421"
                    stroke="#747474"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 3L21 21"
                    stroke="#747474"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
