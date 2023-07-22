import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'checking', //Authenticated - not-authenticated - checking
    user: {},
    errorMessage: undefined,
};

export const authSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, {payload}) => {
        state.status = 'authenticated';
        state.user = payload;
        state.errorMessage = undefined;
    },
    onLogout: (state, action) => {
      state.status = 'not-authenticated';
      state.user = {};
      state.errorMessage = action.payload;
    },
    clearErrorMessage: (state) => { 
      state.errorMessage = undefined;
    }
  },
});

export const { 
    onChecking,
    onLogin,
    onLogout,
    clearErrorMessage
} = authSlice.actions;