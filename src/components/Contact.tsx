const Contact = () => {
  return (
    <div className="bg-backgroundColor">
      <section className="bg-backgroundColor flex flex-col items-center max-w-[1440px] mx-auto ">
        <div className="w-full lg:w-[50%] p-3 lg:p-10  ">
          <h1 className="font-inter font-bold text-black text-[40px] lg:text-[64px] leading-tight">Get in touch with our lovely team</h1>
        </div>
        <div className="flex flex-col lg:flex-row bg-backgroundColor justify-between items-center w-full lg:w-[70%] mx-auto ">
          <div className="flex flex-col md:flex-row ">
            <div className="p-5">
              <div>
                <h1 className="font-inter font-bold text-black text-[18px]">Roooby Technologies</h1>
                <p className="font-inter font-medium text-gray-500 text-[18px] pb-5">Plovdiv, Bulgaria, bul Vasil Levski 96</p>
              </div>
              {/* Embed Google Maps */}
              <iframe
                className="w-[300px]  lg:w-[500px] h-60 lg:h-96 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.098993440796!2d24.756569315439254!3d42.141280479200155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa83e30f88f9a9%3A0x1ed0447a689f2600!2sBulgaria%2C%20Plovdiv%2C%20ul.%20Vasil%20Levski%2096!5e0!3m2!1sen!2sbg!4v1624539709395!5m2!1sen!2sbg"
                
                loading="lazy"
              ></iframe>
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
            <div className=" pb-5">
              <button className="bg-customGreen py-2 px-1 rounded-lg m-2 text-white hover:bg-customBlue duration-300 ">Send Message  {`>`}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
