import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const Landing = () => {

  return (
    <div data-scroll data-scroll-speed="-.8" data-scroll-section data className="w-full h-screen bg-text bg-[#ffffff] text-[#212121] pt-2 font-bold">
      <div className="font-oswald  mt-32 px-20">
        {["we create", "eye opening", "presentation"].map((item, index) => {
            return (
            <div className="masker">
                <div className="w-fit flex">
                  {/* whenever the index is 1 then use that imag and move it from left to right */}
                {index === 1 && (
                <motion.div 
                initial={{width:0}} 
                animate={{width:"9vw"}}
                transition={{ease: [0.76, 0, 0.24, 1],
                duration:.8}}
                className="mr-[1vw] w-[9vw] h-[5.7vw] relative top-[2.2vw]  rounded-md">
                  <img className="w-full h-full bg-center bg-cover
                  rounded-md" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                </motion.div>
                    )}
                <h1  className='pt-[2vw] -mb-[1vw]  flex items-center text-[7vw] uppercase leading-[5.5vw] h-full'>
                  {/* calling the items */}
                {item}
                </h1>
                </div> 
          </div>
            )
        })}
      </div>

      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "for public and private companies",
          "from the first pitch to IPO",
        ].map((items, index) => (
          <p key={index} className="text-md font-normal tracking-tight capitalize leading-none ">
            {items}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="uppercase px-5 py-2 border-[2px] rounded-full border-zinc-500 font-normal text-md ">  
            Start the project
          </div>
          <div className="border-[1px] rounded-full border-zinc-400 w-10 h-10  flex items-center justify-center ">
            <span className="rotate-[45deg]">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
