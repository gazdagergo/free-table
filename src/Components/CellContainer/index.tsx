import React, { FC } from "react";
import Cell from "../Cell";
import Type from "../../types/CellContainer";

const CellContainer: FC<Type> = ({ data }) => <Cell>{data}</Cell>;

export default CellContainer;
