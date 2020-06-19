import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducer from './components/reducers/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);
const wrapper = document.getElementById('container');
wrapper ? 
ReactDOM.render(
<Provider store = {store}><App /></Provider>, 
wrapper) : false;