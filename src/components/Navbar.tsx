"use client";
import Link from "next/link"
import { useState } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen]=useState(false);
    const toggleMenu=()=>{
        setIsOpen((prevState)=>!prevState);
    }

    const closeMenu = () => {
        setIsOpen(false); // Set isOpen to false to close the menu
    };

  return (
    <header className="bg-backgroundColor p-4 ">
    <nav className="bg-backgroundColor flex justify-between items-center w-[90%] max-w-[1440px] mx-auto">
        <div>
            <a href="/">
            <img src="Roooby.png" alt="" className="w-25" />
            </a>
        </div>
        <div className={`absolute md:static md:min-h-fit bg-backgroundColor min-h-[40vh] left-0 ${isOpen ? "top-[10%] " :"top-[-100%]"  }  md:w-auto w-full    flex items-center px-5`}>
            <ul className="flex flex-col md:flex-row font-inter text-lg font-medium  md:items-center gap-10 md:gap-5  lg:gap-10 ">
                <li><Link href="/products" onClick={closeMenu} className="text-black hover:text-gray-400 hover:underline duration-100">Products</Link></li>
                <li><Link href="/pricing" onClick={closeMenu} className="text-black hover:text-gray-400 hover:underline duration-100">Pricing</Link></li>
                <li><Link href="/company" onClick={closeMenu} className="text-black hover:text-gray-400 hover:underline duration-100">Company</Link></li>
                <li><Link href="/blog" onClick={closeMenu} className="text-black hover:text-gray-400 hover:underline duration-100">Blog</Link></li>
                <li><Link href="/contact" onClick={closeMenu} className="text-black hover:text-gray-400 hover:underline duration-100">Contact</Link></li>
            </ul>
        </div>
        <div className="flex flex-row gap-2 md:gap-6">
            <button className="font-inter font-bold border border-gray-300 rounded-md py-1 px-3 text-black hover:bg-gray-300 duration-300">Log in</button>
            <button className="font-inter font-bold text-white bg-customBlue rounded-md py-1 px-3 hover:bg-customYellow duration-300">Try for free</button>
            <button onClick={toggleMenu} className="block md:hidden">
                {isOpen ? <img src="/CloseIcon.png" alt="" width={25} height={25} /> : <img src="/MenuIcon.svg" width={25} height={25}/>}
            </button>
        </div>

    </nav>
    </header>
  )
}

export default Navbar
