import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Gamebox from './Components/Gamebox';



class App extends Component {
 
  constructor(props) {
    super(props);
    
    this.state = {
      userguesses: [],
      feedback: 'Make your Guess!'
    }
  }


  componentDidMount () {
    this.generateAnswer();
  }

  generateAnswer () { 
    this.setState({
      answer: Math.floor(Math.random()*100)
    }) 
  }

  compareInputWithAnswer () {
    let distanceFromAnswer = Math.abs( - this.state.userguesses[this.state.userguesses.length-1]);
    return distanceFromAnswer;
  }


  addAnswerToState (e) {
    e.preventDefault();

    let answer = Number(e.target.numbersubmit.value);
    if (this.state.userguesses.indexOf(answer) > -1) {
      e.target.numbersubmit.value = '';
      return alert('You already guessed this number');
    }

    if (answer && typeof answer === 'number') {
    this.setState({
      userguesses:[...this.state.userguesses, Number(answer)]
    })
  }
  e.target.numbersubmit.value = '';
  }

  render() {    
    return (
      <div className='game-container'>
        <Header/>
        <Gamebox feedback={this.state.feedback} onSubmit={(e) => this.addAnswerToState(e)} guessArray={this.state.userguesses} />
      </div>
    );
  }
}

export default App;
