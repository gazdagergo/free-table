import * as React from "react";
import "./styles.css";
import RefactTable from "../src/Components/TableContainer";

export default function App() {
  const tableData = [
    ["a", "b"],
    ["c", "x"]
  ];

  const columns = ["6", "7"];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <RefactTable columns={columns} data={tableData} />
    </div>
  );
}
