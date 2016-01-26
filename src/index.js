"use strict";
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router';
import Search from './components/search.jsx';
import About from './components/about.jsx';
import {db} from './database.jsx';
import { Provider } from 'react-redux';
import App from './state/containers/App.js';
import configureStore from './state/store/configureStore.js'

const store = configureStore()
injectTapEventPlugin();
db.init();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content'));
//render(
//    <Router history={hashHistory}>
//        <Route path='/' component={Search} />
//        <Route path="/about" component={About}/>
//    </Router>,
//    document.getElementById('content'));