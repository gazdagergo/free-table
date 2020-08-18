import * as React from "react";
import "./styles.css";
import TableWrap from "./TableWrap";
import * as TableComponents from "./Components";
import withFilter from "./Hox/withFilter";

export default function App() {
  const collectionTable = {
    columns: [
      { id: "c1", label: "Name", dataPath: "name" },
      { id: "c2", label: "Phone", dataPath: "phone" }
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
        {...withFilter({
          ...TableComponents
        })}
        columns={collectionTable.columns}
        data={collectionTable.data}
      />
    </div>
  );
}
