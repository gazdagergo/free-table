import React from 'react'
import HOC from "../types/HOC";

const withInput:HOC = () => Base => (props) => {
  return (
    <Base
      {...props}
      children={
        <>
          {props.children}<br />
          <input
            value={props.inputValue}
            onChange={props.onInputChange}
          />
          <br />
        </>
      }
    />
  );
}

export default withInput
