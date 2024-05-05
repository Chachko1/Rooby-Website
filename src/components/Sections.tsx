

const Section2 = () => {
  return (
    <section>
    <section className="p-[20px] md:p-[100px]">
        <div className="flex flex-col md:flex-row  gap-2 border-t border-gray-400 p-[50px]">
            <div className="w-full md:w-[50%] mx-0 md:mx-auto">
                <span className="bg-customYellow rounded-md  p-1.5 px-2 font-inter font-bold text-xl">Sales</span>
                <div className="font-inter font-bold text-[32px] md:text-[48px] py-5 md:py-0 text-black">Increase company revenue up to 65%</div>
                <p className="font-inter text-[18px] w-full md:w-[70%] pb-5 md:pb-0 text-black">Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging. </p>
                <ul className="font-inter p-2 text-[18px]">
                    <li className="p-3 pb-4 flex gap-6 text-black"><img src="Ticked.png" alt="" className="w-5 h-5" /> Close more deals with single-page contact management</li>
                    <li className="p-3 pb-4 flex gap-6 text-black"><img src="Ticked.png" alt="" className="w-5 h-5 "/> Enjoy one-click calling, call scripts and voicemail automation</li>
                    <li className="p-3  flex gap-6 text-black"><img src="Ticked.png" alt="" className="w-5 h-5"/>Track stages and milestones of your deals to keep the sales process on track</li>
                </ul>
            </div>
            <div className="bg-customBlue py-[20px] md:py-[50px] px-[30px] md:px-[70px] rounded-2xl">
                <img src="Bitmap.png" alt="" className="rounded-2xl" />
            </div>

        </div>
    </section>
    <section className="pb-[25px] md:pb-[100px] px-[25px] md:px-[100px]">
        <div className="flex flex-col md:flex-row gap-[70px] border-t border-gray-400 p-[50px]">
            
                <img src="Marketing.png" alt="" className="rounded-2xl"/>
           
            <div className="w-full md:w-[50%] mx-auto pt-[5px] md:pt-[70px]">
                <span className="bg-customYellow rounded-md p-1.5 px-2 font-inter font-bold text-xl">Marketing</span>
                <div className="font-inter font-bold  text-[32px] md:text-[48px] py-4 md:py-2 text-black">Marketing</div>
                <p className="font-inter text-[18px] w-full md:w-[80%] py-2 text-black">Market like the most successful companies in the world with Agile CRM's marketing automation software.  </p>
                <ul className="font-inter p-2 text-[18px]">
                    <li className="p-3 pb-4 flex gap-6 text-black"><img src="Ticked.png" alt="" className="w-5 h-5 " />Marketing workflows with an easy drag-and-drop designer</li>
                    <li className="p-3 pb-4 flex gap-6 text-black"><img src="Ticked.png" alt="" className="w-5 h-5 "/>Use our templates to create high converting, mobile responsive landing pages</li>
                    <li className="p-3  flex gap-6 text-black"><img src="Ticked.png" alt="" className="w-5 h-5 "/>Integrate social media easily into your marketing campaigns & contact views</li>
                </ul>
            </div>
            

        </div>
    </section>
    <section className="pb-[25px] md:pb-[100px] px-[25px] md:px-[100px]">
        <div className="flex flex-col md:flex-row gap-2 border-t border-gray-400 p-[50px]">
            <div className="w-full md:w-[50%] mx-auto pt-[20px] md:pt-[70px]">
                <span className="bg-customYellow rounded-md p-1.5 px-2 font-inter font-bold text-xl">Service</span>
                <div className="font-inter font-bold text-[32px] md:text-[48px] py-5 md:py-0 text-black">Help Desk Software</div>
                <p className="font-inter text-[18px] w-full md:w-[70%]  text-black">Great customer support separates decent companies from excellent companies. A positive customer support experience is a crucially important piece of the customer journey. </p>
                <ul className="font-inter p-2 text-[18px] w-full md:w-[90%]">
                    <li className="p-3 pb-4 flex gap-6 pt-4 text-black"><img src="Ticked.png" alt="" className="w-5 h-5 " />Resolve every issue in the shortest possible time with powerful ticketing features</li>
                    <li className="p-3 pb-4 flex gap-6 text-black" ><img src="Ticked.png" alt="" className="w-5 h-5 "/>Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)</li>
                    <li className="p-3  flex gap-6 text-black"><img src="Ticked.png" alt="" className="w-5 h-5 "/>Enjoy at-a-glance views of important data—such as ticket priority—on your dashboard</li>
                </ul>
            </div>
            <div className="bg-gray-100 py-[10px] md:py-[45px] px-[15px] md:px-[60px] rounded-2xl">
                <div className="bg-white p-4 rounded-xl"><img src="LeadDiscovered.png" alt="" className="rounded-2xl"/></div>
            </div>

        </div>
    </section>


    </section>
  )
}

export default Section2
