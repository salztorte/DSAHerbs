import { combineReducers } from 'redux';
import changeDropdown from './searchReducer.js';
import { routeReducer } from 'react-router-redux';

const rootReducer = combineReducers(Object.assign(
    {},
    {changeDropdown},
    {routing: routeReducer}
));

export default rootReducer;