import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import reducer, {initialState}  from "./app/reducer";
import {StateProvider} from "./StateProvider";
import { Provider } from 'react-redux';
import store from "./app/store"
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

    <StateProvider initialState={initialState} reducer={reducer} children={App} >
    <App />
    </StateProvider>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
