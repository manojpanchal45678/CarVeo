import React, { useState } from "react";
import { sliderData } from "../../constants/Data";
import { motion } from "framer-motion";
import { FaAngleDoubleLeft,FaAngleDoubleRight } from 'react-icons/fa'
//import { FaMoneyBillWave } from "react-icons/fa";
import moneyLogo from "/src/assets/Mlogo.png";
const CarCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 py-10 bg-slate-50 dark:bg-slate-700">
        <motion.div className="flex flex-col items-center"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="mt-7 font-josfin text-center text-5xl font-bold bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-200"> Our Car Photos </h1>
          <div className='border-b-2 border-red-500 p-4 w-60'></div>
          <p className="text-2xl bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 mt-5">We are providing a wide range of varities of cars, check out.</p>
        </motion.div>
      <div className="mt-7 mb-7 rounded-2xl relative w-full max-w-[1000px] h-auto sm:h-[500px] md:h-[550px] lg:h-[640px] bg-slate-50 dark:bg-slate-700 overflow-hidden flex items-center">
           
        <div
          className="flex transition-transform duration-700 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {sliderData.map((item, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 relative flex justify-center items-center object-cover overflow-hidden"
            >
              <img
                src={item.image} 
                alt={item.title}  
                className="w-full h-auto max-h-[400px] overflow-z-hidden sm:max-h-full md:max-h-[550px] lg:max-h-[600px] border-gray-700 dark:border-gray-50 rounded-md  transition-transform duration-500 border-2 "
              />
              {index === currentIndex && (
                <div className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 p-2 sm:p-4 rounded-lg w-[90%] text-center">
                  <h2 className="flex justify-center items-center h-3 w-[60px] sm:h-12 sm:w-60 sm:text-[18px] rounded-sm sm:rounded-md dark:bg-opacity-50 bg-opacity-50 bg-slate-700 text-[5px] border-gray-900 border-[0.5px] sm:text-2xl text-slate-100 dark:text-slate-900 dark:bg-slate-100 font-bold text-center">{item.title}</h2>
                  <p className="mt-4 font-bold text-slate-100 dark:text-slate-900 text-[8px] text-end sm:text-end [text-shadow:_-1px_-1px_0_black,_1px_-1px_0_black,_-1px_1px_0_black,_1px_1px_0_black] dark:[text-shadow:_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_1px_1px_0_white] sm:text-xl">{item.description}</p>
                  <div className=" flex justify-center text-center items-center h-[10px] w-[70px]  sm:h-[35px] sm:w-[210px] text-[5px] sm:text-[15px] font-bold text-slate-50 dark:text-slate-950 bg-gray-800 bg-opacity-50 dark:bg-slate-200 rounded-sm sm:rounded-lg border-[0.5px] border-gray-900">
                  <img src={moneyLogo} alt="" className="sm:h-12 sm:w-12 h-[13xp] w-[13px] "/>
                    <p className="">Price-</p>
                    <p className="ml-2">{item.price}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Centered Navigation Buttons */}
         <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex sm:gap-5 gap-3">
                  <button className='rounded-lg text-white dark:text-black hover:dark:bg-white dark:bg-slate-400 hover:bg-slate-800 bg-slate-500 border-2 border-gray-600 px-4 py-2 disabled:opacity-40' onClick={prevSlide}>
                  <FaAngleDoubleLeft />
                  </button>
                  <button className='rounded-lg text-white dark:text-black hover:dark:bg-white dark:bg-slate-400 hover:bg-slate-800 bg-slate-500 border-2 border-gray-600 px-4 py-2 disabled:opacity-40' onClick={nextSlide}>
                  <FaAngleDoubleRight />
                  </button>
                 </div>
      </div>
    </div>
  );
};

export default CarCard;
