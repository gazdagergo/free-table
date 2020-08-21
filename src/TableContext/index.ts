import { createContext } from "react";
import Context from "../types/Context";
import Cell from "./Cell";
import CellContainer from "./CellContainer";
import Row from "./Row";
import RowContainer from "./RowContainer";
import Table from "./Table";
import TableContainer from "./TableContainer";
import TableBody from "./TableBody";
import TableBodyContainer from "./TableBodyContainer";
import TableHead from "./TableHead";
import TableHeadCell from "./TableHeadCell";
import TableHeadCellContainer from "./TableHeadCellContainer";
import TableHeadContainer from "./TableHeadContainer";
import rowMap from "./rowMap";

export const contextDefaults = {
  Cell,
  CellContainer,
  Row,
  RowContainer,
  Table,
  TableContainer,
  TableBody,
  TableBodyContainer,
  TableHead,
  TableHeadCell,
  TableHeadCellContainer,
  TableHeadContainer,
  rowMap,
}

const TableContext = createContext<Context>(contextDefaults);

export default TableContext;

