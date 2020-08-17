import React, { FC } from "react";
import get from "lodash/get";
import TableContext from "../TableContext";

const getFilteredData = (filter, data) =>
  data.filter((record) =>
    Object.entries(filter).reduce(
      (acc, [path, value]) =>
        get(record, path)?.toUpperCase().includes(value.toUpperCase()) && acc,
      true
    )
  );

const withFilter: FC = (Base) => {
  return (props) => (
    <TableContext.Consumer>
      {({ filter }) => {
        const filteredData = getFilteredData(filter, props.data);
        return <Base {...props} data={filteredData} />;
      }}
    </TableContext.Consumer>
  );
};

export default withFilter;
