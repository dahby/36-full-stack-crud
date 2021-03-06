import React from 'react';
import { render as renderDom } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';
import reducers from './reducer/index';
import thunk from './lib/redux-thunk';
import reporter from './lib/redux-reporter';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, reporter)));

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

renderDom(<Provider store = { store }><App/></Provider>, appContainer);
