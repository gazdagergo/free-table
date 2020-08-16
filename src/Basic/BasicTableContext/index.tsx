import { createContext } from "react";
import Context from "../types/Context";
import * as BasicComponents from "../";

export default createContext<Context>(BasicComponents);
