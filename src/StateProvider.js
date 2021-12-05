import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext()

// Build a provider - this gives access to the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        { children }
    </StateContext.Provider>
)

// This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext)