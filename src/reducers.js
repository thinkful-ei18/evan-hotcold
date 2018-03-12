import {SET_FEEDBACK, ADD_GUESS, RESET_GAME, TOGGLE_MODAL} from './actions';


const initialState = {
    userguesses:[],
    feedback: 'Make your Guess',
    displayModal:false,
    answer: Math.floor(Math.random()*100)
}


export default (state = initialState, action) => {
    const { answer, userguesses } = state;
    if (action.type === SET_FEEDBACK) {
        let distanceFromAnswer = Math.abs(answer - userguesses[userguesses.length-1]);
        if (distanceFromAnswer === 0) {
            return Object.assign({}, state, {feedback:'YOU WIN!!!'});
          }
          if (distanceFromAnswer <= 10) {
            return Object.assign({}, state, {feedback:'hot'});

          } else if (distanceFromAnswer >=10 && distanceFromAnswer <= 50) {
            return Object.assign({}, state, {feedback:'lukewarm'});

        } else if (distanceFromAnswer > 50 && distanceFromAnswer <= 100) {
            return Object.assign({}, state, {feedback:'cold'});

          } else {
            return Object.assign({}, state, {feedback:'freezing'});
          }
    }
    

    if (action.type === ADD_GUESS) {

        return Object.assign({}, state, {userguesses: [...state.userguesses, action.guess]});
    }

    if (action.type === RESET_GAME) {
        return initialState;
    }

    if (action.type === TOGGLE_MODAL) {
        return Object.assign({}, state, {displayModal: !state.displayModal});
    }
    return state;
}