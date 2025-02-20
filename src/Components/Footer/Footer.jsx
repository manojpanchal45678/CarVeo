import React from 'react'
import Container from '../../UI/Container'
import { footer } from '../../constants'
import Credits from './Credits'
import FAQs from './FAQs'
const Footer = () => {
  return (
    <footer className='bg-slate-600 p-5 dark:bg-slate-800 dark:text-gray-300 md:p-16'>
      <Container>
        <div className='flex flex-col justify-between gap-8 md:flex-row'>
            
           <div className='flex-1'>
            <h2 className='text-2xl font-bold text-gray-200'>{footer.title}</h2>
            <p className='mt-2 text-gray-200'>{footer.slogan}</p>
            <p className='mt-4 text-gray-300'>{footer.description}</p>
           </div>


            <div className=''>
               <h3 className='mb-4 text-2xl font-semibold text-gray-200'>Contact Us</h3>
               <p className='text-gray-300'>Samwarsi Near Bhaurasa</p>
               <p className='text-gray-300'>Dewas, Madhya Pradesh, India</p>
               <p className='text-gray-300'>Ph: +91 8462079917</p>
               <p className='text-gray-300'>Email : manojpanchal82307@gmail.com</p>
               
            </div>


            <div className='flex-1'>
            <h3 className='mb-4 text-xl font-semibold text-gray-200'>Subscribe to our Newsletter</h3>
            <form action="#" className='flex flex-col space-y-2'>
            <input type="text" required placeholder='Enter Your Full Name' className='rounded bg-slate-300 p-2 text-gray-800 placeholder:text-gray-500 focus:outline-none'/>
                <input type="email" required placeholder='Enter Your Email' className='rounded bg-slate-300 p-2 text-gray-800 placeholder:text-gray-500 focus:outline-none'/>
            
            <button className='mt-2 rounded bg-red-500 p-2 w-24 text-white hover:bg-blue-700'>Subscribe</button>
            </form>
            </div>

        </div>
        <FAQs />
        <Credits />
      </Container>
    </footer>
  )
}

export default Footer