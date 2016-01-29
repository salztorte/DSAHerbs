"use strict";
import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/reducer.js';


export default function configureStore(initialState){
    return createStore(rootReducer, initialState);
};