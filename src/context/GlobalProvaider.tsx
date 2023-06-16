import { ChangeEvent, useEffect, useReducer, useState } from "react";
import { v4 as uuidv4} from 'uuid'

import { GlobalContext } from "./GlobalContext"
import { GlobalProps } from "../interfaces";
import { INITIAL_STATE, globalReducer } from "./globalReducer";
import { Transactions } from '../interfaces/index';

let data: Transactions;

const GlobalProvaider = ({ children }: GlobalProps): JSX.Element => {
  const [state, dispatch] = useReducer(globalReducer, INITIAL_STATE);
  const [selectOthers, setSelectOthers] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("");

  // Seteamos el localStorge
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  // Cambia el estado del selectOthers
  const handleToggle = (e: ChangeEvent<HTMLSelectElement>) => {
    e.target.value === "Otros" ? setSelectOthers(true) : setSelectOthers(false);
    setSelectedValue(e.target.value);
  };

  // Crea una nueva transaccion
  const newTransaction = ({ description, mount }: Transactions) => {
    data = {
      id: uuidv4(),
      description,
      mount,
      options: selectedValue,
    };

    dispatch({ type: "ADD_TRANSACTIONS", payload: data });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        name: state.name,
        selectOthers,
        selectedValue,
        setSelectedValue,
        handleToggle,
        newTransaction,
        setSelectOthers,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvaider;