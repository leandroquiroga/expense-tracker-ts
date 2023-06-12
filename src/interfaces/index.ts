import { ReactElement } from "react";
export interface GlobalContextProps {
  name: string;
  transactions: [];
}

export interface GlobalProps {
  children: JSX.Element | JSX.Element[]
}

export type GlobalActions =
  | { type: 'setNameUser', payload: string }
  | { type: 'ADD_TRANSACTIONS', payload: [] };
  
export interface GlobalState {
  name: string;
  transactions: [];
}

export interface InputProps {
  label: string;
  name: string;
  type: 'text' | 'number';
  placeholder?: string;
  styles?: string;
  steps?: string;
  errorTitle?: string;
  [x: string]: any;
}

export interface ButtonProps {
  children?: ReactElement | ReactElement[];
  value: string;
  type: 'submit' | 'reset'
  style?: string
}