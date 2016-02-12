import { combineReducers } from 'redux';
import changeDropdown from './selectReducer';
import { routeReducer } from 'react-router-redux';

const rootReducer = combineReducers(Object.assign(
    {},
    {changeDropdown},
    {routing: routeReducer}
));

export default rootReducer;