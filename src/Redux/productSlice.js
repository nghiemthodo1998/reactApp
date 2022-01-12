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
    deleteProduct: (state, action) => {
      const id = action.payload;

      state.products = state.products.filter((product) => product.id !== id);
    },
  },
});

export const { getProducts, addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
