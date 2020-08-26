import React, { FC, useContext } from "react";
import Type from "../types/Row";
import TableContext from ".";

const Row: FC<Type> = ({ data }) => {
  const { CellMap } = useContext(TableContext);

  return (
    <tr>
      <CellMap data={data} />
    </tr>
  );
};

export default Row;
