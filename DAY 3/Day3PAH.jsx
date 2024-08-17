import React, { useState } from 'react'

export const ToggleMessage=()=>{
  const [transformation,setTransformation]=useState('Kaioken');
  const transform=()=>{
    if(transformation==='Kaioken')
        setTransformation('SuperSaiyan');
    else
     setTransformation('Kaioken');
  }
  return (
    <div>
        <h2>Goku's Current transformation:</h2>
        <h2>{transformation}</h2>
        <button onClick={transform}>Transform</button>
    </div>
  )
}
