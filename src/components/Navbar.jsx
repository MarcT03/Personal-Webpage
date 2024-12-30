import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { useDarkMode } from "../context/DarkModeContext";


const Navbar = () => {
    const {darkMode, toggleDarkMode} = useDarkMode();
    const [active, setActive] = useState('');
    return (
        <nav className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 `}>
            <div className="w-full flex justify-center items-center max-w-7xl mx-auto">
               
                <ul className="list-none hidden sm:flex flex-row gap-20">
                    <li>
                    <Link
                    to="/"
                    className="flex items-center gap-2 font-helvetica text-[16px] font-medium hover:text-gray-400 dark:hover:text-gray-400"
                    onClick={()=>{
                        setActive("");
                        window.scrollTo(0,0);
                    }}
                >
                Home
                </Link>
                    </li>
                    <li>
                        <Link
                        to="/about"
                        className="font-helvetica  text-[16px] font-medium cursor-pointer hover:text-gray-400 dark:hover:text-gray-400"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="/projects"
                        className="font-helvetica  text-[16px] font-medium cursor-pointer hover:text-gray-400 dark:hover:text-gray-400"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="/contact"
                        className="font-helvetica text-[16px] font-medium cursor-pointer hover:text-gray-400 dark:hover:text-gray-400"
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