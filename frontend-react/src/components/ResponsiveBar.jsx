'use client';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion } from "framer-motion";
import { 
  faSquare as solidHome,
  faUser as solidInfo,
  faCircleQuestion as solidPredict,
  faFolder as solidModel
 } from '@fortawesome/free-solid-svg-icons';
import { 
  faSquare as thinHome,
  faUser as thinInfo,
  faCircleQuestion as thinPredict,
  faFolder as thinModel
 } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ResponsiveBar() {
  const [activeTab, setActiveTab] = useState('home');
  const [isScroll, setIsScroll] = useState(false);
  const location = useLocation();
  const isHome =  location.pathname === "/";

  const tabs = [
    { id: 'home', label: "Home", solidIcon: solidHome, thinIcon: thinHome, path: '/' },
    { id: 'about', label: "About", solidIcon: solidInfo, thinIcon: thinInfo, path: '/about' },
    { id: 'predict', label: "Predict", solidIcon: solidPredict, thinIcon: thinPredict, path: '/predict' },
    { id: 'model', label: "Model", solidIcon: solidModel, thinIcon: thinModel, path:'/model' }
  ];

  // handlescroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* navbar untuk lg dan xl */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`hidden z-20 lg:flex xl:flex justify-center items-center bg-transparent fixed top-0 left-0 right-0 w-full p-6 transition-all duration-300
          ${isScroll || !isHome ? 'bg-gradient-to-r from-light-green to-thick-green text-white' : ' bg-based text-black'}`}
      >
        <div className="text-xl sm:text-xl md:text-xl lg:text-lg xl:text-xl font-main font-bold absolute left-20">Mental Health Detection</div>
        <div className="space-x-4">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              to={tab.path}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 transition font-main
                ${location.pathname === tab.path ? "font-bold" : ''}`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* tab bar untuk sm dan md */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`lg:hidden z-20 fixed bottom-0 left-0 w-full bg-white shadow-md border-t flex justify-around py-4 font-main`}
      >
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            to={tab.path}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center text-gray-600
              ${location.pathname === tab.path ? "text-thick-green font-bold" : ''}`}
          >
            <FontAwesomeIcon
              icon={location.pathname === tab.path ? tab.solidIcon : tab.thinIcon}
              className='text-xs sm:text-xl transition-all duration-200 font-main'
            />
            <span className='text-xs sm:text-sm text-thick-green'>{tab.label}</span>
          </Link>
        ))}
      </motion.div>
    </div>
  )
}

export default ResponsiveBar;