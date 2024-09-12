import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            if (!state.includes(action.payload)) {
                state.push(action.payload);
            }
        },
        removeFavorite: (state, action) => {
            return state.filter((id) => id !== action.payload);
        },
        clearFavorites: () => initialState,
    },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
