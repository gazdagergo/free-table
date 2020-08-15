import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";

import Type from "../../types/RowContainer";

const RowContainer: FC<Type> = ({ data }) => {
  const { Row } = useContext(TableContext);
  return <Row data={data} />;
};

export default RowContainer;
