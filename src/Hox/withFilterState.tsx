import React, { useState } from 'react'
import HOC from "../types/HOC";

const withFilterState:HOC = () => Base => (props) => {
  const [filter, setFilter] = useState({});

  return (
    <Base
      {...props}
      filter={filter}
      setFilter={setFilter}
    />
  );
}
  
  export default withFilterState
  