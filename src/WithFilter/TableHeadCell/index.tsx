import React, { FC } from "react";

const TableHeadCell: FC = ({
  onFilterInputChange,
  filterInputValue,
  children
}) => {
  const handleOnChange = ({ target: { value } }) => onFilterInputChange(value);

  return (
    <th>
      <input value={filterInputValue} onChange={handleOnChange} />
      <br />
      {children}
    </th>
  );
};

export default TableHeadCell;
