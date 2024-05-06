

const Section1 = () => {
  return (
   <section className="bg-customBlue flex flex-col">
    <div className="flex flex-col md:flex-row justify-center items-center pb-[50px] font-inter px-[25px] md:px-[100px] pt-[100px]">
        <h1 className="text-white w-[100%] md:w-[50%] mx-auto text-3xl md:text-5xl">Here's how Roooby can benefit your business</h1>
        <p className="text-gray-300 w-[100%] pt-8 md:pt-0 md:w-[50%] text-[18px]">Build more meaningful and lasting relationships — better understand their needs, identify new opportunities to help, address any problems faster.</p>
    </div>
    <div className="flex flex-col lg:flex-row justify-center items-center gap-2 mx-auto p-[40px] md:p-[100px]">
        <div className=" bg-blue-900 group hover:bg-customYellow  bg-opacity-20 shadow-2xl duration-300 rounded-lg p-5  ">
            <img src="face.svg" alt="" className="group-hover:filter group-hover:invert group-hover:text-black p-5" />
          <div className="border-t border-t-white w-full md:w-[50%] group-hover:border-t-black">
            <h1 className="text-white p-2 group-hover:text-black">Lead customers to happiness</h1>
            <p className="text-white p-2 group-hover:text-black">Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
          </div>

        </div>
        <div className=" group hover:bg-customYellow bg-blue-900  bg-opacity-20 shadow-2xl duration-300 rounded-lg p-5">
            <img src="laptop.svg" alt="" className="group-hover:filter group-hover:invert group-hover:text-black p-5" />
          <div className="border-t border-t-whitew-full md:w-[50%] group-hover:border-t-black ">
            <h1 className="text-white p-2 group-hover:text-black">Lead customers to happiness</h1>
            <p className="text-white p-2 group-hover:text-black">Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
          </div>

        </div>
        <div className="  group hover:bg-customYellow bg-blue-900 bg-opacity-20 shadow-2xl duration-300 rounded-lg p-5">
            <img src="wound.svg" alt="" className="group-hover:filter group-hover:invert group-hover:text-black p-5" />
          <div className="border-t border-t-white w-full md:w-[50%] group-hover:border-t-black">
            <h1 className="text-white p-2 group-hover:text-black">Lead customers to happiness</h1>
            <p className="text-white p-2 group-hover:text-black">Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.</p>
          </div>

        </div>

    </div>

   </section>
  )
}

export default Section1
