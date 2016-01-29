"use strict";
import { SEARCH_ACTION, INIT_STATE} from '../config/constans.jsx';


export default function changeDropdown (state = INIT_STATE, action){
    //let nextState = Object.assign( {}, state);
    let nextState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case SEARCH_ACTION.CHANGE_DROPDOWN_PLANTS:
            nextState.select.plant = action.value;
            break;
        case SEARCH_ACTION.CHANGE_DROPDOWN_POISON:
            nextState.select.poison = action.value;
            break;
        case SEARCH_ACTION.CHANGE_DROPDOWN_MEANS:
            nextState.select.means = action.value;
            break;
    }

    return nextState;
};