import React from 'react'

function Likes(props) {
  return (
    <div>
        <h1>Likes</h1>
        {props.likes.map((like) => {
            return (
                <div key={like.id}>
                    <h2>Liked: {like.count}</h2>
                </div>
            );
        })}
    </div>
  );
}

export default Likes