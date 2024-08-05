import React,{useState} from 'react';
const App=()=>{
    const cy1=()=>{
        let name1="kabil";
        let name2="kabil";
        const object1={name:'kabil'};
        const object2={name:'kabil'};
        console.log(name1==name2);
        console.log(object1===object2);
    }
    return(
        <button onClick={cy1}>CY12</button>
    );
}
export default App;