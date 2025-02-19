import React from 'react';
import Footer from '../components/Footer';
import headerHome from '../img/header-home.png';
import { faHeart, faHandshakeSimple, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutHome from '../img/about-home.png';
import predictHome from '../img/predict-home.png';

function Home() {
  return (
  <div className='pb-0 sm:pb-16 md:pb-16'>
      {/* main banner */}
      <div className="mx-5 sm:mx-1 md:mx-5">
        <div className='w-full bg-transparent px-5 py-8 sm:px-4 sm:py-7 lg:mt-16'>
          <div className="flex items-center justify-around">
            <div className="flex flex-col gap-5 sm:gap-2 md:gap-5">
              <h1 className='text-xl sm:text-xl md:text-2xl font-main font-bold lg:hidden text-black'>Myndcure</h1>
              <h1 className='flex flex-col font-main text-xl sm:text-xl md:text-3xl font-bold z-0'>
                <span className='text-black'>Kesehatan Mental</span>
                <span className='text-black'>adalah <span className='text-button'>Fondasi</span> </span>
                <span className='text-button'>Kebahagiaan <span className='text-black'>dan</span> </span>
                <span className='text-button'>Kesehatan</span>
              </h1>
              <p className='font-secondary text-sm sm:text-xs md:text-sm w-80 sm:w-52 md:w-72'>“Perawatan diri adalah bagaimana kamu mengambil kembali kekuatan kamu” - Lalah Delia.</p>
              <button className='w-60 sm:w-32 md:w-44 py-1 sm:py-1 md:py-3 text-sm sm:text-xs md:text-sm text-white font-main bg-button rounded-full'>
                <a href="/predict">Mulai Prediksi</a>
              </button>
            </div>
            <img src={headerHome} alt="Woman with girl" className='w-72 sm:w-60 md:w-80 z-10 sm:mb-10' />
          </div>
        </div>
      </div>

    {/* section info the importance */}
    <div className="mx-20 sm:mx-5 md:mx-10">
      <div className="flex flex-col justify-center items-center gap-5 relative">
        <div className='flex justify-center text-center font-bold font-main text-sm sm:text-lg md:text-xl'>
          <h1>Mengapa Kesehatan Mental itu Penting dan <br /> Berpengaruh pada Kualitas Hidup?</h1>
        </div>
        <div className="relative flex">
          <div className='flex flex-col gap-2 items-center p-2 sm:p-2 md:p-4 border-black border-y border-l rounded-l-3xl'>
            <FontAwesomeIcon icon={faHeart} className='text-5xl sm:text-3xl md:text-5xl text-red-500'/>
            <h3 className='font-main font-semibold text-base sm:text-xs md:text-sm text-center'>Menjaga Kesehatan Fisik</h3>
            <p className='w-44 sm:w-32 md:w-48 text-sm sm:text-xs md:text-sm text-center'>Kesehatan mental yang baik dapat mengurangi risiko penyakit fisik. Stres yang dikelola dengan baik membuat tubuh lebih sehat.</p>
          </div>
          <div className='relative z-10 shadow-xl flex flex-col gap-2 items-center rounded-3xl p-3 sm:p-3 md:p-6 bg-gradient-to-r from-light-green to-thick-green text-white'>
            <FontAwesomeIcon icon={faHandshakeSimple} className='text-5xl sm:text-5xl text-yellow-500'/>
            <h3 className='font-main font-semibold text-base sm:text-xs md:text-sm text-center'>Menjaga Hubungan Sosial</h3>
            <p className='w-44 sm:w-36 md:w-48 text-sm sm:text-xs md:text-sm text-center'>Orang dengan mental yang sehat lebih mampu membangun dan mempertahankan hubungan yang positif.</p>
          </div>
          <div className='relative flex flex-col gap-2 items-center p-2 sm:p-2 md:p-4 border-black border-y border-r rounded-r-3xl'>
            <FontAwesomeIcon icon={faRocket} className='text-5xl sm:text-3xl md:text-5xl text-gray-500'/>
            <h3 className='font-main font-semibold text-base sm:text-xs md:text-sm text-center'>Meningkatkan Produktivitas</h3>
            <p className='w-44 sm:w-32 md:w-48 text-sm sm:text-xs md:text-sm text-center'>Kesehatan mental yang baik membantu seseorang lebih fokus, kreatif, dan produktif dalam bekerja atau belajar.</p>
          </div>
        </div>
      </div>
    </div>

    {/* section for page about */}
    <div className="mx-5 my-8 sm:mx-4 sm:my-7 md:mx-8 md:my-9 lg:mt-16">
      <div className='w-full bg-transparent'>
        <div className="flex items-center justify-center gap-2 sm:gap-2 md:gap-4">
          <img src={aboutHome} alt="Woman with girl" className='w-72 sm:w-56 md:w-64' />
          <div className="flex flex-col gap-5 sm:gap-0 md:gap-1">
            <h1 className='text-base sm:text-[8px] md:text-xs font-bold font-main text-black'>Tentang Sistem</h1>
            <div className="flex flex-col gap-5 sm:gap-2 md:gap-4">
              <h1 className='flex flex-col font-main text-xl sm:text-lg md:text-xl font-bold z-0'>
                Ketahuilah lebih dalam tentang sistem prediksi depresi ini
              </h1>
              <p className='font-secondary text-sm sm:text-xs md:text-sm text-justify'>
                Ketahui informasi mengenai sistem ini. Dari mulai tujuan pembuatan sistem sampai dengan data yang dibutuhkan untuk melakukan prediksi serta cara menggunakannya.              
              </p>
              <button className='w-60 sm:w-32 md:w-48 py-1 sm:py-1 md:py-3 text-sm sm:text-xs md:text-sm text-white font-main bg-button rounded-full'>
                <a href="/about">Tentang Sistem</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* section for page predict */}
      <div className="text-white bg-gradient-to-r from-light-green to-thick-green w-full p-5 sm:p-8 md:p-10">
        <div className="flex flex-col gap-5 sm:gap-0 md:gap-4 justify-center items-center">
          <p className='text-base sm:text-[8px] md:text-sm font-bold font-main'>Tentang Sistem</p>
          <h1 className='font-main text-xl sm:text-lg md:text-xl font-semibold text-center mb-5 sm:mb-2 md:mb-4'>
          Coba sistem prediksi depresi ini untuk memahami kondisi psikologis Anda lebih awal 
          </h1>
          <div className="flex gap-10 sm:gap-10 md:gap-14 justify-center">
            <div className="flex flex-col gap-2 sm:gap-0 md:gap-2 items-center font-main">
              <p className='text-sm sm:text-[8px] md:text-sm'>Akurasi</p>
              <h3 className='text-base sm:text-base md:text-lg font-bold'>98.11%</h3>
            </div>
            <div className="flex flex-col gap-2 sm:gap-0 md:gap-2 items-center font-main">
              <p className='text-sm sm:text-[8px] md:text-sm'>Dilatih dengan data sejumlah</p>
              <h3 className='text-base sm:text-base md:text-lg font-bold'>27.000</h3>
            </div>
            <div className="flex flex-col gap-2 sm:gap-0 md:gap-2 items-center font-main">
              <p className='text-sm sm:text-[8px] md:text-sm'>Presisi</p>
              <h3 className='text-base sm:text-base md:text-lg font-bold'>97.74%</h3>
            </div>
            <div className="flex flex-col gap-2 sm:gap-0 md:gap-2 items-center font-main">
              <p className='text-sm sm:text-[8px] md:text-sm'>Recall</p>
              <h3 className='text-base sm:text-base md:text-lg font-bold'>98.38%</h3>
            </div>
          </div>
          <button className='w-60 sm:w-32 md:w-48 mt-0 sm:mt-4 md:mt-4 py-1 sm:p-1 md:p-3 text-sm sm:text-xs md:text-sm text-white font-main bg-button rounded-full'>
            <a href="/predict">Mulai Peediksi</a>
          </button>
        </div>
      </div>

    {/* section info page model */}
    <div className='mx-5 my-8 sm:mx-4 md:mx-8 sm:my-7 md:my-9 lg:mt-16'>
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-5 sm:gap-0 md:gap-4">
          <h1 className='text-base sm:text-[8px] md:text-sm font-bold font-main text-black'>Model</h1>
          <div className="flex flex-col gap-5 sm:gap-2 md:gap-4">
            <h1 className='flex flex-col font-main text-xl sm:text-lg md:text-xl font-bold'>
              Lihat detail metode dan hasil dari model sistem prediksi ini
            </h1>
            <p className='font-secondary text-sm sm:text-xs md:text-sm'>Jelajahi bagaimana model bekerja dan temukan insight dari hasil prediksinya.</p>
            <button className='w-60 sm:w-32 md:w-48 py-1 sm:py-1 md:py-3 text-sm sm:text-xs md:text-sm text-white font-main bg-button rounded-full'>
              <a href="/model">Lihat Model</a>
            </button>
          </div>
        </div>
        <img src={predictHome} alt="Woman with girl" className='w-72 sm:w-56 md:w-64' />
      </div>
    </div>

    {/* quotes */}
    <div className="bg-gradient-to-r from-thick-green to-light-green w-full p-8  sm:p-8 md:p-10 sm:text-base md:text-lg text-white font-bold text-center">
    “Perasaan ini akan berlalu. Ketakutan itu nyata, tetapi bahayanya tidak.
      Anda memiliki hak untuk merawat diri sendiri.”
    </div>

    <Footer />
  </div>
  )
}

export default Home;