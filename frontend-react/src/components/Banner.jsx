import React from 'react';

function Banner({ title, desc }) {
  return (
    <div className='w-full bg-gradient-to-r from-light-green to-thick-green px-5 py-8 sm:px-4 sm:py-7 md:px-6 md:py-9 lg:px-10 lg:py-13 xl:px-14 xl:py-20 lg:mt-16 xl:mt-16'>
      <div className="mx-1 sm:mx-1 md:mx-5 lg:mx-10 xl:mx-16">
        <div className="flex flex-col gap-5 text-white">
          <h1 className='text-[8px] mm:text-xs sm:text-xl md:text-2xl font-main font-bold lg:hidden'>Mental Health Detection</h1>
          <div className="flex gap-5">
              <div className="border-l sm:border-l md:border-l-2 lg:border-l-2 xl:border-l-2"></div>
              <div className="flex flex-col gap-1">
                  <h2 className='font-main text-sm mm:text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold'>{title}</h2>
                  <p className='font-secondary text-xs mm:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base font-light text-justify'>{desc}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
