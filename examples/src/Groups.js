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
