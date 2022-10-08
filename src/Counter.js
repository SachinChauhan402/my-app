import React, { useState } from 'react';

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
      {like > 9 ? <p>You have won the people's ❤️😍</p> : null}

      <progress className='counter-progress-container' max="100" value={Number.isNaN(likePercent) ? 0 : likePercent}></progress>


      <div className='counter-button-container'>
        <button style={styles} onClick={() => setLike(like + 1)}>👍 {like}</button>
        <button style={dislikestyle} onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
      </div>
    </div>
  );
}
