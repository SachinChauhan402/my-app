import React from 'react';
import { Movie } from "./Movie";

//################################# Add movie
// function AddMovie(){
//   return(
//     <div>
//     <input placeholder='enter the movie name'/>
//     <button onClick={() =>}>Add movie</button>
//     </div>
//   )
// }
//############################### movielist
export function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((mv, index) => (
        <Movie key={index} movie={mv} />
      ))}
    </div>
  );
}
