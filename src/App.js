import React from 'react';
import './App.css';
import Header from './Components/Header';
import Gamebox from './Components/Gamebox';
import Modal from './Components/Modal';
import {connect} from 'react-redux';


export class App extends React.Component {
 


  resetGame () {
    this.setState ({
      feedback:'Make your Guess!',
      userguesses:[]
    }, () => {
      this.generateAnswer();
    })
    document.querySelector("input[name='numbersubmit']").value= '';
  }


  // toggleModal () {
  //   this.setState({
  //     displayModal:!this.state.displayModal
  //   })
  // }

  render() {    
    return (
      <div className='game-container'>
        {this.props.displayModal ? <Modal toggleModal={() => this.toggleModal()}/> : '' }
        <Header/>
        <Gamebox />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  displayModal:state.displayModal
})


// export default App;
export default connect(mapStateToProps)(App);
