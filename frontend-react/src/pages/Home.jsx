import React from 'react';
import Footer from '../components/Footer';
import headerHome from '../img/header-home.png';
import { faHeart, faHandshakeSimple, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
  return (
    <div className='pb-0 sm:pb-16'>
      {/* main banner */}
      <div className='w-full bg-transparent px-5 py-8 sm:px-4 sm:py-7 lg:mt-16'>
        <div className="flex flex-col gap-5 sm:gap-2 mx-5 sm:mx-1">
          <h1 className='text-xl font-main font-bold lg:hidden text-black'>Myndcure</h1>
          <div className="flex items-center">
            <div className="flex flex-col gap-5 sm:gap-2">
              <h1 className='flex flex-col font-main text-xl sm:font-xl font-bold z-0'>
                <span className='text-black'>Kesehatan Mental</span>
                <span className='text-black'>adalah <span className='text-button'>Fondasi</span> </span>
                <span className='text-button'>Kebahagiaan <span className='text-black'>dan</span> </span>
                <span className='text-button'>Kesehatan</span>
              </h1>
              <p className='font-secondary text-sm sm:text-xs w-80 sm:w-52'>“Perawatan diri adalah bagaimana kamu mengambil kembali kekuatan kamu” - Lalah Delia.</p>
              <button className='w-60 sm:w-32 py-1 text-sm text-white font-main bg-button rounded-full'>Mulai Prediksi</button>
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
      <div className="relative flex border-black border rounded-3xl">
        <div className='flex flex-col gap-2 items-center p-2'>
          <FontAwesomeIcon icon={faHeart} className='text-5xl sm:text-3xl text-red-500'/>
          <h3 className='font-main font-semibold text-base sm:text-xs text-center'>Menjaga Kesehatan Fisik</h3>
          <p className='w-44 sm:w-32 text-sm sm:text-xs text-center'>Kesehatan mental yang baik dapat mengurangi risiko penyakit fisik. Stres yang dikelola dengan baik membuat tubuh lebih sehat.</p>
        </div>
        <div className='relative z-0 sm:z-10 shadow-lg flex flex-col gap-2 items-center rounded-3xl p-2 bg-gradient-to-r from-light-green to-thick-green text-white'>
          <FontAwesomeIcon icon={faHandshakeSimple} className='text-5xl sm:text-3xl text-yellow-500'/>
          <h3 className='font-main font-semibold text-base sm:text-xs text-center'>Menjaga Hubungan Sosial</h3>
          <p className='w-44 sm:w-32 text-sm sm:text-xs text-center'>Orang dengan mental yang sehat lebih mampu membangun dan mempertahankan hubungan yang positif.</p>
        </div>
        <div className='relative flex flex-col gap-2 items-center p-2'>
          <FontAwesomeIcon icon={faRocket} className='text-5xl sm:text-3xl text-gray-500'/>
          <h3 className='font-main font-semibold text-base sm:text-xs text-center'>Meningkatkan Produktivitas</h3>
          <p className='w-44 sm:w-32 text-sm sm:text-xs text-center'>Kesehatan mental yang baik membantu seseorang lebih fokus, kreatif, dan produktif dalam bekerja atau belajar.</p>
        </div>
      </div>
    </div>

      {/* <Footer /> */}
    </div>
  )
}

export default Home;