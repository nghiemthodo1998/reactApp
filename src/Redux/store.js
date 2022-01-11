import { configureStore, createReducer } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import categoryReducer from './categorySlice';

const reducer = {
  product: productReducer,
  cart: cartReducer,
  category: categoryReducer,
};

const store = configureStore({
  reducer: reducer,
});

export default store;
