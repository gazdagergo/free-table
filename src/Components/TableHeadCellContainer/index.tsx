import React, { FC } from "react";
import TableHeadCell from "../TableHeadCell";
import Type from "../../types/TableHeadCellContainer";

const TableHeadCellContainer: FC<Type> = ({ data }) => (
  <TableHeadCell>{data}</TableHeadCell>
);

export default TableHeadCellContainer;
