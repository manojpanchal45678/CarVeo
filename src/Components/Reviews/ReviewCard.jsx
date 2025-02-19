import React from 'react'
import { FaStar } from 'react-icons/fa'
import {VscQuote} from 'react-icons/vsc'
const ReviewCard = ({review}) => {
  return (
    <div className='flex flex-col gap-5 rounded-md bg-white p-5 dark:bg-slate-800 dark:text-slate-300'  >
        <div className='flex items-center justify-between'>
            <div className=' flex items-center gap-5'>
            <img className='h-16 w-16 rounded-full' src={review.avatar} alt={review.name}/>
            <div className=''>
                <h1 className='text-xl font-semibold'>{review.name}</h1>
                <p className=' text-sm text-gray-400'>{review.role}</p>
            </div>
            </div>
           <VscQuote className='text-4xl text-gray-200'/>
         </div>
           <div className='border-b pb-2'>
            <p className=''>{review.quote}</p>
            </div> 
            <div className='flex items-center justify-between'>
                <span className='flex items-center gap-1'>{review.rating}
                    <FaStar className="text-yellow-500"/>
                </span>
                <span className=''>{review.totalReviews}+ reviews</span>
            </div>
        
    </div>
  )
} 

export default ReviewCard