import React, { FC, useContext } from "react";
import Type from "../types/Row";
import TableContext from ".";

const Row: FC<Type> = ({ record }) => {
  const { CellMap } = useContext(TableContext);

  return (
    <tr>
      <CellMap record={record} />
    </tr>
  );
};

export default Row;
