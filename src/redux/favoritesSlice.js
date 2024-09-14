import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            console.log('adding to favorites');
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload);
            }
        },
        removeFavorite: (state, action) => {
            console.log('removing from favorites');
            state.favorites = state.favorites.filter((id) => id !== action.payload);
        },
        clearFavorites: () => initialState,
    },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
