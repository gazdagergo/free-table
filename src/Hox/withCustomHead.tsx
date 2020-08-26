import React, { ReactChild } from 'react'
import get from "lodash/get";
import HOC from "../types/HOC";
import TableContext from "../TableContext";
import Column from '../types/Column';
import RenderFnInContext from '../types/RenderFnInContext';

const withCustomHead:HOC = ({ id: customFieldId, HeadComponent, colIndex }) => Base => ({ columns }) => {
  const cellMapRenderFn:RenderFnInContext = ({ TableHeadCellContainer }) => {
    const cells:ReactChild[] = columns.map(({ id, accessor, label }:Column) => (
      <TableHeadCellContainer key={id} data={label} name={accessor} />
    ))
    cells.splice(
      colIndex,
      0,
      <HeadComponent key={customFieldId} data={columns} name={customFieldId} />
    )
    return cells
  }

  return (
    <TableContext.Consumer>
      {cellMapRenderFn}
    </TableContext.Consumer>
  )
}

export default withCustomHead
