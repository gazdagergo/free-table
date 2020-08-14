import React, { FC } from "react";
import TableBody from "../TableBody";
import Type from "../../types/TableBodyContainer";

const TableBodyContainer: FC<Type> = ({ data }) => {
  return <TableBody data={data} />;
};

export default TableBodyContainer;
