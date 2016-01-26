"use strict";
import { createStore } from 'redux'
import App from '../reducer/reducers'

let store = createStore(App);