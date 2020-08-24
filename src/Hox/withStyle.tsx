import React from 'react'
import HOC from "../types/HOC";

const withStyle:HOC = (style) => Base => (props) => {
  return (
    <Base
      style={style}
      {...props}
    />
  );
}

export default withStyle
