import React from 'react'
import HomeContactUsText from './HomeContactUsText'
import HomeContactUsImg from './HomeContactUsImg'

const HomeContactUs = () => {
  return (
    <div className='w-full md:max-w-[1920px] h-auto md:h-[519px] bg-appointment-section-bg 
    md:flex justify-center items-center gap-[56px] py-10 md:py-0'>

        {/* contactUsTextSection */}
        <HomeContactUsText/>

        {/* contactUsImg */}
        <HomeContactUsImg/>
    </div>
  )
}

export default HomeContactUs