//React
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './containers/App.jsx';
import configureStore from './store/configureStore.js';

let store = configureStore();

render(<Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('content')
);
