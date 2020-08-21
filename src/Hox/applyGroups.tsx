import React, { useContext } from 'react'
import HocGroup from "../types/HocGroup";
import getGrouppedDataDefault, { GroupObj } from "../Functions/getGrouppedData"
import withGroupData from "./withGroupData"
import * as TableComponents from "../Components";
import TableContext from '../TableContext';

const TableBodyGroupRender = ({ data }: { data: GroupObj }) => {
  const { RowContainer } = useContext(TableContext);

  return (
    <tbody>
      {Object.values(data)?.map(({ label, items }) => (
        <>
          <tr><td>{label}</td></tr>
          {items.map(rowData => {
            return <RowContainer key={rowData.id} data={rowData} />;
          })}
        </>
      ))}
    </tbody>
  );
};

const applyGroups:HocGroup = (options = {}) => (Components = TableComponents) => {
  const { groups, getGrouppedData = getGrouppedDataDefault } = options

  const {
    TableBodyContainer,
    TableBody,
    ...rest
  } = Components

  return {
    TableBodyContainer: withGroupData({ groups, getGrouppedData })(TableBodyContainer),
    TableBody: TableBodyGroupRender,
    ...rest
  };
};

export default applyGroups;
