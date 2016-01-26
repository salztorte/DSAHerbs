"use strict";
import { combineReducers } from 'redux'
import { types } from '../actions/searchAction'

let initState = {
    "Pflanzenauswahl" : null,
    "Giftauswahl" : null,
    "Mittelauswahl" : null,
    "Andere" : null
};

let changeDropdown = function(state = initState, action){
    let nextState = initState;
    nextState[action.id] = action.value;

    return [...state, nextState];
};


const reducer = combineReducers({changeDropdown});


export default reducer;