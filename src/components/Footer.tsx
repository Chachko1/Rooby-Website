
const Footer = () => {
  return (
    <footer>
        <div className="flex flex-col p-10  bg-white">
            <div className="border-b border-gray-300 flex-col md:flex gap-0 md:gap-[100px] md:flex-row justify-between items-start p-4 pb-10 px-[100px]">
                <div className="pb-10">
                    <h1 className="font-inter font-black text-[25px] pb-4 text-black">Roooby</h1>
                    <p className="font-inter text-[14px] w-full lg:w-[40%] pb-4 text-black">We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs</p>
                    <img src="SocialMedia.png" alt="" />
                </div >
                    <div className="flex md:flex-row flex-col gap-[100px]">
                   <div className="flex gap-[75px] pb-10">     
                    <ul className="flex flex-col gap-1 font-inter text-black">
                        <li className="font-bold pb-4">Company</li>
                        <li>About</li>
                        <li>Pricing</li>
                        <li>Jobs</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                   

                    <ul className="flex flex-col gap-1 font-inter text-black">
                        <li className="font-bold pb-4">Product</li>
                        <li>Sales software</li>
                        <li>Features</li>
                        <li>Privacy</li>
                        <li>Marketplace</li>
                        <li>Status</li>
                        <li>API</li>
                    </ul>

                    </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-[100px]">
                   <div className="flex gap-[70px]">     
                    <ul className="flex flex-col gap-1 font-inter text-black">
                        <li className="font-bold pb-4">Discover</li>
                        <li>Partner program</li>
                        <li>Get our newsletter</li>
                        <li>Sales pipelines</li>
                        <li>What is CRM?</li>
                        <li>CRM Comparison</li>
                        <li>Resources</li>
                    </ul>
                   

                    <ul className="flex flex-col gap-1 font-inter text-black">
                        <li className="font-bold pb-4">Help Center</li>
                        <li>Community</li>
                        <li>Knowledge Bas</li>
                        <li>Academy</li>
                        <li>Support</li>
                       
                    </ul>

                    </div>
                    </div>

                
            </div>
            <div className="flex flex-col md:flex-row justify-between w-[90%] mx-auto p-6  items-center">
               <span className="pb-10 md:pb-0 font-inter">© Copyright 2024</span>

               <ul className="md:pb-1 pb-10 flex flex-col md:flex-row  gap-5 md:gap-10 font-inter">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
               </ul>

               <div className="flex gap-2 justify-center items-center">
                <img src="Shape.png" alt="" className="w-5 h-5"/>
                <p className="font-inter ">English</p>
               </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
