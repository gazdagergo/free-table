import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";

import Type from "../../types/TableBody";

const TableBody: FC<Type> = ({ data }) => {
  const { RowContainer } = useContext(TableContext);

  return (
    <>
      {data?.map((rowData) => (
        <RowContainer data={rowData} />
      ))}
    </>
  );
};

export default TableBody;
