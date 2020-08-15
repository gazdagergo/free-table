import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";
import Type from "../../types/TableBodyContainer";

const TableBodyContainer: FC<Type> = ({ data }) => {
  const { TableBody } = useContext(TableContext);

  return <TableBody data={data} />;
};

export default TableBodyContainer;
