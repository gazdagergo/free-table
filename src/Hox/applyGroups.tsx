import React, { useContext } from 'react'
import HocGroup from "../types/HocGroup";
import getGrouppedDataDefault from "../Functions/getGrouppedData"
import withGroupData from "./withGroupData"
import TableContext, { contextDefaults } from '../TableContext';
import RowMap from '../types/RowMap';
import Record from '../types/Record';

const rowMapWithGroups:(F?: Function) => RowMap = (prevRowMap) => arr => {
  const { RowContainer } = useContext(TableContext);
  return arr.map(({ label, items }) => (
    <>
      <tr><td>{label}</td></tr>
      {prevRowMap?.(items, (rowData:Record) => (
        <RowContainer key={rowData.id} data={rowData} />
      ))}
    </>
  ))
}

const applyGroups:HocGroup = (options = {}) => (Components = contextDefaults) => {
  const { groups, getGrouppedData = getGrouppedDataDefault } = options

  const {
    TableBodyContainer,
    TableBody,
    rowMap: prevRowMap,
    ...rest
  } = Components

  return {
    TableBodyContainer: withGroupData({ groups, getGrouppedData })(TableBodyContainer),
    rowMap: rowMapWithGroups(prevRowMap),
    ...rest
  };
};

export default applyGroups;
