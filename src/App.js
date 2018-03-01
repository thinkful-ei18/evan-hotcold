import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Gamebox from './Components/Gamebox';


class App extends Component {
  render() {
    return (
      <div className='game-container'>
        <Header/>
        <Gamebox/>
      </div>
    );
  }
}

export default App;
