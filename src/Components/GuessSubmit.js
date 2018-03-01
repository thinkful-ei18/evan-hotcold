import React from 'react';
import '../Components/GuessSubmit.css'

function GuessSubmit(props) {
  return (
    <form onSubmit={(e) => props.onSubmit(e)}>
      <input name='numbersubmit' placeholder = 'Enter Your Guess'/>
      <br/>
      <button>Guess</button>
  </form>
  ) 
}

export default GuessSubmit;