import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

//Components
import About from './About.jsx';
import Search from './Search.jsx';
import SearchResults from './SearchResults.jsx';

let App = () =>(
        <Router history={hashHistory}>
            <Route path='/' component={Search}/>
            <Route path="/about" component={About}/>
            <Route path="/result" component={SearchResults}/>
        </Router>
);


export default App;
