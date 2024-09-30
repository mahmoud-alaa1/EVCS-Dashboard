export interface TagProps {
  children?: string;
  size?: "lg" | "sm";
  className?: string;
}

export interface TableTypes {
  children?: React.ReactNode;
  data?: object[];
  render?: any;
  // For extra styling
  className?: string;
}

export type SearchInputTypes = {
  className?: string;

  placeholder?: string;

  value?: string;

  name?: string;

  htmlFor?: string;

  id?: string;

  type?: string;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;

  children?: React.ReactNode;
};

export type ButtonTypes = {
  children?: React.ReactNode;
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  className?: string;
};

export type userDataTypes = {
  name: string;
  email: string;
  locations: string[];
  subscription: string;
  registration: string;
};
export type usersDataTypes = userDataTypes[];
