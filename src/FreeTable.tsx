import React, { FC } from "react";
import Type from "./types/TableContainer";
import TableContext from "./TableContext";
import * as BasicComponents from "./Basic";

const TableContainer: FC<Type> = ({
  data,
  columns,
  Table = BasicComponents.Table,
  ...props
}) => (
  <TableContext.Provider value={{ ...BasicComponents, ...props }}>
    <Table data={data} columns={columns} />
  </TableContext.Provider>
);

export default TableContainer;
