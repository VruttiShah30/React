import { useState } from "react";
import { Create } from "./components/Create";
import { Display } from "./components/Display";

const App = () => {

  var [task,setTask] = useState([]);

  const addtask = (data)=>{
      var newarray = [...task,data];
      setTask(newarray);
  }


  const removeTask = (data) =>{
    var newarray = task.filter(ele => {
      return ele != data;
    });
    setTask(newarray);
  }

  return(<>
    <h1>To-Do App</h1>
    <Create addtask={addtask}/>
    <Display task={task} removeTask={removeTask}/>

  </>
  )
}

export default App;