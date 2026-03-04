import React from 'react';

const Pagination = () => {
  const pages = ["1", "2", "3", "4", "5", "6"];
  
  return (
    <div className="w-full flex justify-center items-center gap-[8px] py-10">
      {/* agePore */}
      <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#F3F4F6] text-[#7E7E81] hover:bg-gray-200">«</button>
      <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#F3F4F6] text-[#7E7E81] hover:bg-gray-200">‹</button>
      
      {/* pageNumbers */}
      {pages.map((p) => (
        <button 
          key={p}
          className={`w-[40px] h-[40px] flex items-center justify-center rounded-full text-[14px] font-semibold transition-all
            ${p === "3" ? "bg-[#09276A] text-white shadow-md" : "bg-[#F3F4F6] text-[#7E7E81] hover:bg-gray-200"}`}
        >
          {p}
        </button>
      ))}

      {/* next&Last */}
      <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#F3F4F6] text-[#7E7E81] hover:bg-gray-200">›</button>
      <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#F3F4F6] text-[#7E7E81] hover:bg-gray-200">»</button>
    </div>
  );
};

export default Pagination;