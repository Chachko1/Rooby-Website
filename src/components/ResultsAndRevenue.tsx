import React from 'react'

const ResultsAndRevenue = () => {
  return (
    <section className='pt-[150px] p-5 flex flex-col justify-center items-center'>
        <div className='p-[6]'>
        <h1 className="font-inter font-bold text-[32px] md:text-[48px] text-black ">Real-life results and revenue</h1>
        <p className="font-inter text-gray-500 text-black">See how companies like yours have smashed their sales success goals</p>
        </div>
        
        <div className='flex flex-col md:flex-row gap-[100px] mx-auto w-full md:w-[80%] p-6 border-t border-gray-400 m-10 mt-[80px]'>
            <div>
                <h1 className='font-inter font-bold text-[50px]  md:text-[72px] whitespace-nowrap text-black'>$2.5 M</h1>
                <p className='font-inter font-bold text-[20px] text-black'>Generate sales</p>
            </div>
            <div>
                <p className='font-inter font-medium text-[20px] md:text-[30px] w-full md:w-[80%] text-black'>Using Кирилица CRM is one of the best decisions we’ve ever made. We’ve seen our annual revenue explode, and the outlook just keeps getting sunnier.</p>
                <div className='flex gap-5 pt-5'>
                    <img src="Oval.png" alt="" />
                    <div>
                        <h1 className='font-inter font-bold text-[16px] text-black'>Nellie Foster</h1>
                        <p className='font-inter text-[16px] text-gray-400 text-black'>Founder & CEO, Foster Business Strategies</p>
                    </div>
                </div>
            </div>
            

        </div>

        <div className='flex flex-col md:flex-row  gap-[100px] w-full md:w-[80%] mx-auto p-6 border-t border-gray-400 m-10'>
            <div>
                <h1 className='font-inter font-bold text-[50px] md:text-[72px] whitespace-nowrap text-black'>45%</h1>
                <p className='font-inter font-bold text-[20px] text-black'>Grew revenue</p>
            </div>
            <div className='flex flex-col w-full md:w-[67%] mx-auto'>
                <p className='font-inter font-medium text-[20px] md:text-[30px] w-full md:w-[80%] text-black'>Yoora is created for sales people. It’s the kind of software that just works. I don’t have to try to make it work. It already does. It’s just perfect.</p>
                <div className='flex gap-5 pt-5'>
                    <img src="Oval2.png" alt="" />
                    <div>
                        <h1 className='font-inter font-bold text-[16px] text-black'>Lawrence Gibbs</h1>
                        <p className='font-inter text-[16px] text-gray-400 text-black'>Marketing Director</p>
                    </div>
                </div>
            </div>
        </div>
      

    </section>
  )
}

export default ResultsAndRevenue
