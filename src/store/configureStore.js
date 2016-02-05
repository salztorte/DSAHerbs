import { applyMiddleware, compose, createStore } from 'redux';
import { hashHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';

import rootReducer from '../reducers/reducer.js';
//import DevTools from '../containers/DevTools.jsx';


const reduxRouterMiddleware = syncHistory(hashHistory);

const finalCreateStore = compose(
    applyMiddleware(reduxRouterMiddleware)
    //DevTools.instrument()
)(createStore);

export default function configureStore(initialState){

    const store = finalCreateStore(rootReducer, initialState);
    reduxRouterMiddleware.listenForReplays(store);
    return store;
};