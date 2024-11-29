import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) =>{
    cards[index].start({ y: "0" })
  }
  const handleHoverEnd = (index) =>{
    cards[index].start({ y: "100%" })
  }
  
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-15'>
        <h1 className="font-['Neue_Montreal'] tracking-tight text-6xl pb-5 ">Featured projects</h1>
      </div>

    <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div 
          onHoverStart={() => {handleHover(0)}} 
          onHoverEnd={()=>handleHoverEnd(0)}
          className="cardContainer relative w-1/2 h-[75vh] ">
            
          <h1 className="absolute overflow-hidden flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] text-nowrap z-[9] tracking-tight text-8xl leading-none font-oswald -pb-20 -mb-20 font-semibold ">
          {"Cardboard Spaceship".
              split(" ").map((item,index)=>(
                <motion.span className='inline-block' 
                    initial={{y:"100%"}}
                    animate={cards[0]} 
                    transition={{ease:[0.22, 1, 0.36, 1],
                      delay:index*.06
                    }}
                    >{item}
                </motion.span>
            ))}
          </h1>
          <div className='w-full h-full rounded-xl overflow-hidden'>
            <img src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" className='h-full w-full bg-cover'/>
          </div>        
          </motion.div>
 
          <motion.div 
          onHoverStart={() => {handleHover(1)}} 
          onHoverEnd={()=>handleHoverEnd(1)}
          className="cardContainer relative w-1/2 h-[75vh] bg-red-500 rounded-xl">
            <h1 className="absolute right-full flex overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] text-nowrap z-[9] tracking-tight text-8xl leading-none font-oswald -pb-20 -mb-20 font-semibold">
            {"AH2 & Matt Horn".split(" ").
            map((item,index)=>(
              <motion.span className='inline-block' 
              initial={{y:"100%"}}
              animate={cards[1]} 
              transition={{ease:[0.22, 1, 0.36, 1],
                delay:index*.06
              }}
              >{item}</motion.span>
            ))}
            </h1>
                <div className=' w-full h-full rounded-xl bg-green-600 '>
                <div className=' w-full h-full rounded-xl overflow-hidden'>
                    <img src="https://ochi.design/wp-content/uploads/2024/08/HORN_WEB_1.png" alt="" className='h-full w-full bg-cover' /></div>        
                </div>
          </motion.div>
        </div>
        </div>
    </div>
  )
}

export default Featured
