import React, { FC, useContext } from "react";
import Type from "../../types/Row";
import TableContext from "../../TableContext";

const Row: FC<Type> = ({ data }) => {
  const { CellContainer } = useContext(TableContext);

  return (
    <tr>
      {data?.map((cellData) => (
        <CellContainer data={cellData} />
      ))}
    </tr>
  );
};

export default Row;
