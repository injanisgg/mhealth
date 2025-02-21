import React from 'react'

function Footer() {
  return (
    <div className='w-full mt-20 sm:mt-12 mb-0 bg-gradient-to-r from-light-green to-thick-green p-10 sm:p-2 md:p-5'>
      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-10 sm:gap-8 md:gap-12 text-white">
          <div className="flex flex-col gap-3">
              <h1 className='text-lg font-main font-bold'>Mental Health Detection</h1>
              <div className='flex flex-col gap-5 sm:gap-0 md:gap-2 text-xs sm:text-[8px] md:text-sm font-normal sm:font-thin md:font-extralight'>
                  <span>Temukan depresimu lebih cepat</span>
                  <span>Temukan Pertolongan lebih cepat</span>
              </div>
          </div>
          <div className="flex flex-col gap-3">
              <h1 className='text-base font-main font-medium'>Halaman</h1>
              <div className='flex flex-col gap-5 sm:gap-0 md:gap-2 text-xs sm:text-[8px] md:text-sm font-normal sm:font-thin md:font-extralight font-secondary'>
                  <a href='/'>Beranda</a>
                  <a href='/about'>Tentang Sistem</a>
                  <a href='/predict'>Prediksi</a>
                  <a href='/model'>Model</a>
              </div>
          </div>
          <div className="flex flex-col gap-3">
              <h1 className='text-base font-main font-medium'>Kontak</h1>
              <div className='flex flex-col gap-5 sm:gap-0 md:gap-2 text-xs sm:text-[8px] md:text-sm font-normal sm:font-thin md:font-extralight font-secondary'>
                  <a href=''>088877554</a>
                  <a href=''>myndcure@gmail.com</a>
                  <a href=''>Linkedin</a>
                  <a href=''>Instagram</a>
              </div>
          </div>
        </div>
        <div className="border-t-2 sm:border-t md:border-t-2 border-white text-white text-xs sm:text-[8px] md:text-xs w-full flex justify-center">
          <p className='pt-4'>© Copyright 2025 Mental health detection all right reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
