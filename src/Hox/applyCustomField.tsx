import HocGroup from "../types/HocGroup";
import { contextDefaults } from '../TableContext';
import withCustomField from "./withCustomField";
import withCustomHead from "./withCustomHead";

const applyCustomFields:HocGroup = (options = {}) => (Components = contextDefaults) => {
  const {
    CellMap,
    TableHead,
    ...rest
  } = Components

  return {
    CellMap: withCustomField(options)(CellMap),
    TableHead: withCustomHead(options)(TableHead),
    ...rest
  };
};

export default applyCustomFields;
