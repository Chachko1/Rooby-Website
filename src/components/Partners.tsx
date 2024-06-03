import React from 'react'

const Partners = () => {
  return (
    <div className='bg-white'>
    <section className='bg-white pb-10 md:pb-[80px] pt-10 max-w-[1440px] mx-auto'>
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 bg-white justify-between w-[85%] mx-auto p-10 ">
    <p className="font-inter font-medium lg:pb-0 pb-5 lg:pl-0 pl-5 text-black">Our clients and partners</p>
    <img src="Google.svg" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px] transform scale-x-110" />
    <img src="Atlassian.svg" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px] transform scale-x-110"/>
    <img src="Canon.svg" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px] transform scale-x-110"/>
    <img src="Walmart.svg" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px] transform scale-x-110"/>
    <img src="Amazon.svg" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px] transform scale-x-110"/>
    </div>
    </section>
    </div>
  )
}

export default Partners
