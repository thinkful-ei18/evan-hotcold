import React from 'react';
import GuessSubmit from '../Components/GuessSubmit';
import Statbox from '../Components/Statbox';
import Hintbox from '../Components/Hintbox';
import '../Components/Gamebox.css';

function Gamebox (props) {
  return (
    <main>
      <section className='gamebox-container'>
        <Hintbox feedback={props.feedback}/>
        <div className='purple-body'>
          <GuessSubmit onSubmit={(e) => props.onSubmit(e)}/>
          <Statbox guessnumber={props.guessnumber}guessArray={props.guessArray} />
        </div>
      </section>
    </main>
  )
}

export default Gamebox;