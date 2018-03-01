import React from 'react';
import './GuessButton.css';

export default function GuessButton (props) {
    return (
        <li class='guess-button'>{props.guessNumber}</li>
    ) 
}