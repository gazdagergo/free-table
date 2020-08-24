import React from 'react'
import { Link } from "react-router-dom";


export default () => (
  <>
    <h1>Free Table</h1>
    <h3>Examples</h3>
    <ul>
      <li><Link to="/basic">Basic</Link></li>
      <li><Link to="/filter">Filter</Link></li>
      <li><Link to="/groups">Groups</Link></li>
    </ul>
  </>
)