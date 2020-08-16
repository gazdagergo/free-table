import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";
import Type from "../../types/TableHead";

const TableHead: FC<Type> = ({ columns }) => {
  const { TableHeadCellContainer } = useContext(TableContext);

  return (
    <>
      {columns?.map(({ id, label, path }) => (
        <TableHeadCellContainer key={id} data={label} name={path} />
      ))}
    </>
  );
};

export default TableHead;
