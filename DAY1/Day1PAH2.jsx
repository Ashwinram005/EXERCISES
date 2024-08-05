import React from 'react';

const App=()=>{
    const pah2=()=>{
        let age=18
        let name="kiran"
        let setStatus=false
        let userDefault=undefined
        let responseValue=null
        console.log(age+name+setStatus+userDefault+responseValue)
        let oldage=age
        age=25
        let status=setStatus
        setStatus=true
        console.log(age+name+setStatus+userDefault+responseValue)
    }
    return(
        <div className="App">
            <button onClick={pah2}>PAH2</button>
        </div>
     );
}
export default App;