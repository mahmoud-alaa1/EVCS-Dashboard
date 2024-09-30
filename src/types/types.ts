export interface TagProps {
  children?: string;
  size?: "lg" | "sm";
  className?: string;
}

export interface TableTypes {
  children?: React.ReactNode;
  data?: string[];
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
