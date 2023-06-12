import { GlobalActions, GlobalState } from "../interfaces";

export const INITIAL_STATE: GlobalState = {
  name: 'Leandro',
  transactions: []
};

export const globalReducer = (state: GlobalState, action: GlobalActions): GlobalState => { 

  switch (action.type) {
    case 'setNameUser':
      return {
        ...state,
        name: action.payload
      }
    case 'ADD_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload
      }
    default: 
      return state
  }
};