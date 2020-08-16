import React, { FC, useContext } from "react";
import TableContext from "../../TableContext";
import Type from "../../types/TableHeadCellContainer";

const TableHeadCellContainer: FC<Type> = ({ name, data }) => {
  const { TableHeadCell, setFilter, filter } = useContext(TableContext);

  const onFilterInputChange = (value: string) => {
    setFilter({ ...filter, [name]: value });
  };

  return (
    <TableHeadCell
      onFilterInputChange={onFilterInputChange}
      filterInputValue={filter[name]}
    >
      {data}
    </TableHeadCell>
  );
};

export default TableHeadCellContainer;
