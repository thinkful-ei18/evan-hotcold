import React from 'react';
import '../Components/Header.css'

function Header (props) {
  return (

    <header>
      <nav>
        <h3 onClick={() => props.toggleModal()}className='description'>What?</h3>
        <h3 onClick = {() => props.resetGame()}className='new-game'>+New Game</h3>
        </nav>
      <h1> HOT or COLD!</h1>
    </header>

  )

}

export default Header;