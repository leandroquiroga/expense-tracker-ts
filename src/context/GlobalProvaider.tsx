import { ChangeEvent, useEffect, useReducer, useState } from "react";
import { v4 as uuidv4} from 'uuid'

import { GlobalContext } from "./GlobalContext"
import { GlobalProps } from "../interfaces";
import { INITIAL_STATE, globalReducer } from "./globalReducer";
import { Transactions } from '../interfaces/index';
import { useTimeAgo } from "../hooks/useTimeAgo";

let data: Transactions;

const GlobalProvaider = ({ children }: GlobalProps): JSX.Element => {
  const [state, dispatch] = useReducer(globalReducer, INITIAL_STATE);
  const { dateTime, timeago } = useTimeAgo(Date.now());
  const [selectOthers, setSelectOthers] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [timeAgoUpdate, setTimeAgoUpdate] = useState<string>("")

  
  // Seteamos el localStorge
  useEffect(() => {
    // Mapea el arreglo de transacciones y calcula el valor total de todos los montos disponibles
    setTotalAmount(
      state.transactions
        .map((transaction) => transaction.mount)
        .reduce((prev, act) => prev + act)
    );
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
    //TODO: Modificar cuando se debe actualizar
    setTimeAgoUpdate(timeago);
  }, [state.transactions, timeago]);

  // Cambia el estado del selectOthers
  const handleToggle = (e: ChangeEvent<HTMLSelectElement>) => {
    e.target.value === "Otros" ? setSelectOthers(true) : setSelectOthers(false);
    setSelectedValue(e.target.value);
  };

  // Elimina un ITEM del localStorege
  const handleDeleteTransaction = (id: string) => {
    dispatch({ type: "DELETE_TRANSACTIONS", payload: id });
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
        dateTime,
        timeago,
        totalAmount,
        timeAgoUpdate,
        setSelectedValue,
        handleToggle,
        newTransaction,
        setSelectOthers,
        handleDeleteTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvaider;