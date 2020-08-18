import React from "react";
import get from "lodash/get";
import TableContext from "../TableContext";

const getFilteredData = (filter, data) =>
  data.filter((record) =>
    Object.entries(filter).reduce(
      (acc, [dataPath, value]) =>
        get(record, dataPath)?.toUpperCase().includes(value.toUpperCase()) && acc,
      true
    )
  );

const withFilter = ({ TableBodyContainer, TableHeadCell, ...rest }) => {
  const TableBodyContainerWithFilter = (props) => (
    <TableContext.Consumer>
      {({ filter }) => {
        const filteredData = getFilteredData(filter, props.data);
        return <TableBodyContainer {...props} data={filteredData} />;
      }}
    </TableContext.Consumer>
  );

  const TableHeadCellWithFilter = (props) => (
    <TableContext.Consumer>
      {({ setFilter, filter }) => {
        const { name } = props;

        const onFilterInputChange = (value: string) => {
          setFilter({ ...filter, [name]: value });
        };

        const filterInputValue = filter[name] || "";

        const handleOnChange = ({ target: { value } }) =>
          onFilterInputChange(value);

        const FilterInput = (
          <>
            <input value={filterInputValue} onChange={handleOnChange} />
            <br />
          </>
        );

        return (
          <TableHeadCell
            {...props}
            children={
              <>
                {props.children}
                {FilterInput}
              </>
            }
          />
        );
      }}
    </TableContext.Consumer>
  );

  return {
    TableBodyContainer: TableBodyContainerWithFilter,
    TableHeadCell: TableHeadCellWithFilter,
    ...rest
  };
};

export default withFilter;
