import React, { FC, useContext } from 'react';
import TableContext from '../TableContext';
import Type from '../types/FreeTable'

const FreeTable:FC<Type> = ({
  TableContainer: TableContainerOverride,
  ...props
  }) => {
  const { TableContainer: TableContainerDefault, ...components } = useContext(TableContext);

  const TableContainer = TableContainerOverride || TableContainerDefault;

  return <TableContainer {...components} {...props} />
}

export default FreeTable
