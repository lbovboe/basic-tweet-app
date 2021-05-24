import React from 'react';

const Tweet = ({name,tweet})=>{
    return (
        <div>
            <h2>{name}</h2>
            <h3>{tweet}</h3>
            <button>Delete</button>
            <button>Like</button>
        </div>
        
    )
}
export default Tweet;