import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { configureStore, createReducer } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import productsReducer from './components/productsSlice.js';
import cartReducer, { getTotals} from './components/cartSlice.js';


const store = configureStore({
  reducer:{
    products: productsReducer,
    cart: cartReducer,
  }
});

store.dispatch(getTotals());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
