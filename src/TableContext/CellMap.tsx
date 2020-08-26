import React, { FC, useContext } from 'react'
import get from "lodash/get";
import Type from "../types/CellMap";
import TableContext from ".";
import Column from '../types/Column';


const CellMap:FC<Type> = ({ record }) => {
  const { CellContainer, columns } = useContext(TableContext);

  return (
    <>
      {columns.map(({ id, accessor }:Column) => (
        <CellContainer key={id} data={get(record, accessor)} name={accessor} />
      ))}
    </>
  )
}

export default CellMap


