import React, { FC, useContext } from "react";
import Type from "../../types/Table";
import TableContext from "../../TableContext";

const Table: FC<Type> = ({ data, columns }) => {
  const { TableHeadContainer, TableBodyContainer } = useContext(TableContext);

  return (
    <table>
      <TableHeadContainer columns={columns} />
      <TableBodyContainer data={data} />
    </table>
  );
};

export default Table;
