import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  searchTerm: '',
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
          id: action.payload.id,
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
    editProduct: (state, action) => {
      const id = action.payload.id;
      const indexProduct = state.products.findIndex((item) => item.id === +id);
      state.products.splice(indexProduct, 1, action.payload);
    },
    getSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
  getSearchTerm,
} = productSlice.actions;
export default productSlice.reducer;
