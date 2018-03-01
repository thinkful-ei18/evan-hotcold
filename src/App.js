import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Gamebox from './Components/Gamebox';
import Modal from './Components/Modal';


class App extends Component {
 
  constructor(props) {
    super(props);
    
    this.state = {
      userguesses: [],
      feedback: 'Make your Guess!',
      displayModal:false
    }
  }


  feedback () {
    let distanceFromAnswer = Math.abs(this.state.answer - this.state.userguesses[this.state.userguesses.length-1]);
    console.log('answer', this.state.answer, 'guess: ', this.state.userguesses[this.state.userguesses.length-1])
    console.log(distanceFromAnswer);
    if (distanceFromAnswer === 0) {
      return this.setState({
        feedback:'YOU WIN!!!',
      })
    }
    if (distanceFromAnswer <= 10) {
      return this.setState({
        feedback:'hot!'
      })
    } else if (distanceFromAnswer >=10 && distanceFromAnswer <= 50) {
      return this.setState({
        feedback:'lukewarm'
      })
    } else if (distanceFromAnswer > 50 && distanceFromAnswer <= 100) {
      return this.setState({
        feedback:'cold'
      })
    } else {
      return this.setState({
        feedback:'freezing'
      })
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

  addAnswerToState (e) {
    e.preventDefault();
    if ( isNaN(Number(e.target.numbersubmit.value))) {
      e.target.numbersubmit.value = '';
      return this.setState({
        feedback:"Must Enter a Number"
      })
    }

    let answer = Number(e.target.numbersubmit.value);
    if (this.state.userguesses.find(guess => {
      return guess === this.state.answer;
    })) {
      return alert('Press New Game to start Over!');
    }
    if (this.state.userguesses.indexOf(answer) > -1) {
      e.target.numbersubmit.value = '';
      return this.setState({
        feedback:'You already guessed this number'
    });
  }

    if (answer && typeof answer === 'number') {
    this.setState({
      userguesses:[...this.state.userguesses, answer]
    }, () => {
    this.feedback()
    })
  }
  e.target.numbersubmit.value = '';

  }


  resetGame () {
    this.setState ({
      feedback:'Make your Guess!',
      userguesses:[]
    }, () => {
      this.generateAnswer();
    })
    document.querySelector("input[name='numbersubmit']").value= '';
  }


  toggleModal () {
    this.setState({
      displayModal:!this.state.displayModal
    })
  }

  render() {    
    return (
      <div className='game-container'>
        {this.state.displayModal ? <Modal toggleModal={() => this.toggleModal()}/> : '' }
        <Header toggleModal={() => this.toggleModal()} resetGame={() => this.resetGame()}/>
        <Gamebox feedback={this.state.feedback} guessnumber={(this.state.userguesses.length +1)} onSubmit={(e) => this.addAnswerToState(e)} guessArray={this.state.userguesses} />
      </div>
    );
  }
}

export default App;
