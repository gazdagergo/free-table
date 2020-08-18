import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";
import Type from "../../types/TableHead";

const TableHead: FC<Type> = ({ columns }) => {
  const { TableHeadCellContainer } = useContext(TableContext);

  return (
    <thead>
      <tr>
        {columns?.map(({ id, label, accessor }) => (
          <TableHeadCellContainer key={id} data={label} name={accessor} />
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
