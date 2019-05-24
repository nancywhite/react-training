import { createStore } from 'redux';
import questions from '../data/questions.js';
import rootReducer from '../reducers';

const defaultState = {
    questions,
    checkedValue: new Array(questions.length),
    grade: 0
};

const store = createStore(rootReducer, defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;