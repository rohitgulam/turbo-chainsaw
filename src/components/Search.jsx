import React from 'react';
import {ImSearch} from 'react-icons/im';
import {FaRegTimesCircle} from 'react-icons/fa';

function Search() {
  return (
    <form className="relative w-full my-5 px-6 md:w-1/2 md:mx-auto">
        
            <span className="absolute inset-y-0 left-6 flex items-center px-5">
                <ImSearch className='fill-slate-500'/> 
            </span>
            <input 
              type="text" 
              name="link" 
              id="link" 
              placeholder='Paste Twitter/Telegram link' 
              className='w-[100%] mx-auto py-3 px-12 border-2 border-slate-300 rounded-lg text-xl shadow-2xl focus:outline-none placeholder:text-slate-500'/>
            <span className="absolute inset-y-0 right-6 flex items-center px-5">
                <FaRegTimesCircle className='fill-slate-500 text-xl'/> 
            </span>
    </form>
  )
}

export default Search