import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userLogin: {},
  listUser: [],
};

const userSlice = createSlice({
  name: 'list-user',
  initialState,
  reducers: {
    getInfoUser: (state, action) => {
      state.userLogin = action.payload;
    },
    getListUser: (state, action) => {
      state.listUser = action.payload;
    },
    addToCart: (state, action) => {
      state.userLogin.cart = [...state.userLogin.cart, action.payload];
    },
    deteleProductCart: (state, action) => {
      const id = action.payload;
      const indexDelete = state.userLogin.cart.findIndex(
        (item) => item.id === id
      );
      const productDelete = state.userLogin.cart[indexDelete];
      const result = state.userLogin.cart.filter(
        (item) => item !== productDelete
      );

      state.userLogin.cart = [...result];
    },
    decreaseCount: (state, action) => {
      const id = action.payload;
      state.userLogin.cart = state.userLogin.cart.map((product) => {
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
      state.userLogin.cart = state.userLogin.cart.map((product) => {
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

export const {
  getInfoUser,
  getListUser,
  addToCart,
  deteleProductCart,
  decreaseCount,
  increaseCount,
} = userSlice.actions;
export default userSlice.reducer;
