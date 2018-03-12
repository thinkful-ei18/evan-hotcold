import React from 'react';
import '../Components/Statbox.css';
import GuessButton from './GuessButton';
import {connect} from 'react-redux';

export class Statbox extends React.Component {

  render() {
    const guessArray = this.props.userguesses;
    const buttons = guessArray.map((guessednum,index) => {
      return <GuessButton guessednumber={guessednum} key={index} />
    })
    return (
      <div className='statBox'>
        <div className='guess-stats-container'>
        <p className='guess-stats-text'>Guess#</p>
        <div className='guess-stats-number'>{this.props.guessnumber}</div>
        </div>
        <div className='performance-stats'>
          <ul className='guess-button-container'>{buttons}</ul>
        </div>
      </div>
    )
  }
};



const mapStateToProps = state => {
  return {
  userguesses:state.userguesses,
  guessnumber:state.userguesses[state.userguesses.length -1]
  }
}

export default connect(mapStateToProps)(Statbox);