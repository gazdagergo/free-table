import React, { ReactChild } from 'react'
import get from "lodash/get";
import HOC from "../types/HOC";
import TableContext from "../TableContext";
import Column from '../types/Column';
import RenderFnInContext from '../types/RenderFnInContext';

const withCustomField:HOC = ({ id: customFieldId, Component, colIndex }) => Base => ({ record }) => {
  const cellMapRenderFn:RenderFnInContext = ({ CellContainer, columns }) => {
    const cells:ReactChild[] = columns.map(({ id, accessor }:Column) => (
      <CellContainer key={id} data={get(record, accessor)} name={accessor} />
    ))
    cells.splice(
      colIndex,
      0,
      <Component key={customFieldId} data={record} name={customFieldId} />
    )
    return cells
  }

  return (
    <TableContext.Consumer>
      {cellMapRenderFn}
    </TableContext.Consumer>
  )
}

export default withCustomField
