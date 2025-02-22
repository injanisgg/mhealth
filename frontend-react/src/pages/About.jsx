import React, { useState } from 'react';
import Banner from '../components/Banner';
import One from '../img/one-abt.png';
import Two from '../img/two-abt.png';
import Three from '../img/three-abt.png';
import { motion, AnimatePresence } from 'framer-motion';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../components/Footer';

const playData = [
  { id: 1, title: 'Umur', answer: (
  <p className='translate-x-6 sm:translate-x-6 md:translate-x-10 lg:translate-x-14 xl:translate-x-[4.4rem]'>
    Umur adalah waktu hidup seseorang sejak lahir, dihitung dalam satuan tahun. <br />
    Anda bisa memasukan umur anda pada input box.
  </p>
  )},
  { id: 2, title: 'Indeks Prestasi Kumulatif (IPK)', answer: (
    <p className='translate-x-6 sm:translate-x-6 md:translate-x-10 lg:translate-x-14 xl:translate-x-[4.4rem]'>
      IPK adalah alat ukur keberhasilan mahasiswa dalam menjalani perkuliahan dari awal hingga akhir masa studinya.<br />
      Anda bisa memasukan IPK ke dalam input box.
    </p>
  )},
  { id: 3, title: 'Tekanan Akademik', answer:(
    <div className='flex flex-col translate-x-6 sm:translate-x-6 md:translate-x-10 lg:translate-x-14 xl:translate-x-[4.4rem]'>
      <p>
        Tekanan akademik adalah stres atau tuntutan yang dialami oleh mahasiswa akibat beban kerja, ekspektasi dari lingkungan, dan persaingan dalam dunia pendidikan. Tekanan ini dapat berasal dari tugas, ujian, atau harapan orang tua dan guru.
      </p>
      <br />
      <p>Skala tekanan akademik (0-5)</p>
      <ul className='list-disc translate-x-4'>
        <li><span className='font-semibold'>0 - Tidak ada tekanan: </span>Siswa merasa santai dan tidak mengalami stres terkait tugas atau ekspektasi akademik.</li>
        <li><span className='font-semibold'>1 - Sangat rendah: </span>Terdapat sedikit tekanan, tetapi siswa masih mampu mengelolanya dengan baik. Mereka merasa nyaman dengan beban kerja yang ada.</li>
        <li><span className='font-semibold'>2 - Rendah: </span>Siswa merasakan tekanan yang cukup, namun masih dapat mengatasinya tanpa dampak yang signifikan terhadap kesehatan mental.</li>
        <li><span className='font-semibold'>3 - Sedang: </span>Tekanan mulai terasa lebih jelas. Siswa mungkin mengalami kecemasan atau kesulitan dalam mengatur waktu, tetapi masih bisa berfungsi dengan baik.</li>
        <li><span className='font-semibold'>4 - Tinggi: </span>Siswa mengalami tekanan yang signifikan, dapat menyebabkan stres yang berlebihan. Mereka mungkin merasa kewalahan dan kesulitan untuk memenuhi ekspektasi.</li>
        <li><span className='font-semibold'>5 - Sangat tinggi: </span>Tekanan akademik sangat berat, seringkali mempengaruhi kesehatan mental dan fisik. Siswa mungkin mengalami gejala stres yang serius dan merasa tidak mampu untuk mengatasi beban yang ada.</li>
      </ul>
    </div>
  )},
  { id: 4, title:'Kepuasan Belajar', answer:(
    <div className='translate-x-6 sm:translate-x-6 md:translate-x-10 lg:translate-x-14 xl:translate-x-[4.4rem]'>
      <p>
        Kepuasan akademik adalah perasaan positif yang dialami siswa atau mahasiswa terkait pengalaman mereka dalam lingkungan pendidikan. Ini mencakup persepsi tentang kualitas pengajaran, relevansi materi, interaksi dengan pengajar dan teman sebaya, serta pencapaian akademik yang diraih. Kepuasan akademik berpengaruh pada motivasi belajar dan keterlibatan siswa.
      </p>
      <br />
      <p>Skala Kepuasan belajar (0-5)</p>
      <ul className='list-disc translate-x-4'>
        <li><span className='font-semibold'>0 - Tidak puas: </span>Siswa merasa sangat tidak puas dengan pengalaman akademik mereka. Mereka mungkin merasa tidak mendapatkan dukungan atau sumber daya yang cukup.</li>
        <li><span className='font-semibold'>1 - Sangat rendah: </span>Siswa mengalami sedikit kepuasan. Mungkin ada beberapa aspek yang memuaskan, tetapi secara keseluruhan, mereka merasa tidak puas.</li>
        <li><span className='font-semibold'>2 - Rendah: </span>Siswa hanya merasa puas dengan beberapa elemen dari pengalaman akademik mereka. Namun, banyak area yang masih mengecewakan.</li>
        <li><span className='font-semibold'>3 - Sedang: </span>Siswa merasa cukup puas dengan pengalaman akademik mereka. Ada keseimbangan antara aspek positif dan negatif yang mereka alami.</li>
        <li><span className='font-semibold'>4 - Tinggi: </span>Siswa merasa puas dengan sebagian besar pengalaman akademik. Mereka menghargai pengajaran dan dukungan yang diterima, meskipun masih ada ruang untuk perbaikan.</li>
        <li><span className='font-semibold'>5 - Sangat tinggi: </span>Siswa merasa sangat puas dengan semua aspek pendidikan. Mereka merasa termotivasi dan mendapatkan pengalaman belajar yang sangat positif dan bermanfaat.</li>
      </ul>
    </div>
  )},
  { id: 5, title:'Durasi Tidur', answer:(
    <div className='translate-x-6 sm:translate-x-6 md:translate-x-10 lg:translate-x-14 xl:translate-x-[4.4rem]'>
      <p>Durasi tidur merujuk pada jumlah waktu yang dihabiskan seseorang untuk tidur dalam suatu periode, biasanya dalam satu malam. Durasi tidur yang cukup penting untuk kesehatan fisik dan mental, serta berpengaruh pada kinerja akademik.</p>
      <br />
      <p>Skala durasi tidur</p>
      <ul className='list-disc translate-x-4'>
        <li><span className='font-semibold'>Less than 5 hours (Kurang dari 5 jam): </span>Siswa biasanya mengalami kelelahan dan kesulitan berkonsentrasi. Kualitas tidur yang buruk dapat berdampak negatif pada kesehatan mental dan fisik.</li>
        <li><span className='font-semibold'>5-6 hours (5-6 jam): </span>Tidur cukup singkat, yang dapat menyebabkan penurunan energi dan fokus. Mungkin ada beberapa gangguan dalam kinerja akademik, tetapi masih bisa dikelola.</li>
        <li><span className='font-semibold'>7-8 hours (7-8 jam): </span>Durasi tidur ideal bagi banyak orang. Siswa cenderung merasa segar dan lebih mampu berkonsentrasi, yang berdampak positif pada kinerja akademik dan kesehatan.</li>
        <li><span className='font-semibold'>More than 8 hours (Lebih dari 8 jam): </span>Tidur yang cukup panjang, yang bisa sangat bermanfaat. Namun, jika dilakukan secara berlebihan, bisa menandakan masalah seperti depresi atau kebiasaan tidur yang tidak teratur.</li>
        <li><span className='font-semibold'>Others (Lainnya): </span>Durasi tidur bervariasi, mungkin tergantung pada kebutuhan individu atau faktor eksternal. Beberapa orang mungkin merasa cukup dengan tidur yang lebih pendek atau lebih panjang dari rata-rata.</li>
      </ul>
    </div>
  )},
  { id: 6, title:'Kebiasaan makan', answer:(
    <div className='translate-x-6 sm:translate-x-6 md:translate-x-10 lg:translate-x-14 xl:translate-x-[4.4rem]'>
      <p>Kebiasaan makan merujuk pada pola dan pilihan makanan yang dilakukan seseorang secara teratur. Kebiasaan ini dapat mempengaruhi kesehatan fisik, mental, dan kinerja akademik.</p>
      <br />
      <p>Skala kebiasaan makan</p>
      <ul className='list-disc translate-x-4'>
        <li><span className='font-semibold'>Healthy (Sehat): </span>Pola makan yang seimbang dan bergizi, mencakup banyak sayuran, buah-buahan, biji-bijian, dan protein berkualitas. Siswa cenderung merasa energik dan memiliki konsentrasi yang baik.</li>
        <li><span className='font-semibold'>Moderate (Kurang Sehat): </span>Kebiasaan makan yang mencakup variasi makanan sehat, tetapi juga ada konsumsi makanan yang kurang sehat dalam jumlah terbatas. Siswa mungkin merasa cukup baik, tetapi kadang-kadang mengalami penurunan energi.</li>
        <li><span className='font-semibold'>Unhealthy (Tidak Sehat): </span>Pola makan yang tinggi gula, garam, dan lemak jenuh. Siswa sering mengandalkan makanan cepat saji atau camilan tidak sehat, yang dapat mempengaruhi kesehatan dan kinerja akademik secara negatif.</li>
        <li><span className='font-semibold'>Others (Lainnya): </span>Kebiasaan makan yang tidak teratur atau tidak dapat dikategorikan dengan jelas. Ini bisa termasuk pola makan yang dipengaruhi oleh faktor emosional, kebiasaan sosial, atau kondisi kesehatan tertentu.</li>
      </ul>
    </div>
  )},
  { id: 7, title:'Durasi Belajar atau Bekerja', answer:(
    <div className='translate-x-6 sm:translate-x-6 md:translate-x-10 lg:translate-x-14 xl:translate-x-[4.4rem]'>
      <p>Durasi belajar atau bekerja adalah waktu yang anda habiskan untuk belajar atau bekerja. Anda bisa memasukan lama durasi anda belajar atau bekerja dari skala 0 sampai 12 jam.</p>
    </div>
  )},
  { id: 8, title:'Gelar', answer:(
    <div className='translate-x-6 sm:translate-x-6 md:translate-x-10 lg:translate-x-14 xl:translate-x-[4.4rem]'>
      <p>Gelar adalah akreditasi akademik yang diberikan kepada individu setelah menyelesaikan program pendidikan tertentu.</p>
      <br />
      <p>Pilihan nama gelar</p>
      <div className="flex justify-between">
        <ul className='list-disc translate-x-4'>
          <li><span class="font-semibold">B.Pharm:</span> Sarjana Farmasi</li>
          <li><span class="font-semibold">BSc:</span> Sarjana Sains</li>
          <li><span class="font-semibold">BA:</span> Sarjana Seni</li>
          <li><span class="font-semibold">BCA:</span> Sarjana Komputer</li>
          <li><span class="font-semibold">M.Tech:</span> Magister Teknologi</li>
          <li><span class="font-semibold">PhD:</span> Doktor</li>
          <li><span class="font-semibold">Class 12:</span> Kelas 12 (SMA)</li>
          <li><span class="font-semibold">B.Ed:</span> Sarjana Pendidikan</li>
          <li><span class="font-semibold">LLB:</span> Sarjana Hukum</li>
          <li><span class="font-semibold">BE:</span> Sarjana Teknik</li>
          <li><span class="font-semibold">M.Ed:</span> Magister Pendidikan</li>
          <li><span class="font-semibold">MSc:</span> Magister Sains</li>
          <li><span class="font-semibold">BHM:</span> Sarjana Manajemen Perhotelan</li>
          <li><span class="font-semibold">M.Pharm:</span> Magister Farmasi</li>       
        </ul>
        <ul className="list-disc">
          <li><span class="font-semibold">MCA:</span> Magister Ilmu Komputer</li>
          <li><span class="font-semibold">MA:</span> Magister Seni</li>
          <li><span class="font-semibold">B.Com:</span> Sarjana Ekonomi</li>
          <li><span class="font-semibold">MD:</span> Dokter</li>
          <li><span class="font-semibold">MBA:</span> Magister Manajemen Bisnis</li>
          <li><span class="font-semibold">MBBS:</span> Sarjana Kedokteran</li>
          <li><span class="font-semibold">M.Com:</span> Magister Ekonomi</li>
          <li><span class="font-semibold">B.Arch:</span> Sarjana Arsitektur</li>
          <li><span class="font-semibold">LLM:</span> Magister Hukum</li>
          <li><span class="font-semibold">B.Tech:</span> Sarjana Teknologi</li>
          <li><span class="font-semibold">BBA:</span> Sarjana Administrasi Bisnis</li>
          <li><span class="font-semibold">ME:</span> Magister Teknik</li>
          <li><span class="font-semibold">MHM:</span> Magister Manajemen Perhotelan</li>
          <li><span class="font-semibold">Others:</span> Lainnya</li>
        </ul>
      </div>
    </div>
  )},
  { id: 9, title:'Stress Finansial', answer:(
    <div className='translate-x-6 sm:translate-x-6 md:translate-x-10 lg:translate-x-14 xl:translate-x-[4.4rem]'>
      <p>Stres finansial adalah tekanan atau kecemasan yang muncul akibat masalah keuangan, seperti utang, pengeluaran yang melebihi pendapatan, atau ketidakstabilan ekonomi. Hal ini dapat berdampak pada kesehatan mental dan fisik seseorang.</p>
      <br />
      <p>Skala stress finansial (0-5)</p>
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
    <div className='translate-x-6 sm:translate-x-6 md:translate-x-10 lg:translate-x-14 xl:translate-x-[4.4rem]'>
      <p>Pemikiran untuk bunuh diri adalah keinginan atau dorongan untuk mengakhiri hidup, baik dalam bentuk pikiran sementara maupun rencana yang lebih serius. Ini sering dipicu oleh stres berat, depresi, atau tekanan emosional yang mendalam.</p>
      <br />
      <p>Pilihan jawaban</p>
      <ul className='list-disc translate-x-4'>
        <li><span class="font-semibold">Yes (Iya)</span> Jika anda pernah berpikiran untuk bunuh diri</li>
        <li><span class="font-semibold">No (Tidak)</span> Jika anda tidak pernah berpikiran untuk bunuh diri</li>
      </ul>
    </div>
  )},
  { id: 11, title:'Riwayat Penyakit Mental dari Keluarga', answer:(
    <div className='translate-x-6 sm:translate-x-6 md:translate-x-10 lg:translate-x-14 xl:translate-x-[4.4rem]'>
      <p>Riwayat penyakit mental dari keluarga adalah adanya anggota keluarga yang pernah atau sedang mengalami gangguan mental, yang dapat meningkatkan risiko seseorang mengalami kondisi serupa akibat faktor genetik dan lingkungan.</p>
      <br />
      <p>Pilihan jawaban</p>
      <ul className='list-disc translate-x-4'>
        <li><span class="font-semibold">Yes (Iya)</span> Jika anda pernah berpikiran untuk bunuh diri</li>
        <li><span class="font-semibold">No (Tidak)</span> Jika anda tidak pernah berpikiran untuk bunuh diri</li>
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
    <div className='pb-0 sm:pb-16 md:pb-16 lg:pb-0 xl:pb-0'>
      <Banner title={'Tentang Sistem'} desc={'Sistem deteksi depresi ini dirancang untuk membantu mengidentifikasi tanda-tanda awal gangguan mental melalui analisis data dan kecerdasan buatan. Tujuannya bukan untuk menggantikan diagnosis profesional, tetapi sebagai alat bantu yang dapat meningkatkan kesadaran dan mendorong individu untuk mencari bantuan yang tepat lebih cepat.'}/>

      {/* section for page about */}
      <div className="mx-5 my-8 sm:mx-4 md:mx-6 lg:mx-10 xl:mx-14 sm:my-7 md:my-9 lg:my-11 xl:my-13 lg:mt-16 xl:mt-20">
        <div className='w-full bg-transparent'>
          <div className="flex items-center justify-center">
            <img src={One} alt="Woman with girl" className='w-72 sm:w-56 md:w-64 lg:w-80 xl:w-96' />
            <div className="flex flex-col gap-5 sm:gap-0 md:gap-1 lg:gap-3 mx-5 sm:mx-1 md:mx-5 lg:mx-10 xl:mx-16">
              <h1 className='text-sm sm:text-[8px] md:text-sm lg:text-base xl:text-lg font-bold font-main lg:hidden text-black'>Tentang Sistem</h1>
              <div className="flex flex-col gap-5 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
                <h1 className='flex flex-col font-main text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold z-0'>
                  Temukan Depresi Lebih Cepat agar Penanganan Lebih Cepat
                </h1>
                <p className='font-secondary text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg text-justify'>
                  Sistem ini membantu untuk melakukan prediksi terkait depresimu dengan cepat. Akurasi prediksi dari sistem ini mencapai 98.11% sehingga bisa cukup tepat untuk memprediksi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data dan Tutorial */}
      <div className="mx-5 my-8 sm:mx-4 md:mx-6 lg:mx-12 xl:mx-20 sm:my-7 lg:mt-16 xl:mt-20">
        <div className='w-full bg-transparent'>
          <div className="flex flex-col gap-10 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11">
            <div className="flex flex-col justify-center items-center">
              <h3 className='text-sm sm:text-[8px] md:text-sm lg:text-base xl:text-lg font-bold font-main text-black'>Data dan Tutorial</h3>
              <h1 className='font-main text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>Data yang Dibutuhkan dan Cara Menggunakan</h1>
            </div>
            <div className="flex justify-center mx-0 md:mx-40 md:justify-start sm:justify-start gap-52 lg:gap-52 xl:gap-52 sm:gap-0 md:gap-0">
              <div className="flex flex-col gap-5 sm:gap-2 md:gap-5 lg:gap-8 xl:gap-12">
                <AnimatePresence>
                  {playData.map((item) => (
                    <motion.div 
                      key={item.id} 
                      className="flex flex-col gap-2"
                      layout // Menambahkan animasi layout agar elemen lain turun dengan smooth
                      transition={{ type: "spring", stiffness: 100, damping: 15 }} // Smooth animasi
                    >
                      <div className="flex items-center gap-5 sm:gap-2 md:gap-5 lg:gap-8 xl:gap-12">
                        <motion.div
                          animate={{ rotate: activeId === item.id ? 90 : 0 }}
                          transition={{ duration: 1 }}
                        >
                          <FontAwesomeIcon
                            icon={faPlay}
                            onClick={() => handleClick(item.id)}
                            className="text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-black cursor-pointer"
                          />
                        </motion.div>
                        <h2 className="font-main text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg font-semibold">
                          {item.title}
                        </h2>
                      </div>
                      <AnimatePresence>
                        {activeId === item.id && (
                          <motion.p
                            className="text-sm text-justify sm:text-[8px] md:text-sm lg:text-base xl:text-lg font-secondary text-gray-700 mr-20 sm:mr-14 w-[35rem]"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            layout // Pastikan teks juga ikut animasi smooth
                            transition={{ duration: 0.5 }}
                          >
                            {item.answer}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Bungkus gambar dalam motion.div agar bisa digeser */}
              <motion.div
                className="flex flex-col justify-between"
                animate={{ x: activeId ? 80 : 0 }} // Geser ke kanan saat ada yang aktif
                transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.5 }} // Animasi smooth
              >
                <img src={Two} alt="Woman with girl" className="w-72 lg:w-80 xl:w-96 hidden lg:block" />
                <img src={Three} alt="Woman with girl" className="w-72 lg:w-80 xl:w-96 hidden lg:block" />
              </motion.div>
          </div>
          </div>
          <div className='flex justify-center mt-5'>
            <img src={Two} alt="Woman with girl" className='w-72 sm:w-32 md:w-44 lg:hidden xl:hidden' />
            <img src={Three} alt="Woman with girl" className='w-72 sm:w-40 md:w-52 lg:hidden xl:hidden' />
          </div>
        </div>
      </div>

    <Footer/>
    </div>
  )
}

export default About;
