import React from 'react';
import '../Components/GuessSubmit.css'
import {connect} from 'react-redux';
import {setFeedback, addGuess} from '../actions';

export class GuessSubmit extends React.Component{

  render() {
  console.log(this.props);
    
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        const value = e.target.numbersubmit.value;
        this.props.dispatch(addGuess(value))
        this.props.dispatch(setFeedback())}
        }>
        <input name='numbersubmit' placeholder='Enter Your Guess'/>
        <br/>
        <button>Guess</button>
      </form>
    )
  }
}

// export default GuessSubmit;
const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps)(GuessSubmit);