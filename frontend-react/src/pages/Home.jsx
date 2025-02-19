import React from 'react';
import Footer from '../components/Footer';
import headerHome from '../img/header-home.png';
import { faHeart, faHandshakeSimple, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutHome from '../img/about-home.png';
import predictHome from '../img/predict-home.png';

function Home() {
  return (
  <div className='pb-0 sm:pb-16'>
      {/* main banner */}
      <div className='w-full bg-transparent px-5 py-8 sm:px-4 sm:py-7 lg:mt-16'>
        <div className="flex flex-col gap-5 sm:gap-2 mx-5 sm:mx-1">
          <h1 className='text-xl font-main font-bold lg:hidden text-black'>Myndcure</h1>
          <div className="flex items-center">
            <div className="flex flex-col gap-5 sm:gap-2">
              <h1 className='flex flex-col font-main text-xl sm:text-xl font-bold z-0'>
                <span className='text-black'>Kesehatan Mental</span>
                <span className='text-black'>adalah <span className='text-button'>Fondasi</span> </span>
                <span className='text-button'>Kebahagiaan <span className='text-black'>dan</span> </span>
                <span className='text-button'>Kesehatan</span>
              </h1>
              <p className='font-secondary text-sm sm:text-xs w-80 sm:w-52'>“Perawatan diri adalah bagaimana kamu mengambil kembali kekuatan kamu” - Lalah Delia.</p>
              <button className='w-60 sm:w-32 py-1 text-sm sm:text-xs text-white font-main bg-button rounded-full'>Mulai Prediksi</button>
            </div>
            <img src={headerHome} alt="Woman with girl" className='w-72 sm:w-60 z-10 sm:mb-10' />
          </div>
        </div>
      </div>

    {/* section info the importance */}
    <div className="flex flex-col justify-center items-center gap-5 mx-20 sm:mx-5 relative">
      <div className='flex justify-center text-center font-bold font-main'>
        <h1>Mengapa Kesehatan Mental itu Penting dan <br /> Berpengaruh pada Kualitas Hidup?</h1>
      </div>
      <div className="relative flex">
        <div className='flex flex-col gap-2 items-center p-2 border-black border-y border-l rounded-l-3xl'>
          <FontAwesomeIcon icon={faHeart} className='text-5xl sm:text-3xl text-red-500'/>
          <h3 className='font-main font-semibold text-base sm:text-xs text-center'>Menjaga Kesehatan Fisik</h3>
          <p className='w-44 sm:w-32 text-sm sm:text-xs text-center'>Kesehatan mental yang baik dapat mengurangi risiko penyakit fisik. Stres yang dikelola dengan baik membuat tubuh lebih sehat.</p>
        </div>
        <div className='relative z-0 sm:z-10 shadow-xl flex flex-col gap-2 items-center rounded-3xl p-3 bg-gradient-to-r from-light-green to-thick-green text-white'>
          <FontAwesomeIcon icon={faHandshakeSimple} className='text-5xl sm:text-3xl text-yellow-500'/>
          <h3 className='font-main font-semibold text-base sm:text-xs text-center'>Menjaga Hubungan Sosial</h3>
          <p className='w-44 sm:w-36 text-sm sm:text-xs text-center'>Orang dengan mental yang sehat lebih mampu membangun dan mempertahankan hubungan yang positif.</p>
        </div>
        <div className='relative flex flex-col gap-2 items-center p-2 border-black border-y border-r rounded-r-3xl'>
          <FontAwesomeIcon icon={faRocket} className='text-5xl sm:text-3xl text-gray-500'/>
          <h3 className='font-main font-semibold text-base sm:text-xs text-center'>Meningkatkan Produktivitas</h3>
          <p className='w-44 sm:w-32 text-sm sm:text-xs text-center'>Kesehatan mental yang baik membantu seseorang lebih fokus, kreatif, dan produktif dalam bekerja atau belajar.</p>
        </div>
      </div>
    </div>

    {/* section for page about */}
    <div className='w-full bg-transparent px-5 py-8 sm:px-4 sm:py-7 lg:mt-16'>
      <div className="flex items-center justify-center">
        <img src={aboutHome} alt="Woman with girl" className='w-72 sm:w-56' />
        <div className="flex flex-col gap-5 sm:gap-0 mx-5 sm:mx-1">
          <h1 className='text-base sm:text-[8px] font-bold font-main lg:hidden text-black'>Tentang Sistem</h1>
          <div className="flex flex-col gap-5 sm:gap-2">
            <h1 className='flex flex-col font-main text-xl sm:text-lg font-bold z-0'>
              Ketahuilah lebih dalam tentang sistem prediksi depresi ini
            </h1>
            <p className='font-secondary text-sm sm:text-xs w-80 sm:w-52 text-justify'>
              Ketahui informasi mengenai sistem ini. Dari mulai tujuan pembuatan sistem sampai dengan data yang dibutuhkan untuk melakukan prediksi serta cara menggunakannya.              
            </p>
            <button className='w-60 sm:w-32 py-1 text-sm sm:text-xs text-white font-main bg-button rounded-full'>Tentang Sistem</button>
          </div>
        </div>
      </div>
    </div>

    {/* section for page predict */}
      <div className="text-white bg-gradient-to-r from-light-green to-thick-green w-full py-5 sm:py-6">
        <div className="flex flex-col gap-5 sm:gap-0 mx-5 sm:mx-1 justify-center items-center">
          <p className='text-base sm:text-[8px] font-bold font-main lg:hidden'>Tentang Sistem</p>
          <h1 className='font-main text-xl sm:text-lg font-semibold text-center mb-5 sm:mb-2'>
          Coba sistem prediksi depresi ini untuk memahami kondisi psikologis Anda lebih awal 
          </h1>
          <div className="flex gap-10 sm:gap-10 justify-center">
            <div className="flex flex-col gap-2 sm:gap-0 items-center font-main">
              <p className='text-sm sm:text-[8px]'>Akurasi</p>
              <h3 className='text-base font-bold'>98.11%</h3>
            </div>
            <div className="flex flex-col gap-2 sm:gap-0 items-center font-main">
              <p className='text-sm sm:text-[8px]'>Dilatih dengan data sejumlah</p>
              <h3 className='text-base font-bold'>27.000</h3>
            </div>
            <div className="flex flex-col gap-2 sm:gap-0 items-center font-main">
              <p className='text-sm sm:text-[8px]'>Presisi</p>
              <h3 className='text-base font-bold'>97.74%</h3>
            </div>
            <div className="flex flex-col gap-2 sm:gap-0 items-center font-main">
              <p className='text-sm sm:text-[8px]'>Recall</p>
              <h3 className='text-base font-bold'>98.38%</h3>
            </div>
          </div>
          <button className='w-60 sm:w-32 mt-0 sm:mt-4 py-1 text-sm sm:text-xs text-white font-main bg-button rounded-full'>Mulai Peediksi</button>
        </div>
      </div>

    {/* section info page model */}
    <div className='w-full bg-transparent px-5 py-8 sm:px-4 sm:py-7 lg:mt-16'>
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-5 sm:gap-0 mx-5 sm:mx-1">
          <h1 className='text-base sm:text-[8px] font-bold font-main lg:hidden text-black'>Model</h1>
          <div className="flex flex-col gap-5 sm:gap-2">
            <h1 className='flex flex-col font-main text-xl sm:text-lg font-bold'>
              Lihat detail metode dan hasil dari model sistem prediksi ini
            </h1>
            <p className='font-secondary text-sm sm:text-xs w-80 sm:w-52'>Jelajahi bagaimana model bekerja dan temukan insight dari hasil prediksinya.</p>
            <button className='w-60 sm:w-32 py-1 text-sm sm:text-xs text-white font-main bg-button rounded-full'>Lihat Model</button>
          </div>
        </div>
        <img src={predictHome} alt="Woman with girl" className='w-72 sm:w-56' />
      </div>
    </div>

    {/* quotes */}
    <div className="bg-gradient-to-r from-thick-green to-light-green w-full p-8  text-white font-bold text-center mb-20 sm:mb-16">
    “Perasaan ini akan berlalu. Ketakutan itu nyata, tetapi bahayanya tidak.
      Anda memiliki hak untuk merawat diri sendiri.”
    </div>

    <Footer />
  </div>
  )
}

export default Home;