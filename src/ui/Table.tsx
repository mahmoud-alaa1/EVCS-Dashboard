import { createContext } from "react";

import { TableTypes } from "../types/types";

// 1. Create a context
const TableContext = createContext(undefined);

// 2. Create parent component
function Table({ children, className }: TableTypes) {
  return (
    <TableContext.Provider value={undefined}>
      <table className={`min-w-full ${className}`}>{children}</table>
    </TableContext.Provider>
  );
}

// 3. Creation of child components to render table header and body.
function Header({ children, className }: TableTypes) {
  return (
    <thead className={`${className}`}>
      <tr>{children}</tr>
    </thead>
  );
}

function Heading({ children, className }: TableTypes) {
  return <th className={`  ${className}`}>{children}</th>;
}

function Body({ data, render }: TableTypes) {
  return <tbody>{data?.map(render)}</tbody>;
}

// 4. Child components added as properties to the parent component.
Table.Header = Header;
Table.Heading = Heading;
Table.Body = Body;

export default Table;
