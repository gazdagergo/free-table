import Column from "./Column";
import Record from "./Record";

interface TableContainer {
  data?: Record[];
  columns?: Column[];
}

export default TableContainer;
