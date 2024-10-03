import { createContext } from "react";
import { TableTypes } from "../types/types";



// 1. Create a context
const TableContext = createContext(undefined);

// 2. Create parent component
function Table<T>({ children, className, id }: TableTypes<T>) {
  return (
    <TableContext.Provider value={undefined}>
      <table id={id} className={`min-w-full ${className}`}>
        {children}
      </table>
    </TableContext.Provider>
  );
}

// 3. Creation of child components to render table header and body.
function Header<T>({ children, className }: TableTypes<T>) {
  return (
    <thead className={`${className}`}>
      <tr>{children}</tr>
    </thead>
  );
}

function Heading<T>({ children, className }: TableTypes<T>) {
  return <th className={`  ${className}`}>{children}</th>;
}

function Body<T>({ data, render }: TableTypes<T>) {
  return <tbody>{data?.map(render ?? (() => null))}</tbody>;
}

// 4. Child components added as properties to the parent component.
Table.Header = Header;
Table.Heading = Heading;
Table.Body = Body;

export default Table;
