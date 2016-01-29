"use strict";
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import rootReducer from '../reducers/reducer.js';
import { DevTools } from "../containers/index.js";

const logger = function({ getState }){
    return (next) => (action) => {
        console.log('will dispatch', action.typ)
        let returnValue = next(action)
        console.log('state after dispatch', JSON.stringify(getState(), null, 4))
        return returnValue
    };
};





const finalCreateStore = compose(
    applyMiddleware(logger),
    DevTools.instrument()
)(createStore);

export default function configureStore(initialState){

    const store = finalCreateStore(rootReducer);

    return store;
};