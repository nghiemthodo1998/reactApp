import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    deteleProductCart: (state, action) => {
      const id = action.payload;
      const indexDelete = state.cart.findIndex((item) => item.id === id);
      const productDelete = state.cart[indexDelete];
      const result = state.cart.filter((item) => item !== productDelete);

      state.cart = [...result];
    },
    decreaseCount: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.map((product) => {
        if (product.id !== id) {
          return product;
        }
        return {
          ...product,
          count: product.count - 1,
        };
      });
    },
    increaseCount: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.map((product) => {
        if (product.id !== id) {
          return product;
        }
        return {
          ...product,
          count: product.count + 1,
        };
      });
    },
  },
});

export const { addToCart, deteleProductCart, decreaseCount, increaseCount } =
  productSlice.actions;
export default productSlice.reducer;
