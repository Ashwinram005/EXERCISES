import React, { useState } from 'react';
const tasklist=["Task 1","Task 2","Task 3"];
export const  Tasklist=()=> {
    const [tasks, setTasks] = useState(tasklist);
    const Deletetask=(index)=>{
        setTasks(tasks.filter((_,ti) => ti !== index));
    }
    const appstyle={
        backgroundColor:'#F1F0FF',
        textAlign:"center",
        width:"500px",
        padding:"5%",
        marginTop:"10%",
        marginLeft:"33%",
        justifyContent:"center"
    }
    const taskstyle={
        display:"flex",
        justifyContent:"center",
        gap:"5%",
        alignItems:"center"
    }
    const buttonstyle={
       
        backgroundColor:"red"
    }
    return (
        <div style={appstyle}>
            <h1>Task List</h1>
                {
                    tasks.map((task, index) => (
                            <div style={taskstyle}>
                                <p>{task}</p>
                                <button style={buttonstyle} onClick={()=>Deletetask(index)}>Delete</button>                            
                            </div>
                        )
                    )
                }
        </div>
    )
}
