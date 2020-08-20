import React, { FC, useContext } from "react";
import Type from "../../types/TableContainer";
import TableContext from "../../TableContext";

const TableContainer: FC<Type> = ({ data, ...props }) => {
  const { Table } = useContext(TableContext);
  return <Table data={data} {...props} />;
};

export default TableContainer;
