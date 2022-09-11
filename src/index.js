import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader'

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import moviesListReducer from "./redux.js";

const store = configureStore({
  reducer: {
    moviesList: moviesListReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  , document.getElementById('root'))
registerServiceWorker()
applyPolyfills().then(() => {
    defineCustomElements(window)
})