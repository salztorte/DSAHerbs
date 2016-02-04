import { SELECT_ACTION } from '../config/constans.jsx';

const INIT_STATE = {
    'select' : {
        'plant' : 'Nutzpflanze',
        'poison' : null,
        'means' : null
    }
};

export default function changeDropdown(state = INIT_STATE, action){
    let nextState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case SELECT_ACTION.CHANGE_DROPDOWN_PLANTS:
            nextState.select.plant = action.value;
            break;
        case SELECT_ACTION.CHANGE_DROPDOWN_POISON:
            nextState.select.poison = action.value;
            break;
        case SELECT_ACTION.CHANGE_DROPDOWN_MEANS:
            nextState.select.means = action.value;
            break;
    }
    return nextState;
}