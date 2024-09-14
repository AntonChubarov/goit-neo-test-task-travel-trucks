import React, { createContext, useContext } from 'react';

const TruckContext = createContext();

export const useTruck = () => useContext(TruckContext);

export const TruckProvider = ({ truck, children }) => {
    return (
        <TruckContext.Provider value={truck}>
            {children}
        </TruckContext.Provider>
    );
};
