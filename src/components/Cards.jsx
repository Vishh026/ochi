import React from 'react'

function Cards() {
  return (
    <div data-scroll data-scroll-section className='bg-[#f1f1f1] w-full h-screen  flex items-center gap-5 px-20'>
      <div className="cardContainer h-[50vh] w-1/2">
        <div className="card relative w-full rounded-xl h-full bg-[#004d43] flex items-center justify-center">
            <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 px-5 py-1 rounded-full border-[#CDEA68] text-[#CDEA68] border-2 bottom-10 text-1xl'>&copy;2019-2022</button>
        </div>
      </div>
      <div className="cardContainer flex gap-5 h-[50vh] w-1/2">
        <div className="container rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
        <div className="card ">
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        
        </div>
      </div>
        <div className="card rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
        <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        
        </div>
      </div>
    </div>
    
  )
}

export default Cards
