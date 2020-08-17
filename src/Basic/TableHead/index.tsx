import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";
import Type from "../../types/TableHead";

const TableHead: FC<Type> = ({ columns }) => {
  const { TableHeadCellContainer } = useContext(TableContext);

  return (
    <thead>
      {columns?.map((column) => (
        <TableHeadCellContainer data={column} />
      ))}
    </thead>
  );
};

export default TableHead;
