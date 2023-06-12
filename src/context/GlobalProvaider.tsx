import { GlobalContext } from "./GlobalContext"
import { GlobalProps } from "../interfaces";
import { useReducer } from "react";
import { globalReducer } from ".";
import { INITIAL_STATE } from "./globalReducer";

export const GlobalProvaider = ({ children }: GlobalProps): JSX.Element => {
  const [ state ] = useReducer(globalReducer, INITIAL_STATE);
  
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        name: state.name
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
