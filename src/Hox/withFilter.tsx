import React from "react";
import get from "lodash/get";
import TableContext from "../TableContext";
import Record from '../types/Record'
import Context from "../types/Context";
import InputChangeHanlder from "../types/InputChangeHanlder";
import Filter from "../types/Filter";
import Hoc from "../types/Hoc";

const getFilteredData = (filter: Filter | {}, data: Record[]) =>
  data.filter((record) =>
    Object.entries(filter).reduce(
      (acc, [dataPath, value]) =>
        get(record, dataPath)?.toUpperCase().includes(value.toUpperCase()) && acc,
      true
    )
  );

type HocGroup = (context: Context) => Context

const withFilter:HocGroup = ({ TableBodyContainer, TableHeadCell, ...rest }) => {
  const TableBodyContainerWithFilter:Hoc = (props) => (
    <TableContext.Consumer>
      {({ filter = {} }): { filter?: Filter | {}, [key: string]: any } => {
        const filteredData = getFilteredData(filter, props.data);
        return <TableBodyContainer {...props} data={filteredData} />;
      }}
    </TableContext.Consumer>
  );

  const TableHeadCellWithFilter:Hoc = (props) => (
    <TableContext.Consumer>
      {({ setFilter, filter }) => {
        const { name } = props;

        const onFilterInputChange = (value: string) => {
          setFilter?.({ ...filter, [name]: value });
        };

        const filterInputValue = filter?.[name] || "";

        const handleOnChange: InputChangeHanlder = ({ target: { value } }) =>
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
                {props.children}<br />
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
