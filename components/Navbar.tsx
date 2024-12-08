"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };
    const handleLinkClick = () => { setIsMenuOpen(false); }; // Close the menu when a link is clicked


    return (
        <div className="headerback sticky top-0 z-50 bg-white">
            {/* Full navbar for larger screens */}
            <div className="hidden md:flex justify-between mx-[35vmin] my-[2vmin] w-[65vw]">
                <a href="/"><img src="/shopco-logo.png" alt="" /></a>
                <ul className="flex space-x-8 justify-center text-black md:text-[1vmin] lg:text-[1.8vmin]">
                    <li><Link href="/" className="hover:bg-slate-700 px-[.5vmin] py-[1vmin] hover:text-white rounded-2xl">  Shop  </Link></li>
                    <li><Link href="#" className="hover:bg-slate-700 px-[.5vmin] py-[1vmin] hover:text-white rounded-2xl">On Sale</Link></li>
                    <li><Link href="#" className="hover:bg-slate-700 px-[.5vmin] py-[1vmin] hover:text-white rounded-2xl">New Arrivals</Link></li>
                    <li><Link href="#" className="hover:bg-slate-700 px-[.5vmin] py-[1vmin] hover:text-white rounded-2xl">Brands</Link></li>                    
                </ul>
                <div>
                   <input className='bg-[#e5e7eb] py-[1.2vmin] px-[20vmin] rounded-full -mt-[1vmin]' type="text" />
                   <img className='-mt-[3.5vmin] ml-[2vmin]' src="/find.png" alt="" />
                   <div className='font-poppins text-gray-500 ml-[6.5vmin] -mt-[2.5vmin]'>Search for your products...</div>
                </div>
                <div><img className='' src="/cart.png" alt="" /></div>
                <div><img className='' src="/user.png" alt="" /></div>
            </div>

            {/* Hamburger menu for small screens */}
            <div className="md:hidden flex items-center p-4">              
               <div className='flex flex-row'>
                <button onClick={toggleMenu} className="text-black text-2xl">
                    {/* Hamburger icon */}
                    {isMenuOpen ? '✖' : '☰'}
                </button> 
                <a className='ml-[4vmin] mt-[1vmin]' href="/"><img src="/shopco-logo.png" alt="" /></a>
                   <div className='ml-[28vmin]'><img className='mt-[1.5vmin] cursor-pointer' src="/findblack.png" alt="" /></div>                
                   <div className='ml-[3vmin]'><img className='mt-[1.5vmin] cursor-pointer' src="/cart.png" alt="" /></div>
                   <div className='ml-[3vmin]'><img className='mt-[1.5vmin] cursor-pointer' src="/user.png" alt="" /></div>             
               </div>
            </div>

            {/* Dropdown menu for small screens */}
            {isMenuOpen && (
                <div className="fixed top-0 left-0 h-full w-[40vmin] bg-slate-700 shadow-lg text-center">
                    <div className="flex justify-end p-4">
                        <button onClick={toggleMenu} className="text-black border-4 border-black p-2">
                            ✖
                        </button>
                    </div>
                    <ul className="flex flex-col space-y-4 gap-[2vmin] text-[3.5vmin]">
                        <div className='bg-black border-red-900 text-white'>STORE MENU</div>
                        <li><Link href="#" className="text-white hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>Shop</Link></li>
                        <li><Link href="#" className="text-white hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>On Sale</Link></li>
                        <li><Link href="#" className="text-white hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>New Arrivals</Link></li>
                        <li><Link href="#" className="text-white hover:bg-gray-800 hover:text-white rounded p-2 pl-10 pr-10" onClick={handleLinkClick}>Brands</Link></li>                        
                    </ul>                    
                </div>
            )}
            <hr className='bg-black h-[.2vmin]'/>
        </div>
    );
};

export default Navbar;