import { use, useState } from "react"

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
            <input type="text" name="todo" id="todo" onChange={setDataHandler}/>
            <button onClick={addTaskHandler}>submit</button>
       </form>
    
    </>)
}