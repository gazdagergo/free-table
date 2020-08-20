import React from 'react'
import HOC from "../types/HOC2";
import InputChangeHanlder from "../types/InputChangeHanlder";
import Context from '../types/Context';
import TableContext from '../TableContext';

const withFilterInputHandling:HOC = () => (Base) => (props) => (
  <TableContext.Consumer>
    {({ setFilter, filter }: Context) => {
      const { name } = props;

      const onFilterInputChange = (value: string) => {
        setFilter?.({ ...filter, [name]: value });
      };

      const filterInputValue = filter?.[name] || "";

      const handleOnChange: InputChangeHanlder = ({ target: { value } }) =>
        onFilterInputChange(value);

      return (
        <Base
          {...props}
          inputValue={filterInputValue}
          onInputChange={handleOnChange}
        />
      );
    }}
  </TableContext.Consumer>
);

export default withFilterInputHandling
