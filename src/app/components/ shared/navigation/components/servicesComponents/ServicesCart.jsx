import React from 'react';
import Btn from "@/app/components/reusable/Btn";

const ServicesCart = ({ data }) => {
  return (
    <div className="w-full bg-white rounded-[16px] border border-[#E8E8E8] overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
      
      {/* cartImg */}
      <div className="relative w-full h-[240px] overflow-hidden">
        <img 
          src={data.image} 
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* textSection */}
      <div className="p-5 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <h3 className="text-[18px] font-bold text-[#141414] leading-tight flex-1">
            {data.title}
          </h3>
          <span className="text-[18px] font-bold text-[#405FF2]">{data.price}</span>
        </div>

        {/* rawData */}
        <div className="flex items-center justify-between text-[14px] text-[#7E7E81]">
          <div className="flex items-center gap-1">
            <span>Sessions:</span>
            <span className="text-[#141414] font-medium">{data.sessions}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Valid:</span>
            <span className="text-[#141414] font-medium">{data.validity}</span>
          </div>
        </div>

        {/* cartBtn */}
        <Btn className="w-full h-[48px] rounded-[8px] bg-[#1E5FFF] text-white font-bold text-[16px] px-5 py-3 hover:bg-[#09276A] transition-colors">
          {data.buttonText}
        </Btn>
      </div>
    </div>
  );
};

export default ServicesCart;