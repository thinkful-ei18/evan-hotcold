import React from 'react';
import './Modal.css'

export default function Modal (props) {
    return (
        <div className='modal'>
            <h1> What is this?</h1>
            <p> This is a Hot or Cold number guessing game. Do a good job. K thx bye</p>
            <button onClick={() => props.toggleModal()} className='remove-modal-button'>Got it! </button>
        </div>
    )
}