import React from 'react';
import '../Components/GuessSubmit.css'

function GuessSubmit(props) {
  return (
    <form>
      <input placeholder = 'Enter Your Guess'/>
      <br/>
      <button>Guess</button>
  </form>
  ) 
}

export default GuessSubmit;