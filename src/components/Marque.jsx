import { motion } from 'framer-motion'
import React from 'react'

const Marque = () => {
  
  return (
    <div data-scroll 
    data-scroll-speed="-.2"
    data-scroll-section 
    className='w-full bg-[#004D43] text-[#ffffff] w-full rounded-t-3xl py-20 bg-[#004D43] text-[#ffffff] pt-10 pb-20'>
   
        <div className=" border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1 
        initial = {{x:"0"}} 
        animate = {{x:"-100%"}} 
        transition={{ease:"linear",repeat:Infinity,duration:12}} 
        className='font-oswald text-[18vw] leading-none font-semibold uppercase -mb-15 pb-2 -tracking-[1vw] '>we are ochi</motion.h1>
        <motion.h1 
        initial = {{x:"0"}} 
        animate = {{x:"-100%"}} 
        transition={{ease:"linear",repeat:Infinity,duration:12}} 
        className='font-oswald text-[18vw] leading-none font-semibold uppercase -mb-15 pb-2 -tracking-[1vw] '>we are ochi</motion.h1>
        
        </div>
    </div>
     
    
  )
}

export default Marque