import React, { FC } from 'react'
import styled from 'styled-components'
import Record from '../types/Record';
import HOC from '../types/HOC';

const Td = styled.td`
  background: lightgray;
  text-align: left;
`

type GroupRecord = {
  id: string
  label: string
  items: Record[]
}

const withGroupMap:HOC = () => Base => ({ data }) => (
  data.map(({ id, label, items }: GroupRecord) => (
    <>
      {!!items.length && <tr key={id}><Td colSpan={Object.keys(items[0]).length}>{label}</Td></tr>}
      <Base data={items} />
    </>
  ))
)

export default withGroupMap
