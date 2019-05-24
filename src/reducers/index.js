import { combineReducers } from 'redux';

import questions from './questions.js';
import checkedValue from './checkedValue.js';
import grade from './grade.js';

const rootReducer = combineReducers({questions: questions, checkedValue, grade});

export default rootReducer;
