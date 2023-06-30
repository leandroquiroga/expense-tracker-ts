import { GlobalActions, GlobalState } from "../interfaces";

export const INITIAL_STATE: GlobalState = {
  name: localStorage.getItem("name")
    ? JSON.parse(localStorage.getItem("name") || "")
    : "",
  transactions: localStorage.getItem("transactions")
    ? JSON.parse(localStorage.getItem("transactions") || "")
    : [],
};

export const globalReducer = (state: GlobalState, action: GlobalActions): GlobalState => { 

  switch (action.type) {
    case "ADD_TRANSACTIONS":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    
    case "DELETE_TRANSACTIONS":
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    
    case "LOGIN": 
      return {
        ...state,
        name: localStorage.setItem("name", JSON.stringify(action.payload))!
      }
    default:
      return state;
  }
};