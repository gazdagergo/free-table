import Record from "./Record";
import Column from "./Column";

interface Table {
  data: Record[];
  columns: Column[];
}

export default Table;
