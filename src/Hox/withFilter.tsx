import React from "react";
import TableContext from "../TableContext";
import Context from "../types/Context";
import InputChangeHanlder from "../types/InputChangeHanlder";
import Hoc from "../types/Hoc";
import getFilteredData from "../Functions/getFilteredData"

type HocGroup = (options?: { getFilteredData?: Function }) => (context: Context) => Context

type FilterRenderFn = (value: Context) => React.ReactNode

const withFilter:HocGroup = (options = { getFilteredData }) => ({ TableBodyContainer, TableHeadCell, ...rest }) => {
  const TableBodyContainerWithFilter:Hoc = (props) => {

    const filterRenderFn:FilterRenderFn = ({ filter = {}, columns }) => {
      const filteredData = options.getFilteredData?.(filter, props.data, columns);
      return <TableBodyContainer {...props} data={filteredData} />;
    }

    return (
      <TableContext.Consumer>
        {filterRenderFn}
      </TableContext.Consumer>
    );
  }

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
