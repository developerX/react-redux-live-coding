import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * Included necessary libraries for redux
 */
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Created a base reducer
import reducer from './reducer';
import './index.css';

// created initial store
const store = createStore(reducer);

ReactDOM.render(
  //implemented the provider for redux to function properly
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
