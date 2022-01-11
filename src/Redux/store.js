import { configureStore, createReducer } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';

const reducer = {
  product: productReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: reducer,
});

export default store;
