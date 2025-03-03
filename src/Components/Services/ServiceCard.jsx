import React from 'react'

const ServiceCard = ({data}) => {
  return (
    <div className='flex flex-col items-center gap-5 rounded-md border-2 border-slate-300 bg-gray-100 p-5 hover:border-slate-500 dark-slate-400 dark:bg-slate-800 dark:text-slate-400'>
        <div className='flex flex-col items-cneter gap-2'>
            <h1 className='text-2xl font-bold'>{data.name}</h1>
            <div className='w-20 border-b-2 border-slate-500'></div>
            <h2 className='mt-2 font-semibold uppercase tracking-widest'>{data.purpose} +</h2>
        </div>

     <div>
        <img src={data.image} alt={data.name} />
     </div>

    </div>
  )
}

export default ServiceCard