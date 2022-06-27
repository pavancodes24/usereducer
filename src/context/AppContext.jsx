import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

const initState = {
  counter: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1
      };
    default: {
      return state;
    }
  }
};

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContextProvider };
