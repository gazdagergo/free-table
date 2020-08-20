import React, { FC } from 'react'
import TableContext from "../../TableContext";
import Type from '../../types/TableProvider';

const TableProvider:FC<Type> = ({ children, context }) => (
  <TableContext.Provider value={context}>
    {children}
  </TableContext.Provider>
)

export default TableProvider
