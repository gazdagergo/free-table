import React, { FC } from "react";
import Type from "../../types/Table";
import TableHeadContainer from "../TableHeadContainer";
import TableBodyContainer from "../TableBodyContainer";

const Table: FC<Type> = ({ data, columns }) => {
  return (
    <table>
      <TableHeadContainer columns={columns} />
      <TableBodyContainer data={data} />
    </table>
  );
};

export default Table;
