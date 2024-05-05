

const Header = () => {
  return (
    <header className="">
        <div className="flex flex-col md:flex-row pt-10 pb-10 pl-10 bg-backgroundColor justify-between">
            <div className="flex flex-col w-[100%] md:w-[50%] mx-auto">
                <h1 className="font-inter text-4xl md:text-6xl text-customBlue p-5">
                 Bringing companies and customers together, anywhere
                </h1>
                <p className="font-inter px-5 pb-5 w-[70%] text-black">An awesome & powefull tools for your business, increase business revenue with enterprise-grade links built to acquire and engage cutomers.</p>
                <div className="flex py-4 pt-6">
                    <span className="border border-gray-200 rounded-lg p-0.5 shadow font-inter">
                    <input type="text" placeholder="Enter your email" className="text-gray-700  p-2 focus:border-transparent text-[18px]" />
                    <button className="bg-customBlue text-white p-1.5 rounded-lg hover:bg-customYellow duration-300 px-3">Try for free</button>
                    </span>
                </div>
                <p className="font-inter  lg:pb-1 pb-6 p-1 text-gray-700 text-[14px] text-black">Full access. No credit card required.</p>
            </div>
            <div className="mx-0">
            <img src="HeaderPhoto.png" alt="" />
            </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 bg-backgroundColor justify-between w-[85%] mx-auto p-10 ">
            <p className="font-inter font-medium lg:pb-0 pb-5 lg:pl-0 pl-5 text-black">Trusted by 1,000+ customers</p>
            <img src="Google.png" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px] " />
            <img src="Atlassian.png" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px]"/>
            <img src="Canon.png" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px]"/>
            <img src="Walmart.png" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px]"/>
            <img src="Amazon.png" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px]"/>
        </div>
        
    </header>
  )
}

export default Header
