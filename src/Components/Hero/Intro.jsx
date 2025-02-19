import React from 'react'
import { intro } from '../../constants';
import { motion } from 'framer-motion';
const Intro = () => {
  return (
    <motion.div className=' font-josfin relative z-10 mx-auto flex max-w-6xl flex-col items-center space-y-8 px-6 py-24 text-center md:px-12'
    initial={{ opacity: 0, y: 200 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    >
        <h1 className='mt-20 text-4xl font-bold leading-tight text-white md:text-6xl'>{intro.title}</h1>
        <p className='text-lg text-gray-200 md:text-xl '>{intro.description}</p>
        <button className='transfomr rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-blue-700'>Get Started </button>  
    </motion.div>
  )
}

export default Intro