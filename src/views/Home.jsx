import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import ImageArea from '../components/ImageArea';
import Toolbar from '../components/Toolbar';

function Home() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <ImageArea/>
      <Toolbar 
        toogleStats={() => {
          console.log(1)
        }}  
      />
    </div>
  )
}

export default Home