import React, { FC, useContext } from "react";
import Type from "../types/TableBodyContainer";
import TableContext from ".";

const TableBodyContainer: FC<Type> = ({ data, ...props }) => {
  const { TableBody } = useContext(TableContext);

  return <TableBody data={data} {...props} />;
};

export default TableBodyContainer;
