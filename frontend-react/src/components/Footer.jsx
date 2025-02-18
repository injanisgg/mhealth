import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-gradient-to-r from-light-green to-thick-green p-10 sm:p-5'>
      <div className="flex justify-evenly text-white">
        <div className="flex flex-col gap-3">
            <h1 className='text-lg font-main font-bold'>Myndcure</h1>
            <div className='flex flex-col text-xs sm:text-[8px] font-thin'>
                <span>Temukan depresimu lebih cepat</span>
                <span>Temukan Pertolongan lebih cepat</span>
            </div>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className='text-base font-main font-medium'>Halaman</h1>
            <div className='flex flex-col text-xs sm:text-[8px] font-thin font-secondary'>
                <a href='/'>Beranda</a>
                <a href='/about'>Tentang Sistem</a>
                <a href='/predict'>Prediksi</a>
                <a href='/model'>Model</a>
            </div>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className='text-base font-main font-medium'>Kontak</h1>
            <div className='flex flex-col text-xs sm:text-[8px] font-thin font-secondary'>
                <a href=''>088877554</a>
                <a href=''>myndcure@gmail.com</a>
                <a href=''>Linkedin</a>
                <a href=''>Instagram</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
