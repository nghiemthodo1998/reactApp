import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
    addCategory: (state, action) => {
      state.categories = [...state.categories, { name: action.payload }];
    },
  },
});

export const { getCategories, addCategory } = categorySlice.actions;
export default categorySlice.reducer;
