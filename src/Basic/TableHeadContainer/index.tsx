import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";
import Type from "../../types/TableHeadContainer";

const TableHeadContainer: FC<Type> = ({ columns }) => {
  const { TableHead } = useContext(TableContext);

  return <TableHead columns={columns} />;
};

export default TableHeadContainer;
