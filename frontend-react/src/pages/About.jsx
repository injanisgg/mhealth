import React, { useState } from 'react';
import Banner from '../components/Banner';
import One from '../img/one-abt.png';
import Two from '../img/two-abt.png';
import Three from '../img/Three-abt.png';
import { motion, AnimatePresence } from 'framer-motion';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const playData = [
  { id: 1, title: 'Umur', answer: (
  <p>
    Umur adalah waktu hidup seseorang sejak lahir, dihitung dalam satuan tahun. <br />
    Anda bisa memasukan umur anda pada input box.
  </p>
  )},
  { id: 2, title: 'Indeks Prestasi Kumulatif (IPK)', answer: (
    <p>
      IPK adalah alat ukur keberhasilan mahasiswa dalam menjalani perkuliahan dari awal hingga akhir masa studinya.<br />
      Anda bisa memasukan IPK ke dalam input box.
    </p>
  )},
  { id: 3, title: 'Tekanan Akademik', answer:(
    <div className='flex flex-col text-sm sm:text-[8px]'>
      <p>Tekanan akademik adalah stres atau tuntutan yang dialami oleh mahasiswa akibat beban kerja, ekspektasi dari lingkungan, dan persaingan dalam dunia pendidikan. Tekanan ini dapat berasal dari tugas, ujian, atau harapan orang tua dan guru.</p>
      <br />
      <p>Skala tekanan akademik (0-5)</p>
      <ul className='list-disc translate-x-4'>
        <li><span className='font-semibold'>0 - Tidak ada tekanan: </span>Siswa merasa santai dan tidak mengalami stres terkait tugas atau ekspektasi akademik.</li>
        <li><span className='font-semibold'>1 - Sangat rendah: </span>STerdapat sedikit tekanan, tetapi siswa masih mampu mengelolanya dengan baik. Mereka merasa nyaman dengan beban kerja yang ada.</li>
        <li><span className='font-semibold'>2 - Rendah: </span>Siswa merasakan tekanan yang cukup, namun masih dapat mengatasinya tanpa dampak yang signifikan terhadap kesehatan mental.</li>
        <li><span className='font-semibold'>3 - Sedang: </span>Tekanan mulai terasa lebih jelas. Siswa mungkin mengalami kecemasan atau kesulitan dalam mengatur waktu, tetapi masih bisa berfungsi dengan baik.</li>
        <li><span className='font-semibold'>4 - Tinggi: </span>Siswa mengalami tekanan yang signifikan, dapat menyebabkan stres yang berlebihan. Mereka mungkin merasa kewalahan dan kesulitan untuk memenuhi ekspektasi.</li>
        <li><span className='font-semibold'>5 - Sangat tinggi: </span>Tekanan akademik sangat berat, seringkali mempengaruhi kesehatan mental dan fisik. Siswa mungkin mengalami gejala stres yang serius dan merasa tidak mampu untuk mengatasi beban yang ada.</li>
      </ul>
    </div>
  )},
  { id: 4, title:'Kepuasan Belajar', answer:(
    <div>
      <p>Tekanan akademik adalah stres atau tuntutan yang dialami oleh mahasiswa akibat beban kerja, ekspektasi dari lingkungan, dan persaingan dalam dunia pendidikan. Tekanan ini dapat berasal dari tugas, ujian, atau harapan orang tua dan guru.</p>
      <br />
      <p>Skala tekanan akademik (0-5)</p>
      <ul className='list-disc translate-x-4'>
        <li><span className='font-semibold'>0 - Tidak ada tekanan: </span>Siswa merasa santai dan tidak mengalami stres terkait tugas atau ekspektasi akademik.</li>
        <li><span className='font-semibold'>1 - Sangat rendah: </span>STerdapat sedikit tekanan, tetapi siswa masih mampu mengelolanya dengan baik. Mereka merasa nyaman dengan beban kerja yang ada.</li>
        <li><span className='font-semibold'>2 - Rendah: </span>Siswa merasakan tekanan yang cukup, namun masih dapat mengatasinya tanpa dampak yang signifikan terhadap kesehatan mental.</li>
        <li><span className='font-semibold'>3 - Sedang: </span>Tekanan mulai terasa lebih jelas. Siswa mungkin mengalami kecemasan atau kesulitan dalam mengatur waktu, tetapi masih bisa berfungsi dengan baik.</li>
        <li><span className='font-semibold'>4 - Tinggi: </span>Siswa mengalami tekanan yang signifikan, dapat menyebabkan stres yang berlebihan. Mereka mungkin merasa kewalahan dan kesulitan untuk memenuhi ekspektasi.</li>
        <li><span className='font-semibold'>5 - Sangat tinggi: </span>Tekanan akademik sangat berat, seringkali mempengaruhi kesehatan mental dan fisik. Siswa mungkin mengalami gejala stres yang serius dan merasa tidak mampu untuk mengatasi beban yang ada.</li>
      </ul>
    </div>
  )},
  { id: 5, title:'Durasi Tidur', answer:(
    <div>
      <p>Tekanan akademik adalah stres atau tuntutan yang dialami oleh mahasiswa akibat beban kerja, ekspektasi dari lingkungan, dan persaingan dalam dunia pendidikan. Tekanan ini dapat berasal dari tugas, ujian, atau harapan orang tua dan guru.</p>
      <br />
      <p>Skala tekanan akademik (0-5)</p>
      <ul className='list-disc translate-x-4'>
        <li><span className='font-semibold'>0 - Tidak ada tekanan: </span>Siswa merasa santai dan tidak mengalami stres terkait tugas atau ekspektasi akademik.</li>
        <li><span className='font-semibold'>1 - Sangat rendah: </span>STerdapat sedikit tekanan, tetapi siswa masih mampu mengelolanya dengan baik. Mereka merasa nyaman dengan beban kerja yang ada.</li>
        <li><span className='font-semibold'>2 - Rendah: </span>Siswa merasakan tekanan yang cukup, namun masih dapat mengatasinya tanpa dampak yang signifikan terhadap kesehatan mental.</li>
        <li><span className='font-semibold'>3 - Sedang: </span>Tekanan mulai terasa lebih jelas. Siswa mungkin mengalami kecemasan atau kesulitan dalam mengatur waktu, tetapi masih bisa berfungsi dengan baik.</li>
        <li><span className='font-semibold'>4 - Tinggi: </span>Siswa mengalami tekanan yang signifikan, dapat menyebabkan stres yang berlebihan. Mereka mungkin merasa kewalahan dan kesulitan untuk memenuhi ekspektasi.</li>
        <li><span className='font-semibold'>5 - Sangat tinggi: </span>Tekanan akademik sangat berat, seringkali mempengaruhi kesehatan mental dan fisik. Siswa mungkin mengalami gejala stres yang serius dan merasa tidak mampu untuk mengatasi beban yang ada.</li>
      </ul>
    </div>
  )},
  { id: 6, title:'Kebiasaan makan', answer:(
    <div>
      <p>Tekanan akademik adalah stres atau tuntutan yang dialami oleh mahasiswa akibat beban kerja, ekspektasi dari lingkungan, dan persaingan dalam dunia pendidikan. Tekanan ini dapat berasal dari tugas, ujian, atau harapan orang tua dan guru.</p>
      <br />
      <p>Skala tekanan akademik (0-5)</p>
      <ul className='list-disc translate-x-4'>
        <li><span className='font-semibold'>0 - Tidak ada tekanan: </span>Siswa merasa santai dan tidak mengalami stres terkait tugas atau ekspektasi akademik.</li>
        <li><span className='font-semibold'>1 - Sangat rendah: </span>STerdapat sedikit tekanan, tetapi siswa masih mampu mengelolanya dengan baik. Mereka merasa nyaman dengan beban kerja yang ada.</li>
        <li><span className='font-semibold'>2 - Rendah: </span>Siswa merasakan tekanan yang cukup, namun masih dapat mengatasinya tanpa dampak yang signifikan terhadap kesehatan mental.</li>
        <li><span className='font-semibold'>3 - Sedang: </span>Tekanan mulai terasa lebih jelas. Siswa mungkin mengalami kecemasan atau kesulitan dalam mengatur waktu, tetapi masih bisa berfungsi dengan baik.</li>
        <li><span className='font-semibold'>4 - Tinggi: </span>Siswa mengalami tekanan yang signifikan, dapat menyebabkan stres yang berlebihan. Mereka mungkin merasa kewalahan dan kesulitan untuk memenuhi ekspektasi.</li>
        <li><span className='font-semibold'>5 - Sangat tinggi: </span>Tekanan akademik sangat berat, seringkali mempengaruhi kesehatan mental dan fisik. Siswa mungkin mengalami gejala stres yang serius dan merasa tidak mampu untuk mengatasi beban yang ada.</li>
      </ul>
    </div>
  )},
  { id: 7, title:'Durasi Belajar atau Bekerja', answer:(
    <div>
      <p>Tekanan akademik adalah stres atau tuntutan yang dialami oleh mahasiswa akibat beban kerja, ekspektasi dari lingkungan, dan persaingan dalam dunia pendidikan. Tekanan ini dapat berasal dari tugas, ujian, atau harapan orang tua dan guru.</p>
      <br />
      <p>Skala tekanan akademik (0-5)</p>
      <ul className='list-disc translate-x-4'>
        <li><span className='font-semibold'>0 - Tidak ada tekanan: </span>Siswa merasa santai dan tidak mengalami stres terkait tugas atau ekspektasi akademik.</li>
        <li><span className='font-semibold'>1 - Sangat rendah: </span>STerdapat sedikit tekanan, tetapi siswa masih mampu mengelolanya dengan baik. Mereka merasa nyaman dengan beban kerja yang ada.</li>
        <li><span className='font-semibold'>2 - Rendah: </span>Siswa merasakan tekanan yang cukup, namun masih dapat mengatasinya tanpa dampak yang signifikan terhadap kesehatan mental.</li>
        <li><span className='font-semibold'>3 - Sedang: </span>Tekanan mulai terasa lebih jelas. Siswa mungkin mengalami kecemasan atau kesulitan dalam mengatur waktu, tetapi masih bisa berfungsi dengan baik.</li>
        <li><span className='font-semibold'>4 - Tinggi: </span>Siswa mengalami tekanan yang signifikan, dapat menyebabkan stres yang berlebihan. Mereka mungkin merasa kewalahan dan kesulitan untuk memenuhi ekspektasi.</li>
        <li><span className='font-semibold'>5 - Sangat tinggi: </span>Tekanan akademik sangat berat, seringkali mempengaruhi kesehatan mental dan fisik. Siswa mungkin mengalami gejala stres yang serius dan merasa tidak mampu untuk mengatasi beban yang ada.</li>
      </ul>
    </div>
  )},
  { id: 8, title:'Gelar', answer:(
    <div>
      <p>Tekanan akademik adalah stres atau tuntutan yang dialami oleh mahasiswa akibat beban kerja, ekspektasi dari lingkungan, dan persaingan dalam dunia pendidikan. Tekanan ini dapat berasal dari tugas, ujian, atau harapan orang tua dan guru.</p>
      <br />
      <p>Skala tekanan akademik (0-5)</p>
      <ul className='list-disc translate-x-4'>
        <li><span className='font-semibold'>0 - Tidak ada tekanan: </span>Siswa merasa santai dan tidak mengalami stres terkait tugas atau ekspektasi akademik.</li>
        <li><span className='font-semibold'>1 - Sangat rendah: </span>STerdapat sedikit tekanan, tetapi siswa masih mampu mengelolanya dengan baik. Mereka merasa nyaman dengan beban kerja yang ada.</li>
        <li><span className='font-semibold'>2 - Rendah: </span>Siswa merasakan tekanan yang cukup, namun masih dapat mengatasinya tanpa dampak yang signifikan terhadap kesehatan mental.</li>
        <li><span className='font-semibold'>3 - Sedang: </span>Tekanan mulai terasa lebih jelas. Siswa mungkin mengalami kecemasan atau kesulitan dalam mengatur waktu, tetapi masih bisa berfungsi dengan baik.</li>
        <li><span className='font-semibold'>4 - Tinggi: </span>Siswa mengalami tekanan yang signifikan, dapat menyebabkan stres yang berlebihan. Mereka mungkin merasa kewalahan dan kesulitan untuk memenuhi ekspektasi.</li>
        <li><span className='font-semibold'>5 - Sangat tinggi: </span>Tekanan akademik sangat berat, seringkali mempengaruhi kesehatan mental dan fisik. Siswa mungkin mengalami gejala stres yang serius dan merasa tidak mampu untuk mengatasi beban yang ada.</li>
      </ul>
    </div>
  )},
  { id: 9, title:'Stress Finansial', answer:(
    <div>
      <p>Tekanan akademik adalah stres atau tuntutan yang dialami oleh mahasiswa akibat beban kerja, ekspektasi dari lingkungan, dan persaingan dalam dunia pendidikan. Tekanan ini dapat berasal dari tugas, ujian, atau harapan orang tua dan guru.</p>
      <br />
      <p>Skala tekanan akademik (0-5)</p>
      <ul className='list-disc translate-x-4'>
        <li><span className='font-semibold'>0 - Tidak ada tekanan: </span>Siswa merasa santai dan tidak mengalami stres terkait tugas atau ekspektasi akademik.</li>
        <li><span className='font-semibold'>1 - Sangat rendah: </span>STerdapat sedikit tekanan, tetapi siswa masih mampu mengelolanya dengan baik. Mereka merasa nyaman dengan beban kerja yang ada.</li>
        <li><span className='font-semibold'>2 - Rendah: </span>Siswa merasakan tekanan yang cukup, namun masih dapat mengatasinya tanpa dampak yang signifikan terhadap kesehatan mental.</li>
        <li><span className='font-semibold'>3 - Sedang: </span>Tekanan mulai terasa lebih jelas. Siswa mungkin mengalami kecemasan atau kesulitan dalam mengatur waktu, tetapi masih bisa berfungsi dengan baik.</li>
        <li><span className='font-semibold'>4 - Tinggi: </span>Siswa mengalami tekanan yang signifikan, dapat menyebabkan stres yang berlebihan. Mereka mungkin merasa kewalahan dan kesulitan untuk memenuhi ekspektasi.</li>
        <li><span className='font-semibold'>5 - Sangat tinggi: </span>Tekanan akademik sangat berat, seringkali mempengaruhi kesehatan mental dan fisik. Siswa mungkin mengalami gejala stres yang serius dan merasa tidak mampu untuk mengatasi beban yang ada.</li>
      </ul>
    </div>
  )},
  { id: 10, title:'Pemikiran untuk Bunuh Diri', answer:(
    <div>
      <p>Tekanan akademik adalah stres atau tuntutan yang dialami oleh mahasiswa akibat beban kerja, ekspektasi dari lingkungan, dan persaingan dalam dunia pendidikan. Tekanan ini dapat berasal dari tugas, ujian, atau harapan orang tua dan guru.</p>
      <br />
      <p>Skala tekanan akademik (0-5)</p>
      <ul className='list-disc translate-x-4'>
        <li><span className='font-semibold'>0 - Tidak ada tekanan: </span>Siswa merasa santai dan tidak mengalami stres terkait tugas atau ekspektasi akademik.</li>
        <li><span className='font-semibold'>1 - Sangat rendah: </span>STerdapat sedikit tekanan, tetapi siswa masih mampu mengelolanya dengan baik. Mereka merasa nyaman dengan beban kerja yang ada.</li>
        <li><span className='font-semibold'>2 - Rendah: </span>Siswa merasakan tekanan yang cukup, namun masih dapat mengatasinya tanpa dampak yang signifikan terhadap kesehatan mental.</li>
        <li><span className='font-semibold'>3 - Sedang: </span>Tekanan mulai terasa lebih jelas. Siswa mungkin mengalami kecemasan atau kesulitan dalam mengatur waktu, tetapi masih bisa berfungsi dengan baik.</li>
        <li><span className='font-semibold'>4 - Tinggi: </span>Siswa mengalami tekanan yang signifikan, dapat menyebabkan stres yang berlebihan. Mereka mungkin merasa kewalahan dan kesulitan untuk memenuhi ekspektasi.</li>
        <li><span className='font-semibold'>5 - Sangat tinggi: </span>Tekanan akademik sangat berat, seringkali mempengaruhi kesehatan mental dan fisik. Siswa mungkin mengalami gejala stres yang serius dan merasa tidak mampu untuk mengatasi beban yang ada.</li>
      </ul>
    </div>
  )},
  { id: 11, title:'Riwayat Penyakit Mental dari Keluarga', answer:(
    <div>
      <p>Tekanan akademik adalah stres atau tuntutan yang dialami oleh mahasiswa akibat beban kerja, ekspektasi dari lingkungan, dan persaingan dalam dunia pendidikan. Tekanan ini dapat berasal dari tugas, ujian, atau harapan orang tua dan guru.</p>
      <br />
      <p>Skala tekanan akademik (0-5)</p>
      <ul className='list-disc translate-x-4'>
        <li><span className='font-semibold'>0 - Tidak ada tekanan: </span>Siswa merasa santai dan tidak mengalami stres terkait tugas atau ekspektasi akademik.</li>
        <li><span className='font-semibold'>1 - Sangat rendah: </span>STerdapat sedikit tekanan, tetapi siswa masih mampu mengelolanya dengan baik. Mereka merasa nyaman dengan beban kerja yang ada.</li>
        <li><span className='font-semibold'>2 - Rendah: </span>Siswa merasakan tekanan yang cukup, namun masih dapat mengatasinya tanpa dampak yang signifikan terhadap kesehatan mental.</li>
        <li><span className='font-semibold'>3 - Sedang: </span>Tekanan mulai terasa lebih jelas. Siswa mungkin mengalami kecemasan atau kesulitan dalam mengatur waktu, tetapi masih bisa berfungsi dengan baik.</li>
        <li><span className='font-semibold'>4 - Tinggi: </span>Siswa mengalami tekanan yang signifikan, dapat menyebabkan stres yang berlebihan. Mereka mungkin merasa kewalahan dan kesulitan untuk memenuhi ekspektasi.</li>
        <li><span className='font-semibold'>5 - Sangat tinggi: </span>Tekanan akademik sangat berat, seringkali mempengaruhi kesehatan mental dan fisik. Siswa mungkin mengalami gejala stres yang serius dan merasa tidak mampu untuk mengatasi beban yang ada.</li>
      </ul>
    </div>
  )}
]

function About() {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id)
  }
  
  return (
    <div className='pb-0 sm:pb-16'>
      <Banner title={'Tentang Sistem'} desc={'Sistem deteksi depresi ini dirancang untuk membantu mengidentifikasi tanda-tanda awal gangguan mental melalui analisis data dan kecerdasan buatan. Tujuannya bukan untuk menggantikan diagnosis profesional, tetapi sebagai alat bantu yang dapat meningkatkan kesadaran dan mendorong individu untuk mencari bantuan yang tepat lebih cepat.'}/>

      {/* section for page about */}
      <div className='w-full bg-transparent px-5 py-8 sm:px-4 sm:py-7 lg:mt-16'>
        <div className="flex items-center justify-center">
          <img src={One} alt="Woman with girl" className='w-72 sm:w-56' />
          <div className="flex flex-col gap-5 sm:gap-0 mx-5 sm:mx-1">
            <h1 className='text-base sm:text-[8px] font-bold font-main lg:hidden text-black'>Tentang Sistem</h1>
            <div className="flex flex-col gap-5 sm:gap-2">
              <h1 className='flex flex-col font-main text-xl sm:text-lg font-bold z-0'>
                Temukan Depresi Lebih Cepat agar Penanganan Lebih Cepat
              </h1>
              <p className='font-secondary text-sm sm:text-xs w-80 sm:w-52 text-justify'>
                Sistem ini membantu untuk melakukan prediksi terkait depresimu dengan cepat. Akurasi prediksi dari sistem ini mencapai 98.11% sehingga bisa cukup tepat untuk memprediksi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Data dan Tutorial */}
      <div className='w-full bg-transparent px-5 py-8 sm:px-4 sm:py-7 lg:mt-16'>
        <div className="flex flex-col gap-10 sm:gap-5 mx-5 sm:mx-1">
          <div className="flex flex-col justify-center items-center">
            <h3 className='text-base sm:text-[8px] font-bold font-main text-black'>Data dan Tutorial</h3>
            <h1 className='font-main text-xl sm:text-lg font-bold'>Data yang Dibutuhkan dan Cara Menggunakan</h1>
          </div>
          <div className="flex flex-col gap-5 sm:gap-2 mx-5 sm:mx-1">
            {playData.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <div className='flex items-center gap-5 sm:gap-2'>
                <motion.div
                  animate={{ rotate: activeId === item.id ? 90 : 0 }}
                  transition={{ duration: 1 }}
                >
                  <FontAwesomeIcon icon={faPlay} onClick={() => handleClick(item.id)} className='text-3xl sm:text-xl text-black cursor-pointer'/>
                </motion.div>
                  <h2 className='font-main text-sm sm:text-xs font-semibold'>
                    {item.title}
                  </h2>
                </div>
                <AnimatePresence>
                  {activeId === item.id && (
                    <motion.p 
                      className="text-xs text-justify sm:text-[8px] font-secondary text-gray-700 mr-20 sm:mr-14"
                      initial={{ opacity: 0, y: -10 }} // Mulai dari opacity 0 dan sedikit ke atas
                      animate={{ opacity: 1, y: 0 }} // Muncul perlahan
                      exit={{ opacity: 0, y: -10 }} // Menghilang perlahan
                      transition={{ duration: 0.5 }} // Durasi efek
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center mt-5'>
          <img src={Two} alt="Woman with girl" className='w-72 sm:w-32' />
          <img src={Three} alt="Woman with girl" className='w-72 sm:w-40' />
        </div>
      </div>





    </div>
  )
}

export default About;
