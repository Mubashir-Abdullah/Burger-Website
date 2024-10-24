import React from "react";
import { FaHamburger, FaSearch, FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
    return (
        <div>
            <div className="flex justify-between items-center p-5">
                <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-blue-400 to-grey-700">
                    <div className="flex justify-between items-center">
                        
                        {/* Left Side: Logo and Search Bar */}
                        <div className="flex items-center gap-2">

                            {/* Logo burger */}
                            <FaHamburger className="w-6 h-6 text-yellow-400 hover:text-cyan-300 cursor-pointer" />

                            {/* Search bar (hidden on small screens) */}
                            <div className="relative hidden md:block">
                                <input 
                                    className="rounded-3xl py-3 px-3 outline-none text-xs w-full lg:w-[350px] pr-10" 
                                    placeholder="Search for your favourite burger" 
                                />
                                <FaSearch 
                                    className="w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" 
                                />
                            </div>
                        </div>

                        {/* Right Side: Order info, Cart, and Profile */}
                        <div className="flex items-center gap-4">

                            {/* Fast Delivery Info (hidden on small screens) */}
                            <FaBolt className="w-5 h-5 text-amber-400 hidden md:block cursor-pointer" />
                            <p className="text-sm text-white hidden md:block cursor-pointer">
                                Order now and get it within 
                            </p>
                            <span className="text-amber-400 hidden md:block cursor-pointer">15 minutes</span>

                            {/* Cart Icon */}
                            <FaCartShopping className="w-11 h-8 text-sky-400 rounded-full ring-2 p-1 hover:text-amber-400 cursor-pointer" />

                            {/* User Avatar */}
                            <img
                                className="w-8 h-8 rounded-full ring-sky-400 cursor-pointer"
                                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                                alt="user avatar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
