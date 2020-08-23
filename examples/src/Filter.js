import React from "react";
import "./styles.css";
import FreeTable, { applyFilter } from "free-table";

export default () => {
  const data = [
    { id: "1", name: "John Doe", phone: "1234" },
    { id: "2", name: "Alex Smith", phone: "5678" }
  ];

  const columns = [
    { id: "c1", accessor: "name", label: "Name" },
    { id: "c2", accessor: "phone", label: "Phone" }
  ];

  return (
    <div className="App">
      <h1>Free Table</h1>
      <h3>Filter example</h3>
      <FreeTable
        columns={columns}
        data={data}
        options={[
          applyFilter() // filter
        ]}
      />
    </div>
  );
};
