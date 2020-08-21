import React, { FC, useContext } from "react";
import Type from "../types/TableBody";
import Record from "../types/Record";
import TableContext from ".";

const TableBody: FC<Type> = ({ data }) => {
  const { RowContainer, rowMap } = useContext(TableContext);

  return (
    <tbody>
      {rowMap?.(data, (rowData: Record) => (
        <RowContainer key={rowData.id} data={rowData} />
      ))}
    </tbody>
  );
};

export default TableBody;
