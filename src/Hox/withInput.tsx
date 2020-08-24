import React from 'react'
import HOC from "../types/HOC";

const withInput:HOC = () => Base => ({ inputValue, onInputChange, children, ...props }) => {
  return (
    <Base
      {...props}
      children={
        <>
          {children}<br />
          <input
            value={inputValue}
            onChange={onInputChange}
          />
          <br />
        </>
      }
    />
  );
}

export default withInput
