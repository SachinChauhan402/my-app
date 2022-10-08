import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { ColorBox } from './ColorBox';

//################################# color game 
export function ColorGame() {
  const [color, setColor] = useState("white");
  const styles = {
    background: color,
  };
  const [colorList, setColorList] = useState(["orange", "purple", "black"]);

  return (
    <div>
      <input style={styles} value={color} onChange={(event) => setColor(event.target.value)}
        placeholder='enter the color' />
      <Button variant="outlined" onClick={() => setColorList([...colorList, color])}>Add Color</Button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>

  );
}
