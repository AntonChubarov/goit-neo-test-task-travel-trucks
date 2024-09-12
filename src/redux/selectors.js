import { createSelector } from '@reduxjs/toolkit';

export const selectVehicles = (state) => state.vehicles.list;

export const selectVehicleById = (id) =>
    createSelector([selectVehicles], (vehicles) =>
        vehicles.find((vehicle) => vehicle.id === id)
    );

export const selectFilters = (state) => state.filters;

export const selectFilterByKey = (key) =>
    createSelector([selectFilters], (filters) => filters[key]);

export const selectFavorites = (state) => state.favorites;

export const selectIsFavorite = (id) =>
    createSelector([selectFavorites], (favorites) => favorites.includes(id));
