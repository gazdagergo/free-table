import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";
import Type from "../../types/TableHead";

const TableHead: FC<Type> = ({ columns }) => {
  const { TableHeadCellContainer } = useContext(TableContext);

  return (
    <>
      {columns?.map(({ id, label }) => (
        <TableHeadCellContainer key={id} data={label} />
      ))}
    </>
  );
};

export default TableHead;
