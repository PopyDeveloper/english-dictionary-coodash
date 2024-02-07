import {configureStore} from '@reduxjs/toolkit';
import historyReducer from './features/history/historySlice';
import favoritesReducer from './features/favorites/favoritesSlice';

export const store = configureStore({
  reducer: {
    history: historyReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
