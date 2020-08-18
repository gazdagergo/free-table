import React, { FC, useContext } from "react";
import Type from "../../types/Table";
import TableContext from "../../TableContext";

const Table: FC<Type> = ({ data }) => {
  const { TableHeadContainer, TableBodyContainer } = useContext(TableContext);

  return (
    <table>
      <TableHeadContainer />
      <TableBodyContainer data={data} />
    </table>
  );
};

export default Table;
