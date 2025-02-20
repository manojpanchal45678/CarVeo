import React from 'react'

const Credits = () => {
  return (
    <div className='pt-5  border-t border-slate-400 text-center text-slate-300'>
        &copy; { new Date().getUTCFullYear()} CarVista... All rigths Reserved.
        <p className='text-xs flex text-center justify-center opacity-10'>Design by Manoj Panchal</p>
     </div>
  )
}

export default Credits;