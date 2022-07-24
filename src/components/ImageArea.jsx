import React from 'react';
import Tweet from './Tweet';

function ImageArea() {
  return (
    <section id="image" 
    className="container flex justify-center items-center mx-auto bg-gradient-to-r from-blue-300 to-blue-400 mt-[3rem] px-5 min-h-[34rem] max-w-[70rem] shadow-2xl">
        <Tweet/>
    </section>
  )
}

export default ImageArea