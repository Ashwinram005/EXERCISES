import React from "react";
const App=()=>{
    return(
        <div style={{position:'absolute',top:'15%',left:'35%',textAlign:'center',alignItems:'center',justifyContent:'center'}}>
            <h1>Car and Location Info</h1>
            <div style={{border:'2px grey solid',height:'300px',width:'300px',textAlign:'center'}}>
                <h2 style={{color:'grey'}}>Tesla Model S</h2>
                <img src="https://imgd-ct.aeplcdn.com/1056x660/n/xsoupsa_1476828.jpg?q=80" alt="Tesla Car"style={{height:'200px',width:'200px',textAlign:'center'}}/>
            </div>
            <div style={{border:'2px grey solid',height:'150px',width:'300px',textAlign:'center', marginTop:'15px',backgroundColor:'lightgray'}}>
                <h3 style={{color:'grey'}}>Tesla</h3>
                <h2 style={{color:'grey'}}>Palo Alto</h2>
            </div>
        </div>
    );
};
export default App;