import React, { FC } from "react";
import Row from "../Row";
import Type from "../../types/RowContainer";

const RowContainer: FC<Type> = ({ data }) => {
  return <Row data={data} />;
};

export default RowContainer;
