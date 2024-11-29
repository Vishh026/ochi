import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0)
    
    useEffect(() => {
        window.addEventListener("mousemove",(e)=>{
          //current position of x nd y 
           let mouseX = e.clientX;
           let mouseY = e.clientY;
          //gettimngthe half width and half height
           let deltaX = mouseX - window.innerWidth/2;
           let deltaY = mouseY - window.innerHeight/2;
          //atan2= it provides angle in radians
          //now we have to conveRT RADIAND TO ANGLE
          // 1radius = 180/math.pi = 57.29 deg
           var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
            setRotate(angle-180)
           
        })
    },[])
  return (
    <div 
    className='w-full eyes h-screen overflow-hidden'>

      <div 
      data-scroll 
      data-scroll-speed="-.7"
      className='relative w-full h-full bg-cover bg-center bg-red-300 bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
      <div className='absolute h-32 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  flex gap-10 '>
      <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
        <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute 
        -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2  w-full h-10  ">
        <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
        </div>
        
        </div>
      </div>
      <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center">
        <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute 
        -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2  w-full h-10  ">
        <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
        </div>
        
        </div>
      </div>
      </div>
      
      </div>
      
    </div>
  )
}

export default Eyes
