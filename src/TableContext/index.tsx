import { createContext } from "react";
import Context from "../types/Context";
import * as CollectionComponents from "../Components";

export const TableContext = createContext<Context>(CollectionComponents);

export default TableContext;
