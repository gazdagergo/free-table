import Column from "./Column";
import Record from "./Record";

interface FreeTable {
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
  options?: any[];
}

export default FreeTable;
