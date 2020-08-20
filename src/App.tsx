import * as React from "react";
import "./styles.css";
import TableWrap from "./TableWrap";
import withFilter from "./Hox/applyFilter";

export default function App() {
  const collectionTable = {
    columns: [
      { id: "c1", label: "Name", accessor: "name" },
      { id: "c2", label: "Phone", accessor: "phone" }
    ],
    data: [
      { id: "p1", name: "John Doe", phone: "1234" },
      { id: "p2", name: "Joe Smith", phone: "5678" }
    ]
  };

  return (
    <div className="App">
      <h1>Free Table Examples</h1>

      <h3>Collection Table</h3>
      <TableWrap
        {...withFilter()()}
        columns={collectionTable.columns}
        data={collectionTable.data}
      />
    </div>
  );
}
