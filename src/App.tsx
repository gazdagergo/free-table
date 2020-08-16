import * as React from "react";
import "./styles.css";
import TableWrap from "./Basic/BasicTable";
import * as CollectionTableComponents from "./Collection";
import * as BasicTableComponents from "./Basic";

export default function App() {
  const basicTable = {
    data: [
      ["a", "b"],
      ["c", "x"]
    ],
    columns: ["6", "7"]
  };

  const collectionTable = {
    columns: [
      { id: "c1", label: "Name", path: "name" },
      { id: "c2", label: "Phone", path: "phone" }
    ],
    data: [
      { id: "p1", name: "John Doe", phone: "1234" },
      { id: "p2", name: "Joe Smith", phone: "5678" }
    ]
  };

  return (
    <div className="App">
      <h1>Free Table Examples</h1>
      <h3>Basic Table</h3>
      <TableWrap columns={basicTable.columns} data={basicTable.data} />

      <h3>Collection Table</h3>
      <TableWrap
        {...{ ...BasicTableComponents, ...CollectionTableComponents }}
        columns={collectionTable.columns}
        data={collectionTable.data}
      />
    </div>
  );
}
