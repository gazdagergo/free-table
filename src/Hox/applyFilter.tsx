import HocGroup from "../types/HocGroup";
import getFilteredData from "../Functions/getFilteredData"
import withInput from './withInput'
import withDataFilter from './withDataFilter'
import withFilterInputHandling from './withFilterInputHandling'
import withFilterState from './withFilterState'
import { contextDefaults } from "../TableContext";

const applyFilter:HocGroup = (options = { getFilteredData }) => (Components = contextDefaults) => {
  const {
    TableContainer,
    TableBodyContainer,
    TableHeadCell,
    TableHeadCellContainer,
    ...rest
  } = Components

  const TableBodyContainerWithDataFilter = withDataFilter({ getFilteredData })(TableBodyContainer)
  const TableHeadCellWithFilter = withInput({})(TableHeadCell)
  const TableHeadCellContainerWithFilterInputHandling = withFilterInputHandling({})(TableHeadCellContainer)
  const TableContainerWithFilterState = withFilterState({})(TableContainer)

  return {
    TableBodyContainer: TableBodyContainerWithDataFilter,
    TableHeadCell: TableHeadCellWithFilter,
    TableHeadCellContainer: TableHeadCellContainerWithFilterInputHandling,
    TableContainer: TableContainerWithFilterState,
    ...rest
  };
};

export default applyFilter;
