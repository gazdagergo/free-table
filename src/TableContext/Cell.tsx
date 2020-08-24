import React, { FC } from "react";

const Cell: FC = ({ children, ...props }) => <td {...props}>{children}</td>;

export default Cell;
