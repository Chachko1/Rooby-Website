
const WhatsNew = () => {
  return (
    <section>
        <div className="flex flex-col md:flex-row justify-between font-inter p-[25px] md:p-[100px] text-black"><h1 className="font-bold text-[35px] md:text-[64px]">What’s new at Roooby?</h1> <p className="font-medium text-[20px] pt-[65px]">See all <span className="text-customGreen">{'>'}</span></p></div>
        <div className="flex flex-col md:flex-row mx-auto w-[80%]">
            <div className="p-5">
                <p className="font-inter text-gray-400 text-[14px] font-bold py-3 ">Service</p>
                <div className="p-5 border-t border-gray-300 "><img src="one.png" alt="" className="rounded-sm " width={1000} height={1000}/> </div>
                <h1 className="font-inter font-bold text-[20px] md:text-[32px] text-black">How To Deliver a Successful Product Launch</h1>
                <p className="font-inter font-medium text-[16px] pt-4 text-black"><span className="font-bold">05 Sep 2024</span> , by Joshua Nasl</p>

            </div>
            <div className="p-5 ">
                <p className="font-inter text-gray-400 text-[14px] font-bold py-3">Service</p>
                <div className="p-5 border-t border-gray-300 "><img src="two.png" alt="" className="rounded-sm" width={1000} height={1000} /> </div>
                <h1 className="font-inter font-bold text-[20px] md:text-[32px] text-black">What Makes an Authentic Employee Profile, and Why Does It Matter?</h1>
                <p className="font-inter font-medium text-[16px] pt-4 text-black"><span className="font-bold">07 Sep 2023</span> , by Ivan Neshev</p>
            </div>

        </div>
       

    </section>
  )
}

export default WhatsNew
