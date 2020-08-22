import React, { FC, useContext } from 'react';
import TableContext, { contextDefaults } from '../TableContext';
import Type from '../types/FreeTable'
import Context from '../types/Context';

const FreeTable:FC<Type> = ({
  TableContainer: TableContainerOverride,
  options,
  ...props
  }) => {

  let nextProps:Context = {}
  if (options) {
    nextProps = options.reverse().reduce((acc, decorator) => {
      return decorator(acc)
    }, contextDefaults)
  }

  const { TableContainer: TableContainerDefault, ...components } = useContext(TableContext);

  const TableContainer =  nextProps?.TableContainer || TableContainerOverride || TableContainerDefault;

  return <TableContainer {...components} {...nextProps} {...props} />
}

export default FreeTable