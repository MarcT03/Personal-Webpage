import React from "react";
import { motion } from "framer-motion";

const Greeting = () => {
    return(
        <motion.div
        className=" flex items-center justify-center flex-col min-h-screen p-6"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2.5}}
        >
        <div className="text-center max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold font-sf mb-4">
                Hi, I'm Marc.
            </h1>
            <p className="text-lg md:text-xl mb-4 font-helvetica text-[21px]">
                I am currently a student studying at UCLA. I am passionate in Web Development and UX/UI design, and plan to pursue a career in these fields.
            </p>
        </div> 
        <div className="w-full flex justify-center items-center mt-6 gap-6">
            <a
                href="https://github.com/MarcT03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-3 font-git px-6 bg-gray-800 text-white py-3 rounded-full transition-colors hover:bg-gray-600 "
            >
                GitHub
                <i className="fa fa-github"> </i>
            </a>
            <a
                href="https://www.linkedin.com/in/marc-anthony-trujillo-15464b199/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full transition-colors hover:bg-blue-500"
            >
                LinkedIn
                <i className="fa fa-linkedin"> </i>
            </a>
        </div>

        </motion.div>
    )
}
export default Greeting