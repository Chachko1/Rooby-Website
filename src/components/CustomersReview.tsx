

const CustomersReview = () => {
  return (
    <section className="bg-backgroundColor pb-10">
    <div className="flex flex-col md:flex-row justify-between font-inter pb-[20px] md:pb-[100px] p-[100px]"><h1 className="font-bold text-[48px] w-full md:w-[45%] text-black">We love our Customers and They love us too</h1> <p className="font-medium text-[20px] pt-[20px] md:pt-[110px] text-black">See all <span className="text-customGreen">{'>'}</span></p></div>
    <div className="flex gap-10 md:gap-3 flex-col md:flex-row p-10 w-full md:w-[90%] mx-auto">

    <div className='flex flex-col w-full md:w-[90%] mx-auto '>
                <div className="p-5 pb-8"><img src="GreenIcon.png" alt="" width={30} height={30} /> </div>
                <p className='font-inter font-medium text-[30px] w-full  border-t border-gray-400 p-5 text-black'>The best thing we love about Yoora is it does two-way sync with Google Apps. It has helped us to better organize and keep everything on track.</p>
                <div className='flex gap-5 pt-5'>
                    <img src="CustomerOne.png" alt="" />
                    <div>
                        <h1 className='font-inter font-bold text-[16px] text-black'>Lola Ross</h1>
                        <p className='font-inter text-[16px] text-gray-400 '>Marketing Director</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full md:w-[90%]  mx-auto'>
                 <div className="p-5 pb-8"><img src="GreenIcon.png" alt="" width={30} height={30} /> </div>
                <p className='font-inter font-medium text-[30px] w-full  border-t border-gray-400 p-5 text-black'>It has made our sales department more effective and efficient. It’s easy to use and it’s constantly updated. It’s easy to use and it’s constantly updated.</p>
                <div className='flex gap-5 pt-5'>
                    <img src="CustomerTwo.png" alt="" />
                    <div>
                        <h1 className='font-inter font-bold text-[16px] text-black'>Daisy Phelps</h1>
                        <p className='font-inter text-[16px] text-gray-400 '>Marketing Director</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full md:w-[90%] mx-auto'>
                 <div className="p-5 pb-8"><img src="GreenIcon.png" alt="" width={30} height={30} /> </div>
                <p className='font-inter font-medium text-[30px] w-full  border-t border-gray-400 p-5 pb-[20px] md:pb-[110px] text-black'>Easy to use, reasonably priced, and ensures I don’t drop the ball on following up with my leads!</p>
                <div className='flex gap-5 pt-5'>
                    <img src="CustomerThree.png" alt="" />
                    <div>
                        <h1 className='font-inter font-bold text-[16px] text-black'>Andrew Wilkins</h1>
                        <p className='font-inter text-[16px] text-gray-400 '>Marketing Director</p>
                    </div>
                </div>
            </div>
    </div>

    </section>
  )
}

export default CustomersReview
