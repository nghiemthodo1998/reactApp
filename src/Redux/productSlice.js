import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { getProduct, addProduct } = productSlice.actions;
export default productSlice.reducer;
