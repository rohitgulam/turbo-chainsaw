import React from 'react';
import {BsDownload} from 'react-icons/bs';
import {FaRegComment} from 'react-icons/fa';
import {FiMoon} from 'react-icons/fi';
import {WiMoonAltFull} from 'react-icons/wi';

function Toolbar({toggleStats, toggleDark}) {
  return (
    <section className='container mx-auto my-8 px-10 md:w-1/2 lg:w-1.5/4'>
        <div className="flex justify-between w-3.5/4 mx-auto py-1 px-4 rounded-md border-2 border-slate-400">
            <button className="flex flex-col justify-center items-center p-2 font-light">
                <WiMoonAltFull className='text-xl'/>
                <p className='text-sm' >Color</p>
            </button>
            <button onClick={toggleDark} className="flex flex-col justify-center items-center p-2 font-light">
                <FiMoon className='text-xl'/>
                <p className='text-sm' >Dark</p>
            </button>
            <button onClick={toggleStats} className="flex flex-col justify-center items-center p-2 font-light">
                <FaRegComment className='text-xl'/>
                <p className='text-sm' >Stats</p>
            </button>
            <button className="flex flex-col justify-center items-center p-2 font-light">
                <BsDownload className='text-xl'/>
                <p className='text-sm' >Download</p>
            </button>
        </div>
    </section>
  )
}

export default Toolbar