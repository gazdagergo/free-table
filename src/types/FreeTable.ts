import Column from "./Column";
import Record from "./Record";

interface TableContainer {
  data?: Record[];
  columns?: Column[];
  Cell?: any;
  CellContainerCell?: any;
  RowCell?: any;
  RowContainerCell?: any;
  TableCell?: any;
  TableContainer?: any;
  TableContainerCell?: any;
  TableBodyCell?: any;
  TableBodyContainerCell?: any;
  TableHeadCell?: any;
  TableHeadCellContainerCell?: any;
  TableHeadContainerCell?: any;  
}

export default TableContainer;
