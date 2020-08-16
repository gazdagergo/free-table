import React, { FC, useContext } from "react";
import Type from "../../types/Row";
import TableContext from "../../TableContext";

const Row: FC<Type> = ({ data }) => {
  const { CellContainer } = useContext(TableContext);

  return (
    <tr>
      {data?.map(({ id, path, value }) => (
        <CellContainer key={id} data={value} name={path} />
      ))}
    </tr>
  );
};

export default Row;
