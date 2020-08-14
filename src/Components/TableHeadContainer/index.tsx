import React, { FC } from "react";
import Type from "../../types/TableHeadContainer";
import TableHead from "../TableHead";

const TableHeadContainer: FC<Type> = ({ columns }) => {
  return <TableHead columns={columns} />;
};

export default TableHeadContainer;
