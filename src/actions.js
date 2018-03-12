export const SET_FEEDBACK = 'SET_FEEDBACK';
export const setFeedback = () => ({
    type:SET_FEEDBACK,
})

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = (guess) =>({
    type:ADD_GUESS,
    guess
})

export const RESET_GAME = 'RESET_GAME'
export const resetGame = () => ({
    type:RESET_GAME
})

export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const toggleModal = () => ({
    
})
