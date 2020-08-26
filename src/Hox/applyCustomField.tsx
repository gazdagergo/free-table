import HocGroup from "../types/HocGroup";
import { contextDefaults } from '../TableContext';
import withCustomField from "./withCustomField";

const applyCustomFields:HocGroup = (options = {}) => (Components = contextDefaults) => {
  const {
    CellMap,
    ...rest
  } = Components

  return {
    CellMap: withCustomField(options)(CellMap),
    ...rest
  };
};

export default applyCustomFields;
