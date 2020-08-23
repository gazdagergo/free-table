import React from 'react'
import HOC from "../types/HOC";
import Context from "../types/Context";
import TableContext from "../TableContext";

type RenderFunction = (value: Context) => React.ReactNode

const withGrouppedData:HOC = ({ groups, groupData }) => Base => (props) => {

  const renderFunction:RenderFunction = () => {
    return <Base {...props} data={groupData(props.data, groups)} />;
  }

  return (
    <TableContext.Consumer>
      {renderFunction}
    </TableContext.Consumer>
  );
}

export default withGrouppedData
