import { ButtonHTMLAttributes } from "react";

export interface TagProps {
  color?: string;
  children?: string;
  size?: "lg" | "sm";
  className?: string;
}

export type ColrosMapTypes = {
  [color: string]: {
    text: string;
    bg: string;
  };
};

export interface User {
  id: string | number;
  name: string;
  email: string;
  locations: string[];
  subscription: string;
  registration: string;
}


export interface TableTypes<T> {
  children?: React.ReactNode;
  data?: T[];
  render?: (item: T, index?: number) => JSX.Element;
  className?: string;
}

export type InputTypes = {
  className?: string;

  placeholder?: string;

  value?: string;

  name: string;

  htmlFor?: string;

  id?: string;

  type?: string;

  children?: React.ReactNode;

  autoCompelete?: string;

  error?: boolean;

  props?: object;
};

export type ButtonTypes = {
  children?: React.ReactNode;
  className?: string;
  type: "submit" | "reset" | "button" | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>; //Include other button attributes;


