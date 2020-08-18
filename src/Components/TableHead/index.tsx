import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";
import Type from "../../types/TableHead";

const TableHead: FC<Type> = ({ columns }) => {
  const { TableHeadCellContainer } = useContext(TableContext);

  return (
    <thead>
      <tr>
        {columns?.map(({ id, label, dataPath }) => (
          <TableHeadCellContainer key={id} data={label} name={dataPath} />
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
