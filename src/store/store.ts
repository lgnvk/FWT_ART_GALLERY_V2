import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../features/main/main-slice';
import themeReducer from '../features/theme/theme-slice';

export const store = configureStore({
  reducer: {
    main: mainReducer,
    theme: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
