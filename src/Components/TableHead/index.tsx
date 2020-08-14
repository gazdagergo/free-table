import React, { FC } from "react";
import TableHeadCellContainer from "../TableHeadCellContainer";
import Type from "../../types/TableHead";

const TableHead: FC<Type> = ({ columns }) => {
  return (
    <>
      {columns?.map((column) => (
        <TableHeadCellContainer data={column} />
      ))}
    </>
  );
};

export default TableHead;
