import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
};

const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        setVehicles: (state, action) => {
            state.list = action.payload;
        },
        appendVehicles: (state, action) => {
            state.list = [...state.list, ...action.payload];
        },
        clearVehicles: (state) => {
            state.list = [];
        },
    },
});

export const { setVehicles, appendVehicles, clearVehicles } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;
