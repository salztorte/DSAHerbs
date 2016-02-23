import { SELECT_ACTION } from '../config/constans';

const INIT_STATE = {
    'plant' : null,
    'poison' : null,
    'means' : null
};

export default function changeDropdown(state = INIT_STATE, action){
    let nextState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case SELECT_ACTION.CHANGE_DROPDOWN_PLANTS:
            nextState.plant = action.value;
            break;
        case SELECT_ACTION.CHANGE_DROPDOWN_POISON:
            nextState.poison = action.value;
            break;
        case SELECT_ACTION.CHANGE_DROPDOWN_MEANS:
            nextState.means = action.value;
            break;
    }
    return nextState;
}