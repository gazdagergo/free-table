import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";

import Type from "../../types/TableBody";

const TableBody: FC<Type> = ({ data }) => {
  const { RowContainer } = useContext(TableContext);

  return (
    <tbody>
      {data?.map((rowData) => {
        return <RowContainer key={rowData.id} data={rowData} />;
      })}
    </tbody>
  );
};

export default TableBody;
