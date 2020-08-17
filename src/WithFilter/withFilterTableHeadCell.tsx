import React, { FC } from "react";
import TableContext from "../TableContext";

const withFilterTableHeadCell: FC = (Base) => {
  return (props) => (
    <TableContext.Consumer>
      {({ setFilter, filter }) => {
        const { name } = props;

        const onFilterInputChange = (value: string) => {
          setFilter({ ...filter, [name]: value });
        };

        return (
          <Base
            {...props}
            onFilterInputChange={onFilterInputChange}
            filterInputValue={filter[name]}
          />
        );
      }}
    </TableContext.Consumer>
  );
};

export default withFilterTableHeadCell;
