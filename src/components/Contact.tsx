

const Contact = () => {
  return (
    <div className="bg-backgroundColor">
    <section className="bg-backgroundColor flex flex-col items-center max-w-[1440px] mx-auto ">
      
      <div className="w-full lg:w-[50%] p-3 lg:p-10  ">
        <h1 className="font-inter font-bold text-black text-[40px] lg:text-[64px]">Get in touch with our lovely team</h1>
      </div>
    <div className="flex flex-col lg:flex-row bg-backgroundColor justify-between  items-center w-full lg:w-[70%] mx-auto ">
      
      <div className="flex flex-col md:flex-row ">
        <div className="p-5">
          <div>
            <h1 className="font-inter font-bold text-black text-[18px]">Roooby Technologies</h1>
            <p className="font-inter font-medium text-gray-500 text-[18px] pb-5">Plovdiv, Bulgaria, bul Vasil Levski 96</p>
          </div>
          <img src="Map.png" alt="" />
          <div className="flex">
            <div className="pt-5">
          <div className="border-l border-gray-400 ">
            <h1 className="font-inter font-bold text-black text-[18px] pl-2">General</h1>
            <p className="font-inter font-medium text-gray-500 text-[18px] pl-2">hello@me.com</p>
          </div>
          </div>
          <div className="p-5">
          <div className="border-l border-gray-400">
            <h1 className="font-inter font-bold text-black text-[18px] pl-2">Support</h1>
            <p className="font-inter font-medium text-gray-500 text-[18px] pl-2">support@me.com</p>
          </div>
          </div>
          </div>
        </div>
      </div>
      <div>
      <div className="flex flex-col gap-4 pb-3">
        <input type="text" placeholder="Your Name" className="bg-white text-gray-400 p-2 pr-[100px] lg:pr-[200px] rounded-lg" />
        <input type="text" placeholder="Your Email" className="bg-white text-gray-400 p-2 pr-[100px] lg:pr-[200px] rounded-lg" />
        <input type="text" placeholder="Message" className="bg-white text-gray-400 p-2 pr-[100px] lg:pr-[200px] pb-[150px]"/>
        
      </div>

      <div className=" pb-5"><button className="bg-customGreen py-2 px-1 rounded-lg m-2 text-white hover:bg-customBlue  duration-300 ">Send Message  {`>`}</button> </div>
      </div>

    </div>
    
    </section>
    </div>
  )
}

export default Contact
