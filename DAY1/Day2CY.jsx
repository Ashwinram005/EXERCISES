import React from "react";
const App=()=>{
    const divstyle={
        backgroundColor:'lightblue',
        height:'500px',
        width:'500px',
        position:'absolute',
        textAlign:'center',
        left:'35%',
        top:'30%',
    }
    return(
        <div style={divstyle}>
        <h1>Smile Component</h1>
        <p>It is a functional Component</p>
        <img src="https://cdn.pixabay.com/photo/2020/12/27/20/24/smile-5865208_640.png" alt="SmileImage" style={{height:'300px',width:'200px'}}/>
        </div>
    );
};
export default App;