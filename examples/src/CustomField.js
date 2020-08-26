import React from "react";
import "./styles.css";
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
