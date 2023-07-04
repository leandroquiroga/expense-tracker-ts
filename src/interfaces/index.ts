import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from "react";
export interface GlobalContextProps {
  transactions: Transactions[];
  selectOthers: boolean;
  selectedValue: string;
  totalAmount: number;
  categories: string[];
  arrSerialData: SerialData[] | undefined;
  newTransaction: ({ description, mount, options }: Transactions) => void;
  handleToggle: (e: ChangeEvent<HTMLSelectElement>) => void;
  setSelectOthers: Dispatch<SetStateAction<boolean>>;
  setSelectedValue: Dispatch<SetStateAction<string>>;
  handleDeleteTransaction: (id: string) => void;
  isAuthenticated: () => boolean;
  signUp: (name: string) => void;
}
export interface GlobalProps {
  children: JSX.Element | JSX.Element[]
}

export type GlobalActions =
  | { type: "ADD_TRANSACTIONS"; payload: Transactions }
  | { type: "DELETE_TRANSACTIONS", payload: string }
  | { type: "LOGIN", payload: string };
  
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
export interface ValueHookTimeAgo {
  timestamp: number
}

export interface DATE_UNITS_Interfaces {
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export interface GetUnitAndValueDate {
  value: number;
  unit: string | Intl.RelativeTimeFormatUnit ;
}

export interface SerialData {
  value?: number;
  name?: string;
}
export interface PrivateRouteProps {
  children?: ReactElement | ReactElement[];
}