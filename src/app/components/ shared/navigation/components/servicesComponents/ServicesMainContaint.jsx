import React from 'react';
import ServicesFilter from './ServicesFilter';
import ServicesCartsComponent from './ServicesCartsComponent';

const ServicesMainContaint = () => {
  return (
    <div className="w-full flex justify-center py-10 font-['Urbanist'] bg-[#F9FAFB]">
      {/* Container */}
      <div className="w-full max-w-[1620px] flex flex-col lg:flex-row gap-[32px] px-4">
        
        {/* filtarTa */}
        <aside className="w-full lg:w-[334px] shrink-0">
          <ServicesFilter />
        </aside>

        {/* servicesCartsGuli */}
        <main className="flex-1 max-w-[1254px]">
          <ServicesCartsComponent />
        </main>
      </div>
    </div>
  );
};

export default ServicesMainContaint;