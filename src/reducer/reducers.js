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

    console.log(JSON.stringify(nextState, null, 4));
    return nextState;
};


const reducer = combineReducers({changeDropdown});


export default reducer;