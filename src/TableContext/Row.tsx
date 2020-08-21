import React, { FC, useContext } from "react";
import Type from "../types/Row";
import TableContext from ".";

const Row: FC<Type> = ({ data }) => {
  const { CellContainer } = useContext(TableContext);

  return (
    <tr>
      {data?.map(({ id, accessor, value }) => {
        return <CellContainer key={id} data={value} name={accessor} />;
      })}
    </tr>
  );
};

export default Row;
