import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// import the reducers
import reducers from './reducers';

// Minimum needed to start redux
// below line creates a store
const createStoreWithMiddleware = applyMiddleware()(createStore)


// Need to wrap application in provider
// Provider component needs to be supplied a store
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
, document.getElementById('root'));

