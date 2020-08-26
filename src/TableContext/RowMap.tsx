import React, { FC, useContext } from 'react'
import Type from "../types/RowMap";
import TableContext from ".";
import Record from "../types/Record"

const RowMap:FC<Type> = ({ data }) => {
  const { RowContainer } = useContext(TableContext);
  return data.map((record:Record) => (
    <RowContainer
      key={record.id}
      record={record}
    />
  ))
}

export default RowMap
