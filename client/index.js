import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './app';

// Webpack will take this css file and include it in the build
// style-related loaders were defined in webpack.config.js
import '../public/style.css'

// Provider is needed to wrap the rest of the application and give access to Redux Store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);