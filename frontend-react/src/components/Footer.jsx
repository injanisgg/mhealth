import React from 'react'

function Footer() {
  return (
    <div className='w-full mt-20 sm:mt-12 mb-0 bg-gradient-to-r from-light-green to-thick-green p-10 sm:p-2 md:p-5 lg:p-10 xl:p-16'>
      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-10 sm:gap-8 md:gap-12 lg:gap-32 xl:gap-48 text-white">
          <div className="flex flex-col gap-3">
              <h1 className='text-lg lg:text-xl font-main font-bold'>Mental Health Detection</h1>
              <div className='flex flex-col gap-5 sm:gap-0 md:gap-2 text-xs sm:text-[8px] md:text-sm lg:text-base xl:text-base font-normal sm:font-thin md:font-extralight lg:font-normal xl:font-medium'>
                  <span>Temukan depresimu lebih cepat</span>
                  <span>Temukan Pertolongan lebih cepat</span>
              </div>
          </div>
          <div className="flex flex-col gap-3">
              <h1 className='text-base font-main font-medium'>Halaman</h1>
              <div className='flex flex-col gap-5 sm:gap-0 md:gap-2 lg:gap-4 xl:gap-6 text-xs sm:text-[8px] md:text-xs lg:text-sm xl:text-base font-normal sm:font-thin md:font-extralight lg:font-normal lg:hover:underline lg:hover:font-bold font-secondary'>
                  <a href='/'>Beranda</a>
                  <a href='/about'>Tentang Sistem</a>
                  <a href='/predict'>Prediksi</a>
                  <a href='/model'>Model</a>
              </div>
          </div>
          <div className="flex flex-col gap-3">
              <h1 className='text-base font-main font-medium'>Kontak</h1>
              <div className='flex flex-col gap-5 sm:gap-0 md:gap-2 lg:gap-4 xl:gap-6 text-xs sm:text-[8px] md:text-xs lg:text-sm xl:text-base font-normal sm:font-thin md:font-extralight lg:font-normal lg:hover:underline lg:hover:font-bold font-secondary'>
                  <a href=''>088877554</a>
                  <a href=''>myndcure@gmail.com</a>
                  <a href=''>Linkedin</a>
                  <a href=''>Instagram</a>
              </div>
          </div>
        </div>
        <div className="border-t-2 sm:border-t md:border-t-2 lg:border-t-2 xl:border-t-2 border-white text-white text-xs sm:text-[8px] md:text-xs lg:text-sm xl:text-base w-full flex justify-center">
          <p className='pt-4'>© Copyright 2025 Mental health detection all right reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
