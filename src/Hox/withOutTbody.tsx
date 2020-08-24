import React, { useContext } from "react";
import HOC from '../types/HOC';
import TableContext from "../TableContext";

const withOutTbody:HOC = () => () => ({ data }) => {
  const { RowMap } = useContext(TableContext);
  return <RowMap data={data} />
}

export default withOutTbody
