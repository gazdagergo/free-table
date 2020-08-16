import React, { FC, useContext } from "react";
import Type from "./types/TableContainer";
import TableContext from "./BasicTableContext";

const BasicTable: FC<Type> = ({ data, ...props }) => {
  const { TableContainer, ...components } = useContext(TableContext);
  return (
    <TableContext.Provider value={{ ...components, ...props }}>
      <TableContainer data={data} />
    </TableContext.Provider>
  );
};

export default BasicTable;
