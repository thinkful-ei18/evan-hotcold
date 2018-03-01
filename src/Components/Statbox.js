import React from 'react';
import '../Components/Statbox.css';

export default class Statbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses:0,
      greeting: 'Wow you\'re AWFUL!!!'
    };
  }

  sayHi = () => {
    this.setState({
      guesses: this.state.guesses + 1
    });
  };

  

  render() {
    return (
      <div className='statBox'>
        <div className='guess-stats-container'>
        <p onClick = {this.sayHi} className='guess-stats-text'>Guess #</p>
        <div className='guess-stats-number'>{this.state.guesses}</div>
        </div>
        <div className='performance-stats'>
          {this.state.guesses >= 10 ? this.state.greeting : ''}
          <ul></ul>
        </div>
      </div>
    )
  }
};
