import React from 'react';
import '../Components/Statbox.css';
import GuessButton from './GuessButton';

export default class Statbox extends React.Component {



  render() {
    const guessArray = this.props.guessArray;
    const buttons = guessArray.map((guessnum,index) => {
      return <GuessButton guessNumber={guessnum} key={index} />
    })
    return (
      <div className='statBox'>
        <div className='guess-stats-container'>
        <p className='guess-stats-text'>Guess#{this.props.guessnumber}</p>
        <div className='guess-stats-number'></div>
        </div>
        <div className='performance-stats'>
          <ul className='guess-button-container'>{buttons}</ul>
        </div>
      </div>
    )
  }
};
