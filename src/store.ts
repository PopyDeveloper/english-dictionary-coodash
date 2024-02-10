import {configureStore} from '@reduxjs/toolkit';
import historyReducer from './features/history/historySlice';
import favoritesReducer from './features/favorites/favoritesSlice';
import authReducer from './features/auth/authSlice';
import detailReducer from './features/detail/detailSlice';

export const store = configureStore({
  reducer: {
    history: historyReducer,
    favorites: favoritesReducer,
    auth: authReducer,
    detail: detailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof store.dispatch>;
