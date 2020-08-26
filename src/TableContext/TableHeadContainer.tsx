import React, { FC, useContext } from "react";
import TableContext from "../TableContext";
import Type from "../types/TableHeadContainer";

const TableHeadContainer: FC<Type> = props => {
  const { TableHead, columns } = useContext(TableContext);
  return <TableHead columns={columns} {...props} />;
};

export default TableHeadContainer;
