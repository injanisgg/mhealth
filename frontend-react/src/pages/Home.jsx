import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import headerHome from '../img/header-home.png';
import { faHeart, faHandshakeSimple, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutHome from '../img/about-home.png';
import predictHome from '../img/predict-home.png';

function Home() {
  return (
  <div className='pb-14 sm:pb-16 md:pb-16 lg:pb-0 xl:pb-0'>
      {/* main banner */}
      <div className="mx-3 sm:mx-1 md:mx-5 lg:mx-10 xl:mx-14">
        <div className='w-full bg-transparent py-8 sm:px-4 sm:py-7 lg:mt-16 xl:mt-16'>
          <div className="flex items-center justify-around">
            <div className="flex flex-col gap-1 sm:gap-2 md:gap-5 lg:gap-10 xl:gap-16">
              <h1 className='text-[8px] mm:text-xs sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-main font-bold lg:hidden text-black'>Mental Health Detection</h1>
              <h1 className='flex flex-col font-main text-sm mm:text-lg sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold z-0'>
                <span className='text-black'>Kesehatan Mental</span>
                <span className='text-black'>adalah <span className='text-button'>Fondasi</span> </span>
                <span className='text-button'>Kebahagiaan <span className='text-black'>dan</span> </span>
                <span className='text-button'>Kesehatan</span>
              </h1>
              <p className='font-secondary text-[8px] mm:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg w-38 mm:w-48 sm:w-52 md:w-72 lg:w-80 xl:w-96'>“Perawatan diri adalah bagaimana kamu mengambil kembali kekuatan kamu” - Lalah Delia.</p>
              <button className='w-20 mm:w-28 sm:w-32 md:w-44 lg:w-48 xl:w-52 py-1 sm:py-1 md:py-3 text-[8px] mm:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-white font-main bg-button lg:cursor-pointer hover:bg-transparent hover:border-2 hover:border-button hover:text-button hover:font-bold transition-all ease-in-out rounded-full'>
                <Link to='/predict'>Mulai Prediksi</Link>
              </button>
            </div>
            <img src={headerHome} alt="Woman with girl" className='w-40 sm:w-60 md:w-80 lg:w-96 xl:w-[30rem] z-10 mb-10 sm:mb-10' />
          </div>
        </div>
      </div>

    {/* section info the importance */}
    <div className="mx-3 my-10 sm:mx-5 md:mx-10 lg:mx-16 xl:mx-20">
      <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 relative">
        <div className='flex justify-center text-center font-bold font-main text-xs mm:text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
          <h1>Mengapa Kesehatan Mental itu Penting dan <br /> Berpengaruh pada Kualitas Hidup?</h1>
        </div>
        <div className="flex static">
          <div className='absolute left-0 lg:left-9 xl:left-24 bottom-2 top-14 mm:top-16 sm:top-24 xl:top-32  sm:bottom-4
           flex flex-col gap-1 sm:gap-2 items-center py-1 mm:py-3 pl-2 pr-16 lg:pr-24 xl:pr-48 sm:p-2 md:p-4 lg:p-6 xl:p-8 border-black border-y border-l rounded-l-3xl'>
            <FontAwesomeIcon icon={faHeart} className='text-sm mm:text-xl sm:text-3xl m:text-5xl lg:text-6xl xl:text-7xl text-red-500'/>
            <h3 className='w-20 mm:w-24 sm:w-36 lg:w-48 xl:w-60 font-main font-semibold text-[8px] mm:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-center'>Menjaga Kesehatan Fisik</h3>
            <p className='w-20 sm:w-32 md:w-48 lg:w-52 xl:w-60 text-[8px] mm:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-center'>Kesehatan mental yang baik dapat mengurangi risiko penyakit fisik. Stres yang dikelola dengan baik membuat tubuh lebih sehat.</p>
          </div>
          <div className='relative z-10 h-44 mm:h-[18rem] lg:h-80 xl:h-96 shadow-xl flex flex-col gap-1 sm:gap-2 items-center rounded-3xl px-2 py-4 mm:py-6 sm:p-3 md:p-6 lg:p-8 bg-gradient-to-r from-light-green to-thick-green text-white'>
            <FontAwesomeIcon icon={faHandshakeSimple} className='text-sm mm:text-xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-yellow-500'/>
            <h3 className='mm:w-32 lg:w-48 font-main font-semibold text-[8px] mm:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-center'>Menjaga Hubungan Sosial</h3>
            <p className='w-20 sm:w-36 md:w-48 lg:w-52 xl:w-60 text-[8px] mm:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-center'>Orang dengan mental yang sehat lebih mampu membangun dan mempertahankan hubungan yang positif.</p>
          </div>
          <div className='absolute right-0 lg:right-12 xl:right-24 bottom-2 top-14 mm:top-16 sm:top-24 xl:top-32 sm:bottom-4
           flex flex-col gap-1 sm:gap-2 items-center py-1 mm:py-3 pr-2 pl-16 lg:pl-24 xl:pl-48 sm:p-2 md:p-4 border-black border-y border-r rounded-r-3xl'>
            <FontAwesomeIcon icon={faRocket} className='text-sm mm:text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-500'/>
            <h3 className='w-20 mm:w-24 sm:w-36 lg:w-48 xl:w-60 font-main font-semibold text-[8px] mm:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-center'>Meningkatkan Produktivitas</h3>
            <p className='w-20 sm:w-32 md:w-48 lg:w-52 xl:w-60 text-[8px] mm:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-center'>Kesehatan mental yang baik membantu seseorang lebih fokus, kreatif, dan produktif dalam bekerja atau belajar.</p>
          </div>
        </div>
      </div>
    </div>

    {/* section for page about */}
    <div className="mx-3 my-10 sm:mx-4 sm:my-7 md:mx-8 md:my-9 lg:mx-20 lg:my-11 lg:mt-16 xl:mx-24 xl:my-13 xl:mt-16">
      <div className='w-full bg-transparent'>
        <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
          <img src={aboutHome} alt="Woman with girl" className='w-40 mm:w-44 sm:w-56 md:w-64 lg:w-72 xl:w-96' />
          <div className="flex flex-col gap-0 sm:gap-0 md:gap-1 lg:gap-3 xl:gap-4">
            <h1 className='text-[8px] mm:text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg font-bold font-main text-black'>Tentang Sistem</h1>
            <div className="flex flex-col gap-1 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
              <h1 className='flex flex-col font-main text-xs mm:text-sm sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold z-0'>
                Ketahuilah lebih dalam tentang sistem prediksi depresi ini
              </h1>
              <p className='font-secondary text-[8px] mm:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-justify'>
                Ketahui informasi mengenai sistem ini. Dari mulai tujuan pembuatan sistem sampai dengan data yang dibutuhkan untuk melakukan prediksi serta cara menggunakannya.              
              </p>
              <button className='w-20 mm:w-24 sm:w-32 md:w-44 lg:w-48 xl:w-52 py-1 sm:py-1 md:py-3 text-[8px] mm:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-white font-main bg-button lg:cursor-pointer hover:bg-transparent hover:border-2 hover:border-button hover:text-button hover:font-bold transition-all ease-in-out rounded-full'>
                <Link to='/about'>Tentang Sistem</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* section for page predict */}
      <div className="my-10 text-white bg-gradient-to-r from-light-green to-thick-green w-full p-5 sm:p-8 md:p-10 lg:p-12">
        <div className="flex flex-col gap-1 sm:gap-1 md:gap-4 lg:gap-6 xl:gap-8 justify-center items-center">
          <p className='text-[8px] mm:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold font-main'>Tentang Sistem</p>
          <h1 className='font-main text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center mb-2 sm:mb-2 md:mb-4 lg:mb-6'>
          Coba sistem prediksi depresi ini untuk memahami kondisi psikologis Anda lebih awal 
          </h1>
          <div className="flex gap-5 sm:gap-10 md:gap-14 lg:gap-20 justify-center">
            <div className="flex flex-col text-center gap-0 sm:gap-0 md:gap-2 lg:gap-4 items-center font-main">
              <p className='text-[8px] mm:text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg'>Akurasi</p>
              <h3 className='text-xs mm:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold'>84.06%</h3>
            </div>
            <div className="flex flex-col text-center gap-0 sm:gap-0 md:gap-2 lg:gap-4 items-center font-main">
              <p className='text-[8px] mm:text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg'>Dilatih dengan data</p>
              <h3 className='text-xs mm:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold'>27.000</h3>
            </div>
            <div className="flex flex-col text-center gap-0 sm:gap-0 md:gap-2 lg:gap-4 items-center font-main">
              <p className='text-[8px] mm:text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg'>Presisi</p>
              <h3 className='text-xs mm:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold'>85.3%</h3>
            </div>
            <div className="flex flex-col text-center gap-0 sm:gap-0 md:gap-2 lg:gap-4 items-center font-main">
              <p className='text-[8px] mm:text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg'>Recall</p>
              <h3 className='text-xs mm:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold'>87.7%</h3>
            </div>
          </div>
          <button className='w-20 mm:w-24 sm:w-32 md:w-44 lg:w-48 xl:w-52 py-1 sm:py-1 md:py-3 text-[8px] mm:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-white font-main bg-button lg:cursor-pointer hover:bg-transparent hover:border-2 hover:border-button hover:text-button hover:font-bold transition-all ease-in-out rounded-full'>
            <Link to='/predict'>Mulai Prediksi</Link>
          </button>
        </div>
      </div>

    {/* section info page model */}
    <div className='mx-3 my-10 sm:mx-4 md:mx-8 lg:mx-20 sm:my-7 md:my-9 lg:my-11 lg:mt-16 xl:mx-28 xl:my-13 xl:mt-16'>
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-1 sm:gap-1 md:gap-4 lg:gap-6 xl:gap-8">
          <h1 className='text-[8px] mm:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold font-main text-black'>Model</h1>
          <div className="flex flex-col gap-1 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
            <h1 className='flex flex-col text-xs mm:text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>
              Lihat detail metode dan hasil dari model sistem prediksi ini
            </h1>
            <p className='font-secondary text-[8px] mm:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg'>Jelajahi bagaimana model bekerja dan temukan insight dari hasil prediksinya.</p>
            <button className='w-20 mm:w-24 sm:w-32 md:w-44 lg:w-48 xl:w-52 py-1 sm:py-1 md:py-3 text-[8px]  mm:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-white font-main bg-button lg:cursor-pointer hover:bg-transparent hover:border-2 hover:border-button hover:text-button hover:font-bold transition-all ease-in-out rounded-full'>
              <Link to='/model'>Detail Model</Link>
            </button>
          </div>
        </div>
        <img src={predictHome} alt="Woman with girl" className='w-32 mm:w-44 sm:w-56 md:w-64 lg:w-96 xl:w-[30rem]' />
      </div>
    </div>

    {/* quotes */}
    <div className="my-10 bg-gradient-to-r from-thick-green to-light-green w-full p-4  sm:p-8 md:p-10 lg:px-14 lg:py-24 xl:px-20 xl:py-28 text-sm mm:text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white font-bold text-center">
    “Perasaan ini akan berlalu. Ketakutan itu nyata, tetapi bahayanya tidak.
      Anda memiliki hak untuk merawat diri sendiri.”
    </div>

    <Footer />
  </div>
  )
}

export default Home;