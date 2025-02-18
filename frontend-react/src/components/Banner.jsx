import React from 'react'

function Banner({ title, desc }) {
  return (
    <div className='w-full bg-gradient-to-r from-light-green to-thick-green px-5 py-8 sm:px-4 sm:py-7 lg:mt-16'>
      <div className="flex flex-col gap-5 text-white mx-5 sm:mx-1">
        <h1 className='text-xl font-main font-bold lg:hidden'>Myndcure</h1>
        <div className="flex gap-5">
            <div className="border-l"></div>
            <div className="flex flex-col gap-1">
                <h2 className='font-main text-md font-bold'>{title}</h2>
                <p className='font-secondary text-xs lg:text-sm sm:text-[8px] font-light text-justify'>{desc}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
