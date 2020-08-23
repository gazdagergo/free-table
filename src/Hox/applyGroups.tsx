import HocGroup from "../types/HocGroup";
import groupDataDefault from "../Functions/groupData"
import withGroupData from "./withGroupData"
import withGroupMap from "./withGroupMap"
import { contextDefaults } from '../TableContext';

const applyGroups:HocGroup = (options = {}) => (Components = contextDefaults) => {
  const { groups, groupData = groupDataDefault } = options

  const {
    TableBodyContainer,
    RowMap,
    ...rest
  } = Components

  return {
    TableBodyContainer: withGroupData({ groups, groupData })(TableBodyContainer),
    RowMap: withGroupMap({})(RowMap),
    ...rest
  };
};

export default applyGroups;
