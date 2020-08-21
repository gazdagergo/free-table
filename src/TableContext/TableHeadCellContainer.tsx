import React, { FC, useContext } from "react";
import Type from "../types/TableHeadCellContainer";
import TableContext from ".";

const TableHeadCellContainer: FC<Type> = ({ data, name, ...props }) => {
  const { TableHeadCell } = useContext(TableContext);

  return <TableHeadCell name={name} {...props}>{data}</TableHeadCell>;
};

export default TableHeadCellContainer;
