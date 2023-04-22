import { createContext, useReducer } from "react";

const initialState = {
    articles: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_ARTICLES":
            return {
                ...state,
                articles: action.payload,
            };
        default:
            return state;
    }
};

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};