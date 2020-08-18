import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";
import Type from "../../types/TableHeadCellContainer";

const TableHeadCellContainer: FC<Type> = ({ data, name }) => {
  const { TableHeadCell } = useContext(TableContext);

  return <TableHeadCell name={name}>{data}</TableHeadCell>;
};

export default TableHeadCellContainer;
