import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listUser: [],
};

const userSlice = createSlice({
  name: 'list-user',
  initialState,
  reducers: {
    getListUser: (state, action) => {
      state.listUser = action.payload;
    },
  },
});

export const { getListUser } = userSlice.actions;
export default userSlice.reducer;
