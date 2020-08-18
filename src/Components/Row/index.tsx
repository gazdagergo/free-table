import React, { FC, useContext } from "react";
import Type from "../../types/Row";
import TableContext from "../../TableContext";

const Row: FC<Type> = ({ data }) => {
  const { CellContainer } = useContext(TableContext);

  return (
    <tr>
      {data?.map(({ id, dataPath, value }) => {
        return <CellContainer key={id} data={value} name={dataPath} />;
      })}
    </tr>
  );
};

export default Row;
