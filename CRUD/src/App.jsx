import 'bootstrap/dist/css/bootstrap.min.css';
import { Title } from "./components/Title"
import { Create } from "./components/Create"
import { Display } from "./components/Display"
import { useState } from "react";


const App = () =>{


    var[student,setStudent] = useState([]);

    const addStudent = (data) =>{
        setStudent([...student,data])
    }


    const deleteStudent = (username) =>{
        var newArray = student.filter(ele =>{
            return ele.username !== username
        })
        setStudent(newArray);
    }
    return (

        <>
        <div className="container mt-5">
            <div className="row">
                <Title/>
                <Create addStudent={addStudent}/>
                <Display student={student} deleteStudent={deleteStudent }/>
            </div>
        </div>
        </>
    )
}
export default App