import React from "react";
import Btn from "@/app/components/reusable/Btn";

const ServicesFilter = () => {
  const serviceTypes = [
    "Service (Individual)",
    "Package (Multi- session bundles)",
  ];
  const servicesList = [
    "Blood Tests",
    "CBC Tests",
    "Serum Creatinine",
    "Serum Electrolyte",
    "Dengue NS1 Ag",
    "CBC, ESR",
  ];

  return (
    <div className="w-full lg:w-[334px] flex flex-col gap-[28px] bg-white p-6 rounded-xl border border-[#E8E8E8]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* svgOrIcon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3.5 7.25H6.5M10.5 12.25H13.5M17.5 9.25H20.5"
              stroke="#09276A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M5 2.5V21.5M19 2.5V21.5M12 2.5V21.5"
              stroke="#09276A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <h3 className="text-[18px] font-bold text-[#09276A]">Filters</h3>
        </div>
        <button className="text-[#405FF2] text-[14px] font-semibold hover:underline">
          Clear All
        </button>
      </div>

      {/* serviceTypeSection */}
      <div className="flex flex-col gap-4">
        <h4 className="text-[16px] font-bold text-[#141414]">Service Type:</h4>
        <div className="flex flex-col gap-3">
          {serviceTypes.map((type, idx) => (
            <label key={idx} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 accent-[#09276A] border-gray-300 rounded"
              />
              <span className="text-[15px] text-[#4B5563]">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* servicesSection */}
      <div className="flex flex-col gap-4">
        <h4 className="text-[16px] font-bold text-[#141414]">Services</h4>
        <div className="flex flex-col gap-3">
          {servicesList.map((service, idx) => (
            <label key={idx} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 accent-[#09276A] border-gray-300 rounded"
              />
              <span className="text-[15px] text-[#4B5563]">{service}</span>
            </label>
          ))}
        </div>
      </div>

      {/* btn */}
      <Btn className="w-full h-[60px] rounded-[12px] bg-[#09276A] text-white font-bold shadow-[0px_4px_24px_0px_#405FF21A]">
        Apply Filter
      </Btn>
    </div>
  );
};

export default ServicesFilter;
