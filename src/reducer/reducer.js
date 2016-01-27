'use strict';
import { combineReducers } from 'redux';
import { INIT_STATE } from '../config/constans.jsx';
import {CHANGE_DROPDOWN_PLANTS, CHANGE_DROPDOWN_POISON, CHANGE_DROPDOWN_MEANS} from '../actions/search.js';
//import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from '../constant/counter';

export default function changeDropdown(state, action){
	let nextState = INIT_STATE;

	switch(action.type){
		case CHANGE_DROPDOWN_PLANTS:
			return state + 1;
	//	case DECREMENT_COUNTER:
	//		return state - 1;
	//	case RESET_COUNTER:
	//		return 0;
	//	default:
	//		return state;
	//
	}
};

const rootReducer = combineReducers({
										counter
									});