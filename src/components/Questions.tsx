"use client";
import { useState } from 'react';

const Questions = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    

    return (
        <section className='bg-white p-5'>
            <div className='w-full lg:w-[60%] p-5 pl-5 lg:pl-[100px]'>
                <h1 className='font-inter font-bold text-black lg:text-[64px] text-[40px]'>Frequently asked questions</h1>
            </div>
            <div className='w-full lg:w-[80%] ml-auto  p-5 px-10'>
                <div className='flex flex-col gap-5 border-t  border-gray-500 p-2 py-5 '>
                    <div className='flex items-center'>
                        <h1 className='font-inter font-medium text-[20px] lg:text-[32px] text-black'>How Does Roooby CRM Compare To The Competition?</h1>
                        <button
                            className="text-white font-bold py-2 px-4 rounded "
                            onClick={() => setIsVisible1(!isVisible1)}
                        >
                            <img src="Plus.png" alt="Toggle Button"  className={`transition-transform duration-300 ${isVisible1 ? 'rotate-45' : 'rotate-0'}`} />
                        </button>
                    </div>
                    {isVisible1 && (
                        <p className=" p-2 text-gray-500 ">
                            Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.
                        </p>
                    )}
                </div>
            </div>
            <div className='w-full lg:w-[80%] ml-auto  p-5 px-10'>
                <div className='flex flex-col gap-5 border-t  border-gray-500 p-2 py-5 '>
                    <div className='flex items-center'>
                        <h1 className='font-inter font-medium text-[20px] lg:text-[32px] text-black'>Can I Change Plans Or Cancel My Subscription At Any Time?</h1>
                        <button
                            className="text-white font-bold py-2 px-4 rounded "
                            onClick={() => setIsVisible2(!isVisible2)}
                        >
                            <img src="Plus.png" alt="Toggle Button"  className={`transition-transform duration-300 ${isVisible2 ? 'rotate-45' : 'rotate-0'}`} />
                        </button>
                    </div>
                    {isVisible2 && (
                        <p className=" p-2 text-gray-500 ">
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ducimus impedit ea molestias quae sed natus doloribus deleniti perspiciatis optio iusto, vel aut, quisquam dolor enim qui minus, id accusantium?
                        </p>
                    )}
                </div>
            </div>
            <div className='w-full lg:w-[80%] ml-auto  p-5 px-10'>
                <div className='flex flex-col gap-5 border-t  border-gray-500 p-2 py-5 '>
                    <div className='flex items-center'>
                        <h1 className='font-inter font-medium text-[20px] lg:text-[32px] text-black'>How Secure Is My Data With Roooby CRM?</h1>
                        <button
                            className="text-white font-bold py-2 px-4 rounded "
                            onClick={() => setIsVisible3(!isVisible3)}
                        >
                            <img src="Plus.png" alt="Toggle Button"  className={`transition-transform duration-300 ${isVisible3 ? 'rotate-45' : 'rotate-0'}`} />
                        </button>
                    </div>
                    {isVisible3 && (
                        <p className=" p-2 text-gray-500 ">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores neque, dolor explicabo fugiat eos dignissimos aliquam nemo suscipit facilis excepturi, blanditiis itaque aperiam nisi! Molestias libero praesentium error inventore eos!
                        </p>
                    )}
                </div>
            </div>
            <div className='w-full lg:w-[80%] ml-auto  p-5 px-10'>
                <div className='flex flex-col gap-5 border-t  border-gray-500 p-2 py-5 '>
                    <div className='flex items-center'>
                        <h1 className='font-inter font-medium text-[20px] lg:text-[32px] text-black'>What Is The Uptime Guarantee?</h1>
                        <button
                            className="text-white font-bold py-2 px-4 rounded "
                            onClick={() => setIsVisible4(!isVisible4)}
                        >
                            <img src="Plus.png" alt="Toggle Button"  className={`transition-transform duration-300 ${isVisible4 ? 'rotate-45' : 'rotate-0'}`} />
                        </button>
                    </div>
                    {isVisible4 && (
                        <p className=" p-2 text-gray-500 ">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem libero sequi voluptatum reiciendis modi facilis eaque excepturi. Architecto, consectetur. Excepturi beatae ipsum, voluptate alias officiis fugiat reiciendis eius modi ad?
                        </p>
                    )}
                </div>
            </div>
            <div className='w-full lg:w-[80%] ml-auto  p-5 px-10'>
                <div className='flex flex-col gap-5 border-t  border-gray-500 p-2 py-5 '>
                    <div className='flex items-center'>
                        <h1 className='font-inter font-medium text-[20px] lg:text-[32px] text-black'>How Can I Add More Emails To My Account?</h1>
                        <button
                            className="text-white font-bold py-2 px-4 rounded "
                            onClick={() => setIsVisible5(!isVisible5)}
                        >
                            <img src="Plus.png" alt="Toggle Button"  className={`transition-transform duration-300 ${isVisible5 ? 'rotate-45' : 'rotate-0'}`} />
                        </button>
                    </div>
                    {isVisible5 && (
                        <p className=" p-2 text-gray-500 ">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic provident est, explicabo ex ducimus unde molestiae asperiores id tempora aperiam optio necessitatibus adipisci fugiat, cumque, dolorum reiciendis non. Rem, dolores!
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Questions;
