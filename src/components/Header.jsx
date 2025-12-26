import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='headingDiv'>
        <p className='heading'>Movie<span>Explorer</span> 🎬</p>
      </div>

      <nav className='navBar'>
        <ul className='items'>
          <li className='item'><Link className='i' to='/'>Home</Link></li>
          <li className='item'><Link className='i' to='/about'>About</Link></li>
        </ul>
      </nav>

      <div className='logodiv'>
        <p className='logos'>˙✧˖°🍿 ༘ ⋆｡˚</p>
      </div>
    </header>
  );
}

export default Header;
