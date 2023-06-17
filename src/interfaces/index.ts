import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from "react";
export interface GlobalContextProps {
  name: string;
  transactions: Transactions[];
  selectOthers: boolean;
  selectedValue: string;
  newTransaction: ({ description, mount, options }: Transactions) => void;
  handleToggle: (e: ChangeEvent<HTMLSelectElement>) => void;
  setSelectOthers: Dispatch<SetStateAction<boolean>>;
  setSelectedValue: Dispatch<SetStateAction<string>>;
}
export interface GlobalProps {
  children: JSX.Element | JSX.Element[]
}

export type GlobalActions =
  | { type: "setNameUser"; payload: string }
  | { type: "ADD_TRANSACTIONS"; payload: Transactions }
  
export interface GlobalState {
  name: string;
  transactions: Transactions[];
}

export interface InputProps {
  label: string;
  name: string;
  type: "text" | "number";
  placeholder?: string;
  styles?: string;
  steps?: string;
  errorTitle?: string;
  action?: (e: ChangeEvent<HTMLSelectElement>) => void;
  [x: string]: any;
}

export interface ButtonProps {
  children?: ReactElement | ReactElement[];
  value: string;
  type: "submit" | "reset" | "button";
  style?: string;
  action?: () => void;
}
export interface OptionProps {
  data: string[];
  name: string;
  styles?: string;
  label: string;
  [x: string]: any;
}

export interface Transactions {
  id?: string;
  description: string;
  mount: number;
  options: string;
}