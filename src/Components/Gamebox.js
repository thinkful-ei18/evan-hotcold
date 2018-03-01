import React from 'react';
import GuessSubmit from '../Components/GuessSubmit';
import Statbox from '../Components/Statbox';
import Hintbox from '../Components/Hintbox';
import '../Components/Gamebox.css';

function Gamebox (props) {
  return (
    <main>
      <section className='gamebox-container'>
        <Hintbox/>
        <div className='purple-body'>
          <GuessSubmit />
          <Statbox />
        </div>
      </section>
    </main>
  )
}

export default Gamebox;