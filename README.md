# Free Table

Fully customisable react table with the ablity to implement your own data manipulation or ui. You can change anything in representation layer or introduce new data manipulation features without loosing the built-in functionalities.

## Installation

`$ yarn add free-table`

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

export default () => (
  <FreeTable
    data={data}
    columns={columns}
  />
);
```

[![Edit gazdagergo/free-table: examples](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/gazdagergo/free-table/tree/master/examples)


## Features

To use features like 'filter' pass the built-in or your custom function to the options prop:

```
import { applyFilter }, FreeTable from 'free-table'

...

  <FreeTable
    data={data}
    columns={cols}
    options={[
      applyFilter()
    ]}
  />
```
[![Edit gazdagergo/free-table: examples](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/gazdagergo/free-table/tree/master/examples?initialpath=%2Ffilter&module=%2Fsrc%2FFilter.js)



