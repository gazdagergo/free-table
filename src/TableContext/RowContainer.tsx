import React, { FC, useContext } from "react";
import Type from "../types/RowContainer";
import TableContext from ".";

const RowContainer: FC<Type> = ({ ...props }) => {
  const { Row } = useContext(TableContext);
  return <Row {...props} />;
};

export default RowContainer;
