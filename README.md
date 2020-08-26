# Free Table

Fully customisable react table with the ablity to implement your own data manipulation or ui. You can change anything in representation layer or introduce new data manipulation features without loosing the built-in functionalities.

## Installation

`$ yarn add free-table`

## Usage

For a basic html table you need a `data` and a `columns` collection to be passed to `<FreeTable />`.

```jsx
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

[![Edit gazdagergo/free-table: examples](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/gazdagergo/free-table/tree/master/examples?initialpath=%2Fbasic&module=%2Fsrc%2FBasic.js)


## Features

To use features pass a built-in or a self-made custom function to the options prop:

## Built-in features

### applyFilter()

Renders an input box in each column header and filters the rows based on substring-comparison.

```jsx
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


### applyGroups({ groups, groupData? })

It is not equivalent to the common `groupBy` behaviours. All the data rows been rendered but been groupped by a certain criteria. In the below example it is the `city`.
You can pass custom groupping function via the optional `groupData` property. By default it groups by string matching with a certain field (city) as defined in `groups`.

```jsx
import React from "react";
import "./styles.css";
import FreeTable, { applyGroups } from "free-table";

export default () => {
  const data = [
    { id: "1", name: "John Doe", phone: "1234", city: "Stockholm" },
    { id: "2", name: "Alex Smith", phone: "5678", city: "Stockholm" },
    { id: "3", name: "Anna Fox", phone: "91011", city: "Berlin" },
    { id: "4", name: "Ellen Wood", phone: "1314", city: "Stockholm" },
    { id: "5", name: "Guy Richie", phone: "1516", city: "Berlin" },
  ];


  const columns = [
    { id: "c1", accessor: "name", label: "Name" },
    { id: "c2", accessor: "phone", label: "Phone" },
    { id: "c3", accessor: "city", label: "City" },
  ];

  const groups = [
    { id: "g1", label: "Users from Stockholm", city: "Stockholm" },
    { id: "g1", label: "Users from Berlin", city: "Berlin" },
  ]

  return (
    <div className="App">
      <h1>Free Table</h1>
      <h3>Groups example</h3>
      <FreeTable
        columns={columns}
        data={data}
        options={[
          applyGroups({ groups })
        ]}
      />
    </div>
  );
};
```

[![Edit gazdagergo/free-table: examples](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/gazdagergo/free-table/tree/master/examples?initialpath=%2Fgroups&module=%2Fsrc%2FGroups.js)


### applyCustomField({ id, Component, HeadComponent, colIndex })

Add a custom column to your table.

```jsx
import React from "react";
import FreeTable, { applyCustomField } from "free-table";

export default () => {
  const data = [
    { id: "u1", name: "John Doe", phone: "1234" },
    { id: "u2", name: "Alex Smith", phone: "5678" }
  ];

  const columns = [
    { id: "c1", accessor: "name", label: "Name" },
    { id: "c2", accessor: "phone", label: "Phone" }
  ];

  const MyCustomField = () => (
    <button style={{ cursor: 'pointer' }}>I'm custom</button>
  )

  return (
    <div className="App">
      <h1>Free Table</h1>
      <h3>Custom Field example</h3>
      <FreeTable
        columns={columns}
        data={data}
        options={[
          applyCustomField({
            id: 'cf',
            Component: MyCustomField,
            HeadComponent: () => <th>Custom</th>,
            colIndex: 3
          })
        ]}
      />
    </div>
  );
};
```

[![Edit gazdagergo/free-table: examples](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/gazdagergo/free-table/tree/master/examples?initialpath=%2Fcustom-field&module=%2Fsrc%2FCustomField.js)