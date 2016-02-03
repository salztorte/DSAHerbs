"use strict";
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router';
import { Search, About, DevTools} from './containers/index';
import db from './database';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js'

injectTapEventPlugin();
const store = configureStore();


//db.init();
//db.getValues();

render(
    <Provider store={store}>
        <div>
            <Router history={hashHistory}>
                <Route path='/' component={Search}/>
                <Route path="/about" component={About}/>
            </Router>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('content'));

//render(
//    <Router history={hashHistory}>
//        <Route path='/' component={Search} />
//        <Route path="/about" component={About}/>
//    </Router>,
//    document.getElementById('content'));