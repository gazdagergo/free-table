import React, { FC, useContext } from 'react'
import Type from "../types/CellMap";
import TableContext from ".";
import Column from '../types/Column';

const CellMap:FC<Type> = ({ data }) => {
  const { CellContainer } = useContext(TableContext);
  return data.map(({ id, accessor, value }:Column) => (
    <CellContainer key={id} data={value} name={accessor} />
  ))
}

export default CellMap


