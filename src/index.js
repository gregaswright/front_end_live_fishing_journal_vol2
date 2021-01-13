import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootReducer = (currentState, action) => {return {user: ["trees"]}}
const store = createStore(rootReducer)
// const state = store.getState()

ReactDOM.render(
  <Provider store={store}> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
