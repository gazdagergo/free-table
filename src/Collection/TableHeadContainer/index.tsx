import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";
import Type from "../../types/TableHeadContainer";

const TableHeadContainer: FC<Type> = () => {
  const { TableHead, columns } = useContext(TableContext);
  const headData = columns?.map(({ id, label, path }) => ({ id, label, path }));
  return <TableHead columns={headData} />;
};

export default TableHeadContainer;
