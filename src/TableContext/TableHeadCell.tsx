import React, { FC } from "react";

const TableHeadCell: FC = ({ children, ...props }) => <th {...props}>{children}</th>;

export default TableHeadCell;
