import React, {createContext, useContext, useReducer, useRedux} from 'react';

// Prepare the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value = { useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

// Pull informa from the data layer
export const useStateValue = () => useContext(StateContext);