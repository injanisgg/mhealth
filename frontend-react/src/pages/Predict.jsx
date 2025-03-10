import React from 'react'
import DepressionForm from '../components/DepressionForm'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function Predict() {
  return (
    <div className='pb-14 sm:pb-16 lg:pb-0'>
      <Banner title={'Prediksi'} desc={'Halaman ini untuk melakukan prediksi depresi dengan menggunakan data umur, IPK, tekanan akademik, kepuasan belajardurasi tidur, kebiasaan makan, durasi belajar atau bekerja, gelar, stress finansial, pemikiran untuk bunuh diri, dan riwayat penyakit mental dari keluarga.'}/>
      <DepressionForm />
      <Footer />
    </div>
  )
}

export default Predict
