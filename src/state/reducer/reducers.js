"use strict";
import { combineReducers } from 'redux'
import { types } from '../actions/searchAction'

let initState = {
    "plant" : null,
    "poison" : null,
    "means" : null,
    "others" : null
};

let changeDropdown = function(state = initState, action){
    let nextState = initState;
    newState[action.id] = action.value;
    return [...state, newState];
};


const App = combineReducers({
                                changeDropdown
                            });


export default App