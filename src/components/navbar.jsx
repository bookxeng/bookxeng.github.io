'use client'
import React from "react";
import {Link} from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Navbar = () =>{
    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 z-20 bg-black">
            <div>
                <Link to="name" smooth duration={500} className="font-semibold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r hover:from-[#005aa7] from-white to-white hover:to-[#fffde4]">
                    Pongnapat L
                </Link>
            </div>
            <ul className="hidden md:flex font-semibold cursor-pointer space-x-10">
                <li>
                    <Link to="name" smooth duration={500} offset={-100} className="font-semibold text-transparent bg-clip-text bg-gradient-to-r hover:from-[#005aa7] from-white to-white hover:to-[#fffde4]">Home</Link>
                </li>
                <li>
                    <Link to="about" smooth duration={500} offset={-100} className="font-semibold text-transparent bg-clip-text bg-gradient-to-r hover:from-[#005aa7] from-white to-white hover:to-[#fffde4]">About</Link>
                </li>
                <li>
                    <Link to="projects" smooth duration={500} offset={-100} className="font-semibold text-transparent bg-clip-text bg-gradient-to-r hover:from-[#005aa7] from-white to-white hover:to-[#fffde4]">Projects</Link>
                </li>
            </ul>
            <div className="hidden lg:flex fixed flex-col right-0 top-[35%]">
                <ul>
                    <li className="font-bold flex w-[160px] h-[60px] items-center mr-[-100px] hover:mr-[10px] duration-500 justify-between">
                        <a href="https://github.com/bookxeng" className="flex items-center w-full">
                            <FaGithub size={35}/>
                            <span className="ml-6">Github</span>
                        </a>
                    </li>
                    <li className="font-bold flex w-[160px] h-[60px] items-center mr-[-100px] hover:mr-[10px] duration-500 justify-between">
                        <a href="mailto:pongnapatlimmongkolhirun@gmail.com" className="flex items-center w-full">
                            <MdEmail size={35}/>
                            <span className="ml-6">Email</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;