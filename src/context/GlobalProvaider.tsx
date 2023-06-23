import { ChangeEvent, useEffect, useReducer, useState } from "react";
import { v4 as uuidv4} from 'uuid'

import { GlobalContext } from "./GlobalContext"
import { GlobalProps, SerialData } from "../interfaces";
import { INITIAL_STATE, globalReducer } from "./globalReducer";
import { Transactions } from '../interfaces/index';

let data: Transactions;

const GlobalProvaider = ({ children }: GlobalProps): JSX.Element => {
  const [state, dispatch] = useReducer(globalReducer, INITIAL_STATE);

  const [selectOthers, setSelectOthers] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [categories, setCategories] = useState<string[]>([]);
  const [arrSerialData, setArrSerialData] = useState<SerialData[] | undefined>();



  // Seteamos el localStorge
  useEffect(() => {
    // Mapea el arreglo de transacciones y calcula el valor total de todos los montos disponibles
    setTotalAmount(
      state.transactions
        .map((transaction) => transaction.mount)
        .reduce((prev, act) => prev + act, 0)
    );
    // Mapea el arreglo de las transacciones y se queda con un arreglo de todas las categorias disponibles
    setCategories(state.transactions.map((transaction) => transaction.options));
    localStorage.setItem("transactions", JSON.stringify(state.transactions));

    setArrSerialData(createSerialData());
  }, [state.transactions]);


  // TODO: Moficar el codigo
  
  const createSerialData = () => {
    const serialDataMap = new Map<string, number>();

    // Recorre el arreglo de transacciones 
    for (const data of state.transactions) {
      const { mount, options } = data;
      
      //TODO: Controlar si serialData es undefined
      // Verificamos si la option se repite
      if (serialDataMap.has(options)) { 
        const totalAmaout = serialDataMap.get(options)! + mount;
        serialDataMap.set(options, totalAmaout);
      } else {
        serialDataMap.set(options, mount);
      }

    }
    const serialData  = Array.from(serialDataMap, ([name, value]) => ({
      name,
      value,
    }));
    

    return serialData;
  }



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
        totalAmount,
        categories,
        arrSerialData,
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