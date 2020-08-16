interface Context {
  CellContainer?: any;
  Table?: Function;
  Cell?: Function;
  Row?: Function;
  TableHeadContainer?: Function;
  TableBodyContainer?: Function;
  RowContainer?: any;
  TableBody?: any;
  TableHeadCellContainer?: any;
  TableHeadCell?: any;
  TableHead?: any;
  columns?: string[];
  setFilter: Function;
  filter: { [key: string]: string };
}

export default Context;
