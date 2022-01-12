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
      console.log(action.payload);
      state.products = [
        ...state.products,
        {
          name: action.payload.name,
          category: action.payload.category,
          rating: action.payload.rating,
          count: action.payload.count,
          price: action.payload.price,
        },
      ];
    },
    deleteProduct: (state, action) => {
      const id = action.payload;

      state.products = state.products.filter((product) => product.id !== id);
    },
  },
});

export const { getProducts, addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
