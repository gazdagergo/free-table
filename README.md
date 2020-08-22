# Free Table

Fully customisable react table with tons of out-of-the-box features like
- filter
- sort

Moreover you can easily create your own features on top of the existing ones.

## Installation

`> yarn add free-table`

## Usage

For a basic html table you need a `data` and a `columns` collection to be passed to `<FreeTable />`.

```
import React from "react";
import FreeTable from "free-table"

const data = [
  { id: '1', name: 'John Doe', phone: '1234' },
  { id: '2', name: 'Alex Smith', phone: '5678' }
]

const columns = [
  { id: 'c1', accessor: 'name', label: 'Name' },
  { id: 'c2', accessor: 'phone', label: 'Phone' },
]

export default function App() {
  return (
    <FreeTable data={data} columns={columns} />
  );
}
```



