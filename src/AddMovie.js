import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ setmovieList, moviesList }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const addMovie = () => {
    const newMovie = { name, poster, rating, summary, };
    setmovieList([...moviesList, newMovie]);
    console.log(newMovie);

  };

  return (
    <div className='add-movie-form'>
      <TextField id="filled-basic" label="Name" variant="filled" value={name} onChange={(event) => setName(event.target.value)} />
      <TextField id="filled-basic" label="Rating" variant="filled" value={rating} onChange={(event) => setRating(event.target.value)} />
      <TextField id="filled-basic" label="Poster" variant="filled" value={poster} onChange={(event) => setPoster(event.target.value)} />
      <TextField id="filled-basic" label="Summary" variant="filled" value={summary} onChange={(event) => setSummary(event.target.value)} />
      <Button variant="outlined" onClick={addMovie}>Add Movie</Button>

    </div>
  );
}
