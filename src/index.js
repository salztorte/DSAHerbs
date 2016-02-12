//React
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Redux / Router
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import configureStore from './store/configureStore.js';

//Components
import About from './containers/About.jsx';
import Search from './containers/Search.jsx';
import SearchResults from './containers/SearchResults.jsx';
import db from './database';

injectTapEventPlugin();
const store = configureStore();

db.init();

render(
    <Provider store={store}>
        <div>
            <Router history={hashHistory}>
                <Route path='/' component={Search}/>
                <Route path="/about" component={About}/>
                <Route path="/result" component={SearchResults}/>
            </Router>
        </div>
    </Provider>,
    document.getElementById('content')
);
