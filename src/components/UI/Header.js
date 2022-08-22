import React from 'react';
import Navbar from './Navbar';
import SubHeader from './SubHeader';
import './Header.css';

const Header = () => {
  return (
    <header className='header_section'>
      <Navbar/>
      <SubHeader/>
    </header>
  )
}

export default Header