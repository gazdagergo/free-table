import React, { FC } from "react";
import RowContainer from "../RowContainer";
import Type from "../../types/TableBody";

const TableBody: FC<Type> = ({ data }) => {
  return (
    <>
      {data?.map((rowData) => (
        <RowContainer data={rowData} />
      ))}
    </>
  );
};

export default TableBody;
