import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";
import Type from "../../types/TableBodyContainer";
import withFilter from "../withFilter";

const TableBodyContainer: FC<Type> = ({ data }) => {
  const { TableBody } = useContext(TableContext);

  return <TableBody data={data} />;
};

export default withFilter(TableBodyContainer);
