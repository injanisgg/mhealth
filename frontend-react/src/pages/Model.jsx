import React from 'react';
import Banner from '../components/Banner';
import Kaggle from '../img/kaggle.png';
import Lgbm from '../img/lgbm.png';
import Optuna from '../img/optuna.png';
import RFE from '../img/rfe.png';
import Scaler from '../img/scaler.png';
import SMOTE from '../img/smote.png';
import Tailwind from '../img/tailwindcss.png';
import Flask from '../img/flask.png';
import FontAwesome from '../img/fontawesome.png';
import ReactVite from '../img/reactvite.png';
import Footer from '../components/Footer';

function Model() {
  return (
    <div className='pb-14 sm:pb-20 lg:pb-0'>
      <Banner title={'Model'} desc={'Halaman ini memberikan informasi mengenai model dari sistem ini. Mulai dari algoritma dan metode yang digunakan sampai dengan apa saja tools yang dipakai dalam pembuatan sistem ini.'}/>
      
      {/* card methods */}
      <div className="mx-3 sm:mx-10 md:mx-14 lg:mx-20 mt-5 sm:mt-8 md:mt-10 lg:mt-12">
        <div className="flex flex-col justify-center items-center gap-3 sm:gap-3 md:gap-5 lg:gap-7 xl:gap-9">
          <div className="w-full border border-black rounded-2xl p-2 sm:p-2 md:p-5 lg:p-7 xl:p-9 items-center justify-center gap-2 sm:gap-2 md:gap-5 lg:gap-7 xl:gap-9">
            <div className="flex flex-col">
              <div className="flex items-center justify-around">
                <div className="flex flex-col items-center">
                  <img src={Kaggle} alt="logo kaggle" className='w-16 mm:w-20 sm:w-28 md:w-40 lg:w-52 xl:w-60'/>
                  <p className='text-center text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg font-main font-bold'>Kaggle Dataset</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={Scaler} alt="logo scaler" className='w-16 mm:w-20 sm:w-28 md:w-40 lg:w-52 xl:w-60'/>
                  <p className='text-center text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg font-main font-bold'>Standard Scaler</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={RFE} alt="logo RFE" className='w-16 mm:w-20 sm:w-28 md:w-40 lg:w-52 xl:w-60'/>
                  <p className='text-center text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg font-main font-bold'>RFE Feature Selection</p>
                </div>
              </div>
              <div className="flex items-center justify-around">
                <div className="flex flex-col items-center mr-0 sm:mr-2">
                  <img src={SMOTE} alt="logo SMOTE" className='w-16 mm:w-20 sm:w-28 md:w-40 lg:w-52 xl:w-60'/>
                  <p className='text-center text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg font-main font-bold'>SMOTEENN</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={Lgbm} alt="logo Lgbm" className='w-16 mm:w-20 sm:w-28 md:w-40 lg:w-52 xl:w-60'/>
                  <p className='text-center text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg font-main font-bold'>LGBM Classifier</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={Optuna} alt="logo Optuna" className='w-16 mm:w-20 sm:w-28 md:w-40 lg:w-52 xl:w-60'/>
                  <p className='text-center text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg font-main font-bold'>Optuna Optimizer</p>
                </div>
              </div>
            </div>
          </div>

          {/* desc */}
          <div className="w-full">
            <div className="flex flex-col items-center">
              <h4 className='text-[8px] mm:text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg font-bold font-main text-black'>Model dan Metode</h4>
              <h1 className='font-main text-xs mm:text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center mb-5 sm:mb-3 md:mb-5 lg:mb-7 xl:mb-9'>Model Algoritma dan Metode yang Digunakan pada Sistem Deteksi Depresi</h1>
              <p className='font-secondary text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-justify'>
                Sistem ini menggunakan dataset dari <span className='font-bold'>Kaggle</span> yang bernama <span className='font-bold'>“Student Depression Dataset”</span> yang terdiri dari 18 kolom dan 27.000 baris data.
                Dataset kemudian masuk ke proses <span className='font-bold'>preprocessing</span> dan <span className='font-bold'>data cleaning</span>.
                Setelah itu masuk ke tahap <span className='font-bold'>Exploratory Data Analysis (EDA)</span> dan dilanjutkan dengan proses <span className='font-bold'>Scaling</span> dengan <span className='font-bold'>StandardScaler</span>. 
                Dataset kemudian masuk ke tahap <span className='font-bold'>seleksi fitur</span> menggunakan <span className='font-bold'>Recursive Feature Selection (RFE)</span> yang memilih 11 dari 18 fitur. 
                Data kemudian discaling kembali dan masuk ke proses <span className='font-bold'>Splitting Data</span> dengan proporsi 80% untuk training dan 20% untuk testing. Data training masuk ke tahap <span className='font-bold'>Oversampling</span> menggunakan <span className='font-bold'>SMOTEENN</span>. 
                Dilanjutkan dengan <span className='font-bold'>Optimasi Hyperparameter</span> menggunakan <span className='font-bold'>Optuna</span>. Dan tahap terakhir adalah <span className='font-bold'>Evaluasi Model</span> menggunakan <span className='font-bold'>Light Gradient Boosting Machine (LGBM)</span> dan parameter terbaik dari Optuna. 
              </p>
            </div>
          </div>

          {/* card tools */}
          <div className="flex flex-col items-center w-full">
            <div className="flex justify-center">
              <div className="flex flex-col gap-1 sm:gap-1 md:gap-3 lg:gap-5 xl:gap-7 p-2 sm:p-2 md:p-5 lg:py-7 lg:px-16 xl:py-9 xl:px-20 justify-around text-center items-center text-white bg-gradient-to-r from-light-green to-thick-green rounded-3xl">
                <img src={Flask} alt="logo" className='w-10 mm:w-14 sm:w-16 md:w-16 lg:w-20 xl:w-24'/>
                <p className="text-xs mm:w-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold font-main">Flask</p>
                <p className='text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-center w-32 sm:w-36 md:w-52 leading-tight font-secondary'>Flask digunakan sebagai backend dari sistem ini yang melakukan prediksi dan mengirimkannya pada frontend</p>
              </div>
              <div className="flex flex-col gap-1 sm:gap-1 md:gap-3 lg:gap-5 xl:gap-7 p-2 sm:p-2 md:p-5 lg:py-7 lg:px-16 xl:py-9 xl:px-20 justify-around text-center items-center text-white bg-transparent rounded-3xl">
                <img src={ReactVite} alt="logo" className='w-12 mm:w-14 sm:w-16 md:w-28'/>
                <p className="text-xs mm:w-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold font-main text-black">React Vite</p>
                <p className='text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-center w-32 sm:w-36 md:w-52 leading-tight font-secondary text-black'>React vite digunakan sebagai frontend dengan membuat UI yang menarik dan menerima API dari backend</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col gap-1 sm:gap-1 md:gap-3 lg:gap-5 xl:gap-7 p-2 sm:p-2 md:p-5 lg:py-7 lg:px-16 xl:py-9 xl:px-20 justify-around text-center items-center text-white bg-transparent rounded-3xl">
                  <img src={FontAwesome} alt="logo" className='w-10 mm:w-14 sm:w-96md:w-14'/>
                  <p className="text-xs mm:w-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold font-main text-black">Fontawesome</p>
                  <p className='text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-center w-32 sm:w-36 md:w-52 leading-tight font-secondary text-black'>Fontawesome digunakan untuk menunjang frontend dengan mengambil icon-icon yang sesuai untuk frontend</p>
                </div>
                <div className="flex flex-col gap-1 sm:gap-1 md:gap-3 lg:gap-5 xl:gap-7 p-2 sm:p-2 md:p-5 lg:py-7 lg:px-16 xl:py-9 xl:px-20 justify-around text-center items-center text-white bg-gradient-to-r from-light-green to-thick-green rounded-3xl">
                  <img src={Tailwind} alt="logo" className='w-10 mm:w-14 sm:w-16 md:w-16 lg:w-20 xl:w-24'/>
                  <p className="text-xs mm:w-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold font-main">Tailwindcss</p>
                  <p className='text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-center w-32 sm:w-36 md:w-52 leading-tight font-secondary'>Tailwindcss digunakan untuk membuat UI yang menarik untuk frontend</p>
                </div>
              </div>
            </div>
        </div>

      </div>
    <Footer />
    </div>
  )
}

export default Model;
