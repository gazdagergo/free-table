import React, { FC, useContext } from "react";
import get from "lodash/get";
import TableContext from "../../TableContext";

import Type from "../../types/RowContainer";

const RowContainer: FC<Type> = ({ data }) => {
  const { Row, columns } = useContext(TableContext);
  const rowData = columns?.map(({ id, path }) => ({
    id,
    path,
    value: get(data, path)
  }));
  return <Row data={rowData} />;
};

export default RowContainer;
