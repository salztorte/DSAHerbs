import { combineReducers } from 'redux';
import changeDropdown from './searchReducer.js';
import { routeReducer } from 'react-router-redux';


//let nextState = JSON.parse(JSON.stringify(state));
//const rootReducer = combineReducers(
//    {changeDropdown},
//    {routing: routeReducer}
//);

const rootReducer = combineReducers(Object.assign(
    {},
    {changeDropdown},
    {routing: routeReducer}
));

export default rootReducer;