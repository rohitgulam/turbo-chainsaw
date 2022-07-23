import React from 'react';
import img from './img.jpg'

function Tweet() {
  return (
    <div className='flex flex-col justify-evenly w-3/4 min-h-1/2 py-8 px-16 bg-white shadow-2xl rounded-2xl'>
        <div className='flex items-center'>
            <img src={img} alt="" className='w-10 h-10 rounded-full' />
            <h2 className='ml-4 font-medium text-xl' >Rohit Gulam</h2>
        </div>
        <div>
            <p className='leading-9 text-xl py-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit placeat hic esse nam nisi omnis consequatur commodi, molestiae harum sed dolore non, unde architecto cum iste! Exercitationem voluptas quidem consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum dolores veniam sint consectetur, deserunt commodi architecto quidem. Rerum asperiores mollitia itaque ad, ea, qui praesentium doloremque illum dicta cupiditate tempora illo voluptatem deleniti. Magnam esse commodi quasi explicabo minus ex?
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