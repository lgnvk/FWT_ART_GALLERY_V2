import { createSlice } from '@reduxjs/toolkit';

const getTheme = () => {
  const theme = `${window.localStorage.getItem('theme')}`;
  if (theme === 'dark' || theme === 'light') {
    return theme;
  }
  return 'dark';
};

const initialState = getTheme();

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    set: (state, action) => action.payload,
  },
});

export default themeSlice.reducer;

export const { set } = themeSlice.actions;
