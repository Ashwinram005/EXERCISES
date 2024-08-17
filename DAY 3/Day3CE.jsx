import React, { useState } from 'react';

export default function ToggleMessage() {
  const [visible,setvisible]=useState(false);
  const togglestate=()=>{
    setvisible(!visible);
  }
  return (
    <div>
        <button onClick={togglestate}>{visible?"Hide-Component":"Show Component"}</button>
        {visible && <h1>Hi! How are You!!!</h1>}
    </div>
  )
}