import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";
import Type from "../../types/TableBodyContainer";
import get from "lodash/get";

const TableBodyContainer: FC<Type> = ({ data }) => {
  const { TableBody, filter } = useContext(TableContext);

  console.log(filter, data);

  const filteredData = data.filter((record) =>
    Object.entries(filter).reduce(
      (acc, [path, value]) =>
        get(record, path)?.toUpperCase().includes(value.toUpperCase()) && acc,
      true
    )
  );

  return <TableBody data={filteredData} />;
};

export default TableBodyContainer;
