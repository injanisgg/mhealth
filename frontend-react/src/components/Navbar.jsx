import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='flex justify-center gap-6'>
        <Link to="/">Beranda</Link>
        <Link to="/prediksi">Prediksi</Link>
        <Link to="/tentang-sistem">Tentang Sistem</Link>
        <Link to="/model">Model</Link>
    </nav>
  )
}

export default Navbar
