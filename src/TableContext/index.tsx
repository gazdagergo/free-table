import { createContext } from "react";
import Context from "../types/Context";
import * as BasicComponents from "../Basic";

export const TableContext = createContext<Context>(BasicComponents);

export default TableContext;
