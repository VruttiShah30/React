import { useState } from "react";
import { Create } from "./components/Create";
import { Display } from "./components/Display";
import { Title } from "./components/Title";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () =>{

const [student , setStudent ] = useState([]);

const addStudent = (data) => {
  setStudent ([...student , data]);
}
    return (
      <>
        <div className="container mt-5"
          style={{backgroundColor : "#f8f9fa", padding : "30px", borderRadius : "10px"}}>
          <div className="row">
              <Title />
              <Create addStudent={addStudent}/>
              <Display student={student}/>
            </div>
          </div>
    </>
  )
}
export default App;