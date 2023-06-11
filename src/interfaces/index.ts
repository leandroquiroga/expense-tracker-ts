
export interface GlobalContextProps {
  name: string
}

export interface GlobalProps {
  children: JSX.Element | JSX.Element[]
}

export type GlobalActions =
  | { type: 'setNameUser', payload: string };
  
export interface GlobalState {
  name: string
}