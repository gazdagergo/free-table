import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";
import Type from "../../types/TableHeadContainer";

const TableHeadContainer: FC<Type> = () => {
  const { TableHead, columns } = useContext(TableContext);
  const headData = columns.map(({ id, label }) => ({ id, label }));
  return <TableHead columns={headData} />;
};

export default TableHeadContainer;
