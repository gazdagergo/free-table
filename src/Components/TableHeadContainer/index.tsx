import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";
import Type from "../../types/TableHeadContainer";

const TableHeadContainer: FC<Type> = props => {
  const { TableHead, columns } = useContext(TableContext);
  const headData = columns?.map(({ id, label, accessor }) => ({ id, label, accessor }));
  return <TableHead columns={headData} {...props} />;
};

export default TableHeadContainer;
