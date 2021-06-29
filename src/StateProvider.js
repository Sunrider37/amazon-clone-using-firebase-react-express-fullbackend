import React, {createContex, useContext, useReducer } from 'react';

//prepares the datalAyer
export const StateContext = React.createContext();

// Wrap our app and provide the Data Layer to all our app
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext)