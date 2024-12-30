import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { useDarkMode } from "../context/DarkModeContext";


const Navbar = () => {
    const {darkMode, toggleDarkMode} = useDarkMode();
    const [active, setActive] = useState('');
    return (
        <nav className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 `}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={()=>{
                        setActive("");
                        window.scrollTo(0,0);
                    }}
                >
                <p className="font-helvetica text-light-text dark:text-dark-text text-[18px] font-bold cursor-pointer">Marc Anthony Trujillo</p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    <li>
                        <Link
                        to="/about"
                        className="font-helvetica text-light-text dark:text-dark-text text-[16px] font-medium cursor-pointer hover:text-gray-400 dark:hover:text-gray-400"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="/projects"
                        className="font-helvetica text-light-text dark:text-dark-text text-[16px] font-medium cursor-pointer hover:text-gray-400 dark:hover:text-gray-400"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="/contact"
                        className="font-helvetica text-light-text dark:text-dark-text text-[16px] font-medium cursor-pointer hover:text-gray-400 dark:hover:text-gray-400"
                        >
                            Contact
                        </Link>
                    </li>
                    <button
                    onClick={toggleDarkMode}
                    className=" text-gray-800 dark:text-gray-200 rounded-lg transition-colors darkMode:"
                >
                    {darkMode ? "☀️" : "🌙"}
                </button>
                </ul>

                
            </div>
        </nav>
    )
}

export default Navbar