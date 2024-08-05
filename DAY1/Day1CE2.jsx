import React,{useState} from 'react';
function App(){
    const ce2=()=>{
        let myobject={name:"Madras"}
        let newobject=myobject
        newobject.name="Madurai"
        let myarray=["a","e","i","o"]
        let vowelarray=myarray
        myarray.push("u")
        console.log(myobject.name)
        console.log(vowelarray)
        alert("Check the console output")
    }
    return(
        <div className="App">
            <button onClick={ce2}>CE2</button>
            
        </div>
    );
}
export default App;