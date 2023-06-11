import { createContext } from "react";
import { GlobalContextProps } from "../interfaces";

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps);