import React from 'react'
import HOC from "../types/HOC";
import Context from "../types/Context";
import TableContext from "../TableContext";

type FilterRenderFn = (value: Context) => React.ReactNode

const withDataFilter:HOC = ({ getFilteredData }) => Base => (props) => {
  const filterRenderFn:FilterRenderFn = ({ filter = {}, columns }) => {
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
