import { Create } from "./components/Create"
import { Display } from "./components/Display"
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

const [student,setStudent] = useState([]);

const addStudent = (data) =>{
  setStudent([...student,data]);
}


    return (
        <>
          <div className="container mt-5">
                <div className="row">

            <Create addStudent={addStudent}/>
            <Display student={student}/>
            </div>
          </div>
        </>
    );
}

export default App;