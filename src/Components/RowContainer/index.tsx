import React, { FC, useContext } from "react";
import get from "lodash/get";
import TableContext from "../../TableContext";

import Type from "../../types/RowContainer";

const RowContainer: FC<Type> = ({ data, ...props }) => {
  const { Row, columns } = useContext(TableContext);
  const rowData = columns?.map(({ id, accessor }) => ({
    id,
    accessor,
    value: get(data, accessor)
  }));
  return <Row data={rowData} {...props} />;
};

export default RowContainer;
