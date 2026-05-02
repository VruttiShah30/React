import { use, useState } from "react"
import styles from './Create.modules.css'

export const Create = ({addTask}) =>{

var [data,setData] = useState();

const setDataHandler = (e) =>{
    setData(e.taget.value);
}

const addTaskHandler =(e) =>{
    e.preventDefault();
    addTask(data);
}

    return (<>
    <form action="">
        <div>
            <input type="text" name="todo" id="todo" onChange={setDataHandler} style={{color : "red"}} className="form-control"/>
            <button onClick={addTaskHandler} className="btn btn-sucess">submit</button>
        </div>
            
    </form>
    
    </>)
}