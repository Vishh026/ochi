import React from 'react'


function About() {
  return (
    <div className="main w-full bg-[#CDEA68]" 
      data-scroll
      data-scroll-speed=".1.5"
      data-scroll-section
    >
      {/* pl-20 pr-20 py-20  */}
    <div className='
      rounded-tl-3xl rounded-tr-3xl p-20'>
    <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] text-[#212121] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
    </h1>
    <div className="grid gap-y-30 md:grid-cols-12 py-15 outline-top mb-40 md:mb-90 mt-32 border-t-[1px] pt-[1vw]  border-[#a1b562]">
        <div className="md:col-span-4 lg:col-span-6 reset-last font-medium">
          <p>What you can expect:</p>
        </div>
        <div className="col-span-4 reset-last w-[80%] text-xl">
          <div className="wysiwyg reset-last max-w-275">
            <p className='pb-5'>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
        </div>
        <div className="md:col-span-4 lg:col-span-1 reset-last md:items-end md:justify-end md:flex laptop:justify-start mt-20 flex ">
          <div>
            <p className="mb-15">S:</p>
            <ul>
              <li>
                <a className="underline" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="underline" href="#">
                  Behance
                </a>
              </li>
              <li>
                <a className=" underline" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="underline" href="#">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    <div className="w-full border-t-[1px] mt-20 border-[#99AD53] pt-10 flex ">
        <div className='w-1/2'>
        <h1 className='text-6xl text-black '>Our Approch:</h1>
        <button className='flex items-center gap-10 px-10 py-6 bg-zinc-900 rounded-full text-white mt-10'>READ MORE
        <div className="uppercase w-2 h-2 bg-zinc-100 rounded-full"></div>
        </button>
        </div>
        <div className='w-1/2 h-[70vh] bg-green-400 rounded-3xl'>
        <img className='h-[70vh] object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" ></img>
        </div>
    </div>
    </div>
    </div>
  )
}

export default About
