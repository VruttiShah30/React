import { Title } from "./components/Title";
import { Create } from "./components/Create";
import { Display } from "./components/Display";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const App = () => {
        const [student , setStudent ] = useState([]);
        
        // Add Student Function
        const addStudent = (data) => {
            setStudent([...student , data ]);
        }

        // Delete Student Function

        const deleteStudent = (username) => {
            const newArray = student.filter((ele)=>{
                return ele.username !== username;
            })
            setStudent(newArray);
        }

        return (
        <>
            <div className="container mt-5">
                <div className="row">

                    <Title />
                    <Create 
                        addStudent={addStudent} 
                    />
                    
                    <Display 
                        students={student} 
                        deleteStudent = {deleteStudent}
                    />
                </div>
            </div>  
        </>
    )
}
export default App; 
