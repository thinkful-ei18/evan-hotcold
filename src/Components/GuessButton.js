import React from 'react';
import './GuessButton.css';

export default function GuessButton (props) {
    return (
        <li className='guess-button'>{props.guessednumber}</li>
    ) 
}