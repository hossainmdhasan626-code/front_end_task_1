import React from 'react'
import FooterText from './FooterText'
import FooterNavigation from './FooterNavigation'
import FooterMedia from './FooterMedia'

const FooterContantUpperContant = () => {
  return (
    <div className='md:max-w-[1440px] w-full md:h-[116px] h-auto flex flex-col md:flex-row justify-around items-center gap-15 '>
        {/* textSection */}
        <FooterText/>

        {/* navigation */}
        <FooterNavigation/>

        {/* media */}
        <FooterMedia/>
    </div>
  )
}

export default FooterContantUpperContant