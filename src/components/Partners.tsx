import React from 'react'

const Partners = () => {
  return (
    <section className='bg-white pb-[80px] pt-5 md:pt-10'>
    <div className="flex flex-col md:flex-row gap-10 md:gap-0 bg-white justify-between w-[85%] mx-auto p-10 ">
    <p className="font-inter font-medium lg:pb-0 pb-5 lg:pl-0 pl-5 text-black">Our clients and partners</p>
    <img src="Google.png" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px] " />
    <img src="Atlassian.png" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px]"/>
    <img src="Canon.png" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px]"/>
    <img src="Walmart.png" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px]"/>
    <img src="Amazon.png" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px]"/>
    </div>
    </section>
  )
}

export default Partners
