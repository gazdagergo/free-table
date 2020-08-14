import React, { FC } from "react";
import Table from "../Table";
import Type from "../../types/Table";
import TableContext from "../TableContext";
import Cell from "../Cell";

const TableContainer: FC<Type> = ({ data, columns }) => (
  <TableContext.Provider value={{ Cell }}>
    <Table data={data} columns={columns} />
  </TableContext.Provider>
);

export default TableContainer;
