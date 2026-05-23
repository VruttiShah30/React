import { Create } from "./components/Create"
import { Display } from "./components/Display"
import { Title } from "./components/Title"
import { useState } from "react"
const App = () => {

const [student,setStudent] = useState([{name:"Rohit"},{email:"rohit@example.com"},{phone:"9876543210"}])

//Add data 
const addStudent = (data) => {
    setStudent([...student,data])

}

  return (
    <>
      <Title/>
      <Create addStudent={addStudent}/>
      <Display student={student}/>

    </>
  )
}
export default App