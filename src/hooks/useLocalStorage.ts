import { useState } from "react"
import { LocalStorageHook, LocalStorageValue } from "../interfaces";

const useLocalStorage = (key?: string): LocalStorageHook => {
  const [localStorageValue, setLocalStgorageValue] = useState<LocalStorageValue>(() => {
      // Verificamos si existe la key
      if (!key) return null;

      //Itentamos obtener el valor del localStorage
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? storedValue : null;
    });

  //Obtenemos el valor del localStorage
  const getItemLocalStorage = (): LocalStorageValue => localStorageValue;

  // Seteamos un valor en el localStorage
  const setItemLocalStorage = ( transaction: string, value: LocalStorageValue): void => {
    // Actualizamos el estado.
    setLocalStgorageValue(value);
    value !== null
      ? localStorage.setItem(transaction, value)
      : localStorage.removeItem(transaction);
  };

  return {
    getItemLocalStorage,
    setItemLocalStorage,
  };
};

export default useLocalStorage;