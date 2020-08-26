import { createContext } from "react";
import Context from "../types/Context";
import Cell from "./Cell";
import CellMap from "./CellMap";
import CellContainer from "./CellContainer";
import Row from "./Row";
import RowContainer from "./RowContainer";
import Table from "./Table";
import TableContainer from "./TableContainer";
import RowMap from "./RowMap";
import TableBody from "./TableBody";
import TableBodyContainer from "./TableBodyContainer";
import TableHead from "./TableHead";
import TableHeadCell from "./TableHeadCell";
import TableHeadCellContainer from "./TableHeadCellContainer";
import TableHeadContainer from "./TableHeadContainer";

export const contextDefaults = {
  Cell,
  CellContainer,
  CellMap,
  Row,
  RowContainer,
  Table,
  TableContainer,
  RowMap,
  TableBody,
  TableBodyContainer,
  TableHead,
  TableHeadCell,
  TableHeadCellContainer,
  TableHeadContainer,
}

const TableContext = createContext<Context>(contextDefaults);

export default TableContext;

