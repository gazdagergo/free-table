import Column from "./Column";
import Filter from "./Filter";

interface Context {
  CellContainer?: any; // TODO: find the proper type
  Table?: any;
  Cell?: any;
  Row?: any;
  TableHeadContainer?: any;
  TableBodyContainer?: any;
  RowContainer?: any;
  TableBody?: any;
  TableContainer?: any;
  TableHeadCellContainer?: any;
  TableHeadCell?: any;
  TableHead?: any;
  columns?: Column[];
  setFilter?: Function;
  filter?: Filter;
}

export default Context;
