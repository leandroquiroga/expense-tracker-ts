import { useContext } from "react";
import { GlobalContext } from "../context";

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  return context;
};

// Se comporta al igual que un useState que retorna el contexto.