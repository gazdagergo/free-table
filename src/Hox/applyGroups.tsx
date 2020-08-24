import HocGroup from "../types/HocGroup";
import groupDataDefault from "../Functions/groupData"
import withGroupData from "./withGroupData"
import withGroupMap from "./withGroupMap"
import withOutTbody from "./withOutTbody"
import withStyle from "./withStyle"
import { contextDefaults } from '../TableContext';

const applyGroups:HocGroup = (options = {}) => (Components = contextDefaults) => {
  const { groups, groupData = groupDataDefault } = options

  const {
    TableBodyContainer,
    TableBody,
    RowMap,
    TableHeadCell,
    ...rest
  } = Components

  return {
    TableBodyContainer: withGroupData({ groups, groupData })(TableBodyContainer),
    RowMap: withGroupMap({})(RowMap),
    TableBody: withOutTbody({})(TableBody),
    TableHeadCell: withStyle({ minWidth: 100 })(TableHeadCell),
    ...rest
  };
};

export default applyGroups;
