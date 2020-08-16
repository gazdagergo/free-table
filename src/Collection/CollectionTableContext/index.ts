import { createContext } from "react";
import Context from "../types/CollectionTableContext";
import * as BasicTableComponents from "../../Basic";

export default createContext<Context>(BasicTableComponents);
