import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import ImageArea from '../components/ImageArea';
import Toolbar from '../components/Toolbar';
import OptionContext from '../OptionContext';
import { useContext } from 'react';
 

function Home() {
  const {toggleStats, toggleDark} = useContext(OptionContext)
  return (
    <div>
      <Navbar/>
      <Search/>
      <ImageArea/>
      <Toolbar
        toggleStats={toggleStats}
        toggleDark={toggleDark}
      />
    </div>
  )
}

export default Home