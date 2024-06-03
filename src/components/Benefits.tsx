

const Section1 = () => {
  return (
    <div className="bg-customBlue">
   <section className="bg-customBlue flex flex-col max-w-[1440px] mx-auto">
    <div className="flex flex-col md:flex-row justify-center items-center pb-[50px] font-inter px-[25px] md:px-[100px] pt-[100px]">
        <h1 className="text-white w-[100%] md:w-[50%] mx-auto text-3xl lg:text-5xl font-bold  leading-loose">Here's how Roooby can benefit your business</h1>
        <p className="text-gray-300 w-[100%] pt-8 md:pt-0 md:w-[50%] text-[18px]">Build more meaningful and lasting relationships — better understand their needs, identify new opportunities to help, address any problems faster.</p>
    </div>
    <div className="flex flex-col lg:flex-row justify-center items-center gap-2 mx-auto p-[40px] md:p-[100px]">
        <div className=" bg-blue-900 group hover:bg-customYellow  bg-opacity-20 shadow-2xl duration-300 rounded-lg p-5 hover:scale-105 ">
            <img src="face.svg" alt="" className="h-30 group-hover:filter group-hover:invert group-hover:text-black p-5 lg:p-10  " />
          <div className=" h-100 border-t border-t-white w-full py-10 md:w-[90%] mx-auto group-hover:border-t-black">
            <h1 className="text-white p-2 group-hover:text-black font-inter font-bold text-[20px]">Lead customers to happiness</h1>
            <p className="h-24 text-white p-2 group-hover:text-black font-inter  text-[16px] ">Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
          </div>

        </div>
        <div className=" group hover:bg-customYellow bg-blue-900  bg-opacity-20 shadow-2xl duration-300 rounded-lg p-5 hover:scale-105">
            <img src="laptop.svg" alt="" className="h-30 group-hover:filter group-hover:invert group-hover:text-black p-5 lg:p-10 pt-10 lg:pt-[55px]" />
          <div className="border-t h-100  border-t-whitew-full py-10 group-hover:border-t-black  md:w-[90%] mx-auto">
            <h1 className=" text-white p-2 group-hover:text-black font-inter font-bold text-[20px]">Support your support</h1>
            <p className=" h-24 text-white p-2 group-hover:text-black font-inter text-[16px] ">Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.</p>
          </div>

        </div>
        <div className="  group hover:bg-customYellow bg-blue-900 bg-opacity-20 shadow-2xl duration-300 rounded-lg p-5 hover:scale-105">
            <img src="wound.svg" alt="" className="h-30 group-hover:filter group-hover:invert group-hover:text-black p-5 lg:p-10 " />
          <div className="border-t h-100  border-t-white w-full py-10 group-hover:border-t-black md:w-[90%] mx-auto">
            <h1 className=" text-white p-2 group-hover:text-black font-inter font-bold text-[20px]">Grow without growing pains</h1>
            <p className=" h-24 text-white p-2 group-hover:text-black font-inter text-[16px] line-clamp-4">Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.</p>
          </div>

        </div>

    </div>

   </section>
   </div>
  )
}

export default Section1
