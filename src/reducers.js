import { ADD_WORD } from './actions.js';
import { combineReducers } from 'redux';

const defaultWords = {words:[]};

const wordReducer = (words = defaultWords, action) => {
    switch(action.type) {
        case ADD_WORD:
        return words.concat(action.payload);
    default:
        return words;
    }
}

const reducer = combineReducers({
    words: wordReducer,
})

export default reducer;