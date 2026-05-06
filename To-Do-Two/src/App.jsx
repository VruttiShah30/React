import {useState} from "react";
import { Create } from "./components/Create";
import { Display } from "./components/Display";
import "bootstrap/dist/css/bootstrap.min.css";



const App = () => {
    var[task,setTask] = useState([]);   
    const addtask = (data)=>{
        var newarray = [...task,data];
        setTask(newarray);
    }
    

    const removeTask = (data) =>{
        var newarray = task.filter(ele =>{
            return ele != data;
        })
        setTask(newarray);
    }
    return (<>
    <div className="container">
        <div className="row">
            <div className="col-5 mx-auto card mt-5 p-5">
                <h1 align='center'>TO DO APP</h1>
                
                <Create addtask={addtask}/>
                <Display task={task} removeTask={removeTask}/>
            </div> 
        </div>
    </div>

        
    </>)

}
export default App;