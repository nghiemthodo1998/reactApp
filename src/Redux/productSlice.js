import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { getProducts, addProduct } = productSlice.actions;
export default productSlice.reducer;
