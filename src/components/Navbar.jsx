import React, { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className=" w-screen shadow-lg py-4 fixed z-50">
            <div className=" w-[80%] rounded-3xl md:w-[60%] bg-neutral-800 bg-opacity-75 backdrop-filter backdrop-blur-md transition-all duration-300 text-white mx-auto py-2 px-4 lg:rounded-full lg:flex lg:items-center lg:justify-between border-neutral-600 lg:border-2 relative">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">
                        <a href="#">
                            David Toth
                        </a>
                    </div>

                    {/* Hamburger menu button for medium and large screens */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Navigation links */}
                <div
                    className={`${isMenuOpen ? "block" : "hidden"
                        } mt-4 lg:flex items-center text-center lg:mt-0`}
                >
                    <div className="flex flex-col items-start lg:flex-row lg:items-center  lg:space-y-0 lg:space-x-4 lg:pr-8">
                        <a
                            href="#projects"
                            className=" hover:underline px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium"
                        >
                            Projects
                        </a>
                        <a
                            href="#"
                            className=" hover:underline px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium"
                        >
                            About
                        </a>
                    </div>
                    <div className="flex flex-col justify-between mt-4 md:mt-0 gap-4 lg:flex-row">
                        <a
                            href="#"
                            className=" p-2 w-10 h-10 hidden lg:flex rounded-full font-medium xl:font-semibold text-black"
                        >
                            <img className="w-8 text-white" src="./globe.svg" />
                        </a>
                        <a href="#contact" className=" px-4 py-2 rounded-full text-left lg:text-center lg:bg-[#ff4800] shadow-inner shadow-white  lg:text-black font-bold">
                            Contact
                        </a>

                    </div>
                </div>
            </div>
        </nav>
    );
};

