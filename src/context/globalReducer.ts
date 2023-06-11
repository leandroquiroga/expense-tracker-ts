import { GlobalActions, GlobalState } from "../interfaces";

export const INITIAL_STATE: GlobalState = {
  name: '',
};

export const globalReducer = (_state: GlobalState, action: GlobalActions) => { 

  switch (action.type) {
    case 'setNameUser':
      return {
        name: action.payload
      }
  }
};