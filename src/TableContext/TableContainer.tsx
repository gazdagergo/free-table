import React, { FC, useContext } from "react";
import Type from "../types/TableContainer";
import ProviderType from '../types/TableProvider';
import TableContext from ".";

const TableProvider:FC<ProviderType> = ({ children, context }) => (
  <TableContext.Provider value={context}>
    {children}
  </TableContext.Provider>
)

const TableContainer: FC<Type> = (props: any) => {
  const { Table } = useContext(TableContext);

  return (
    <TableProvider context={props}>
      <Table {...props} />
    </TableProvider>
  );
};

export default TableContainer;