import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";
import Type from "../../types/TableBodyContainer";

const TableBodyContainer: FC<Type> = ({ data, ...props }) => {
  const { TableBody } = useContext(TableContext);

  return <TableBody data={data} {...props} />;
};

export default TableBodyContainer;
