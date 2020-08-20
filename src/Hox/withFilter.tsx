import Context from "../types/Context";
import getFilteredData from "../Functions/getFilteredData"
import withInput from './withInput'
import withDataFilter from './withDataFilter'
import withFilterInputHandling from './withFilterInputHandling'

type HocGroup = (options?: { getFilteredData?: Function }) => (context: Context) => Context

const withFilter:HocGroup = (options = { getFilteredData }) => ({ TableBodyContainer, TableHeadCell, TableHeadCellContainer, ...rest }) => {

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

export default withFilter;
