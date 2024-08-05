import React from "react";
const App=()=>{
    const h1Style={
        color:'green'
    };
    const divStyle={
        backgroundColor:'lightblue',
        color:'darkblue',
        padding:'10px',
        border:'1px solid blue',
        borderRadius:'5px'
    };
    const pStyle={
        color:'darkblue',
        fontSize:'16px'
    };
    return(
        <>
            <h1 style={h1Style}>Inline Style in JSX Example.</h1>
            <div style={divStyle}>
                <p style={pStyle}>This is a paragraph with inline styles applied.</p>
            </div>
        </>
    );
}
export default App;