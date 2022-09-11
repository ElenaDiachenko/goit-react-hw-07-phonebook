import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (_, action) => action.payload.toLowerCase().trim(),
  },
});

export const getFilter = state => state.filter;

export const { changeFilter } = filterSlice.actions;
