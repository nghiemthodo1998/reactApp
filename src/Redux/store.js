import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import categoryReducer from './categorySlice';
import userReducer from './userSlice';

const reducer = {
  product: productReducer,
  cart: cartReducer,
  category: categoryReducer,
  users: userReducer,
};

const store = configureStore({
  reducer: reducer,
});

export default store;
