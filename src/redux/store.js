import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import vehiclesReducer from './vehiclesSlice';
import filtersReducer from './filtersSlice';
import favoritesReducer from './favoritesSlice';

const persistConfig = {
    key: 'favorites',
    storage,
    whitelist: ['favorites'],
};

const rootReducer = combineReducers({
    vehicles: vehiclesReducer,
    filters: filtersReducer,
    favorites: persistReducer(persistConfig, favoritesReducer),
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [PERSIST],
            },
        }),
});

export const persistor = persistStore(store);
export default store;
