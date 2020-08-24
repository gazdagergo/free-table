import React, { useState } from 'react'
import styled from 'styled-components'
import Record from '../types/Record';
import HOC from '../types/HOC';

const Td = styled.td`
  background: lightgray;
  text-align: left;
  cursor: pointer;
  &:before {
    ${({ isRowCollapsed }: { isRowCollapsed: boolean }) => isRowCollapsed
    ? `content: '▶︎ '`
    : `content: '▼ '` }
  }
`

type GroupRecord = {
  id: string
  label: string
  items: Record[]
}


const withGroupMap:HOC = () => Base => ({ data }) => {
  const [collapsedIds, setIsCollapsedIds] = useState<string[]>([])

  const toggleId = (id: string) => {
    if (collapsedIds.includes(id)){
      setIsCollapsedIds(collapsedIds.filter((i => i !== id)))
    } else {
      setIsCollapsedIds([...collapsedIds, id])
    }
  }

  return data.map(({ id, label, items }: GroupRecord) => {
    const isRowCollapsed = collapsedIds.includes(id)
    return (
      <tbody key={id}>
        {!!items.length && (
          <tr>
            <Td
              colSpan={Object.keys(items[0]).length}
              onClick={() => toggleId(id)}
              isRowCollapsed={isRowCollapsed}
              >
              {label}
            </Td>
          </tr>
        )}
        {!isRowCollapsed && <Base data={items} />}
      </tbody>
    )}
  )
}

export default withGroupMap
