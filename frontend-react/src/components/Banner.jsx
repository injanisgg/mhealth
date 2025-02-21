import React from 'react';

function Banner({ title, desc }) {
  return (
    <div className='w-full bg-gradient-to-r from-light-green to-thick-green px-5 py-8 sm:px-4 sm:py-7 lg:mt-16'>
      <div className="mx-5 sm:mx-1 md:mx-5">
        <div className="flex flex-col gap-5 text-white">
          <h1 className='text-xl sm:text-xl md:text-2xl font-main font-bold lg:hidden'>Mental Health Detection</h1>
          <div className="flex gap-5">
              <div className="border-l sm:border-l md:border-l-2"></div>
              <div className="flex flex-col gap-1">
                  <h2 className='font-main text-base sm:text-base md:text-lg font-bold'>{title}</h2>
                  <p className='font-secondary text-xs lg:text-sm sm:text-[8px] md:text-sm font-light text-justify'>{desc}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
