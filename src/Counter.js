import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


// ############################### counter



export function Counter() {
  // let like=1
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const styles = { background: like > 5 ? "green" : null };
  const likePercent = (like / (like + dislike)) * 100;
  const dislikestyle = { background: dislike > 5 ? "red" : null };

  return (
    <div className='counter-container'>
      {/* {like > 9 ? <p>You have won the people's ❤️😍</p> : null} */}

      {/* <progress className='counter-progress-container' max="100" value={Number.isNaN(likePercent) ? 0 : likePercent}></progress> */}


      <div className='counter-button-container'>
      <IconButton aria-label="delete" onClick={() => setLike(like + 1)}>
      <Badge badgeContent={like} color="success">
      👍</Badge></IconButton>
      

      <IconButton aria-label="delete" onClick={() => setDislike(dislike + 1)}>
      <Badge badgeContent={dislike} color="error">
      👎</Badge></IconButton>
        
      
      
      </div>
    </div>
  );
}
