import React from 'react';
import img from './img.jpg';
import { useContext } from 'react';
import OptionContext from '../OptionContext';

function Tweet() {
    const {stats} = useContext(OptionContext);
    const {dark} = useContext(OptionContext);
  return (
    <div className={dark ? 'flex flex-col justify-evenly w-full min-h-1/2 py-8 px-6  shadow-2xl rounded-2xl md:w-3/4 md:px-16 bg-gray-900 text-white': 'flex flex-col justify-evenly w-full min-h-1/2 py-8 px-6  shadow-2xl rounded-2xl md:w-3/4 md:px-16 bg-white text-black'}>
        <div className='flex items-center'>
            <img src={img} alt="" className='w-10 h-10 rounded-full' />
            <h2 className='ml-4 font-medium text-xl' >Rohit Gulam</h2>
        </div>
        <div>
            <p className='leading-9 text-xl py-5'>
            Have different social circles for different purposes.
            <br /> <br />
            • Smart, nerdy men who help you with business and money-making opportunities
            <br />
            • Low IQ savages who teach you to be carefree and ruthless
            <br /> <br />
            Most don’t do this.
            </p>
        </div>
        <div className='flex text-slate-500' >
            <p className='mr-2'>3:25PM</p>
            <p>01.01.2021</p>
        </div>
        <div className={ stats ? 'flex justify-between mt-3 text-slate-500 w-1/2' : 'hidden'} >
            <p className=''>12 replies</p>
            <p> 24 retweets</p>
            <p> 39 likes</p>
        </div>
    </div>
  )
}

export default Tweet