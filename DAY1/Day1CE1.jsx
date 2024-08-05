import React,{useState} from 'react';
function App(){
    const alertMessage=()=>{
        alert("Message from javascript Alert!")
        console.log("Message to developer")
    }
    return(
        <div className="App">
            <h1>Let we see the output of JAVASCRIPT</h1>
            <button onClick={alertMessage}>CE1</button>
        </div>
    );
}
export default App;