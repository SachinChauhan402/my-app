import React from 'react';

//################################# color box
export function ColorBox({ color }) {
  const styles = {
    height: "40px",
    width: "300px",
    background: color,
    marginTop: "10px"
  };
  return <div style={styles}></div>;
}
