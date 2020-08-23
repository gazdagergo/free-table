import React, { useContext } from 'react'
import HocGroup from "../types/HocGroup";
import groupDataDefault from "../Functions/groupData"
import styled from 'styled-components'
import withGroupData from "./withGroupData"
import TableContext, { contextDefaults } from '../TableContext';
import RowMap from '../types/RowMap';
import Record from '../types/Record';

const Td = styled.td`
  background: lightgray;
  text-align: left;
`

const rowMapWithGroups:(F?: Function) => RowMap = (prevRowMap) => arr => {
  const { RowContainer } = useContext(TableContext);
  return arr.map(({ label, items }) => (
    <>
      {!!items.length && <tr><Td colSpan={Object.keys(items[0]).length}>{label}</Td></tr>}
      {prevRowMap?.(items, (rowData:Record) => (
        <RowContainer key={rowData.id} data={rowData} />
      ))}
    </>
  ))
}

const applyGroups:HocGroup = (options = {}) => (Components = contextDefaults) => {
  const { groups, groupData = groupDataDefault } = options

  const {
    TableBodyContainer,
    TableBody,
    rowMap: prevRowMap,
    ...rest
  } = Components

  return {
    TableBodyContainer: withGroupData({ groups, groupData })(TableBodyContainer),
    rowMap: rowMapWithGroups(prevRowMap),
    ...rest
  };
};

export default applyGroups;
