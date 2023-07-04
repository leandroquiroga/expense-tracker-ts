import { useState } from "react"

// Valores que almacena nuestro localStorage
type LocalStorageValue = string | null

//Iterfaces
interface LocalStorageHook {
  getItemLocalStorage: () => LocalStorageValue
  setItemLocalStorage: (value: LocalStorageValue) => void;
}

const useLocalStorage = (key: string): LocalStorageHook => {

  const [localStorageValue, setLocalStgorageValue] = useState<LocalStorageValue>(() => {

    //Itentamos obtener el valor del localStorage
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : null;
  });


  //Obtenemos el valor del localStorage
  const getItemLocalStorage = (): LocalStorageValue => localStorageValue;

  // Seteamos un valor en el localStorage
  const setItemLocalStorage = (value: LocalStorageValue): void => {

    // Actualizamos el estado.
    setLocalStgorageValue(value);
    value !== null ? localStorage.setItem(key, value) : localStorage.removeItem(key);
  };


  return {
    getItemLocalStorage,
    setItemLocalStorage
  };
};

export default useLocalStorage;