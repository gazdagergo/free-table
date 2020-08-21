import * as React from "react";
import "./styles.css";
import applyFilter from "./Hox/applyFilter";
import applyGroups from "./Hox/applyGroups";
import FreeTable from "./FreeTable";

export default function App() {
  const filterExampleData = {
    columns: [
      { id: "c1", label: "Name", accessor: "name" },
      { id: "c2", label: "Phone", accessor: "phone" }
    ],
    data: [
      { id: "p1", name: "John Doe", phone: "1234" },
      { id: "p2", name: "Joe Smith", phone: "5678" }
    ]
  };

  const groupExampleData = {
    columns: [
      { id: "c1", label: "Name", accessor: "name" },
      { id: "c2", label: "City", accessor: "city" },
    ],
    data: [
      { id: "p1", name: "John Doe", city: "Budapest" },
      { id: "p2", name: "Joe Smith", city: "Budapest" },
      { id: "p3", name: "Kate Tailor", city: "Eger" },
      { id: "p4", name: "Nagy Vera", city: "Budapest" },
      { id: "p5", name: "Kiss Tibor", city: "Eger" },
    ],
    groups: [
      { id: 'g1', label: "Budapest" },
      { id: 'g2', label: "Eger" },
    ]
  }

  return (
    <div className="App">
      <h1>Free Table Examples</h1>

      <h3>Table with filter</h3>
      <FreeTable
        {...applyFilter()()}
        columns={filterExampleData.columns}
        data={filterExampleData.data}
      />

      <h3>Table with group</h3>
      <FreeTable
        {...applyFilter()(
          applyGroups({ groups: groupExampleData.groups })()
        )}
        columns={groupExampleData.columns}
        data={groupExampleData.data}
        
      />
    </div>
  );
}
