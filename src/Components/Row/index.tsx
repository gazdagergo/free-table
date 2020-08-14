import React, { FC, useContext } from "react";
// import Cell from "../Cell";
import Type from "../../types/Row";
import TableContext from "../TableContext";

const Row: FC<Type> = ({ data }) => {
  const { Cell } = useContext(TableContext);

  return (
    <tr>
      {data?.map((cellData) => (
        <Cell>{cellData}</Cell>
      ))}
    </tr>
  );
};

export default Row;
