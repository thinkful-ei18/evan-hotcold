import React from 'react';
import '../Components/Header.css'

function Header (props) {
  return (

    <header>
      <nav>
        <h3 className='description'>What?</h3>
        <h3 className='new-game'>+New Game</h3>
        </nav>
      <h1> HOT or COLD!</h1>
    </header>

  )

}

export default Header;