"use client";
import { useState } from 'react';
import Btn from "@/app/components/reusable/Btn";

const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Newest");

  
  const sortOptions = [
    { id: 1, label: "Newest", value: "newest" },
    { id: 2, label: "Price: Low to High", value: "price_low" },
    { id: 3, label: "Price: High to Low", value: "price_high" },
    { id: 4, label: "Popularity", value: "popular" },
  ];

  return (
    <div className="w-full flex justify-center bg-white py-4">
      {/* fullHeaderWrapper(1620px) */}
      <div className="w-full max-w-[1620px] flex flex-wrap lg:flex-nowrap items-center justify-between gap-[16px] lg:gap-[64px] px-4">
        
        {/* searchBar(1414px) */}
        <div className="flex flex-1 min-w-full lg:min-w-0 max-w-[1414px] items-center gap-[12px] lg:gap-[16px]">
          <div className="relative flex-1 h-[60px]">
            <div className="absolute inset-y-0 left-[16px] flex items-center pointer-events-none">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7E7E81" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search services..."
              className="w-full h-full pl-[50px] pr-[16px] rounded-[12px] bg-[#FCFCFD] border-[0.88px] border-[#012853] focus:outline-none"
            />
          </div>
            {/* searchBtn */}
          <Btn className="w-[100px] lg:w-[120px] h-[60px] bg-[#09276A] text-white rounded-[12px] px-[15px] lg:px-[20px] py-[16px] gap-[10px] hover:bg-[#071d50] transition-colors shrink-0">
            Search
          </Btn>
        </div>

        {/* sortBy */}
        <div className="relative w-full lg:w-auto">
          <Btn 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full lg:w-[142px] h-[60px] border-[1px] border-[#E8E8E8] rounded-[16px] px-[24px] py-[10px] gap-[10px] bg-white text-[#141414] hover:bg-gray-50 transition-all justify-between lg:justify-center"
          >
            <span className="text-[16px] whitespace-nowrap">Sort by</span>
            <svg 
              width="24" height="24" viewBox="0 0 24 24" fill="none" 
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            >
              <path d="M18 9.00005L12 15L6 9" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Btn>

          {/* dropDown */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-full lg:w-[200px] bg-white border border-[#E8E8E8] rounded-[12px] shadow-lg z-50 overflow-hidden">
              <div className="py-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSelectedSort(option.label);
                      setIsOpen(false);
                      console.log("Sorting by:", option.value); 
                    }}
                    className={`w-full text-left px-4 py-3 text-[14px] hover:bg-[#F3F4F6] transition-colors ${
                      selectedSort === option.label ? 'text-[#09276A] font-bold bg-blue-50' : 'text-[#4B5563]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default HeaderSection;