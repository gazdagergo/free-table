import React, { FC, useContext } from "react";
import Type from "../types/TableBody";
import TableContext from ".";

const TableBody: FC<Type> = ({ data }) => {
  const { RowMap } = useContext(TableContext);

  return (
    <tbody>
      <RowMap data={data} />
    </tbody>
  );
};

export default TableBody;
