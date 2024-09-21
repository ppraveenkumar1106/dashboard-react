import React from 'react';
import './header.css';
import Logo from './Logo';
import Searchbar from './SearchBarr';
import Nav from './Nav';

const Header = () => {
  return (
    <header 
      id='header'
      className='header fixed-top d-flex align-items-center'
      aria-label='Header'
    >
      {/* Logo */}
      <Logo />
      {/* Search bar */}
      <Searchbar />
      {/*Nav */}
      <Nav />
      
    </header>
  );
};

export default Header;
