import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    type: '',
    autoTransmission: false,
    kitchen: false,
    AC: false,
    TV: false,
    bathroom: false,
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state[action.payload.key] = action.payload.value;
        },
        clearFilters: (state) => {
            state = initialState;
        },
    },
});

export const { setFilter, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
