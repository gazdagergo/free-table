import React, { FC, useContext } from "react";
import Type from "../../types/CellContainer";
import TableContext from "../../TableContext";

const CellContainer: FC<Type> = ({ data, ...props }) => {
  const { Cell } = useContext(TableContext);

  return <Cell {...props}>{data}</Cell>;
};

export default CellContainer;
