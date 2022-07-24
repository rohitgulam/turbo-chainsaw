import React from 'react';
import img from './img.jpg'

function Tweet() {
  return (
    <div className='flex flex-col justify-evenly w-full min-h-1/2 py-8 px-6 bg-white shadow-2xl rounded-2xl md:w-3/4 md:px-16 '>
        <div className='flex items-center'>
            <img src={img} alt="" className='w-10 h-10 rounded-full' />
            <h2 className='ml-4 font-medium text-xl' >Rohit Gulam</h2>
        </div>
        <div>
            <p className='leading-9 text-xl py-5'>
            Women. <br /> 
            Your best friend (who is single) is the #1 cause of all your relationship troubles. Stop listening to her advice about men. Listen to your heart. 
            <br />
            Sincerely, all men.
            </p>
        </div>
        <div className='flex text-slate-500' >
            <p className='mr-2'>3.25PM</p>
            <p>01.01.2021</p>
        </div>
    </div>
  )
}

export default Tweet