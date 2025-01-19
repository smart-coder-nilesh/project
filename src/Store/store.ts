import { configureStore } from '@reduxjs/toolkit';
import changeDarkMode from '../Action/Action';

export const store = configureStore({
  reducer: {
    toggleDarkmode: changeDarkMode,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
