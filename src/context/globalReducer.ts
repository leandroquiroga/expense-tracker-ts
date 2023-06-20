import { GlobalActions, GlobalState } from "../interfaces";

export const INITIAL_STATE: GlobalState = {
  name: "Leandro", // Con el nombre realizar lo mismo, ya que va consumir el nombre del login que se guardara en localStorage ya que no hay bases de datos
  transactions: localStorage.getItem("transactions") ? JSON.parse(localStorage.getItem("transactions") || "") : [],
};

export const globalReducer = (state: GlobalState, action: GlobalActions): GlobalState => { 

  switch (action.type) {
    case "setNameUser":
      return {
        ...state,
        name: action.payload,
      };
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
    default:
      return state;
  }
};