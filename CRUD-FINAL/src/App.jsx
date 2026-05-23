import 'bootstrap/dist/css/bootstrap.min.css';
import { Title } from "./components/Title"
import { Create } from "./components/Create"
import { Display } from "./components/Display"
import { useState } from "react";

const App = () =>{

    const [student, setStudent] = useState([]);

    const [editData, setEditData] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    // ADD
    const addStudent = (data) =>{
        setStudent([...student, data]);
    }

    // DELETE
    const deleteStudent = (username) =>{
        const newArray = student.filter(ele =>{
            return ele.username !== username
        })

        setStudent(newArray);
    }

    // EDIT BUTTON CLICK
    const editStudent = (data) =>{
        setEditData(data);
        setIsEdit(true);
    }

    // UPDATE
    const updateStudent = (updatedData) =>{

        const updatedArray = student.map(ele =>{

            if(ele.username === editData.username){
                return updatedData;
            }

            return ele;
        })

        setStudent(updatedArray);
        setIsEdit(false);
        setEditData(null);
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">

                    <Title/>

                    <Create
                        addStudent={addStudent}
                        updateStudent={updateStudent}
                        editData={editData}
                        isEdit={isEdit}
                    />

                    <Display
                        student={student}
                        deleteStudent={deleteStudent}
                        editStudent={editStudent}
                    />

                </div>
            </div>
        </>
    )
}

export default App