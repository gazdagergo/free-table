import HocGroup from "../types/HocGroup";
import getFilteredData from "../Functions/getFilteredData"
import withInput from './withInput'
import withDataFilter from './withDataFilter'
import withFilterInputHandling from './withFilterInputHandling'
import * as TableComponents from "../Components";

const applyFilter:HocGroup = (options = { getFilteredData }) => (Components = TableComponents) => {
  const { TableBodyContainer, TableHeadCell, TableHeadCellContainer, ...rest } = Components

  const TableBodyContainerWithFilter = withDataFilter({ getFilteredData })(TableBodyContainer)
  const TableHeadCellWithFilter = withInput({})(TableHeadCell)
  const TableHeadCellContainerWithFilter = withFilterInputHandling({})(TableHeadCellContainer)

  return {
    TableBodyContainer: TableBodyContainerWithFilter,
    TableHeadCell: TableHeadCellWithFilter,
    TableHeadCellContainer: TableHeadCellContainerWithFilter,
    ...rest
  };
};

export default applyFilter;
