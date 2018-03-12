import React from 'react';
import '../Components/Hintbox.css';
import { connect } from 'react-redux';

function Hintbox (props) {
  return (
    <h2>{props.feedback}</h2>
  )
}

const mapStateToProps= (state) => ({
  feedback: state.feedback
})

// export default Hintbox;
export default connect(mapStateToProps)(Hintbox);
