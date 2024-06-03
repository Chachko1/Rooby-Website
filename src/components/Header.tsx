

const Header = () => {
  return (
    <div className="bg-backgroundColor flex flex-col justify-center items-center">
    <header className="bg-backgroundColor max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row pt-10 pb-10 pl-10 bg-backgroundColor justify-between items-center ">
            <div className="flex flex-col w-[100%] lg:w-[50%] mx-auto justify-center">
                <h1 className="font-inter text-4xl lg:text-6xl text-customBlue p-5 font-bold leading-tight">
                 Bringing companies and customers together, anywhere
                </h1>
                <p className="font-inter px-5 pb-5 w-[70%] text-black">An awesome & powefull tools for your business, increase business revenue with enterprise-grade links built to acquire and engage cutomers.</p>
                <div className="flex py-2 pt-2  lg:py-4 lg:pt-6 lg:pl-5 pl-2   ">
                    <span className="border bg-white  border-gray-200 rounded-lg p-1  shadow  font-inter flex">
                    <input type="text" placeholder="Enter your email" className="text-gray-700  p-2 focus:border-transparent text-[15px] lg:text-[18px]" />
                    <button className="bg-customBlue text-white p-2.5  rounded-lg hover:bg-customYellow duration-300 text-[10px] lg:text-[14px] px-4">Try for free</button>
                    </span>
                </div>
                <p className="font-inter  lg:pb-1 pb-6 p-1 pl-5  text-[14px] text-black">Full access. No credit card required.</p>
            </div>
            <div className="mx-0">
            <img src="HeaderPhoto.png" alt="" />
            </div>
        </div>
        <div className="flex flex-col  lg:flex-row gap-10 lg:gap-0 bg-backgroundColor justify-between w-[85%] mx-auto p-10 ">
            <p className="font-inter font-medium lg:pb-0 pb-5 lg:pl-0 pl-5 text-black">Trusted by 1,000+ customers</p>
            <img src="Google.svg" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px] transform scale-x-110 " />
            <img src="Atlassian.svg" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px] transform scale-x-110"/>
            <img src="Canon.svg" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px] transform scale-x-110"/>
            <img src="Walmart.svg" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px] transform scale-x-110"/>
            <img src="Amazon.svg" alt="" className="w-[200px] h-[40px] lg:w-[100px] lg:h-[35px] transform scale-x-110"/>
        </div>
        
    </header>
    </div>
  )
}

export default Header
