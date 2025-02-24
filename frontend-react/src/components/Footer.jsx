import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='w-full mt-10 sm:mt-12 bg-gradient-to-r from-light-green to-thick-green p-4 sm:p-2 md:p-5 lg:p-10 xl:p-16'>
      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-2 sm:gap-8 md:gap-12 lg:gap-32 xl:gap-48 text-white">
          <div className="flex flex-col gap-1 sm:gap-3">
              <h1 className='text-xs mm:text-sm lg:text-xl font-main font-bold'>Mental Health Detection</h1>
              <div className='flex flex-col gap-1 sm:gap-1 md:gap-2 text-[8px] mm:text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-normal'>
                  <span>Temukan depresimu lebih cepat</span>
                  <span>Temukan Pertolongan lebih cepat</span>
              </div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-3">
              <h1 className='text-xs mm:text-sm sm:text-base font-main font-medium'>Halaman</h1>
              <div className='flex flex-col gap-1 sm:gap-1 md:gap-2 lg:gap-4 xl:gap-6 text-[8px] mm:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base font-normal font-secondary'>
                  <Link className='lg:font-normal lg:hover:underline lg:hover:font-bold transition-all ease-in-out' href='/'>Beranda</Link>
                  <Link className='lg:font-normal lg:hover:underline lg:hover:font-bold transition-all ease-in-out' href='/about'>Tentang Sistem</Link>
                  <Link className='lg:font-normal lg:hover:underline lg:hover:font-bold transition-all ease-in-out' href='/predict'>Prediksi</Link>
                  <Link className='lg:font-normal lg:hover:underline lg:hover:font-bold transition-all ease-in-out' href='/model'>Model</Link>
              </div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-3">
              <h1 className='text-xs mm:text-sm sm:text-base font-main font-medium'>Kontak</h1>
              <div className='flex flex-col gap-1 sm:gap-1 md:gap-2 lg:gap-4 xl:gap-6 text-[8px] mm:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base font-normal font-secondary'>
                  <Link className='lg:font-normal lg:hover:underline lg:hover:font-bold transition-all ease-in-out' href='/'>088877554</Link>
                  <Link className='lg:font-normal lg:hover:underline lg:hover:font-bold transition-all ease-in-out' href='/'>myndcure@gmail.com</Link>
                  <Link className='lg:font-normal lg:hover:underline lg:hover:font-bold transition-all ease-in-out' href='/'>Linkedin</Link>
                  <Link className='lg:font-normal lg:hover:underline lg:hover:font-bold transition-all ease-in-out' href='/'>Instagram</Link>
              </div>
          </div>
        </div>
        <div className="border-t sm:border-t md:border-t-2 lg:border-t-2 xl:border-t-2 border-white text-white text-[8px] mm:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base w-full flex justify-center">
          <p className='pt-1 sm:pt-4'>© Copyright 2025 Mental health detection all right reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
