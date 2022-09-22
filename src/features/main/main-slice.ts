import { createSlice } from '@reduxjs/toolkit';
import data from '../../data/cardsMock';
import type { AuthorsGridType } from '../../types/types';

const initialState: AuthorsGridType = {
  cards: data,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
});

export default mainSlice.reducer;
