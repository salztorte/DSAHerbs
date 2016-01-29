"use strict";
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import rootReducer from '../reducers/reducer.js';
import { DevTools } from "../containers/index.js";

const finalCreateStore = compose(
    applyMiddleware(),
    DevTools.instrument()
)(createStore);

export default function configureStore(initialState){

    const store = finalCreateStore(rootReducer);

    return store;
};