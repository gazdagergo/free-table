import React from 'react'
import HOC from "../types/HOC";
import TableContext from "../TableContext";
import RenderFnInContext from '../types/RenderFnInContext';

const withDataFilter:HOC = ({ getFilteredData }) => Base => (props) => {
  const filterRenderFn:RenderFnInContext = ({ filter = {}, columns }) => {
    const filteredData = getFilteredData?.(filter, props.data, columns);
    return <Base {...props} data={filteredData} />;
  }

  return (
    <TableContext.Consumer>
      {filterRenderFn}
    </TableContext.Consumer>
  );
}

export default withDataFilter
