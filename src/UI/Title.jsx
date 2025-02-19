import React from 'react'
import { motion } from "framer-motion";

const Title = ({title, subtitle}) => {
  return (
    <motion.div className='flex flex-col items-center gap-5' 
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}>
        <h1 className='font-bold text-vl sm:text-2xl md:text-6xl text-slate-800 dark:text-slate-200 hover:-tracking-wide'>{title}</h1>
        <div className='border-b-2 border-red-500 p-2 w-60 '></div>
        <p className='text-slate-600 dark:text-slate-300'>{subtitle}</p>
    </motion.div>
  )
}

export default Title; 
