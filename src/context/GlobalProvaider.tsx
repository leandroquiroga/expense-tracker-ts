import { GlobalProps } from "../interfaces";
import { GlobalContext } from "./GlobalContext"

export const GlobalProvaider = ({ children }: GlobalProps): JSX.Element => {
  return (
    <GlobalContext.Provider
      value={{ 
        name: 'Leandro'
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};
