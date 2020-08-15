import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";
import Type from "../../types/TableHeadCellContainer";

const TableHeadCellContainer: FC<Type> = ({ data }) => {
  const { TableHeadCell } = useContext(TableContext);

  return <TableHeadCell>{data}</TableHeadCell>;
};

export default TableHeadCellContainer;
