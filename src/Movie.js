import React, { useState } from 'react';
import { Counter } from "./Counter";
import ToggleButton from '@mui/material/ToggleButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';


//########## #################### movie component

export function Movie({ movie }) {
  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  return (
    <Card className='movie-container'>

      <img src={movie.poster} alt={movie.name} className='movie-poster' />
      <CardContent>
      <div className='movie-specs'>
        <h3 className='movie-name'>{movie.name}</h3>
        <p style={styles} className='movie-rating'> ⭐{movie.rating}</p>
      </div>
      <IconButton color="primary" aria-label="delete" onClick={() => setShow(!show)}>
      {show ? <ExpandLessIcon/> : <ExpandMoreIcon/> }
      </IconButton>
      {show ? <p className='movie-summary'>{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
      <Counter />
      </CardActions>
    </Card>
  );
}
;
