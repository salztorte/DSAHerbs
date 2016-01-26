"use strict";
import { createStore } from 'redux'
import reducer from '../reducer/reducers'

export default function configureStore(initialState){
    const store = createStore(reducer);

    return store;
};