import React, { FC, useContext, useState } from "react";
import Type from "./types/TableContainer";
import TableContext from "./TableContext";

const TableWrap: FC<Type> = ({ data, ...props }) => {
  const { TableContainer, ...components } = useContext(TableContext);

  const [filter, setFilter] = useState({});

  return (
    <TableContext.Provider
      value={{ ...components, ...props, filter, setFilter }}
    >
      <TableContainer data={data} />
    </TableContext.Provider>
  );
};

export default TableWrap;
