import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import ImageArea from '../components/ImageArea';

function Home() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <ImageArea/>
    </div>
  )
}

export default Home