import {createSlice} from '@reduxjs/toolkit';

type User = {
  email: string;
  password: string;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {user: null as User | null},
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    signup: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
    },
  },
});

export const {login, signup, logout} = authSlice.actions;
export default authSlice.reducer;
