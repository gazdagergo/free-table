import React, { FC, useContext } from "react";
import Type from "../../types/TableContainer";
import TableContext from "../../TableContext";
import TableProvider from '../TableProvider'

const TableContainer: FC<Type> = (props: any) => {
  const { Table } = useContext(TableContext);

  return (
    <TableProvider context={props}>
      <Table {...props} />
    </TableProvider>
  );
};

export default TableContainer;